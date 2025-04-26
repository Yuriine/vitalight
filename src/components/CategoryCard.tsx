import type React from 'react';

interface CategoryCardProps {
  title: string;
  subtitle?: string;
  image: string;
  bgColorClass?: string;
}

const CategoryCard: React.FC<CategoryCardProps> = ({ title, subtitle, image, bgColorClass = 'bg-mint-pastel' }) => (
  <div className={`w-full md:w-[260px] ${bgColorClass} rounded-2xl p-5 flex flex-col justify-between shadow-md`}>
    <img src={image} alt={title} className="rounded-lg mb-3 h-20 object-cover" />
    <span className="font-bold text-[#253d4e] text-lg mb-1">{title}</span>
    {subtitle && <span className="text-xs text-[#355149] mb-1 font-medium">{subtitle}</span>}
    <button className="mt-2 bg-white border border-mint-pastel text-green-700 px-4 py-1 rounded-full text-sm font-semibold shadow hover:bg-mint-pastel hover:text-green-900 transition">Shop Now</button>
  </div>
);

export default CategoryCard;
