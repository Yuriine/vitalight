import type React from 'react';
import Logo from "../assets/logo.png";

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-10 pb-6 px-4 mt-10 text-[#253d4e]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-5 gap-8 items-start">
        {/* Logo y contacto */}
        <div className="flex flex-col items-center md:items-start gap-3 col-span-1">
          <img src={Logo} alt="Logo Linea Zero" className="w-28 h-auto mb-2" />
          <span className="text-xs font-medium tracking-wide text-green-700">NON SUCRE</span>
          <div className="mt-4 flex flex-col gap-2">
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-600" aria-hidden="true"><path d="M6.62 10.79a15.053 15.053 0 006.59 6.59l2.2-2.2a1 1 0 011.11-.21c1.21.49 2.53.76 3.88.76a1 1 0 011 1v3.5a1 1 0 01-1 1C5.61 22 2 18.39 2 13.5a1 1 0 011-1h3.5a1 1 0 011 1c0 1.35.27 2.67.76 3.88a1 1 0 01-.21 1.11l-2.2 2.2z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" /></svg>
              <span className="text-sm">992 920 922 | 970 894 066</span>
            </div>
            <div className="flex items-center gap-2">
              <svg viewBox="0 0 24 24" fill="none" className="w-5 h-5 text-green-600" aria-hidden="true"><path d="M4 4h16v16H4V4zm2 2v12h12V6H6zm2 2h8v2H8V8zm0 4h8v2H8v-2z" fill="currentColor" /></svg>
              <span className="text-sm">ventas@lineazeroperu.com</span>
            </div>
          </div>
        </div>
        {/* Atención al cliente */}
        <div className="col-span-1">
          <h4 className="font-semibold mb-2">Atención al cliente</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:underline">Medios de pago</a></li>
            <li><a href="#" className="hover:underline">Cómo comprar</a></li>
            <li><a href="#" className="hover:underline">Políticas de privacidad</a></li>
            <li><a href="#" className="hover:underline">Preguntas frecuentes</a></li>
          </ul>
        </div>
        {/* Navegación del sitio */}
        <div className="col-span-1">
          <h4 className="font-semibold mb-2">Navegación del sitio</h4>
          <ul className="text-sm space-y-1">
            <li><a href="#" className="hover:underline">Inicio</a></li>
            <li><a href="#" className="hover:underline">Sobre nosotros</a></li>
            <li><a href="#" className="hover:underline">Tienda</a></li>
            <li><a href="#" className="hover:underline">Descuentos</a></li>
            <li><a href="#" className="hover:underline">Mi cuenta | Registrarme</a></li>
          </ul>
        </div>
        {/* Tarjetas y libro de reclamaciones */}
        <div className="col-span-1 flex flex-col gap-3">
          <h4 className="font-semibold mb-2">Aceptamos todas las tarjetas</h4>
          <div className="flex gap-2 items-center">
            <img src="https://upload.wikimedia.org/wikipedia/commons/4/41/Visa_Logo.png" alt="Visa" className="h-6 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/04/American_Express_logo_%282018%29.svg" alt="Amex" className="h-6 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/d/d0/Diners_Club_Logo3.svg" alt="Diners" className="h-6 w-auto" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/0e/Mastercard-logo.png" alt="Mastercard" className="h-6 w-auto" />
          </div>
          <h4 className="font-semibold mt-4 mb-2">Libro de reclamaciones</h4>
          <img src="https://cdn-icons-png.flaticon.com/512/2488/2488770.png" alt="Libro de reclamaciones" className="h-12 w-auto" />
        </div>
        {/* Redes sociales */}
        <div className="col-span-1 flex flex-col items-center md:items-end gap-2">
          <h4 className="font-semibold mb-2">Síguenos</h4>
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
      <p className="text-xs text-center text-green-700 mt-8 opacity-80">© 2025 VitaLight. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;
