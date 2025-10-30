import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ThemeProvieder } from "./common/ThemeContent.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvieder>
      <App />
    </ThemeProvieder>
  </StrictMode>
);
