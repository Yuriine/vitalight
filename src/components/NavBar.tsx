import React from "react";

const CATEGORIES = [
  "Mantequillas",
  "Granolas",
  "Aceites & Vinagres",
  "Snacks",
  "Semillas"
];

import { useProductsStore } from "../stores/products";
import { useNavigate } from "react-router";

const NavBar: React.FC = () => {
  const { activeCategory, setActiveCategory } = useProductsStore();
  const navigate = useNavigate();

  const handleCategoryClick = (cat: string) => {
    setActiveCategory(cat);
    navigate("/");
  };

  return (
    <nav className="w-full bg-[#eaf8e5] flex flex-wrap items-center px-4 md:px-8 py-2 gap-2 md:gap-4">
      <button className="bg-[#3fbb38] text-white rounded px-3 py-2 font-semibold text-xs md:text-base transition-transform hover:scale-105 focus:outline-none" aria-label="Ver categorías">
        CATEGORÍAS
      </button>
      <ul className="flex flex-wrap gap-3 md:gap-6 text-[#253d4e] font-medium text-xs md:text-sm">
        {CATEGORIES.map(cat => (
          <li
            key={cat}
            className={`transition-colors hover:text-[#3fbb38] cursor-pointer px-2 py-1 rounded focus:outline-none focus:bg-[#d0f5d8] ${activeCategory === cat ? "bg-[#d0f5d8] text-[#3fbb38] font-bold" : ""}`}
            tabIndex={0}
            data-aos="fade-down"
            onClick={() => handleCategoryClick(cat)}
            onKeyDown={e => { if (e.key === "Enter") handleCategoryClick(cat); }}
            aria-current={activeCategory === cat ? "page" : undefined}
          >
            {cat}
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
