import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const navLinks = [
  { label: "Home", path: "/" },
  { label: "Products", path: "/products" },
  { label: "Categories", path: "/categories" },
  { label: "About", path: "/about" },
  { label: "Contact", path: "/contact" },
];

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
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
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        background: elevated ? "rgba(255,255,255,0.97)" : "transparent",
        backdropFilter: elevated ? "blur(12px)" : "none",
        boxShadow: elevated ? "0 2px 20px rgba(0,0,0,0.08)" : "none",
      }}
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
              const active =
                pathname === link.path ||
                (link.path !== "/" && pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 group"
                  style={{
                    color: active
                      ? "#2d6a4f"
                      : elevated
                        ? "#374151"
                        : "rgba(255,255,255,0.88)",
                  }}
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
              className="px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 border"
              style={{
                color: elevated ? "#2d6a4f" : "#fff",
                borderColor: elevated ? "#2d6a4f" : "rgba(255,255,255,0.45)",
              }}
            >
              Contact Us
            </Link>
            <Link
              to="/products"
              className="px-5 py-2 rounded-lg text-sm font-medium text-white transition-all duration-200 hover:shadow-lg hover:-translate-y-0.5"
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
              <X className="w-6 h-6" style={{ color: elevated ? "#1b4332" : "#fff" }} />
            ) : (
              <Menu className="w-6 h-6" style={{ color: elevated ? "#1b4332" : "#fff" }} />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-gray-100 shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => {
              const active =
                pathname === link.path ||
                (link.path !== "/" && pathname.startsWith(link.path));
              return (
                <Link
                  key={link.path}
                  to={link.path}
                  className="flex items-center px-4 py-3 rounded-lg text-sm font-medium transition-colors"
                  style={{
                    background: active ? "#f0fdf4" : "transparent",
                    color: active ? "#2d6a4f" : "#374151",
                  }}
                >
                  {link.label}
                </Link>
              );
            })}
            <div className="pt-3 pb-1 flex flex-col gap-2">
              <Link
                to="/contact"
                className="w-full text-center px-4 py-2.5 rounded-lg text-sm font-medium border"
                style={{ color: "#2d6a4f", borderColor: "#2d6a4f" }}
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
