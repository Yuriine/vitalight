import React from "react";

const Features: React.FC = () => (
  <section className="w-full flex flex-wrap justify-center gap-6 px-4 py-8 bg-[#eaf8e5]">
    <div className="bg-white/90 rounded-lg p-8 w-full md:w-[340px] flex flex-col items-center text-center shadow-md">
      <div className="border-2 border-[#3fbb38] text-[#3fbb38] rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-4">🍏</div>
      <p className="font-bold text-lg mb-2">100% Natural</p>
      <p className="text-sm text-gray-700">Lorem ipsum is simply dummy text of the printing and type setting industry.</p>
    </div>
    <div className="bg-white/90 rounded-lg p-8 w-full md:w-[340px] flex flex-col items-center text-center shadow-md">
      <div className="border-2 border-[#3fbb38] text-[#3fbb38] rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-4">📦</div>
      <p className="font-bold text-lg mb-2">Energía Fitness</p>
      <p className="text-sm text-gray-700">Lorem ipsum is simply dummy text of the printing and type setting industry.</p>
    </div>
    <div className="bg-white/90 rounded-lg p-8 w-full md:w-[340px] flex flex-col items-center text-center shadow-md">
      <div className="border-2 border-[#3fbb38] text-[#3fbb38] rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-4">🚚</div>
      <p className="font-bold text-lg mb-2">Apoyo Local</p>
      <p className="text-sm text-gray-700">Lorem ipsum is simply dummy text of the printing and type setting industry.</p>
    </div>
  </section>
);

export default Features;
