import React, { useState } from "react";
import { Mail, MapPin, Phone, LucideIcon } from "lucide-react";

// Interfaz para las tarjetas de contacto
interface ContactCardProps {
  icon: LucideIcon;
  title: string;
  content: string;
}

// Componente de tarjeta de contacto
const ContactCard: React.FC<ContactCardProps> = ({ icon: Icon, title, content }) => (
  <div
    className="bg-white/70 rounded-lg p-6 flex flex-col items-center text-center shadow-md w-full md:w-[300px]"
    data-aos="fade-up"
    data-aos-delay="100"
  >
    <div className="rounded-full w-14 h-14 flex items-center justify-center mb-4 bg-white">
      <Icon className="text-primary w-8 h-8" />
    </div>
    <p className="font-medium text-black text-lg mb-1">{title}</p>
    <p className="text-[#253d4e]">{content}</p>
  </div>
);

// Función para formatear el mensaje de WhatsApp
const formatWhatsappMessage = (name: string, email: string, message: string): string => {
  const phoneNumber = "51914019629"; // Número de VitaLight (sin +)
  const formattedMessage = 
    `¡Hola VitaLight!%0A%0A` +
    `Me contacto a través de su formulario web:%0A` +
    `_________________________%0A` +
    `*NOMBRE:* ${name}%0A` +
    `*EMAIL:* ${email}%0A` +
    `*MENSAJE:*%0A${message}%0A` +
    `_________________________%0A` +
    `%0AQuedo atento a su respuesta. Gracias.`;
  
  return `https://wa.me/${phoneNumber}?text=${formattedMessage}`;
};

// Componente principal del formulario de contacto
const ContactForm: React.FC = () => {
  // Estado del formulario
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  // Datos de las tarjetas de contacto
  const contactCards = [
    {
      icon: Mail,
      title: "Nuestro Email",
      content: "kataroldan@hotmail.com"
    },
    {
      icon: MapPin,
      title: "Ubicados en",
      content: "Huancayo, Perú"
    },
    {
      icon: Phone,
      title: "Llámanos",
      content: "+51 904825206"
    }
  ];

  // Manejador para enviar mensaje por WhatsApp
  const handleSendWhatsapp = () => {
    if (name.trim() === "" || email.trim() === "" || message.trim() === "") {
      alert("Por favor completa todos los campos");
      return;
    }
    
    const url = formatWhatsappMessage(name, email, message);
    window.open(url, "_blank");
    
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <section id='contacto' className="w-full py-24 px-4 flex flex-col items-center bg-white">
      <div className="mb-12" data-aos="fade-up">
        <h2 className="text-2xl p-5  md:text-5xl font-bold text-primary text-center mb-2">Contáctanos</h2>
        <p className="text-[#939393] text-center text-lg max-w-xl">Estamos aquí para responder a tus preguntas</p>
      </div>

      {/* Tarjetas de contacto */}
      <div className="flex flex-wrap justify-center gap-6 mb-16 w-full max-w-6xl">
        {contactCards.map((card, index) => (
          <ContactCard
            key={index}
            icon={card.icon}
            title={card.title}
            content={card.content}
          />
        ))}
      </div>

      {/* Formulario de contacto */}
      <div className="card border border-dashed border-base-300 bg-base-100 w-full max-w-2xl" data-aos="fade-up">
        <div className="card-body p-6 md:p-8">
          <h3 className="text-xl font-bold mb-4">Envíanos un mensaje</h3>
          <div className="flex flex-col gap-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <label className="form-control w-full">
                <input 
                  className="input input-bordered rounded-lg w-full" 
                  value={name} 
                  onChange={e => setName(e.target.value)} 
                  placeholder="Nombre completo" 
                />
              </label>
              <label className="form-control w-full">
                <input 
                  className="input input-bordered rounded-lg w-full" 
                  value={email} 
                  onChange={e => setEmail(e.target.value)} 
                  placeholder="Email" 
                  type="email" 
                />
              </label>
            </div>
            <label className="form-control w-full">
              <textarea 
                className="textarea textarea-bordered rounded-lg w-full min-h-[120px]" 
                value={message} 
                onChange={e => setMessage(e.target.value)} 
                placeholder="¿En qué podemos ayudarte?" 
              />
            </label>
            <button
              type="button"
              className="btn bg-primary rounded-lg mt-2"
              onClick={handleSendWhatsapp}
            >
              Enviar Mensaje
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;