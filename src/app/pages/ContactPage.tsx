import { useState } from "react";
import { Phone, Mail, MapPin, MessageCircle, CheckCircle2, Leaf, Clock } from "lucide-react";
import { Logo } from "../components/Logo";

const PHONE = "+91 83197 03894";
const PHONE_HREF = "tel:+918319703894";
const WHATSAPP_HREF = "https://wa.me/918319703894";
const EMAIL = "shivshatakshiagro@gmail.com";

export function ContactPage() {
  const [form, setForm] = useState({ name: "", phone: "", email: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div style={{ background: "#f8fffe" }}>
      {/* Header */}
      <div
        className="pt-24 pb-14"
        style={{ background: "linear-gradient(135deg, #0d2b1f, #1b4332, #2d6a4f)" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="flex justify-center mb-4">
            <Logo size={52} showText={false} />
          </div>
          <span className="text-sm font-semibold uppercase tracking-wider" style={{ color: "#86efac" }}>
            Get In Touch
          </span>
          <h1
            className="mt-1 text-white"
            style={{ fontSize: "clamp(1.75rem, 4vw, 2.5rem)", fontWeight: 700 }}
          >
            We're Here to Help
          </h1>
          <p className="mt-2 text-sm max-w-xl mx-auto" style={{ color: "rgba(255,255,255,0.75)" }}>
            Have questions about our products? Reach us on call, WhatsApp, or email —
            our team responds within a few hours.
          </p>
        </div>
      </div>

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        {/* Quick contact action cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mb-12">
          {/* Call */}
          <a
            href={PHONE_HREF}
            className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
              style={{ background: "#f0fdf4" }}
            >
              <Phone className="w-7 h-7" style={{ color: "#2d6a4f" }} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#9ca3af" }}>
              Call Us
            </p>
            <p className="font-bold" style={{ color: "#1b4332" }}>{PHONE}</p>
            <span
              className="mt-3 inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-white transition-all"
              style={{ background: "linear-gradient(135deg,#2d6a4f,#1b4332)" }}
            >
              Click to Call
            </span>
          </a>

          {/* WhatsApp */}
          <a
            href={WHATSAPP_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
              style={{ background: "#f0fdf9" }}
            >
              <MessageCircle className="w-7 h-7" style={{ color: "#25D366" }} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#9ca3af" }}>
              WhatsApp
            </p>
            <p className="font-bold" style={{ color: "#1b4332" }}>{PHONE}</p>
            <span
              className="mt-3 inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-white transition-all"
              style={{ background: "linear-gradient(135deg,#25D366,#128C7E)" }}
            >
              Chat on WhatsApp
            </span>
          </a>

          {/* Email */}
          <a
            href={`mailto:${EMAIL}`}
            className="group flex flex-col items-center text-center p-6 rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            style={{ boxShadow: "0 4px 20px rgba(0,0,0,0.06)" }}
          >
            <div
              className="w-14 h-14 rounded-2xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110"
              style={{ background: "#eff6ff" }}
            >
              <Mail className="w-7 h-7" style={{ color: "#2563eb" }} />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "#9ca3af" }}>
              Email Us
            </p>
            <p className="font-bold text-sm break-all" style={{ color: "#1b4332" }}>{EMAIL}</p>
            <span
              className="mt-3 inline-block px-4 py-1.5 rounded-full text-xs font-semibold text-white"
              style={{ background: "linear-gradient(135deg,#2563eb,#1d4ed8)" }}
            >
              Send Email
            </span>
          </a>
        </div>

        {/* Form + info grid */}
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <div
              className="rounded-3xl p-8"
              style={{ background: "white", boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
            >
              {submitted ? (
                <div className="text-center py-10">
                  <div
                    className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-5"
                    style={{ background: "#dcfce7" }}
                  >
                    <CheckCircle2 className="w-10 h-10" style={{ color: "#16a34a" }} />
                  </div>
                  <h3 className="font-bold text-xl mb-2" style={{ color: "#1b4332" }}>
                    Request Sent!
                  </h3>
                  <p className="text-sm mb-6" style={{ color: "#6b7280" }}>
                    Thank you! Our team will call you back within a few hours.
                  </p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: "", phone: "", email: "" }); }}
                    className="px-6 py-2.5 rounded-xl text-sm font-medium text-white"
                    style={{ background: "#2d6a4f" }}
                  >
                    Submit Another
                  </button>
                </div>
              ) : (
                <>
                  <div className="flex items-center gap-2 mb-6">
                    <Leaf className="w-5 h-5" style={{ color: "#2d6a4f" }} />
                    <h2 className="font-bold" style={{ color: "#1b4332" }}>
                      Send Us a Request
                    </h2>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-5">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="Your full name"
                        value={form.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                        style={{ borderColor: "#e5e7eb", color: "#1f2937" }}
                        onFocus={(e) => { e.target.style.borderColor = "#2d6a4f"; e.target.style.boxShadow = "0 0 0 3px rgba(45,106,79,0.1)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>

                    {/* Phone */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 XXXXX XXXXX"
                        value={form.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                        style={{ borderColor: "#e5e7eb", color: "#1f2937" }}
                        onFocus={(e) => { e.target.style.borderColor = "#2d6a4f"; e.target.style.boxShadow = "0 0 0 3px rgba(45,106,79,0.1)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>

                    {/* Email */}
                    <div>
                      <label className="block text-xs font-semibold mb-1.5" style={{ color: "#374151" }}>
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="your@email.com"
                        value={form.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border text-sm outline-none transition-all"
                        style={{ borderColor: "#e5e7eb", color: "#1f2937" }}
                        onFocus={(e) => { e.target.style.borderColor = "#2d6a4f"; e.target.style.boxShadow = "0 0 0 3px rgba(45,106,79,0.1)"; }}
                        onBlur={(e) => { e.target.style.borderColor = "#e5e7eb"; e.target.style.boxShadow = "none"; }}
                      />
                    </div>

                    {/* Submit */}
                    <button
                      type="submit"
                      className="w-full inline-flex items-center justify-center gap-2 py-3.5 rounded-xl font-semibold text-white transition-all hover:-translate-y-0.5 hover:shadow-lg"
                      style={{ background: "linear-gradient(135deg, #2d6a4f, #1b4332)" }}
                    >
                      Submit Request
                    </button>
                  </form>

                  {/* Quick alternatives */}
                  <div className="mt-5 pt-5" style={{ borderTop: "1px solid #f3f4f6" }}>
                    <p className="text-xs text-center mb-3" style={{ color: "#9ca3af" }}>
                      Or reach us directly
                    </p>
                    <div className="flex gap-3">
                      <a
                        href={PHONE_HREF}
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                        style={{ background: "linear-gradient(135deg,#2d6a4f,#1b4332)" }}
                      >
                        <Phone className="w-4 h-4" />
                        Call
                      </a>
                      <a
                        href={WHATSAPP_HREF}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex-1 inline-flex items-center justify-center gap-2 py-2.5 rounded-xl text-sm font-semibold text-white transition-all hover:-translate-y-0.5"
                        style={{ background: "#25D366" }}
                      >
                        <MessageCircle className="w-4 h-4" />
                        WhatsApp
                      </a>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          {/* Side Info */}
          <div className="lg:col-span-2 space-y-5">
            {/* Hours */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}
            >
              <div className="flex items-center gap-3 mb-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center" style={{ background: "#f5f3ff" }}>
                  <Clock className="w-5 h-5" style={{ color: "#7c3aed" }} />
                </div>
                <p className="font-semibold text-sm" style={{ color: "#1b4332" }}>Working Hours</p>
              </div>
              <p className="text-sm" style={{ color: "#374151" }}>Mon – Sat: 9:00 AM – 6:00 PM</p>
              <p className="text-xs mt-0.5" style={{ color: "#9ca3af" }}>Sunday: Closed</p>
            </div>

            {/* Address */}
            <div
              className="p-5 rounded-2xl"
              style={{ background: "white", boxShadow: "0 4px 16px rgba(0,0,0,0.05)" }}
            >
              <div className="flex items-start gap-3">
                <div className="w-9 h-9 rounded-xl flex items-center justify-center flex-shrink-0" style={{ background: "#fff7ed" }}>
                  <MapPin className="w-5 h-5" style={{ color: "#ea580c" }} />
                </div>
                <div>
                  <p className="font-semibold text-sm mb-1" style={{ color: "#1b4332" }}>Office Address</p>
                  <p className="text-sm" style={{ color: "#374151" }}> L.g. 48-a, Orbit Mall, A B Road, Indore Tukoganj,<br />
 Indore, Indore, Madhya Pradesh, India, 452001
                  </p>
                </div>
              </div>
            </div>

            {/* Brand card */}
            <div
              className="p-5 rounded-2xl text-center"
              style={{ background: "linear-gradient(135deg,#1b4332,#2d6a4f)" }}
            >
              <div className="flex justify-center mb-3">
                <Logo size={48} showText={false} />
              </div>
              <p className="font-bold text-white text-sm">Shiv Shatakshi Agro</p>
              <p className="text-xs mt-1 mb-4" style={{ color: "rgba(255,255,255,0.65)" }}>
                Empowering Farmers. Growing Together.
              </p>
              <div className="space-y-2">
                <a
                  href={PHONE_HREF}
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-semibold text-white"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  <Phone className="w-3.5 h-3.5" />
                  {PHONE}
                </a>
                <a
                  href={`mailto:${EMAIL}`}
                  className="flex items-center justify-center gap-2 w-full py-2 rounded-lg text-xs font-semibold text-white"
                  style={{ background: "rgba(255,255,255,0.12)" }}
                >
                  <Mail className="w-3.5 h-3.5" />
                  {EMAIL}
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Map */}
        <div id="map" className="mt-10 rounded-3xl overflow-hidden" style={{ height: "320px" }}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m12!1m8!1m3!1d58879.12506542005!2d75.8743286!3d22.7302738!3m2!1i1024!2i768!4f13.1!2m1!1sLg%2048%20a%20Orbit%20Mall%20AB%20Road%20Indore%20Tukoganj%20Indore%20Indore%20Madhya%20Pradesh%20India%20452001!5e0!3m2!1sen!2sin!4v1779691222760!5m2!1sen!2sin"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Office Location"
          />
        </div>
      </div>
    </div>
  );
}
