import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import "./index.css";
import MainLayout from "./layouts/MainLayout.tsx";
// import Contact from "./pages/Contact.tsx";
import Home from "./pages/Home.tsx";
import ProductDetail from "./pages/ProductDetail.tsx";
import Cart from "./pages/Cart.tsx";
import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Toaster } from "react-hot-toast";

const AppWithAOS: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 80 });
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="products/:productId" element={<ProductDetail />} />
          {/* <Route path="contact" element={<Contact />} /> */}
          <Route path="cart" element={<Cart />} />
        </Route>
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
