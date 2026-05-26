import { Link } from "react-router";
import { ArrowRight, Leaf, Droplets, Shield, Zap, Gem, Sprout, TrendingUp } from "lucide-react";
import type { Product } from "../data/products";

const categoryConfig: Record<string, {
  badgeBg: string;
  badgeText: string;
  gradient: string;
  icon: React.ComponentType<{ className?: string; style?: React.CSSProperties }>;
}> = {
  Insecticide: {
    badgeBg: "#fef3c7", badgeText: "#92400e",
    gradient: "linear-gradient(135deg, #d97706 0%, #92400e 100%)",
    icon: Shield,
  },
  Herbicide: {
    badgeBg: "#fce7f3", badgeText: "#9d174d",
    gradient: "linear-gradient(135deg, #db2777 0%, #9d174d 100%)",
    icon: Leaf,
  },
  Fungicide: {
    badgeBg: "#ede9fe", badgeText: "#5b21b6",
    gradient: "linear-gradient(135deg, #7c3aed 0%, #4c1d95 100%)",
    icon: Droplets,
  },
  "Bio Insecticide": {
    badgeBg: "#d1fae5", badgeText: "#065f46",
    gradient: "linear-gradient(135deg, #059669 0%, #065f46 100%)",
    icon: Sprout,
  },
  Micronutrient: {
    badgeBg: "#dbeafe", badgeText: "#1e40af",
    gradient: "linear-gradient(135deg, #2563eb 0%, #1e3a8a 100%)",
    icon: Gem,
  },
  "Plant Growth": {
    badgeBg: "#dcfce7", badgeText: "#14532d",
    gradient: "linear-gradient(135deg, #16a34a 0%, #14532d 100%)",
    icon: TrendingUp,
  },
  "Wetting Agent": {
    badgeBg: "#e0f2fe", badgeText: "#0369a1",
    gradient: "linear-gradient(135deg, #0284c7 0%, #0369a1 100%)",
    icon: Droplets,
  },
};

interface ProductCardProps {
  product: Product;
}

function isPlaceholderImage(url: string) {
  return !url || url.includes("unsplash.com") || url.trim() === "";
}

export function ProductCard({ product }: ProductCardProps) {
  const config = categoryConfig[product.category] ?? {
    badgeBg: "#f3f4f6", badgeText: "#374151",
    gradient: "linear-gradient(135deg, #6b7280, #374151)",
    icon: Zap,
  };
  const Icon = config.icon;
  const showPlaceholder = isPlaceholderImage(product.image);

  return (
    <Link
      to={`/products/${product.id}`}
      className="group block rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1.5"
      style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
      onMouseEnter={(e) =>
        (e.currentTarget.style.boxShadow = "0 12px 40px rgba(45,106,79,0.15)")
      }
      onMouseLeave={(e) =>
        (e.currentTarget.style.boxShadow = "0 4px 20px rgba(0,0,0,0.06)")
      }
    >
      {/* Image / Placeholder */}
      <div className="relative h-48 overflow-hidden">
        {showPlaceholder ? (
          <div
            className="w-full h-full flex flex-col items-center justify-center relative"
            style={{ background: config.gradient }}
          >
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)",
                backgroundSize: "20px 20px",
              }}
            />
            <div
              className="relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center mb-2"
              style={{ background: "rgba(255,255,255,0.18)" }}
            >
              <Icon className="w-8 h-8" style={{ color: "#fff" }} />
            </div>
            <p className="relative z-10 text-sm font-bold tracking-wide" style={{ color: "#fff" }}>
              {product.name}
            </p>
          </div>
        ) : (
          <>
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(0,0,0,0.3), transparent)" }}
            />
          </>
        )}

        {/* Category Badge */}
        <span
          className="absolute top-3 left-3 px-2.5 py-1 rounded-full text-xs font-semibold"
          style={{ background: config.badgeBg, color: config.badgeText }}
        >
          {product.category}
        </span>
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-bold mb-1" style={{ color: "#1b4332" }}>
          {product.name}
        </h3>
        <p className="text-xs mb-3 italic" style={{ color: "#f4a31a" }}>
          {product.tagline}
        </p>
        <p className="text-sm mb-4 line-clamp-2 leading-relaxed" style={{ color: "#6b7280" }}>
          {product.description}
        </p>
        <div className="flex items-center justify-between">
          <span className="text-xs font-medium" style={{ color: "#9ca3af" }}>
            {product.crops.slice(0, 2).join(", ")}
            {product.crops.length > 2 && " +more"}
          </span>
          <span
            className="inline-flex items-center gap-1 text-xs font-semibold transition-all duration-200 group-hover:gap-2"
            style={{ color: "#2d6a4f" }}
          >
            View Details
            <ArrowRight className="w-3.5 h-3.5" />
          </span>
        </div>
      </div>
    </Link>
  );
}
