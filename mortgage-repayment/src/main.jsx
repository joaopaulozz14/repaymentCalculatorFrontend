import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { DataProvider } from "./context/index.jsx";
createRoot(document.getElementById("root")).render(
  <DataProvider>
    <StrictMode>
      <App />
    </StrictMode>
  </DataProvider>
);
