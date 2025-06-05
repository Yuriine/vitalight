import React from "react";
import { MapPinned, Store, Leaf, LucideIcon } from "lucide-react";

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  animation: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ icon: Icon, title, description, animation }) => (
  <div
    className="bg-white/50 rounded-lg p-8 w-full md:w-[340px] flex flex-col items-center text-center shadow-md"
    data-aos={animation}
    data-aos-delay="200"
    data-aos-duration="500"
  >
    <div className="bg-white rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-4">
      <Icon className="text-primary w-8 h-8" />
    </div>
    <p className="font-ligth text-black text-xl mb-2">{title}</p>
    <p className="text-sm text-[#253d4e] ">{description}</p>
  </div>
);

const Features: React.FC = () => {
  const featuresData = [
    {
      icon: Store,
      title: "Productos 100% Naturales",
      description: "\"Ofrecemos alimentos orgánicos cultivados sin pesticidas ni químicos dañinos. Priorizamos tu salud y el cuidado del medio ambiente.\"",
      animation: "fade-right"
    },
    {
      icon: Leaf,
      title: "Energía Fitness",
      description: "\"Complementos nutricionales que potencian tu rendimiento físico y aceleran tu recuperación. Elaborados con ingredientes de la más alta calidad.\"",
      animation: "fade-up"
    },
    {
      icon: MapPinned,
      title: "Envíos a todo el Perú",
      description: "\"Entregamos nuestros productos a cualquier rincón del país. Rápido, seguro y confiable desde tu pedido hasta tu puerta.\"",
      animation: "fade-down"
    }
  ];

  return (
    <section 
      className="w-full flex flex-wrap justify-center gap-6 px-4 py-40 relative bg-fixed bg-center bg-cover"
      style={{
        backgroundImage: "url('https://images.unsplash.com/photo-1483137140003-ae073b395549?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')"
      }}
    >
      <div className="absolute inset-0 bg-black/30" />
      <div className="relative z-10 flex flex-wrap justify-center gap-6 w-full">
        {featuresData.map((feature, index) => (
          <FeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
            animation={feature.animation}
          />
        ))}
      </div>
    </section>
  );
};

export default Features;
