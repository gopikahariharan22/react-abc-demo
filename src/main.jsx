import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// Default import - rename
import App from "./App.jsx";

// Bootstrap (Start) React App
// Root Component
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
