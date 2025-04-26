import React from "react";

import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

const SLIDE_IMAGES = [
  "https://images.unsplash.com/photo-1519864600265-abb23847ef2c?auto=format&fit=crop&w=800&q=80", // Mantequilla de maní
  "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80", // Granola
  "https://images.unsplash.com/photo-1464306076886-debca5e8a6b0?auto=format&fit=crop&w=800&q=80", // Aceite de oliva
  "https://images.unsplash.com/photo-1502741126161-b048400d98b5?auto=format&fit=crop&w=800&q=80", // Vinagre
];

const MainBanner: React.FC = () => (
  <section className="w-full h-[340px] sm:h-[400px] md:h-[480px] bg-primary flex flex-col md:flex-row items-center justify-between px-4 md:px-8 py-8 md:py-10 relative overflow-hidden" data-aos="fade-up">
    <div className="flex flex-col justify-center z-10 text-white max-w-full md:max-w-[400px] mb-6 md:mb-0">
      <span className="uppercase mb-2 text-sm font-semibold">Naturalmente saludable</span>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6">Nutre tu vida, potencia tu energía</h1>
      <button className="bg-white text-green-700 px-6 py-2 rounded-full font-semibold w-max transition-transform hover:scale-105">Ver productos</button>
    </div>
    <div className="w-full md:w-2/3 h-[180px] sm:h-[260px] md:h-full flex items-center justify-center z-0 rounded-l-none md:rounded-l-[4rem]">
      <Slide
        autoplay
        transitionDuration={500}
        duration={2500}
        infinite
        indicators
        arrows={false}
        cssClass="w-full h-full rounded-xl md:rounded-l-[4rem]"
      >
        {SLIDE_IMAGES.map((url, idx) => (
          <div key={idx} className="w-full h-full flex items-center justify-center">
            <img
              src={url}
              alt={`slide-${idx}`}
              className="w-full h-[180px] sm:h-[260px] md:h-[400px] object-cover rounded-xl md:rounded-l-[4rem] shadow-lg border"
              data-aos="zoom-in"
              loading="lazy"
            />
          </div>
        ))}
      </Slide>
    </div>
  </section>
);

export default MainBanner;
