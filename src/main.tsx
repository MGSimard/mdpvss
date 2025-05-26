import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "next-themes";
import App from "@/App";
import "@/styles/global.css";
import "@/styles/fonts.css";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ThemeProvider disableTransitionOnChange defaultTheme="dark">
      <App />
    </ThemeProvider>
  </StrictMode>
);
