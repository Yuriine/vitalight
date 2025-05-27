import React from "react";

export default function About() {
  return (
    <section id="acerca" className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center py-28 px-4 md:px-16">
      {/* Columna izquierda: texto */}
      <div
        className="md:w-1/2 w-full flex flex-col gap-6 md:pr-12"
        data-aos="fade-up"
        data-aos-delay="200"
      >
        <span className="text-primary font-semibold text-xs tracking-widest uppercase">Ofrecemos</span>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-900 leading-tight">

          Productos que nutren tu vida.
        </h2>
        <p className="text-gray-500 text-base md:text-lg">
          Auténticos, nutritivos y cuidadosamente seleccionados.
        </p>
        <ul className="flex flex-col gap-8 mt-2">
          <li className="flex items-start gap-3">
            <span className="mt-1">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#8fcf65" /><path d="M8 12.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <div>
              <span className="font-semibold text-gray-900">Natural desde el origen</span>
              <p className="text-gray-500 text-sm">Ofrecemos una amplia variedad de granos, cereales, cafés, licores artesanales y más provenientes de proveedores responsables que respetan la calidad y el procesos natural.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#8fcf65" /><path d="M8 12.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <div>
              <span className="font-semibold text-gray-900">100% Producto Natural y Artesanal</span>
              <p className="text-gray-500 text-sm">Cada artículo que encuentras en nuestra tienda ha sido pensado en ti: sin aditivos, sin procesos industriales, respetando la esencia de cada ingrediente.</p>
            </div>
          </li>
          <li className="flex items-start gap-3">
            <span className="mt-1">
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24"><circle cx="12" cy="12" r="12" fill="#8fcf65" /><path d="M8 12.5l2.5 2.5 5-5" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
            </span>
            <div>
              <span className="font-semibold text-gray-900">Comprometidos con tu bienestar</span>
              <p className="text-gray-500 text-sm">Nos esforzamos por seleccionar productos que promuevan una vida más saludable, conectándose con sabores reales y tradicionales auténticos.</p>
            </div>
          </li>
        </ul>
      </div>
      {/* Columna derecha: imágenes */}
      <div
        className="md:w-1/2 w-full flex flex-col items-center mt-10 md:mt-0"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="500"
      >
        <div className="relative">
          <img
            src="https://i.pinimg.com/736x/d1/d1/60/d1d1603239c98304871dea0e9ec00eac.jpg"
            alt="Jugos naturales"
            className="rounded-xl shadow-lg w-auto h-[650px] object-cover"
          />
        </div>
      </div>
    </section>
  );
}
