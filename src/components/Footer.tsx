import type React from 'react';
import Logo from "../assets/logo.png";
import { Phone } from 'lucide-react';
import { scrollToSection } from '../utils/scrollAnimation';

const Footer: React.FC = () => {
  // Función para manejar la navegación con animación de scroll
  const handleNavClick = (id: string, e: React.MouseEvent) => {
    e.preventDefault();
    scrollToSection(id);
  };

  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-10 pb-6 px-4 mt-10 text-[#253d4e]">
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 items-start">
        {/* Logo y contacto */}
        <div className="flex flex-col items-center md:items-start mb-10 md:mb-0 col-span-1">
          <img src={Logo} alt="Logo" className="w-28 h-auto mb-2" />
          <span className="text-xl tracking-wide text-green-700 font-bold">VitaLight</span>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <Phone color='green' size={18} />
              <span className="text-sm">901 641 252</span>
            </div>

          </div>
        </div>

        {/* Navegación del sitio */}
        <div className="col-span-1">
          <h4 className="font-semibold mb-2">Navegación</h4>
          <ul className="text-sm space-y-4 mt-6">
            <li><a href="#inicio" className="hover:underline" onClick={(e) => handleNavClick('inicio', e)}>Inicio</a></li>
            <li><a href="#acerca" className="hover:underline" onClick={(e) => handleNavClick('acerca', e)}>Acerca de</a></li>
            <li><a href="/productos" className="hover:underline">Productos</a></li>
            <li><a href="#categorias" className="hover:underline" onClick={(e) => handleNavClick('categorias', e)}>Categorías</a></li>
          </ul>
        </div>

        {/* Redes sociales */}
        <div className="col-span-1 flex flex-col items-start gap-2">
          <h4 className="font-semibold mb-2">Redes Sociales</h4>
          <div className="flex gap-3">
            <a href="#" aria-label="Facebook" className="hover:opacity-70">
              <img src="https://img.icons8.com/?size=100&id=118466&format=png&color=12B886" className="w-6 h-6" />
            </a>
            <a href="#" aria-label="Instagram" className="hover:opacity-70">
              <img src="https://img.icons8.com/?size=100&id=32292&format=png&color=12B886" className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>
      <p className="text-xs text-center text-green-700 mt-16 opacity-80">© 2025 VitaLight. Todos los derechos reservados.</p>
      <p className="text-xs text-center text-green-700 mt-16 opacity-80">Sitio desarrollado por <a href="https://grobles.framer.website" target="_blank" rel="noopener noreferrer" className='underline text-black'>Grobles</a>.</p>
    </footer>
  );
};

export default Footer;
