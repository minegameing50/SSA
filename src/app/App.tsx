import { useEffect } from "react";
import { RouterProvider } from "react-router";
import { router } from "./routes";

const SITE_URL = "https://shivshatakshiagro.com";

function SeoAndFavicon() {
  useEffect(() => {
    // Favicon — use the static public logo (not bundled into JS)
    let link = document.querySelector<HTMLLinkElement>("link[rel~='icon'][type='image/jpeg']");
    if (!link) {
      link = document.createElement("link");
      link.rel = "icon";
      link.type = "image/jpeg";
      document.head.appendChild(link);
    }
    link.href = "/logo.jpg";

    // Canonical tag — update per-page if needed (currently single canonical at root)
    let canonical = document.querySelector<HTMLLinkElement>("link[rel='canonical']");
    if (!canonical) {
      canonical = document.createElement("link");
      canonical.rel = "canonical";
      document.head.appendChild(canonical);
    }
    canonical.href = SITE_URL + "/";
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
