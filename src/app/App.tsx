import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";
import logoSrc from "../imports/IMG-20260520-WA0000.jpg";

const SITE_TITLE = "Shiv Shatakshi Agro | Agricultural Products & Crop Solutions";
const SITE_DESC =
  "Shiv Shatakshi Agro offers premium insecticides, herbicides, fungicides, bio stimulants, micronutrients, and organic fertilizers for Indian farmers. Call +91 83197 03894.";
const SITE_URL = "https://shivshatakshiagro.com";

function SeoAndFavicon() {
  useEffect(() => {
    document.title = SITE_TITLE;

    const setMeta = (name: string, content: string, prop = false) => {
      const attr = prop ? "property" : "name";
      let el = document.querySelector<HTMLMetaElement>(`meta[${attr}="${name}"]`);
      if (!el) {
        el = document.createElement("meta");
        el.setAttribute(attr, name);
        document.head.appendChild(el);
      }
      el.content = content;
    };

    setMeta("description", SITE_DESC);
    setMeta("keywords", "agricultural products, insecticide, herbicide, fungicide, bio stimulant, micronutrient, organic fertilizer, crop protection, India, Shiv Shatakshi Agro");
    setMeta("og:title", SITE_TITLE, true);
    setMeta("og:description", SITE_DESC, true);
    setMeta("og:type", "website", true);
    setMeta("og:url", SITE_URL, true);
    setMeta("og:image", logoSrc, true);
    setMeta("og:site_name", "Shiv Shatakshi Agro", true);
    setMeta("twitter:card", "summary_large_image");
    setMeta("twitter:title", SITE_TITLE);
    setMeta("twitter:description", SITE_DESC);
    setMeta("twitter:image", logoSrc);

    // JSON-LD structured data
    if (!document.getElementById("jsonld-org")) {
      const script = document.createElement("script");
      script.id = "jsonld-org";
      script.type = "application/ld+json";
      script.text = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "Organization",
        name: "Shiv Shatakshi Agro",
        url: SITE_URL,
        telephone: "+918319703894",
        email: "shivshatakshiagro@gmail.com",
        description: SITE_DESC,
        sameAs: ["https://wa.me/918319703894"],
        contactPoint: {
          "@type": "ContactPoint",
          telephone: "+918319703894",
          contactType: "customer service",
          availableLanguage: ["English", "Hindi", "Marathi"],
        },
      });
      document.head.appendChild(script);
    }

    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      document.head.appendChild(link);
    }
    link.type = "image/jpeg";
    link.href = logoSrc;
  }, []);

  return null;
}

export default function App() {
  return (
    <>
      <SeoAndFavicon />
      <RouterProvider router={router} />
    </>
  );
}
