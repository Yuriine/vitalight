import React, { useState } from "react";

const Contact: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!name || !email || !message) return;
    setSubmitted(true);
    // Aquí puedes agregar lógica para enviar el formulario
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-[#f8f8f8] px-4">
      <div className="w-full max-w-lg bg-white rounded-2xl shadow-lg p-8">
        <h1 className="text-3xl font-bold text-center mb-2 text-[#3fbb38]">Contáctanos</h1>
        <p className="text-center text-gray-600 mb-8">¿Tienes alguna pregunta? ¡Envíanos un mensaje y te responderemos pronto!</p>
        {submitted ? (
          <div className="text-center text-green-700 font-semibold text-lg py-8">
            ¡Gracias por contactarnos! Pronto nos pondremos en contacto contigo.
          </div>
        ) : (
          <form className="flex flex-col gap-5" onSubmit={handleSubmit} noValidate>
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-[#3fbb38] mb-1">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={name}
                onChange={e => setName(e.target.value)}
                className="w-full border border-[#3fbb38] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3fbb38]"
                placeholder="Tu nombre"
                aria-label="Nombre"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-[#3fbb38] mb-1">
                Email
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={email}
                onChange={e => setEmail(e.target.value)}
                className="w-full border border-[#3fbb38] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3fbb38]"
                placeholder="tucorreo@email.com"
                aria-label="Correo electrónico"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-[#3fbb38] mb-1">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={message}
                onChange={e => setMessage(e.target.value)}
                className="w-full border border-[#3fbb38] rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#3fbb38] resize-none"
                placeholder="¿En qué podemos ayudarte?"
                aria-label="Mensaje"
              />
            </div>
            <button
              type="submit"
              className="bg-primary text-white font-semibold rounded-lg py-2 px-6 mt-2 hover:bg-primary/90 transition-colors focus:outline-none focus:ring-2 focus:ring-[#3fbb38]"
              disabled={!name || !email || !message}
              aria-disabled={!name || !email || !message}
            >
              Enviar mensaje
            </button>
          </form>
        )}
      </div>
    </div>
  );
};

export default Contact;
