import React from "react";

import { createRoot } from "react-dom/client";

import "./index.css";
import App from "./App";
import { ThemeContextProvider } from "./contexts/themeContext";

const Container = document.getElementById("root");
const root = createRoot(Container!);

root.render(
  <React.StrictMode>
    <ThemeContextProvider>
      <App />
    </ThemeContextProvider>
  </React.StrictMode>,
);
