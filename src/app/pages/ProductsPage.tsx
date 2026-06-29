import { useState, useMemo, useEffect } from "react";
import { useSearchParams } from "react-router";
import { Search, X, Filter } from "lucide-react";
import { ProductCard } from "../components/ProductCard";
import { products, categories, cropTypes, pestTypes } from "../data/products";
import { useInView } from "../hooks/useInView";

const categoryColors: Record<string, string> = {
  Insecticide: "#d97706",
  Herbicide: "#db2777",
  Fungicide: "#7c3aed",
  "Bio Insecticide": "#059669",
  Micronutrient: "#2563eb",
  "Plant Growth": "#14532d",
  "Wetting Agent": "#0284c7",
};

export function ProductsPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string>(
    searchParams.get("category") ?? ""
  );
  const [selectedCropType, setSelectedCropType] = useState("");
  const [selectedPestType, setSelectedPestType] = useState("");
  const [mobileFiltersOpen, setMobileFiltersOpen] = useState(false);
  const [filterKey, setFilterKey] = useState(0); // bumps to re-animate grid on filter change
  const gridRef = useInView<HTMLDivElement>(".prod-grid-card", 0.04, [filterKey]);

  // Sync category filter when URL search params change (e.g. clicking footer/nav links)
  useEffect(() => {
    setSelectedCategory(searchParams.get("category") ?? "");
  }, [searchParams]);

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchesSearch =
        !searchQuery ||
        p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        p.category.toLowerCase().includes(searchQuery.toLowerCase());

      const matchesCategory =
        !selectedCategory || p.category === selectedCategory;

      const matchesCrop =
        !selectedCropType ||
        selectedCropType === "All Crops" ||
        p.cropType.includes(selectedCropType);

      const matchesPest =
        !selectedPestType || p.pestType === selectedPestType;

      return matchesSearch && matchesCategory && matchesCrop && matchesPest;
    });
  }, [searchQuery, selectedCategory, selectedCropType, selectedPestType]);

  // Bump filterKey to force grid re-mount and re-trigger useInView animations
  useEffect(() => {
    setFilterKey((k) => k + 1);
  }, [selectedCategory, selectedCropType, selectedPestType, searchQuery]);

  const clearFilters = () => {
    setSearchQuery("");
    setSelectedCategory("");
    setSelectedCropType("");
    setSelectedPestType("");
    setSearchParams({});
    setFilterKey((k) => k + 1);
  };

  const hasActiveFilters = searchQuery || selectedCategory || selectedCropType || selectedPestType;

  const FilterSidebar = () => (
    <aside className="w-full lg:w-64 flex-shrink-0">
      <div
        className="rounded-2xl p-5 sticky top-24"
        style={{ background: "white", boxShadow: "0 4px 20px rgba(0,0,0,0.05)" }}
      >
        <div className="flex items-center justify-between mb-5">
          <h3 className="font-bold" style={{ color: "#1b4332" }}>
            Filters
          </h3>
          {hasActiveFilters && (
            <button
              onClick={clearFilters}
              className="text-xs flex items-center gap-1 transition-colors"
              style={{ color: "#ef4444" }}
            >
              <X className="w-3.5 h-3.5" />
              Clear All
            </button>
          )}
        </div>

        {/* Category */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6b7280" }}>
            Category
          </h4>
          <div className="space-y-2">
            <button
              onClick={() => setSelectedCategory("")}
              className="w-full text-left px-3 py-2 rounded-lg text-sm transition-all"
              style={{
                background: !selectedCategory ? "#f0fdf4" : "transparent",
                color: !selectedCategory ? "#2d6a4f" : "#374151",
                fontWeight: !selectedCategory ? 600 : 400,
              }}
            >
              All Categories
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat === selectedCategory ? "" : cat)}
                className="w-full text-left px-3 py-2 rounded-lg text-sm transition-all flex items-center gap-2"
                style={{
                  background: selectedCategory === cat ? "#f0fdf4" : "transparent",
                  color: selectedCategory === cat ? "#2d6a4f" : "#374151",
                  fontWeight: selectedCategory === cat ? 600 : 400,
                }}
              >
                <span
                  className="w-2 h-2 rounded-full flex-shrink-0"
                  style={{ background: categoryColors[cat] ?? "#6b7280" }}
                />
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Crop Type */}
        <div className="mb-6">
          <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6b7280" }}>
            Crop Type
          </h4>
          <div className="space-y-2">
            {cropTypes.map((crop) => (
              <button
                key={crop}
                onClick={() => setSelectedCropType(crop === selectedCropType ? "" : crop)}
                className="w-full text-left px-3 py-2 rounded-lg text-sm transition-all"
                style={{
                  background: selectedCropType === crop ? "#f0fdf4" : "transparent",
                  color: selectedCropType === crop ? "#2d6a4f" : "#374151",
                  fontWeight: selectedCropType === crop ? 600 : 400,
                }}
              >
                {crop}
              </button>
            ))}
          </div>
        </div>

        {/* Pest Type */}
        <div>
          <h4 className="text-xs font-semibold uppercase tracking-wider mb-3" style={{ color: "#6b7280" }}>
            Pest / Disease Type
          </h4>
          <div className="space-y-2">
            {pestTypes.map((pest) => (
              <button
                key={pest}
                onClick={() => setSelectedPestType(pest === selectedPestType ? "" : pest)}
                className="w-full text-left px-3 py-2 rounded-lg text-sm transition-all"
                style={{
                  background: selectedPestType === pest ? "#f0fdf4" : "transparent",
                  color: selectedPestType === pest ? "#2d6a4f" : "#374151",
                  fontWeight: selectedPestType === pest ? 600 : 400,
                }}
              >
                {pest}
              </button>
            ))}
          </div>
        </div>
      </div>
    </aside>
  );

  return (
    <div style={{ background: "#f8fffe", minHeight: "100vh" }}>
      {/* Page Header */}
      <div
        className="pt-28 pb-12"
        style={{ background: "linear-gradient(135deg, #1b4332, #2d6a4f)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 animate-fade-up">
          <span className="text-sm font-medium uppercase tracking-wider" style={{ color: "#86efac" }}>
            Our Product Range
          </span>
          <h1
            className="mt-1 text-white"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700 }}
          >
            All Products
          </h1>
          <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
            {products.length} premium agricultural products for every crop and every season
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Search + Filter Bar */}
        <div className="flex flex-col sm:flex-row gap-3 mb-8">
          {/* Search */}
          <div className="relative flex-1">
            <Search
              className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4"
              style={{ color: "#9ca3af" }}
            />
            <input
              type="text"
              placeholder="Search products, categories..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-3 rounded-xl border text-sm outline-none transition-shadow focus:ring-2"
              style={{
                borderColor: "#e5e7eb",
                background: "white",
                color: "#1f2937",
              }}
            />
          </div>
          {/* Mobile Filter Toggle */}
          <button
            className="lg:hidden inline-flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium border"
            style={{ background: "white", borderColor: "#e5e7eb", color: "#374151" }}
            onClick={() => setMobileFiltersOpen(!mobileFiltersOpen)}
          >
            <Filter className="w-4 h-4" />
            Filters
            {hasActiveFilters && (
              <span
                className="w-5 h-5 rounded-full text-xs font-bold text-white flex items-center justify-center"
                style={{ background: "#2d6a4f" }}
              >
                !
              </span>
            )}
          </button>
        </div>

        {/* Active Filters */}
        {hasActiveFilters && (
          <div className="flex flex-wrap gap-2 mb-6">
            {selectedCategory && (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: "#dcfce7", color: "#15803d" }}
              >
                {selectedCategory}
                <button onClick={() => setSelectedCategory("")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedCropType && (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: "#dbeafe", color: "#1d4ed8" }}
              >
                {selectedCropType}
                <button onClick={() => setSelectedCropType("")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {selectedPestType && (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: "#fef3c7", color: "#92400e" }}
              >
                {selectedPestType}
                <button onClick={() => setSelectedPestType("")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
            {searchQuery && (
              <span
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium"
                style={{ background: "#fce7f3", color: "#9d174d" }}
              >
                "{searchQuery}"
                <button onClick={() => setSearchQuery("")}>
                  <X className="w-3 h-3" />
                </button>
              </span>
            )}
          </div>
        )}

        <div className="flex gap-8">
          {/* Desktop Sidebar */}
          <div className="hidden lg:block">
            <FilterSidebar />
          </div>

          {/* Mobile Sidebar */}
          {mobileFiltersOpen && (
            <div className="lg:hidden fixed inset-0 z-50 flex">
              <div
                className="absolute inset-0 bg-black/40"
                onClick={() => setMobileFiltersOpen(false)}
              />
              <div className="relative ml-auto w-72 h-full bg-white overflow-y-auto p-5">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="font-bold" style={{ color: "#1b4332" }}>Filters</h3>
                  <button onClick={() => setMobileFiltersOpen(false)}>
                    <X className="w-5 h-5" style={{ color: "#6b7280" }} />
                  </button>
                </div>
                <FilterSidebar />
              </div>
            </div>
          )}

          {/* Products Grid */}
          <div className="flex-1 min-w-0">
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm" style={{ color: "#6b7280" }}>
                Showing <span className="font-semibold" style={{ color: "#1b4332" }}>{filtered.length}</span> products
              </p>
            </div>

            {filtered.length > 0 ? (
              <div
                key={filterKey}
                className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6"
                ref={gridRef}
              >
                {filtered.map((product, i) => (
                  <div
                    key={product.id}
                    className={`prod-grid-card anim-fade-up anim-delay-${Math.min((i % 6) + 1, 7)}`}
                  >
                    <ProductCard product={product} />
                  </div>
                ))}
              </div>
            ) : (
              <div className="text-center py-20">
                <div
                  className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-4"
                  style={{ background: "#f0fdf4" }}
                >
                  <Search className="w-9 h-9" style={{ color: "#86efac" }} />
                </div>
                <h3 className="font-semibold mb-2" style={{ color: "#1b4332" }}>
                  No products found
                </h3>
                <p className="text-sm mb-4" style={{ color: "#6b7280" }}>
                  Try adjusting your search or filter criteria
                </p>
                <button
                  onClick={clearFilters}
                  className="px-5 py-2.5 rounded-xl text-sm font-medium text-white"
                  style={{ background: "#2d6a4f" }}
                >
                  Clear Filters
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
