import { Menu, ShoppingBag, TrashIcon, X } from "lucide-react";
import React, { useState } from "react";
import { Link, useNavigate, useLocation } from "react-router";
import Logo from "../assets/logo.png";
import { useCartStore } from "../stores/cart";
import { scrollToSection } from "../utils/scrollAnimation";

const NAV_LINKS = [
  { label: "Inicio", id: "inicio" },
  { label: "Productos", id: "/productos" },
  { label: "Acerca de", id: "acerca" },
  { label: "Categorías", id: "categorias" },
  { label: "Contacto", id: "contacto" },
];


const Header: React.FC = () => {
  const [isDrawerOpen, setDrawerOpen] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  React.useEffect(() => {
    if (isDrawerOpen) {
      setCartVisible(false);
      requestAnimationFrame(() => setCartVisible(true));
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
    return () => {
      document.body.classList.remove("overflow-hidden");
    };
  }, [isDrawerOpen]);

  const handleCartClose = () => {
    setCartVisible(false);
    setTimeout(() => setDrawerOpen(false), 300);
  };

  const { items, removeFromCart } = useCartStore();

  const handleNavClick = (id: string) => {
    if (isHomePage) {
      scrollToSection(id);
    } else {
      navigate(`/#${id}`);
    }
  };

  // Cierra el drawer móvil y navega a la sección
  const handleMobileNavClick = (id: string) => {
    const drawer = document.getElementById('my-drawer') as HTMLInputElement | null;
    if (drawer) drawer.checked = false;
    
    if (isHomePage) {
      // Si estamos en la página principal, solo hacemos scroll
      scrollToSection(id);
    } else {
      // Si estamos en otra página, navegamos a la página principal con un hash
      navigate(`/#${id}`);
    }
  };

  const total = items.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0
  );

  return (
    <div>
      <input id="my-drawer" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content">
        <header className="fixed top-0 left-0 w-full z-50 bg-white shadow flex items-center justify-between py-3 px-4 md:px-8 gap-4 md:gap-6">
          <div className="flex justify-between w-full items-center gap-2">
            {/* Burger menu for mobile */}
            <label
              htmlFor="my-drawer"
              className="md:hidden mr-2 p-2 rounded focus:outline-none focus:ring-2 focus:ring-primary drawer-button"
            >
              <Menu className="w-7 h-7 text-primary" />
            </label>
            <img src={Logo} alt="Logo" className="w-14 h-14 md:w-20 md:h-20 " />

            <div className="hidden md:flex gap-4 items-center">
              {NAV_LINKS.map((link) => (
                link.id.startsWith('/') ? (
                  <Link
                    key={link.label}
                    className="btn btn-neutral btn-ghost"
                    to={link.id}
                    state={{ category: "Untables" }}
                    aria-label={link.label}
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    key={link.label}
                    className="btn btn-neutral btn-ghost"
                    href={isHomePage ? `/#${link.id}` : `/#${link.id}`}
                    onClick={(e) => {
                      e.preventDefault();
                      handleNavClick(link.id);
                    }}
                    aria-label={link.label}
                  >
                    {link.label}
                  </a>
                )
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
        </header>

        {/* Cart Side Panel (only mounted when open) */}
        {isDrawerOpen && (
          <div className="fixed inset-0 z-[60]">
            {/* Overlay */}
            <div
              className="fixed inset-0 bg-black bg-opacity-40 transition-opacity duration-300 opacity-100 pointer-events-auto"
              onClick={handleCartClose}
              aria-label="Cerrar carrito"
              tabIndex={-1}
            />
            {/* Cart Panel */}
            <aside
              className={`ml-auto w-full max-w-md bg-white h-full shadow-xl flex flex-col fixed right-0 top-0 z-100 transition-all duration-300 ${cartVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}
              tabIndex={0}
              aria-label="Carrito de compras"
              role="dialog"
            >
              <button
                onClick={handleCartClose}
                aria-label="Cerrar carrito"
                className="btn btn-ghost absolute top-4 right-4 z-10"
                tabIndex={0}
              >
                <X className="w-7 h-7" />
              </button>
              <div className="flex justify-between items-center p-4 border-b">
                <span className="text-xl font-bold text-primary">Tu Carrito</span>
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
                          <span className="font-semibold leading-tight truncate text-sm md:text-lg text-[#222]">{item.name}</span>
                          <span className="text-accent text-xs md:text-sm">{item.presentation}</span>
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
              <div className="p-4 border-t flex flex-col gap-3 pb-24">
                <div className="flex justify-between items-center">
                  <span className="font-semibold text-[#222]">Total</span>
                  <span className="font-bold text-lg text-[#222]">S/. {total.toFixed(2)}</span>
                </div>
                <button
                  className="btn btn-success py-2 rounded-lg text-[#222]"
                  onClick={() => {
                    setDrawerOpen(false);
                    navigate("/cart");
                  }}
                  disabled={items.length === 0}
                >
                  Ver más detalles
                </button>
              </div>
            </aside>
          </div>
        )}
      </div>
      <div className="drawer-side z-50">
        <label htmlFor="my-drawer" aria-label="close sidebar" className="drawer-overlay"></label>
        {/* Mobile drawer close button */}
        <label
          htmlFor="my-drawer"
          className="btn btn-ghost absolute top-4 right-32 z-10"
          aria-label="Cerrar menú"
          tabIndex={0}
        >
          <X className="w-7 h-7" />
        </label>
        <ul className="menu bg-base-200 text-base-content min-h-full w-64 p-4 ">

          <img src={Logo} alt="Logo" className="w-14 h-14 md:w-20 md:h-20 " />
          <li className="mb-4 font-bold text-2xl text-primary">VitaLight</li>
          {NAV_LINKS.map((link) => (
            <li key={link.label}>
              {link.id.startsWith('/') ? (
                <Link
                  className="text-primary text-lg font-semibold hover:bg-[#eaf8e5] focus:outline-none"
                  to={link.id}
                  state={{ category: "Untables" }}
                  onClick={() => {
                    const drawer = document.getElementById('my-drawer') as HTMLInputElement | null;
                    if (drawer) drawer.checked = false;
                  }}
                  aria-label={link.label}
                >
                  {link.label}
                </Link>
              ) : (
                <a
                  className="text-primary text-lg font-semibold hover:bg-[#eaf8e5] focus:outline-none"
                  href={isHomePage ? `/#${link.id}` : `/#${link.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleMobileNavClick(link.id);
                  }}
                  aria-label={link.label}
                >
                  {link.label}
                </a>
              )}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Header;
