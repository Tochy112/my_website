import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { motion } from "framer-motion";
import App from "./App.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <motion.div initial="hidden" animate="show">
      <App />
    </motion.div>
  </StrictMode>,
);
