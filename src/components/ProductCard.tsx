import type React from 'react';


interface ProductCardProps {
  name: string;
  price: string;
  image: string;
  sale?: boolean;
  bgColorClass?: string; // Tailwind class for pastel BG
}

const ProductCard: React.FC<ProductCardProps> = ({
  name,
  price,
  image,
  sale = false,
  bgColorClass = 'bg-mint-pastel', // mint pastel by default
}) => {
  return (
    <div
      className={`relative ${bgColorClass} rounded-xl border border-mint-pastel shadow-sm hover:shadow-lg transition p-5 flex flex-col items-center group`}
    >
      {sale && (
        <span className="absolute top-2 right-2 bg-pink-pastel text-xs text-[#3fbb38] px-2 py-0.5 rounded-full font-semibold border border-mint-pastel">Sale</span>
      )}
      <div className="flex items-center justify-center w-24 h-24 rounded-lg bg-white/50 mb-4 overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-contain w-20 h-20 group-hover:scale-105 transition-transform"
        />
      </div>
      <span className="font-bold text-[#253d4e] mb-0.5 text-lg text-center">{name}</span>
      <span className="text-green-700 font-semibold text-base mb-2">{price}</span>
      <button className="mt-auto bg-mint-pastel border border-green-400 text-green-700 font-semibold px-4 py-1 rounded-full text-sm shadow hover:bg-white/80 transition">Add to cart</button>
    </div>
  );
};

export default ProductCard;
