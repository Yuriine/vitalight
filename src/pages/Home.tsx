import React from "react";
import TopBar from "../components/TopBar";
import Header from "../components/Header";
import NavBar from "../components/NavBar";
import MainBanner from "../components/MainBanner";
import CategoryHighlights from "../components/CategoryHighlights";
import Features from "../components/Features";
import ProductTabs from "../components/ProductTabs";
import Footer from "../components/Footer";

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
