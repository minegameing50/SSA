import { Link } from "react-router";
import {
  ArrowRight,
  Target,
  Eye,
  Leaf,
  Award,
  Users,
  Globe,
  CheckCircle2,
  TrendingUp,
  Phone,
  MessageCircle,
} from "lucide-react";
import { Logo } from "../components/Logo";

const PHONE_HREF = "tel:+918319703894";
const WHATSAPP_HREF = "https://wa.me/918319703894";

const values = [
  {
    icon: Leaf,
    title: "Sustainability",
    description:
      "Products developed to protect crops while preserving the environment for future generations.",
  },
  {
    icon: Award,
    title: "Quality First",
    description:
      "Every product is carefully selected and tested to meet rigorous agricultural standards.",
  },
  {
    icon: Users,
    title: "Farmer-Centric",
    description:
      "We listen to farmers and offer solutions that address real challenges in the field.",
  },
  {
    icon: TrendingUp,
    title: "Better Yields",
    description:
      "Science-backed formulations focused on maximising productivity for every crop type.",
  },
];

export function AboutPage() {
  return (
    <div style={{ background: "#f8fffe" }}>
      {/* Hero */}
      <div
        className="relative pt-20 overflow-hidden"
        style={{
          background:
            "linear-gradient(135deg, #0d2b1f 0%, #1b4332 55%, #2d6a4f 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage:
              "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)",
            backgroundSize: "28px 28px",
          }}
        />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
          <div className="flex justify-center mb-6">
            <Logo size={72} showText={false} />
          </div>
          <span
            className="text-sm font-semibold uppercase tracking-wider"
            style={{ color: "#86efac" }}
          >
            Our Story
          </span>
          <h1
            className="mt-2 text-white"
            style={{ fontSize: "clamp(2rem, 5vw, 3rem)", fontWeight: 800 }}
          >
            Rooted in Agriculture,
            <br />
            <span style={{ color: "#f4a31a" }}>Growing with Farmers</span>
          </h1>
          <p
            className="mt-4 text-base max-w-2xl mx-auto"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            Shiv Shatakshi Agro is committed to empowering Indian farmers with
            science-backed crop protection and plant nutrition solutions.
          </p>
        </div>
      </div>

      {/* Who We Are */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "#f4a31a" }}
            >
              Who We Are
            </span>
            <h2
              className="mt-1 mb-6"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                fontWeight: 700,
                color: "#1b4332",
              }}
            >
              Shiv Shatakshi Agro
            </h2>
            <p
              className="text-base leading-relaxed mb-5"
              style={{ color: "#374151" }}
            >
              We are a dedicated agricultural solutions company offering a
              comprehensive range of crop protection and plant nutrition products —
              including insecticides, herbicides, fungicides, bio stimulants,
              micronutrients, and organic fertilizers.
            </p>
            <p
              className="text-base leading-relaxed mb-8"
              style={{ color: "#374151" }}
            >
              Our focus is on providing effective, affordable, and reliable inputs
              that help farmers achieve better yields and healthier crops every
              season.
            </p>

            {/* Contact CTAs */}
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <a
                href={PHONE_HREF}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{ background: "linear-gradient(135deg, #2d6a4f, #1b4332)" }}
              >
                <Phone className="w-4 h-4" />
                +91 83197 03894
              </a>
              <a
                href={WHATSAPP_HREF}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{ background: "#25D366" }}
              >
                <MessageCircle className="w-4 h-4" />
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20" style={{ background: "#f8fffe" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "#f4a31a" }}
            >
              Our Direction
            </span>
            <h2
              className="mt-1"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                fontWeight: 700,
                color: "#1b4332",
              }}
            >
              Mission & Vision
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Mission */}
            <div
              className="p-8 rounded-3xl relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #1b4332, #2d6a4f)" }}
            >
              <Target className="w-10 h-10 text-white opacity-20 absolute top-4 right-4" />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(255,255,255,0.15)" }}
              >
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Mission</h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.85)" }}
              >
                To provide every farmer with high-quality, affordable agricultural
                inputs that improve crop productivity, protect plant health, and
                support sustainable farming practices across India.
              </p>
              <div className="mt-5 space-y-2">
                {[
                  "Accessible to all farmers",
                  "Science-driven formulations",
                  "Responsible agriculture",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4" style={{ color: "#4ade80" }} />
                    <span className="text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Vision */}
            <div
              className="p-8 rounded-3xl relative overflow-hidden"
              style={{ background: "linear-gradient(135deg, #f4a31a, #d97706)" }}
            >
              <Eye className="w-10 h-10 text-white opacity-20 absolute top-4 right-4" />
              <div
                className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                style={{ background: "rgba(255,255,255,0.2)" }}
              >
                <Eye className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white mb-3">Our Vision</h3>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.9)" }}
              >
                To be a trusted name in Indian agriculture, recognised by farmers
                and distributors alike for reliable products, expert guidance, and
                a genuine commitment to better harvests and better livelihoods.
              </p>
              <div className="mt-5 space-y-2">
                {[
                  "Pan-India reach",
                  "Sustainable innovation",
                  "Farmer prosperity",
                ].map((item) => (
                  <div key={item} className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-white" />
                    <span className="text-sm text-white">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span
              className="text-sm font-semibold uppercase tracking-wider"
              style={{ color: "#f4a31a" }}
            >
              What Drives Us
            </span>
            <h2
              className="mt-1"
              style={{
                fontSize: "clamp(1.75rem, 3vw, 2.25rem)",
                fontWeight: 700,
                color: "#1b4332",
              }}
            >
              Our Core Values
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value) => {
              const Icon = value.icon;
              return (
                <div
                  key={value.title}
                  className="p-6 rounded-2xl text-center group transition-all duration-300 hover:-translate-y-1"
                  style={{
                    background: "#f8fffe",
                    boxShadow: "0 4px 16px rgba(0,0,0,0.04)",
                  }}
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-4 transition-transform group-hover:scale-110"
                    style={{ background: "#dcfce7" }}
                  >
                    <Icon className="w-6 h-6" style={{ color: "#16a34a" }} />
                  </div>
                  <h3 className="font-bold mb-2" style={{ color: "#1b4332" }}>
                    {value.title}
                  </h3>
                  <p
                    className="text-sm leading-relaxed"
                    style={{ color: "#6b7280" }}
                  >
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section
        className="py-16"
        style={{ background: "linear-gradient(135deg, #1b4332, #2d6a4f)" }}
      >
        <div className="max-w-3xl mx-auto px-4 text-center">
          <Globe className="w-12 h-12 text-white opacity-50 mx-auto mb-4" />
          <h2
            className="text-white mb-3"
            style={{ fontSize: "clamp(1.5rem, 3vw, 2rem)", fontWeight: 700 }}
          >
            Explore Our Products
          </h2>
          <p className="mb-6 text-sm" style={{ color: "rgba(255,255,255,0.8)" }}>
            Browse our full range of agricultural solutions — from crop protection
            to plant nutrition — all designed to help you grow more.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              to="/products"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-1"
              style={{
                background: "linear-gradient(135deg, #f4a31a, #d97706)",
                color: "white",
              }}
            >
              View All Products
              <ArrowRight className="w-5 h-5" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-semibold transition-all hover:-translate-y-1"
              style={{ background: "rgba(255,255,255,0.12)", color: "white" }}
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
