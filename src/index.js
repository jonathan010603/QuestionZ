import "./index.css";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Pages from "./pages";
import LogRocket from "logrocket";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);
LogRocket.init("cq2qud/questionz");

root.render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/questionz" element={<Pages />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>
);
