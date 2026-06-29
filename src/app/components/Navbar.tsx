import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X, ChevronDown } from "lucide-react";
import { Logo } from "./Logo";
import { categories } from "../data/products";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Categories", path: "/categories" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [mobileCategoriesOpen, setMobileCategoriesOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { pathname } = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  const isHome = pathname === "/";
  const elevated = scrolled || !isHome;

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        elevated ? "bg-white/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <Link to="/" className="group">
            <Logo
              size={42}
              showText={true}
              textColor={elevated ? "#1b4332" : "#fff"}
              accentColor="#f4a31a"
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => {
              if (link.label === "Categories") {
                return (
                  <div key={link.path} className="relative group">
                    <button
                      className={`relative flex items-center gap-1 px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                        elevated ? "text-gray-700" : "text-white/90"
                      }`}
                    >
                      {link.label}
                      <ChevronDown className="w-4 h-4 opacity-70" />
                    </button>
                    {/* Hover Dropdown */}
                    <div className="absolute top-full left-0 pt-2 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                      <div className="w-48 bg-white rounded-xl shadow-xl border border-gray-100 overflow-hidden py-2">
                        {categories.map((cat) => (
                          <Link
                            key={cat}
                            to={`/products?category=${encodeURIComponent(cat)}`}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-[#f0fdf4] hover:text-[#2d6a4f] transition-colors"
                          >
                            {cat}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              }

              const active =
                pathname === link.path ||
                (link.path !== "/" && pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group ${
                    active
                      ? "text-[#2d6a4f]"
                      : elevated
                      ? "text-gray-700"
                      : "text-white/90"
                  }`}
                >
                  {link.label}
                  <span
                    className="absolute bottom-1 left-4 right-4 h-0.5 rounded-full transition-all duration-200"
                    style={{
                      background: "#f4a31a",
                      opacity: active ? 1 : 0,
                      transform: active ? "scaleX(1)" : "scaleX(0)",
                    }}
                  />
                </Link>
              );
            })}
          </nav>

          {/* CTA Buttons */}
          <div className="hidden lg:flex items-center gap-3">
            <Link
              to="/contact"
              className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border ${
                elevated
                  ? "text-[#2d6a4f] border-[#2d6a4f]"
                  : "text-white border-white/45"
              }`}
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="px-5 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5 animate-pulse-glow"
              style={{ background: "linear-gradient(135deg, #2d6a4f, #1b4332)" }}
            >
              Explore Products
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            className="lg:hidden p-2 rounded-lg"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <X className={`w-6 h-6 ${elevated ? "text-[#1b4332]" : "text-white"}`} />
            ) : (
              <Menu className={`w-6 h-6 ${elevated ? "text-[#1b4332]" : "text-white"}`} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl animate-slide-down">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              if (link.label === "Categories") {
                return (
                  <div key={link.path}>
                    <button
                      onClick={() => setMobileCategoriesOpen(!mobileCategoriesOpen)}
                      className="w-full flex items-center justify-between px-4 py-3 rounded-lg text-sm font-medium text-gray-700 transition-colors"
                    >
                      {link.label}
                      <ChevronDown className={`w-4 h-4 transition-transform ${mobileCategoriesOpen ? "rotate-180" : ""}`} />
                    </button>
                    {mobileCategoriesOpen && (
                      <div className="pl-4 pr-2 py-2 space-y-1 bg-gray-50 rounded-lg mt-1 border border-gray-100">
                        {categories.map((cat) => (
                          <Link
                            key={cat}
                            to={`/products?category=${encodeURIComponent(cat)}`}
                            className="block px-4 py-2.5 text-sm text-gray-600 hover:text-[#2d6a4f] transition-colors"
                            onClick={() => setMobileOpen(false)}
                          >
                            {cat}
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                );
              }

              const active =
                pathname === link.path ||
                (link.path !== "/" && pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? "bg-[#f0fdf4] text-[#2d6a4f]"
                      : "text-gray-700"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 pb-1 flex flex-col gap-2">
              <Link
                to="/contact"
                className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium border border-[#2d6a4f] text-[#2d6a4f]"
              >
                Contact Us
              </Link>
              <Link
                to="/products"
                className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium text-white"
                style={{ background: "linear-gradient(135deg, #2d6a4f, #1b4332)" }}
              >
                Explore Products
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
