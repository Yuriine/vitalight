import React from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SLIDE_IMAGES = [
  "https://images.unsplash.com/photo-1492552181161-62217fc3076d?q=80&w=1497&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Mantequilla de maní
  "https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Granola
  "https://images.unsplash.com/photo-1492552181161-62217fc3076d?q=80&w=1497&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Aceite de oliva
  "https://images.unsplash.com/photo-1624454002302-36b824d7bd0a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D", // Vinagre
];

const MainBanner: React.FC = () => (
  <section className="w-full h-[340px] sm:h-[400px] md:h-[480px] relative flex items-center justify-center overflow-hidden" data-aos="fade-up">
    {/* Slider como fondo absoluto */}
    <div className="absolute inset-0 w-full h-full z-0">
      <Slide
        autoplay
        transitionDuration={500}
        duration={2500}
        infinite
        arrows={false}
        cssClass="w-full h-full"
      >
        {SLIDE_IMAGES.map((url, idx) => (
          <div key={idx} className="w-full h-full">
            <img
              src={url}
              alt={`slide-${idx}`}
              className="w-full h-full object-cover"
              loading="lazy"
            />
          </div>
        ))}
      </Slide>
      {/* Overlay para oscurecer y mejorar legibilidad */}
      <div className="absolute inset-0 bg-primary/20" aria-hidden="true" />
    </div>
    {/* Contenido superpuesto */}
    <div className="relative z-10 flex flex-col  w-full px-4 md:px-8">
      <div className="p-6 md:p-10  ">
        <span className="uppercase mb-2 text-sm font-semibold block">Naturalmente saludable</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 text-[#253d4e]">Nutre tu vida, potencia tu energía</h1>
        <button className="bg-white text-primary px-6 py-2 rounded-full font-semibold w-max transition-transform hover:scale-105">Ver productos</button>
      </div>
    </div>
  </section>
);

export default MainBanner;
