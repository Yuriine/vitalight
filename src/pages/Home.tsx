import React from "react";
import CategoryHighlights from "../components/CategoryHighlights";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import ProductTabs from "../components/ProductTabs";
import About from "./About";

const Home: React.FC = () => (
  <>
    <Header />
    <MainBanner />
    <CategoryHighlights />
    <About />
    <Features />
    <ProductTabs />
    <Footer />
  </>
);

export default Home;
