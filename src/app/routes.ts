import { createBrowserRouter } from "react-router";
import { Root } from "./Root";
import { HomePage } from "./pages/HomePage";
import { ProductsPage } from "./pages/ProductsPage";
import { ProductDetailPage } from "./pages/ProductDetailPage";
import { AboutPage } from "./pages/AboutPage";
import { ContactPage } from "./pages/ContactPage";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: HomePage },
      { path: "products", Component: ProductsPage },
      { path: "products/:productId", Component: ProductDetailPage },
      { path: "categories", Component: ProductsPage },
      { path: "about", Component: AboutPage },
      { path: "contact", Component: ContactPage },
    ],
  },
], 
  {
    basename: "/SSA",
  }
);
