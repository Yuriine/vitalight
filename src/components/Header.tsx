import { Menu, ShoppingBag, TrashIcon, X } from "lucide-react";
import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useNavigate } from "react-router";
import Logo from "../assets/logo.png";
import { useCartStore } from "../stores/cart";

const NAV_LINKS = [
  { label: "Inicio", id: "inicio" },
  { label: "Productos", id: "productos" },
  { label: "Acerca de", id: "acerca" },
  { label: "Categorías", id: "categorias" },
  { label: "Contacto", id: "contacto" },
];


const Header: React.FC = () => {
  const [isNavDrawerOpen, setNavDrawerOpen] = useState(false);
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  React.useEffect(() => {
    if (isDrawerOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDrawerOpen]);

  const { items, removeFromCart } = useCartStore();

  //**Esta función agrega la animación de scrool */
  const handleNavClick = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      // Cerrar el drawer si está abierto
      setNavDrawerOpen(false);

      const headerOffset = 80;
      const sectionPosition = section.getBoundingClientRect().top;
      const offsetPosition = sectionPosition + window.pageYOffset - headerOffset;
      const startPosition = window.pageYOffset;
      const distance = offsetPosition - startPosition;

      const duration = 800;
      let start: number | null = null;

      const animateScroll = (timestamp: number) => {
        if (!start) start = timestamp;
        const progress = timestamp - start;
        const percentage = Math.min(progress / duration, 1);

        const easing = (t: number) => t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;

        const position = startPosition + distance * easing(percentage);

        window.scrollTo(0, position);

        if (progress < duration) {
          requestAnimationFrame(animateScroll);
        }
      };

      requestAnimationFrame(animateScroll);
    }
  };

  const total = items.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0
  );
  const navigate = useNavigate();

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-50 bg-white shadow flex items-center justify-between py-3 px-4 md:px-8 gap-4 md:gap-6">
        <div className="flex justify-between w-full items-center gap-2">
          {/* Burger menu for mobile */}
          <button
            className="md:hidden mr-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary"
            aria-label="Abrir menú de navegación"
            onClick={() => setNavDrawerOpen(true)}
          >
            <Menu className="w-7 h-7 text-primary" />
          </button>
          <img src={Logo} alt="Logo" className="w-14 h-14 md:w-20 md:h-20 " />

          <div className="hidden md:flex gap-4 items-center">
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                className="flex items-center text-[#253d4e] focus:outline-none relative btn btn-link"
                type="button"
                aria-label={link.label}
                onClick={() => handleNavClick(link.id)}
              >
                {link.label}
              </button>
            ))}
          </div>
          <button
            className="flex items-center text-primary focus:outline-none relative"
            type="button"
            aria-label="Ver carrito"
            onClick={() => setDrawerOpen(true)}
          >
            <ShoppingBag className="w-8 h-8 text-primary" />
            {items.length > 0 && (
              <span className="absolute top-0 right-0 bg-green-500 text-white rounded-full px-1 text-xs">{items.length}</span>
            )}
          </button>
        </div>
        {/* Desktop nav links */}



        {/* Drawer de navegación móvil */}
        <Drawer
          open={isNavDrawerOpen}
          onClose={() => setNavDrawerOpen(false)}
          direction="left"
          size={240}
          className="p-0 md:hidden"
        >
          <nav className="flex flex-col h-full bg-white pt-4">
            <div className="flex justify-between items-center pl-4">
              <div>
                <span className="font-bold text-2xl text-primary">VitaLight</span>
              </div>

              <button
                className="self-end mr-4 mb-4 text-gray-500 hover:text-primary text-2xl"
                onClick={() => setNavDrawerOpen(false)}
                aria-label="Cerrar menú de navegación"
              >
                <X className="w-7 h-7 text-primary" />
              </button>
            </div>
            {NAV_LINKS.map((link) => (
              <button
                key={link.label}
                className="px-6 py-3 text-left text-primary text-lg font-semibold hover:bg-[#eaf8e5] focus:outline-none"
                onClick={() => {
                  setNavDrawerOpen(false);
                  handleNavClick(link.id);
                }}
                aria-label={link.label}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </Drawer>
      </header>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        direction="right"
        size={350}
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-bold text-primary">Tu Carrito</span>
            <button onClick={() => setDrawerOpen(false)} aria-label="Cerrar carrito" className="text-gray-500 hover:text-red-500 text-2xl"><X className="w-7 h-7 text-primary" /></button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {items.length === 0 ? (
              <div className="text-gray-500 text-center">Tu carrito está vacío.</div>
            ) : (
              items.map(item => (
                <div key={item.id} className="flex gap-3 border-b pb-4 pt-2 last:border-b-0 items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1 flex flex-col justify-between min-w-0 ">
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold leading-tight truncate text-sm md:text-lg">{item.name}</span>
                      <span className="text-accent text-xs md:text-sm">150 mll</span>
                    </div>
                    <span className="font-bold text-lg text-[#222]">S/. {item.price.toFixed(2)}</span>
                  </div>

                  <button className="btn btn-circle btn-error" onClick={() => removeFromCart(item.id)}>
                    <TrashIcon className="w-4 h-4" />
                  </button>


                </div>
              ))
            )}
          </div>
          <div className="p-4 border-t flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-lg ">S/. {total.toFixed(2)}</span>
            </div>
            <button
              className="btn btn-success rounded-lg"
              onClick={() => {
                setDrawerOpen(false);
                navigate("/cart");
              }}
              disabled={items.length === 0}
            >
              Ver más detalles
            </button>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default Header;
