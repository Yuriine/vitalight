import React from "react";

const CategoryHighlights: React.FC = () => (
  <section className="w-full flex flex-wrap justify-center gap-6 px-4 py-8">
    {/* Super Healthy */}
    <div className="w-full md:w-[280px] bg-pink-100 rounded-lg p-4 flex flex-col justify-between">
      <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=400&q=80" alt="Meat" className="rounded mb-3 h-20 object-cover" />
      <span className="font-bold text-[#253d4e] text-lg">Mantequilla de Maní</span>
      <button className="mt-2 bg-[#3fbb38] text-white px-4 py-1 rounded-full text-sm">Shop Now</button>
    </div>
    {/* Fresh Fruits */}
    <div className="w-full md:w-[280px] bg-yellow-100 rounded-lg p-4 flex flex-col justify-between">
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Fruits" className="rounded mb-3 h-20 object-cover" />
      <span className="font-bold text-[#253d4e] text-lg">Granola Natural</span>
      <span className="text-xs">Flat 25% Discount</span>
      <button className="mt-2 bg-[#3fbb38] text-white px-4 py-1 rounded-full text-sm">Shop Now</button>
    </div>
    {/* Fresh Vegetables */}
    <div className="w-full md:w-[340px] bg-green-100 rounded-lg p-4 flex flex-row items-center justify-between gap-2">
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Vegetables" className="rounded mb-3 h-20 object-cover" />
      <div className="flex flex-col">
        <span className="font-bold text-[#253d4e] text-lg">Aceites & Vinagres</span>
        <span className="text-xs">Get 30% Off Your Order</span>
        <button className="mt-2 bg-[#3fbb38] text-white px-4 py-1 rounded-full text-sm">Shop Now</button>
      </div>
    </div>
    {/* 100% Organic */}
    <div className="w-full md:w-[280px] bg-cyan-100 rounded-lg p-4 flex flex-col justify-between">
      <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Organic" className="rounded mb-3 h-20 object-cover" />
      <span className="font-bold text-[#253d4e] text-lg">Snacks Saludables</span>
      <button className="mt-2 bg-[#3fbb38] text-white px-4 py-1 rounded-full text-sm">Shop Now</button>
    </div>
  </section>
);

export default CategoryHighlights;
