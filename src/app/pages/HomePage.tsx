import { Link } from "react-router";
import { useState, useEffect, useRef } from "react";
import {
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Shield,
  Sprout,
  HeadphonesIcon,
  Leaf,
  FlaskConical,
  Bug,
  Droplets,
  TreePine,
  CheckCircle2,
  Phone,
  MessageCircle,
  Zap,
  Package,
} from "lucide-react";
import { Logo } from "../components/Logo";
import { ProductCard } from "../components/ProductCard";
import { products } from "../data/products";

const PHONE_HREF = "tel:+918319703894";
const WHATSAPP_HREF = "https://wa.me/918319703894";

const featuredProducts = products.filter((p) => p.featured);
 
const productShowcase = [
{
name: "Fighter",
category: "Insecticide",
tagline: "Knock down every larva, every time",
gradient: "linear-gradient(135deg,#7c2d12,#b45309)",
accent: "#fde68a",
icon: Bug,
image: "/images/products/img113.jpg"
},

{
name: "Trigger",
category: "Insecticide",
tagline: "Trigger rapid, broad-spectrum pest knockdown",
gradient: "linear-gradient(135deg,#1a3a2a,#2d6a4f)",
accent: "#4ade80",
icon: Zap,
image: "/images/products/img201.jpg"
},

{
name: "Contra",
category: "Insecticide",
tagline: "Premium diamide for lasting caterpillar control",
gradient: "linear-gradient(135deg,#78350f,#92400e)",
accent: "#fed7aa",
icon: Shield,
image: "/images/products/img51.jpg"
},

{
name: "Black Mamba",
category: "Bio Insecticide",
tagline: "Bio power against all larval pests",
gradient: "linear-gradient(135deg,#14532d,#166534)",
accent: "#86efac",
icon: Sprout,
image: "/images/products/img27.jpg"
},

{
name: "Gold",
category: "Plant Growth",
tagline: "Nature's golden bio stimulant for all crops",
gradient: "linear-gradient(135deg,#78350f,#b45309)",
accent: "#fde68a",
icon: Sprout,
image: "/images/products/img309.jpg"
},

{
name: "Robin",
category: "Insecticide",
tagline: "Advanced control for sucking pests",
gradient: "linear-gradient(135deg,#14532d,#15803d)",
accent: "#86efac",
icon: Bug,
image: "/images/products/img199.jpg"
},

{
name: "Fit+",
category: "Plant Growth",
tagline: "High purity potassium humate growth booster",
gradient: "linear-gradient(135deg,#0c4a6e,#0369a1)",
accent: "#bae6fd",
icon: Sprout,
image: "/images/products/img265.jpg"
},

{
name: "Silk",
category: "Wetting Agent",
tagline: "Silicone spreader for maximum spray efficacy",
gradient: "linear-gradient(135deg,#0c4a6e,#0369a1)",
accent: "#bae6fd",
icon: Droplets,
image: "/images/products/img330.jpg"
}
];

const categories = [
  { label: "Insecticides", key: "Insecticide", icon: Bug, color: "#fef3c7", iconColor: "#d97706", description: "Broad-spectrum pest control" },
  { label: "Fungicides", key: "Fungicide", icon: FlaskConical, color: "#ede9fe", iconColor: "#7c3aed", description: "Disease prevention & cure" },
  { label: "Herbicides", key: "Herbicide", icon: Leaf, color: "#fce7f3", iconColor: "#db2777", description: "Effective weed management" },
  { label: "Bio Insecticides", key: "Bio Insecticide", icon: Sprout, color: "#d1fae5", iconColor: "#059669", description: "Eco-friendly pest solutions" },
  { label: "Plant Growth", key: "Plant Growth", icon: TreePine, color: "#dcfce7", iconColor: "#16a34a", description: "PGR, tonics & bio stimulants" },
  { label: "Micronutrients", key: "Micronutrient", icon: Droplets, color: "#dbeafe", iconColor: "#2563eb", description: "Essential crop nutrition" },
  { label: "Wetting Agents", key: "Wetting Agent", icon: Zap, color: "#e0f2fe", iconColor: "#0284c7", description: "Improve spray coverage" },
];

const benefits = [
  {
    icon: Shield,
    title: "Quality Products",
    description:
      "Carefully sourced and tested agricultural inputs for reliable crop protection and nutrition.",
    color: "#2d6a4f",
  },
  {
    icon: Sprout,
    title: "Better Crop Growth",
    description:
      "Scientifically formulated products designed to maximise yield potential and improve crop quality.",
    color: "#40916c",
  },
  {
    icon: HeadphonesIcon,
    title: "Expert Support",
    description:
      "Get guidance on the right product for your specific crop, pest, or soil condition.",
    color: "#f4a31a",
  },
  {
    icon: Package,
    title: "Wide Product Range",
    description:
      "From insecticides and herbicides to bio stimulants and micronutrients — all under one roof.",
    color: "#2563eb",
  },
];

export function HomePage() {
  const [heroSlide, setHeroSlide] = useState(0);
  const heroTimer = useRef<ReturnType<typeof setInterval> | null>(null);

const [touchStart, setTouchStart] = useState(0);
const [touchEnd, setTouchEnd] = useState(0);

const handleTouchStart = (e:any) => {
  setTouchStart(e.targetTouches[0].clientX);
};

const handleTouchMove = (e:any) => {
  setTouchEnd(e.targetTouches[0].clientX);
};

const handleTouchEnd = () => {
  if (touchStart - touchEnd > 50) {
    nextHero();
  }

  if (touchStart - touchEnd < -50) {
    prevHero();
  }
};

  useEffect(() => {
    heroTimer.current = setInterval(() => {
      setHeroSlide((p) => (p + 1) % productShowcase.length);
    }, 3500);
    return () => { if (heroTimer.current) clearInterval(heroTimer.current); };
  }, []);

  const prevHero = () => {
    if (heroTimer.current) clearInterval(heroTimer.current);
    setHeroSlide((p) => (p === 0 ? productShowcase.length - 1 : p - 1));
  };
  const nextHero = () => {
    if (heroTimer.current) clearInterval(heroTimer.current);
    setHeroSlide((p) => (p + 1) % productShowcase.length);
  };

  const current = productShowcase[heroSlide];
  const CurrentIcon = current.icon;

  return (
    <div>
      {/* ── HERO ── */}
      <section
  className="relative min-h-screen flex items-center overflow-hidden transition-all duration-700"
  style={{ background: current.gradient }}
  onTouchStart={handleTouchStart}
  onTouchMove={handleTouchMove}
  onTouchEnd={handleTouchEnd}
>
        {/* Decorative */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div
            className="absolute -top-20 -right-20 w-[500px] h-[500px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, white, transparent)" }}
          />
          <div
            className="absolute -bottom-32 -left-24 w-[400px] h-[400px] rounded-full opacity-10"
            style={{ background: "radial-gradient(circle, white, transparent)" }}
          />
          <div
            className="absolute inset-0 opacity-5"
            style={{
              backgroundImage:
                "linear-gradient(rgba(255,255,255,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.3) 1px, transparent 1px)",
              backgroundSize: "40px 40px",
            }}
          />
        </div>

        <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <Logo size={36} showText={false} />
                <span
                  className="text-sm font-medium px-3 py-1 rounded-full"
                  style={{
                    background: "rgba(255,255,255,0.15)",
                    color: "rgba(255,255,255,0.9)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  Shiv Shatakshi Agro
                </span>
              </div>

              <div
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold mb-4"
                style={{
                  background: `${current.accent}22`,
                  color: current.accent,
                  border: `1px solid ${current.accent}44`,
                }}
              >
                <CurrentIcon className="w-3.5 h-3.5" />
                {current.category}
              </div>

              <h1
                className="transition-all duration-500"
                style={{
                  fontSize: "clamp(2.75rem, 7vw, 4.5rem)",
                  fontWeight: 900,
                  color: "#fff",
                  lineHeight: 1.05,
                  letterSpacing: "-0.02em",
                }}
              >
                {current.name}
              </h1>

              <p
                className="mt-3 mb-8 text-lg transition-all duration-500"
                style={{ color: "rgba(255,255,255,0.75)", maxWidth: "480px" }}
              >
                {current.tagline}
              </p>

              <div className="flex flex-wrap gap-3 mb-10">
                <Link
                  to={`/products/${products.find((p) => p.name === current.name)?.id ?? ""}`}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm transition-all hover:-translate-y-0.5 hover:shadow-xl"
                  style={{ background: current.accent, color: "#1a1a1a" }}
                >
                  View Product
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold text-sm text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  All Products
                </Link>
              </div>

              {/* Product count — real data, not fabricated company stats */}
              <div className="flex flex-wrap gap-6">
                <div>
                  <div className="font-extrabold text-xl" style={{ color: current.accent }}>
                    {products.length}+
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>Products</div>
                </div>
                <div>
                  <div className="font-extrabold text-xl" style={{ color: current.accent }}>
                    7
                  </div>
                  <div className="text-xs" style={{ color: "rgba(255,255,255,0.55)" }}>Categories</div>
                </div>
              </div>
            </div>

            {/* Right: Product card visual */}
            <div className="flex items-center justify-center">
              <div className="relative">
                <div
                  className="w-72 h-80 rounded-3xl flex flex-col items-center justify-center relative overflow-hidden transition-all duration-700"
                  style={{
                    background: "rgba(255,255,255,0.08)",
                    border: `1px solid ${current.accent}44`,
                    backdropFilter: "blur(16px)",
                    boxShadow: `0 32px 80px rgba(0,0,0,0.4), 0 0 0 1px ${current.accent}22`,
                  }}
                >
                  <div
                    className="absolute inset-0 opacity-20"
                    style={{
                      background: `radial-gradient(circle at 50% 30%, ${current.accent}, transparent 70%)`,
                    }}
                  />
                  <div className="relative z-10 h-48 w-full flex items-center justify-center overflow-hidden mb-5">
  <img
    src={current.image}
    alt={current.name}
    className="max-h-full max-w-full object-contain"
  />
</div>
                  <h3
                    className="relative z-10 text-2xl font-bold text-center px-4"
                    style={{ color: "#fff" }}
                  >
                    {current.name}
                  </h3>
                  <p
                    className="relative z-10 text-xs mt-2 px-6 text-center"
                    style={{ color: "rgba(255,255,255,0.6)" }}
                  >
                    {current.tagline}
                  </p>
                  <span
                    className="relative z-10 mt-4 px-3 py-1 rounded-full text-xs font-semibold"
                    style={{ background: `${current.accent}33`, color: current.accent }}
                  >
                    {current.category}
                  </span>
                </div>

                <div
                  className="absolute -left-8 top-8 px-3 py-2 rounded-xl text-xs font-semibold text-white shadow-lg"
                  style={{
                    background: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)",
                    border: "1px solid rgba(255,255,255,0.15)",
                  }}
                >
                  ✓ Farmer Trusted
                </div>
                <div
  className="absolute -right-16 top-[48%] px-3 py-2 rounded-xl text-xs font-semibold text-white shadow-lg z-20"
  style={{
    background: "rgba(255,255,255,0.1)",
    backdropFilter: "blur(8px)",
    border: "1px solid rgba(255,255,255,0.15)",
  }}
>
  🌿 Quality Assured
</div>
              </div>
            </div>
          </div>

          {/* Slider controls */}
          <div className="flex items-center justify-center gap-4 mt-12">
            <button
              onClick={prevHero}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <ChevronLeft className="w-5 h-5 text-white" />
            </button>

            <div className="flex items-center gap-2">
              {productShowcase.map((_, i) => (
                <button
                  key={i}
                  onClick={() => {
                    if (heroTimer.current) clearInterval(heroTimer.current);
                    setHeroSlide(i);
                  }}
                  className="h-1.5 rounded-full transition-all duration-300"
                  style={{
                    width: heroSlide === i ? "28px" : "8px",
                    background:
                      heroSlide === i ? current.accent : "rgba(255,255,255,0.3)",
                  }}
                />
              ))}
            </div>

            <button
              onClick={nextHero}
              className="w-9 h-9 rounded-xl flex items-center justify-center transition-all hover:scale-105"
              style={{
                background: "rgba(255,255,255,0.12)",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <ChevronLeft className="w-5 h-5 text-white rotate-180" />
            </button>
          </div>
        </div>

        {/* Quick contact strip */}
        <div
          className="absolute bottom-0 left-0 right-0 py-2 px-4"
          style={{ background: "rgba(0,0,0,0.3)", backdropFilter: "blur(6px)" }}
        >
          <div className="max-w-7xl mx-auto flex items-center justify-center gap-6 flex-wrap">
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:opacity-80 transition-opacity"
            >
              <Phone className="w-3.5 h-3.5" />
              +91 83197 03894
            </a>
            <span className="text-white opacity-20">|</span>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-medium text-white hover:opacity-80 transition-opacity"
            >
              <MessageCircle className="w-3.5 h-3.5" style={{ color: "#4ade80" }} />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>

      {/* ── FEATURED PRODUCTS ── */}
      <section className="py-20" style={{ background: "#f8fffe" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-end justify-between gap-4 mb-10">
            <div>
              <span
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: "#f4a31a" }}
              >
                Our Products
              </span>
              <h2
                className="mt-1"
                style={{
                  fontSize: "clamp(1.75rem,3vw,2.25rem)",
                  fontWeight: 700,
                  color: "#1b4332",
                }}
              >
                Featured Products
              </h2>
              <p className="mt-2 text-sm" style={{ color: "#6b7280" }}>
                Top picks from our agricultural product range
              </p>
            </div>
            <Link
              to="/products"
              className="inline-flex items-center gap-1.5 text-sm font-semibold hover:gap-2.5 transition-all"
              style={{ color: "#2d6a4f" }}
            >
              View All <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* ── CATEGORIES ── */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "#f4a31a" }}
            >
              Product Range
            </span>
            <h2
              className="mt-1"
              style={{
                fontSize: "clamp(1.75rem,3vw,2.25rem)",
                fontWeight: 700,
                color: "#1b4332",
              }}
            >
              Browse by Category
            </h2>
            <p
              className="mt-3 max-w-xl mx-auto text-sm"
              style={{ color: "#6b7280" }}
            >
              Comprehensive solutions across every aspect of modern agriculture
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-5">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <Link
                  key={cat.label}
                  to={`/products?category=${encodeURIComponent(cat.key)}`}
                  className="group p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: cat.color,
                    boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                  }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 12px 32px rgba(45,106,79,0.15)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.boxShadow =
                      "0 4px 16px rgba(0,0,0,0.04)")
                  }
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-4 transition-transform group-hover:scale-110"
                    style={{ background: "rgba(255,255,255,0.7)" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: cat.iconColor }} />
                  </div>
                  <h3 className="font-semibold mb-1" style={{ color: "#1b4332" }}>
                    {cat.label}
                  </h3>
                  <p className="text-xs" style={{ color: "#6b7280" }}>
                    {cat.description}
                  </p>
                  <div
                    className="mt-4 inline-flex items-center gap-1 text-xs font-semibold transition-all group-hover:gap-2"
                    style={{ color: cat.iconColor }}
                  >
                    Explore <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── BRAND BANNER ── */}
      <section
        className="py-20 relative overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0d2b1f 0%, #1b4332 50%, #2d6a4f 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="mb-6">
                <Logo size={72} showText={false} />
              </div>
              <span
                className="text-sm font-semibold uppercase tracking-wider"
                style={{ color: "#86efac" }}
              >
                Why Choose Us
              </span>
              <h2
                className="mt-2 mb-4 text-white"
                style={{ fontSize: "clamp(1.75rem,3vw,2.5rem)", fontWeight: 700 }}
              >
                Committed to India's
                <br />
                <span style={{ color: "#f4a31a" }}>Farming Community</span>
              </h2>
              <p
                className="text-sm leading-relaxed mb-6"
                style={{ color: "rgba(255,255,255,0.75)" }}
              >
                Shiv Shatakshi Agro delivers trusted agricultural inputs to farmers
                across India — quality products at honest prices, backed by
                responsive support.
              </p>
              <div className="space-y-3 mb-8">
                {[
                  "Wide range of crop protection products",
                  "Plant nutrition and bio stimulant solutions",
                  "Organic and conventional product options",
                  "Dedicated agro support available on call",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-3">
                    <CheckCircle2
                      className="w-5 h-5 flex-shrink-0"
                      style={{ color: "#4ade80" }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: "rgba(255,255,255,0.85)" }}
                    >
                      {item}
                    </span>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap gap-3">
                <a
                  href={PHONE_HREF}
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{
                    background: "rgba(255,255,255,0.12)",
                    border: "1px solid rgba(255,255,255,0.25)",
                  }}
                >
                  <Phone className="w-4 h-4" />
                  Call Now
                </a>
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            {/* Product mini-grid */}
            <div className="grid grid-cols-2 gap-4">
              {productShowcase.slice(0, 4).map((p: typeof productShowcase[0]) => {
                const Icon = p.icon;
                return (
                  <div
                    key={p.name}
                    className="p-4 rounded-2xl text-center group transition-all duration-300 hover:-translate-y-1"
                    style={{
                      background: "rgba(255,255,255,0.07)",
                      border: "1px solid rgba(255,255,255,0.1)",
                    }}
                  >
                    <div
                      className="w-10 h-10 rounded-xl flex items-center justify-center mx-auto mb-2"
                      style={{ background: "rgba(255,255,255,0.1)" }}
                    >
                      <Icon className="w-5 h-5 text-white" strokeWidth={1.5} />
                    </div>
                    <p className="text-sm font-bold text-white">{p.name}</p>
                    <p className="text-xs mt-0.5" style={{ color: "#86efac" }}>
                      {p.category}
                    </p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* ── BENEFITS ── */}
      <section className="py-20" style={{ background: "#f8fffe" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "#f4a31a" }}
            >
              Our Promise
            </span>
            <h2
              className="mt-1"
              style={{
                fontSize: "clamp(1.75rem,3vw,2.25rem)",
                fontWeight: 700,
                color: "#1b4332",
              }}
            >
              Why Choose Shiv Shatakshi Agro
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit) => {
              const Icon = benefit.icon;
              return (
                <div
                  key={benefit.title}
                  className="p-6 rounded-2xl bg-white text-center group transition-all duration-300 hover:-translate-y-1"
                  style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
                >
                  <div
                    className="w-14 h-14 rounded-2xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                    style={{ background: `${benefit.color}18` }}
                  >
                    <Icon className="w-7 h-7" style={{ color: benefit.color }} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#1b4332" }}>
                    {benefit.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6b7280" }}
                  >
                    {benefit.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #1b4332, #2d6a4f)" }}
      >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <Logo size={56} showText={false} />
          </div>
          <h2
            className="text-white mb-4"
            style={{ fontSize: "clamp(1.5rem,3vw,2rem)", fontWeight: 700 }}
          >
            Ready to Transform Your Crop Yields?
          </h2>
          <p className="mb-8 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
            Browse our products or reach our team directly — we're here to help you
            find the right solution for your crop.
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all hover:-translate-y-1 hover:shadow-xl"
              style={{ background: "linear-gradient(135deg, #f4a31a, #d97706)" }}
            >
              Browse All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <a
              href={PHONE_HREF}
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-1"
              style={{
                background: "rgba(255,255,255,0.1)",
                border: "1px solid rgba(255,255,255,0.3)",
                color: "#fff",
              }}
            >
              <Phone className="w-5 h-5" />
              Call +91 83197 03894
            </a>
            <a
              href={WHATSAPP_HREF}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold text-white transition-all hover:-translate-y-1"
              style={{ background: "#25D366" }}
            >
              <MessageCircle className="w-5 h-5" />
              WhatsApp Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
