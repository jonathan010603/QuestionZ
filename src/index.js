import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/questionz" element={<Pages />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
