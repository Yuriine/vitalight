import React from "react";
import CategoryHighlights from "../components/CategoryHighlights";
import Features from "../components/Features";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MainBanner from "../components/MainBanner";
import NavBar from "../components/NavBar";
import ProductTabs from "../components/ProductTabs";

const Home: React.FC = () => (
  <>
    {/* <TopBar /> */}
    <Header />
    <NavBar />
    <MainBanner />
    <CategoryHighlights />
    <Features />
    <ProductTabs />
    <Footer />
  </>
);

export default Home;
