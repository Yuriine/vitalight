import AOS from "aos";
import "aos/dist/aos.css";
import React, { useEffect } from "react";
import { createRoot } from "react-dom/client";
import { Toaster } from "react-hot-toast";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import Cart from "./pages/Cart.tsx";
import Home from "./pages/Home.tsx";
import Products from "./pages/Products.tsx";
import Layout from "./pages/Layout.tsx";

const AppWithAOS: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 80 });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="productos" element={<Products />} />
          <Route index element={<Home />} />
        </Route>
        <Route path="cart" element={<Cart />} />
      </Routes>
      <Toaster />
    </BrowserRouter>
  );
};

const rootElement = document.getElementById("root");
if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(<AppWithAOS />);
