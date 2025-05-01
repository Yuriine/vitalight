import React from "react";
import CategoryHighlights from "../components/CategoryHighlights";
import Features from "../components/Features";
import MainBanner from "../components/MainBanner";
import ContactForm from "../components/ContactForm";
import About from "./About";

const Home: React.FC = () => (
  <>
    <MainBanner />
    <About />
    <CategoryHighlights />
    <Features />
    <ContactForm />
  </>
);

export default Home;
