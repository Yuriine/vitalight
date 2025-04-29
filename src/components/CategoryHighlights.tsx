import React from "react";

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
  <div
    className={`relative rounded-xl overflow-hidden shadow-xl group flex flex-col justify-end min-h-[200px] ${className}`}
    tabIndex={0}
    aria-label={title}
  >
    {/* Imagen de fondo */}
    <img
      src={bgImage}
      alt={title}
      className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
      draggable={false}
    />

    {/* Contenido abajo izquierda */}
    <div className="relative z-10 md:p-4 px-4 py-2 mt-auto flex flex-col gap-2 backdrop-blur-md">
      <h3 className="text-white text-xl font-bold drop-shadow-lg mb-0">{title}</h3>
      <p className="text-white text-sm drop-shadow-lg mb-0 hidden md:block">{subtitle}</p>

    </div>
  </div>
);



const CATEGORY_CARDS = [
  {
    title: "Aceites y Vinagres",
    subtitle: "Gourmet y saludables para tu cocina.",
    className: "col-span-2 sm:col-span-2 sm:row-span-6",
    bgImage: "https://images.unsplash.com/photo-1628268909461-ec1eec52a74e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Untables",
    subtitle: "Sabores naturales para untar y disfrutar.",
    className: "col-span-2 sm:col-span-1 sm:row-span-6",
    bgImage: "https://images.pexels.com/photos/5419208/pexels-photo-5419208.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Cereales y Snacks",
    subtitle: "Desayunos y antojos nutritivos.",
    className: "col-span-2 sm:col-span-1 sm:row-span-6",
    bgImage: "https://images.pexels.com/photos/596133/pexels-photo-596133.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
  },
  {
    title: "Ingredientes",
    subtitle: "Esenciales para cocina y presentación.",
    className: "col-span-2 sm:col-span-2 sm:row-span-3",
    bgImage: "https://images.pexels.com/photos/1295572/pexels-photo-1295572.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
  },

  {
    title: "Chocolates y Bebidas",
    subtitle: "Delicias y bebidas naturales.",
    className: "col-span-2 sm:col-span-2 sm:row-span-3",
    bgImage: "https://images.pexels.com/photos/2067396/pexels-photo-2067396.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
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
    <div className="grid w-full max-w-6xl gap-3 sm:gap-4 md:gap-6 grid-cols-2 sm:grid-cols-3 grid-rows-6 sm:grid-rows-3 auto-rows-[90px] sm:auto-rows-[100px]">
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
