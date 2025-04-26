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
    {/* Overlay oscuro */}
    <div className="absolute inset-0 bg-black/20 group-hover:bg-black/50 transition-colors duration-300" aria-hidden="true" />

    {/* Contenido abajo izquierda */}
    <div className="relative z-10 p-4 mt-auto flex flex-col gap-2">
      <h3 className="text-white text-xl font-bold drop-shadow-lg mb-0">{title}</h3>
      <p className="text-white text-sm drop-shadow-lg mb-0">{subtitle}</p>

    </div>
  </div>
);

const bgImage = 'https://images.unsplash.com/photo-1743257165143-4d69266c5e4a?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D';

const CATEGORY_CARDS = [
  {
    title: "Mantequilla de Maní",
    subtitle: "Natural, sin azúcar añadida.",
    className: "col-span-1 row-span-3",
    bgImage: "https://plus.unsplash.com/premium_photo-1661696510702-ffc96ecf6b52?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8YWNlaXRlc3xlbnwwfHwwfHx8MA%3D%3D"
  },
  {
    title: "Granola Natural",
    subtitle: "Con frutos secos y semillas.",
    className: "col-span-1 row-span-1",
    bgImage: "https://images.unsplash.com/photo-1698775942492-d2dd399e2670?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
  },
  {
    title: "Aceites & Vinagres",
    subtitle: "Prensados en frío, calidad premium.",
    className: "col-span-2 row-span-2",
    bgImage: "https://images.unsplash.com/photo-1628268909461-ec1eec52a74e?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Snacks Saludables",
    subtitle: "Energía y sabor en cada bocado.",
    className: "col-span-1 row-span-2",
    bgImage: "https://images.unsplash.com/photo-1727233432251-b254881e01a8?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGFjZWl0ZXN8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Semillas",
    subtitle: "Fuente natural de omega-3.",
    className: "col-span-2 row-span-1",
    bgImage: "https://images.unsplash.com/photo-1504708706948-13d6cbba4062?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Frutos Secos",
    subtitle: "Tostados, sin sal añadida.",
    className: "col-span-2 row-span-2",
    bgImage: "https://plus.unsplash.com/premium_photo-1723860017957-601cd6fef533?q=80&w=1471&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Cereales",
    subtitle: "Integrales y nutritivos.",
    className: "col-span-1 row-span-2",
    bgImage: "https://plus.unsplash.com/premium_photo-1723651272031-06caf9ced7e7?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Aceite de Oliva",
    subtitle: "Vegetales y animales, máxima calidad.",
    className: "col-span-1 row-span-2",
    bgImage: "https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?q=80&w=1436&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];

const CategoryHighlights: React.FC = () => (
  <div className="flex w-full items-center justify-center p-1 sm:p-2 md:p-3">
    <div className="grid w-full max-w-5xl gap-6 grid-cols-2 md:grid-cols-4 grid-rows-3 auto-rows-[100px]">
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
  </div>
);

export default CategoryHighlights;
