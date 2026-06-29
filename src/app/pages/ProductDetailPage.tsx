import { useParams, Link } from "react-router";
import {
  ArrowLeft, Download, MessageCircle, Phone, CheckCircle2,
  Package, FlaskConical, Sprout, Info, Wheat, ChevronRight,
} from "lucide-react";
import { products } from "../data/products";
import { ProductCard } from "../components/ProductCard";
import { useInView } from "../hooks/useInView";

const categoryColors: Record<string, { bg: string; text: string }> = {
  Insecticide: { bg: "#fef3c7", text: "#92400e" },
  Herbicide: { bg: "#fce7f3", text: "#9d174d" },
  Fungicide: { bg: "#ede9fe", text: "#5b21b6" },
  "Bio Insecticide": { bg: "#d1fae5", text: "#065f46" },
  Micronutrient: { bg: "#dbeafe", text: "#1e40af" },
  "Plant Growth": { bg: "#dcfce7", text: "#14532d" },
  "Wetting Agent": { bg: "#e0f2fe", text: "#0369a1" },
};

export function ProductDetailPage() {
  const { productId } = useParams<{ productId: string }>();
  const product = products.find((p) => p.id === productId);

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center" style={{ background: "#f8fffe" }}>
        <div
          className="w-20 h-20 rounded-full flex items-center justify-center mb-4"
          style={{ background: "#f0fdf4" }}
        >
          <FlaskConical className="w-10 h-10" style={{ color: "#86efac" }} />
        </div>
        <h2 className="font-bold mb-2" style={{ color: "#1b4332" }}>Product not found</h2>
        <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
          The product you're looking for doesn't exist.
        </p>
        <Link
          to="/products"
          className="px-5 py-2.5 rounded-xl text-sm font-medium text-white"
          style={{ background: "#2d6a4f" }}
        >
          Browse All Products
        </Link>
      </div>
    );
  }

  const colors = categoryColors[product.category] ?? { bg: "#f3f4f6", text: "#374151" };
  const related = products
    .filter((p) => p.id !== product.id && p.category === product.category)
    .slice(0, 3);

  const relatedRef = useInView<HTMLDivElement>(".related-card-anim");

  return (
    <div style={{ background: "#f8fffe", minHeight: "100vh" }}>
      {/* Breadcrumb */}
      <div
        className="pt-24 pb-6"
        style={{ background: "linear-gradient(135deg, #1b4332, #2d6a4f)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-2 text-sm mb-3" style={{ color: "rgba(255,255,255,0.6)" }}>
            <Link to="/" className="hover:text-white transition-colors">Home</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <Link to="/products" className="hover:text-white transition-colors">Products</Link>
            <ChevronRight className="w-3.5 h-3.5" />
            <span className="text-white">{product.name}</span>
          </div>
          <Link
            to="/products"
            className="inline-flex items-center gap-2 text-sm font-medium transition-colors"
            style={{ color: "rgba(255,255,255,0.8)" }}
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Products
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        {/* Main Product Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mb-14">
          {/* Product Image */}
          <div className="animate-fade-left">
            <div
              className="rounded-3xl overflow-hidden aspect-square relative"
              style={{ background: "linear-gradient(135deg, #f0fdf4, #dcfce7)" }}
            >
              <img
                src={product.image}
                alt={`${product.name} — ${product.category} agricultural product by Shiv Shatakshi Agro`}
                className="w-full h-full object-contain"
                fetchPriority="high"
                decoding="async"
              />
              <div
                className="absolute inset-0"
                style={{ background: "linear-gradient(to bottom, transparent 60%, rgba(0,0,0,0.2))" }}
              />
            </div>
            {/* Pack sizes */}
            <div className="mt-5">
              <p className="text-xs font-semibold uppercase tracking-wider mb-2.5" style={{ color: "#6b7280" }}>
                Available Pack Sizes
              </p>
              <div className="flex flex-wrap gap-2">
                {product.packSizes.map((size) => (
                  <span
                    key={size}
                    className="px-3 py-1.5 rounded-lg text-sm font-medium border"
                    style={{
                      borderColor: "#2d6a4f",
                      color: "#2d6a4f",
                      background: "#f0fdf4",
                    }}
                  >
                    {size}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-fade-right">
            {/* Category & Name */}
            <span
              className="inline-flex px-3 py-1 rounded-full text-xs font-semibold mb-3"
              style={{ background: colors.bg, color: colors.text }}
            >
              {product.category}
            </span>
            <h1
              className="mb-1"
              style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 800, color: "#1b4332" }}
            >
              {product.name}
            </h1>
            <p className="text-base italic mb-5" style={{ color: "#f4a31a" }}>
              {product.tagline}
            </p>

            <p className="text-sm leading-relaxed mb-6" style={{ color: "#374151" }}>
              {product.description}
            </p>

            {/* Composition */}
            <div
              className="p-4 rounded-xl mb-6"
              style={{ background: "#f0fdf4", border: "1px solid #bbf7d0" }}
            >
              <div className="flex items-start gap-2">
                <FlaskConical className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#16a34a" }} />
                <div>
                  <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#16a34a" }}>
                    Technical Composition
                  </p>
                  <p className="text-sm font-medium" style={{ color: "#1b4332" }}>
                    {product.composition}
                  </p>
                </div>
              </div>
            </div>

            {/* Crops */}
            <div className="mb-6">
              <div className="flex items-center gap-2 mb-2.5">
                <Wheat className="w-4 h-4" style={{ color: "#f4a31a" }} />
                <p className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#6b7280" }}>
                  Crop Suitability
                </p>
              </div>
              <div className="flex flex-wrap gap-2">
                {product.crops.map((crop) => (
                  <span
                    key={crop}
                    className="px-2.5 py-1 rounded-full text-xs font-medium"
                    style={{ background: "#fef3c7", color: "#92400e" }}
                  >
                    {crop}
                  </span>
                ))}
              </div>
            </div>

            {/* Dosage */}
            <div
              className="p-4 rounded-xl mb-6 flex items-start gap-3"
              style={{ background: "#fff7ed", border: "1px solid #fed7aa" }}
            >
              <Info className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#ea580c" }} />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#ea580c" }}>
                  Recommended Dosage
                </p>
                <p className="text-sm font-medium" style={{ color: "#7c2d12" }}>
                  {product.dosage}
                </p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-3">
              <Link
                to="/contact"
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #2d6a4f, #1b4332)" }}
              >
                <Phone className="w-4 h-4" />
                Inquire Now
              </Link>
              <a
                href="https://wa.me/918319703894"
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 min-w-[140px] inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5"
                style={{ background: "#25D366" }}
              >
                <MessageCircle className="w-4 h-4" />
                WhatsApp
              </a>
              <button
                className="inline-flex items-center gap-2 px-5 py-3 rounded-xl font-medium border transition-all hover:-translate-y-0.5"
                style={{ borderColor: "#2d6a4f", color: "#2d6a4f", background: "white" }}
              >
                <Download className="w-4 h-4" />
                Brochure
              </button>
            </div>
          </div>
        </div>

        {/* Details Tabs */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-14">
          {/* Benefits */}
          <div className="col-span-1 p-6 rounded-2xl animate-fade-up animate-delay-100"
            style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle2 className="w-5 h-5" style={{ color: "#16a34a" }} />
              <h3 className="font-bold" style={{ color: "#1b4332" }}>Key Benefits</h3>
            </div>
            <ul className="space-y-3">
              {product.benefits.map((b) => (
                <li key={b} className="flex items-start gap-2.5">
                  <span
                    className="w-1.5 h-1.5 rounded-full mt-2 flex-shrink-0"
                    style={{ background: "#16a34a" }}
                  />
                  <span className="text-sm" style={{ color: "#374151" }}>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Usage */}
          <div className="col-span-1 p-6 rounded-2xl animate-fade-up animate-delay-200"
            style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Sprout className="w-5 h-5" style={{ color: "#f4a31a" }} />
              <h3 className="font-bold" style={{ color: "#1b4332" }}>Usage Instructions</h3>
            </div>
            <p className="text-sm leading-relaxed mb-4" style={{ color: "#374151" }}>
              {product.usage}
            </p>
            <div
              className="p-3 rounded-lg"
              style={{ background: "#fffbeb", border: "1px solid #fde68a" }}
            >
              <p className="text-xs font-semibold mb-1" style={{ color: "#92400e" }}>
                Safety Note
              </p>
              <p className="text-xs" style={{ color: "#78350f" }}>
                Always wear protective equipment during application. Keep away from children and animals. Read label carefully before use.
              </p>
            </div>
          </div>

          {/* Pack Info */}
          <div className="col-span-1 p-6 rounded-2xl animate-fade-up animate-delay-300"
            style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
          >
            <div className="flex items-center gap-2 mb-4">
              <Package className="w-5 h-5" style={{ color: "#7c3aed" }} />
              <h3 className="font-bold" style={{ color: "#1b4332" }}>Product Details</h3>
            </div>
            <div className="space-y-3">
              {[
                { label: "Category", value: product.category },
                { label: "Composition", value: product.composition },
                { label: "Dosage", value: product.dosage },
                { label: "Packs", value: product.packSizes.join(", ") },
              ].map(({ label, value }) => (
                <div key={label} className="flex flex-col gap-0.5">
                  <span className="text-xs font-semibold uppercase tracking-wider" style={{ color: "#9ca3af" }}>
                    {label}
                  </span>
                  <span className="text-sm" style={{ color: "#374151" }}>{value}</span>
                  <div className="h-px mt-1.5" style={{ background: "#f3f4f6" }} />
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Related Products */}
        {related.length > 0 && (
          <div ref={relatedRef}>
            <div className="flex items-center justify-between mb-6 anim-fade-up">
              <h2 className="font-bold" style={{ color: "#1b4332", fontSize: "1.25rem" }}>
                Related Products
              </h2>
              <Link
                to="/products"
                className="text-sm font-medium hover:underline"
                style={{ color: "#2d6a4f" }}
              >
                View All
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {related.map((p, i) => (
                <div key={p.id} className={`related-card-anim anim-fade-up anim-delay-${Math.min(i + 1, 3)}`}>
                  <ProductCard product={p} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
