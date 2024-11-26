import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Pop from "./components/pop";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Pop></Pop>
  </StrictMode>,
);
