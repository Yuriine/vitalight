import React from "react";

const CategoryHighlights: React.FC = () => (
  <div className="flex w-full items-center justify-center p-1 sm:p-2 md:p-3">
    <div className="grid w-full max-w-5xl gap-1 sm:gap-2 bg-gray-200 p-1 grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 auto-rows-[100px] rounded-lg shadow-md">
      <div className="col-span-2 sm:col-span-1 row-span-2 bg-pink-100 rounded-lg shadow-md flex flex-col items-center justify-center p-1 sm:p-2 md:p-3">
        <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=400&q=80" alt="Meat" className="rounded mb-1 h-12 object-cover" />
        <span className="font-bold text-[#253d4e] text-base">Mantequilla de Maní</span>
        <button className="bg-primary text-white px-2 py-0.5 rounded-full text-xs">Shop Now</button>
      </div>

      <div className="col-span-1 row-span-1 bg-yellow-100 rounded-lg shadow-md flex flex-col items-center justify-center p-1 sm:p-2 md:p-3">
        <span className="font-bold text-[#253d4e] text-base">Granola Natural</span>
      </div>

      <div className="col-span-2 sm:col-span-2 lg:col-span-2 row-span-2 lg:row-span-3 bg-green-100 rounded-lg shadow-md flex flex-col items-center justify-center p-1 sm:p-2 md:p-3">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Vegetables" className="rounded mb-1 h-12 object-cover" />
        <span className="font-bold text-[#253d4e] text-base">Aceites & Vinagres</span>
        <span className="text-xs">Get 30% Off Your Order</span>
        <button className="bg-primary text-white px-2 py-0.5 rounded-full text-xs">Shop Now</button>
      </div>

      <div className="col-span-1 row-span-2 bg-cyan-100 rounded-lg shadow-md flex flex-col items-center justify-center p-1 sm:p-2 md:p-3">
        <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Organic" className="rounded mb-1 h-12 object-cover" />
        <span className="font-bold text-[#253d4e] text-base">Snacks Saludables</span>
        <button className="bg-primary text-white px-2 py-0.5 rounded-full text-xs">Shop Now</button>
      </div>

      <div className="col-span-1 row-span-1 bg-lime-200 rounded-lg shadow-md flex items-center justify-center p-1 sm:p-2 md:p-3">
        <span className="font-bold text-[#253d4e] text-lg">Semillas</span>
      </div>

      <div className="col-span-2 sm:col-span-2 lg:col-span-2 row-span-2 lg:row-span-3 bg-red-200 rounded-lg shadow-md flex items-center justify-center p-1 sm:p-2 md:p-3">
        <span className="font-bold text-[#253d4e] text-lg">Frutos Secos</span>
      </div>

      <div className="col-span-1 row-span-2 lg:row-span-3 bg-gray-300 rounded-lg shadow-md flex items-center justify-center p-1 sm:p-2 md:p-3">
        <span className="font-bold text-[#253d4e] text-lg">Cereales</span>
      </div>

      <div className="col-span-1 row-span-2 lg:row-span-3 bg-yellow-100 rounded-lg shadow-md flex items-center justify-center p-1 sm:p-2 md:p-3">
        <span className="font-bold text-[#253d4e] text-lg">Proteínas</span>
      </div>
    </div>
  </div>
);

export default CategoryHighlights;
