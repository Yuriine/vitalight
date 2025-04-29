import type React from 'react';
import Logo from "../assets/logo.png";
import { scrollToSection } from "../utils/scrollAnimation";

const Footer: React.FC = () => {
  // Función para manejar la navegación con animación de scroll
  const handleNavClick = (id: string) => {
    // Usar la función de utilidad para hacer scroll
    scrollToSection(id);
  };

  return (
    <footer id="contacto" className="w-full bg-mint-pastel text-[#253d4e] py-10 px-4 border-mint-pastel mt-10">
      <div className="w-full border-t border-gray-300 mb-8"></div>
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <div className="flex items-center gap-2 mb-4 md:mb-0">
          <img src={Logo} alt="Logo" className="w-14 h-14 md:w-20 md:h-20" />
        </div>
        <nav className="flex gap-6 text-sm font-medium flex-col md:flex-row">
          <button onClick={() => handleNavClick('inicio')} className="hover:text-primary">Inicio</button>
          <button onClick={() => handleNavClick('acerca')} className="hover:text-primary">Acerca de</button>
          <button onClick={() => handleNavClick('productos')} className="hover:text-primary">Productos</button>
          <button onClick={() => handleNavClick('categorias')} className="hover:text-primary">Categorías</button>
          <button onClick={() => handleNavClick('contacto')} className="hover:text-primary">Contacto</button>
        </nav>
        <div className="flex gap-4 text-primary">
          <a href="#" aria-label="Facebook" className="hover:text-primary/50">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M17 2H7a5 5 0 0 0-5 5v10a5 5 0 0 0 5 5h5v-7H9v-3h3v-2c0-2.24 1.34-3.5 3.4-3.5.7 0 1.6.07 2.1.14v2.36h-1.3c-.81 0-1 .25-1 1V12h3l-.5 3h-2.5v7h2a5 5 0 0 0 5-5V7a5 5 0 0 0-5-5Z" /></svg>
          </a>
          <a href="#" aria-label="Twitter" className="hover:text-primary/50">
            <svg width="22" height="22" fill="none" viewBox="0 0 24 24"><path fill="currentColor" d="M24 4.56a9.94 9.94 0 0 1-2.83.78A4.93 4.93 0 0 0 23.34 3c-.94.56-1.98.97-3.08 1.2a4.92 4.92 0 0 0-8.39 4.48A13.97 13.97 0 0 1 1.67 3.15a4.92 4.92 0 0 0 1.52 6.57 4.94 4.94 0 0 1-2.23-.61c0 2.15 1.53 3.95 3.7 4.37A4.93 4.93 0 0 1 .96 16.8A9.87 9.87 0 0 0 7.29 18.7c6 0 9.32-5.01 9.32-9.34 0-.14 0-.29-.01-.43A6.88 6.88 0 0 0 24 4.56Z" /></svg>
          </a>
        </div>
      </div>
      <p className="text-xs text-center text-green-700 mt-6 opacity-80">© 2025 VitaLight. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
