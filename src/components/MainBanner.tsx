import React from "react";
import { useNavigate } from "react-router";
import { Slide } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import { scrollToSection } from "../utils/scrollAnimation";

const SLIDE_IMAGES = [
  "https://images.pexels.com/photos/4041392/pexels-photo-4041392.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Mantequilla de maní
  "https://images.pexels.com/photos/260405/pexels-photo-260405.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Granola
  "https://images.pexels.com/photos/1611560/pexels-photo-1611560.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Aceite de oliva
  "https://images.pexels.com/photos/2555637/pexels-photo-2555637.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // Vinagre
];

const MainBanner: React.FC = () => {

  const navigate = useNavigate();

  return (
    <section className=" h-screen relative flex items-center justify-center overflow-hidden" data-aos="fade-up" id="inicio">
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
                style={{ minHeight: '100vh', minWidth: '100vw' }}
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
          <button
            onClick={() => navigate('/productos')}
            className="bg-white text-primary px-6 py-2 rounded-full font-semibold w-max transition-transform hover:scale-105"
          >Ver productos</button>
        </div>
      </div>
    </section>
  );
};

export default MainBanner;
