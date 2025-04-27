import React from "react";

const Features: React.FC = () => (
  <section className="w-full flex flex-wrap justify-center gap-6 px-4 py-40 relative">
    <div className="absolute inset-0 w-full h-full">
      <img
        src="https://images.unsplash.com/photo-1483137140003-ae073b395549?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="background"
        className="w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black/30" />
    </div>
    <div className="relative z-10 flex flex-wrap justify-center gap-6 w-full">
      <div
        className="bg-white/50 rounded-lg p-8 w-full md:w-[340px] flex flex-col items-center text-center shadow-md"
        data-aos="fade-right"
        data-aos-delay="200"
        data-aos-duration="500"
      >
        <div className="border-2 rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-4">🍏</div>
        <p className="font-ligth text-black text-xl mb-2">Productos 100% Naturales</p>
        <p className="text-sm text-[#253d4e] ">"Ofrecemos alimentos orgánicos cultivados sin pesticidas ni químicos dañinos. Priorizamos tu salud y el cuidado del medio ambiente."</p>
      </div>
      <div
        className="bg-white/50 rounded-lg p-8 w-full md:w-[340px] flex flex-col items-center text-center shadow-md"
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="500"
      >
        <div className="border-2 rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-4">📦</div>
        <p className="font-ligth text-black text-xl mb-2">Energía Fitness</p>
        <p className="text-sm text-[#253d4e] ">"Complementos nutricionales que potencian tu rendimiento físico y aceleran tu recuperación. Elaborados con ingredientes de la más alta calidad."</p>
      </div>
      <div
        className="bg-white/50 rounded-lg p-8 w-full md:w-[340px] flex flex-col items-center text-center shadow-md"
        data-aos="fade-down"
        data-aos-delay="200"
        data-aos-duration="500"
      >
        <div className="border-2 rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-4">🚚</div>
        <p className="font-ligth text-black text-xl mb-2">Envíos a todo el Perú</p>
        <p className="text-sm text-[#253d4e] ">"Entregamos nuestros productos a cualquier rincón del país. Rápido, seguro y con seguimiento en tiempo real desde tu pedido hasta tu puerta."</p>
      </div>
    </div>
  </section>
);

export default Features;
