import type React from 'react';

interface BenefitCardProps {
  icon: React.ReactNode;
  title: string;
  description: string;
}

const BenefitCard: React.FC<BenefitCardProps> = ({ icon, title, description }) => {
  return (
    <div className="bg-white/80 rounded-2xl p-8 w-full md:w-[340px] flex flex-col items-center text-center shadow-md backdrop-blur-sm">
      <div className="border-2 border-mint-pastel text-green-700 rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-4 bg-mint-pastel">
        {icon}
      </div>
      <p className="font-bold text-lg mb-2 text-[#253d4e]">{title}</p>
      <p className="text-sm text-gray-700">{description}</p>
    </div>
  );
};

export default BenefitCard;
