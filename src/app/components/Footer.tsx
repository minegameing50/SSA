import { Link } from "react-router";
import { Phone, Mail, MapPin, Facebook, Instagram, Youtube, Twitter, MessageCircle } from "lucide-react";
import { Logo } from "./Logo";

const PHONE = "+91 83197 03894";
const PHONE_HREF = "tel:+918319703894";
const WHATSAPP_HREF = "https://wa.me/918319703894";
const EMAIL = "shivshatakshiagro@gmail.com";

const productLinks = [
  { label: "Insecticides", path: "/products?category=Insecticide" },
  { label: "Herbicides", path: "/products?category=Herbicide" },
  { label: "Fungicides", path: "/products?category=Fungicide" },
  { label: "Bio Stimulants", path: "/products?category=Bio+Stimulant" },
  { label: "Micronutrients", path: "/products?category=Micronutrient" },
  { label: "Organic Fertilizers", path: "/products?category=Organic+Fertilizer" },
];

const companyLinks = [
  { label: "Home", path: "/" },
  { label: "About Us", path: "/about" },
  { label: "Products", path: "/products" },
  { label: "Contact", path: "/contact" },
];

export function Footer() {
  return (
    <footer style={{ background: "#0d2b1f" }} className="text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="flex items-center gap-2.5 mb-4">
              <Logo
                size={44}
                showText={true}
                textColor="#fff"
                accentColor="#f4a31a"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-5" style={{ color: "#9ca3af" }}>
              Empowering farmers with premium agricultural solutions for better
              crop protection, growth, and yields.
            </p>
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {[
                { icon: Facebook, label: "Facebook" },
                { icon: Instagram, label: "Instagram" },
                { icon: Youtube, label: "YouTube" },
                { icon: Twitter, label: "Twitter" },
              ].map(({ icon: Icon, label }) => (
                <a
                  key={label}
                  href="#"
                  aria-label={label}
                  className="w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-200 hover:-translate-y-0.5"
                  style={{ background: "rgba(255,255,255,0.08)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.background = "#2d6a4f")}
                  onMouseLeave={(e) => (e.currentTarget.style.background = "rgba(255,255,255,0.08)")}
                >
                  <Icon className="w-4 h-4 text-white" />
                </a>
              ))}
            </div>
          </div>

          {/* Products */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Products
            </h4>
            <ul className="space-y-2.5">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "#9ca3af" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Company
            </h4>
            <ul className="space-y-2.5">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    to={link.path}
                    className="text-sm transition-colors duration-200 hover:text-white"
                    style={{ color: "#9ca3af" }}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-semibold text-white mb-4 text-sm uppercase tracking-wider">
              Contact Us
            </h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Phone className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: "#f4a31a" }} />
                <a
                  href={PHONE_HREF}
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "#9ca3af" }}
                >
                  {PHONE}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <MessageCircle className="w-4 h-4 flex-shrink-0" style={{ color: "#25D366" }} />
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm transition-colors hover:text-white"
                  style={{ color: "#9ca3af" }}
                >
                  {PHONE} (WhatsApp)
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-4 h-4 flex-shrink-0" style={{ color: "#f4a31a" }} />
                <a
                  href={`mailto:${EMAIL}`}
                  className="text-sm transition-colors hover:text-white break-all"
                  style={{ color: "#9ca3af" }}
                >
                  {EMAIL}
                </a>
              </li>
              <li className="pt-1">
                <a
                  href={WHATSAPP_HREF}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium text-white transition-all hover:-translate-y-0.5"
                  style={{ background: "#25D366" }}
                >
                  <MessageCircle className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div style={{ borderTop: "1px solid rgba(255,255,255,0.08)" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <p className="text-xs" style={{ color: "#6b7280" }}>
            © 2026 Shiv Shatakshi Agro. All rights reserved.
          </p>
          <p className="text-xs" style={{ color: "#6b7280" }}>
            Empowering Farmers. Growing Together.
          </p>
        </div>
      </div>
    </footer>
  );
}
