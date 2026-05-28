
  import { createRoot } from "react-dom/client";
  import App from "./app/App.tsx";
  import "./styles/index.css";

const redirect = sessionStorage.redirect;
delete sessionStorage.redirect;

if (redirect && redirect !== location.href) {
  history.replaceState(null, "", redirect);
}
  createRoot(document.getElementById("root")!).render(<App />);
  
