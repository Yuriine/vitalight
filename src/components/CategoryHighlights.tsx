import React from "react";
import { Link } from "react-router";

interface CategoryCardProps {
  title: string;
  subtitle: string;
  className?: string;
  bgImage: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({
  title,
  subtitle,
  className = '',
  bgImage,
}) => (

  <Link
    className={`relative rounded-xl overflow-hidden shadow-xl group flex flex-col justify-end min-h-[200px] ${className}`}
    to="/productos" state={{ category: title }}
    tabIndex={0}
    aria-label={title}
  >
    {/* Imagen de fondo */}
    <img
      src={bgImage}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover  group-hover:scale-105 transition-transform duration-300"
      draggable={false}
    />

    {/* Contenido abajo izquierda */}
    <div className="relative z-10 md:p-4 px-4 py-2 mt-auto flex flex-col gap-2 backdrop-blur-md">
      <h3 className="text-white text-xl font-bold drop-shadow-lg mb-0">{title}</h3>
      <p className="text-white text-sm drop-shadow-lg mb-0">{subtitle}</p>

    </div>
  </Link>

);



const CATEGORY_CARDS = [
  {
    title: "Aceites",
    subtitle: "Gourmet y saludables para tu cocina.",
    className: "col-span-2 sm:col-span-2 sm:row-span-6",
    bgImage: "https://i.pinimg.com/736x/fc/dd/4f/fcdd4f839faf4d3fe5c22e3980d4b868.jpg",
  },
  {
    title: "Untables",
    subtitle: "Sabores naturales para untar y disfrutar.",
    className: "col-span-2 sm:col-span-1 sm:row-span-6",
    bgImage: "https://i.pinimg.com/736x/52/18/56/521856dec6c9fe9b78435093f07ad521.jpg"
  },
  {
    title: "Snacks",
    subtitle: "Desayunos y antojos nutritivos.",
    className: "col-span-2 sm:col-span-1 sm:row-span-6",
    bgImage: "https://i.pinimg.com/736x/95/a7/fc/95a7fc582625d9c6449fd3c04781a89a.jpg"
  },
  {
    title: "Ingredientes",
    subtitle: "Esenciales para cocina y presentación.",
    className: "col-span-2 sm:col-span-2 sm:row-span-3",
    bgImage: "https://i.pinimg.com/736x/29/37/0e/29370e86af75485d4f33644b68e040d4.jpg",
  },

  {
    title: "Dulces",
    subtitle: "Delicias de chocolate y derivados del café.",
    className: "col-span-2 sm:col-span-2 sm:row-span-3",
    bgImage: "https://i.pinimg.com/736x/34/c2/e8/34c2e84935f6be74625c23cdd306daab.jpg",
  },

];


const CategoryHighlights: React.FC = () => (
  <section id="categorias" className="flex flex-col w-full items-center md:py-28 justify-center py-28 sm:p-2 md:p-3"
    data-aos="fade-up"
    data-aos-delay="200"
    data-aos-duration="500"
  >
    <div className="mb-10">
      <h2 className="text-2xl md:text-5xl text-center font-bold text-primary leading-tight mb-2"> Categorías</h2>
      <p className="text-[#939393] text-center text-lg">Explora nuestras variedad de categorías de productos.</p>
    </div>
    <div className="grid w-full max-w-6xl gap-3 sm:gap-4 md:gap-6 grid-cols-2 sm:grid-cols-3 grid-rows-6 sm:grid-rows-3 auto-rows-[90px] sm:auto-rows-[100px] p-3 md:p-3">
      {CATEGORY_CARDS.map((cat, idx) => (
        <CategoryCard
          key={idx}
          title={cat.title}
          subtitle={cat.subtitle}
          className={cat.className}
          bgImage={cat.bgImage}
        />
      ))}
    </div>
  </section>
);

export default CategoryHighlights;
