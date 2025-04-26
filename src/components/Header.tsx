import React, { useState } from "react";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import { useNavigate } from "react-router";
import { useCartStore } from "../stores/cart";
import { useProductsStore } from "../stores/products";
import { Minus, Plus, ShoppingBag, Trash } from "lucide-react";


const Header: React.FC = () => {
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

  const { items, total } = useCartStore();
  const navigate = useNavigate();
  const { products } = useProductsStore();
  const [search, setSearch] = useState("");
  const [showDropdown, setShowDropdown] = useState(false);
  const searchResults = search.length > 0
    ? products.filter((p: { name: string }) => p.name.toLowerCase().includes(search.toLowerCase()))
    : [];

  return (
    <header className="w-full bg-white shadow flex items-center py-3 px-4 md:px-8 gap-4 md:gap-6">
      <div className="flex items-center gap-2">
        <span className="font-bold text-2xl text-[#3fbb38]">VitaLight</span>
      </div>
      <div className="flex-grow flex items-center relative">
        <input
          className="border rounded-l-lg px-3 py-1 w-full lg:w-80 focus:outline-none text-sm md:text-base"
          placeholder="Buscar producto..."
          value={search}
          onChange={e => { setSearch(e.target.value); setShowDropdown(true); }}
          onFocus={() => setShowDropdown(true)}
          onBlur={() => setTimeout(() => setShowDropdown(false), 120)}
          aria-label="Buscar producto"
        />
        <button className="bg-[#3fbb38] text-white px-4 py-1 rounded-r-lg text-xs md:text-base" aria-label="Buscar">
          Buscar
        </button>
        {showDropdown && searchResults.length > 0 && (
          <ul
            className="absolute z-20 top-full left-0 w-full bg-white border rounded shadow-lg max-h-60 overflow-y-auto animate-fade-in"
            data-aos="fade-down"
          >
            {searchResults.map((prod: { id: number; name: string; image: string; price: number }) => (
              <li
                key={prod.id}
                className="px-4 py-2 hover:bg-[#eaf8e5] cursor-pointer flex items-center gap-2"
                onMouseDown={() => { navigate(`/products/${prod.id}`); setShowDropdown(false); setSearch(""); }}
                tabIndex={0}
                aria-label={prod.name}
              >
                <img src={prod.image} alt={prod.name} className="w-8 h-8 object-cover rounded" />


                <span className="truncate">{prod.name}</span>

                <span className="ml-auto text-xs text-[#3fbb38] font-semibold">${prod.price.toFixed(2)}</span>
              </li>
            ))}
          </ul>
        )}
      </div>
      <div className="flex gap-4 items-center">
        <button
          className="flex items-center text-[#3fbb38] focus:outline-none relative"
          type="button"
          aria-label="Ver carrito"
          onClick={() => {
            if (items.length > 0) setDrawerOpen(true);
          }}
        >
          <ShoppingBag className="w-8 h-8" />
          {items.length > 0 && (
            <span className="absolute top-0 right-0 bg-[#3fbb38] text-white rounded-full px-1 text-xs">{items.length}</span>
          )}
        </button>
      </div>
      <Drawer
        open={isDrawerOpen}
        onClose={() => setDrawerOpen(false)}
        direction="right"
        size={350}
        className="p-0"
      >
        <div className="flex flex-col h-full">
          <div className="flex justify-between items-center p-4 border-b">
            <span className="text-xl font-bold text-[#3fbb38]">Tu Carrito</span>
            <button onClick={() => setDrawerOpen(false)} aria-label="Cerrar carrito" className="text-gray-500 hover:text-red-500 text-2xl">×</button>
          </div>
          <div className="flex-1 overflow-y-auto p-4 flex flex-col gap-4">
            {items.length === 0 ? (
              <div className="text-gray-500 text-center">Tu carrito está vacío.</div>
            ) : (
              items.map(item => (
                <div key={item.id} className="flex gap-3 border-b pb-4 pt-2 last:border-b-0 items-center">
                  <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded" />
                  <div className="flex-1 flex flex-col justify-between min-w-0 items-center">
                    <div className="flex flex-col min-w-0">
                      <span className="font-semibold text-[15px] text-[#222] leading-tight truncate">{item.name}</span>
                      <span>150 mll</span>
                    </div>
                    <div className="flex items-center gap-2 mt-2">
                      <div className="flex items-center bg-gray-100 rounded-lg border border-gray-300 px-1">
                        <button
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-[#3fbb38] disabled:opacity-40"
                          aria-label={`Disminuir cantidad de ${item.name}`}
                          onClick={() => {
                            if (item.quantity > 1) {
                              useCartStore.getState().updateQuantity(item.id, item.quantity - 1);
                            }
                          }}
                          disabled={item.quantity <= 1}
                          tabIndex={0}
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="">{item.quantity}</span>
                        <button
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:text-[#3fbb38]"
                          aria-label={`Aumentar cantidad de ${item.name}`}
                          onClick={() => useCartStore.getState().updateQuantity(item.id, item.quantity + 1)}
                          tabIndex={0}
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                      <button
                        className="btn btn-ghost btn-sm"
                        aria-label={`Eliminar ${item.name} del carrito`}
                        onClick={() => useCartStore.getState().removeFromCart(item.id)}
                        tabIndex={0}
                      >
                        <Trash className="w-4 h-4" color="red" />
                      </button>
                    </div>
                  </div>
                  <div className="flex flex-col items-end min-w-[70px]">
                    <span className="font-bold text-[15px] text-[#222]">${item.price.toFixed(2)}</span>
                  </div>
                </div>
              ))
            )}
          </div>
          <div className="p-4 border-t flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="font-semibold">Total</span>
              <span className="font-bold text-lg text-[#3fbb38]">${total.toFixed(2)}</span>
            </div>
            <button
              className="bg-[#3fbb38] text-white font-semibold rounded-lg py-3 px-4 hover:bg-[#34a32f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3fbb38]"
              onClick={() => {
                setDrawerOpen(false);
                navigate("/cart");
              }}
              disabled={items.length === 0}
            >
              Proceder con la compra
            </button>
          </div>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
