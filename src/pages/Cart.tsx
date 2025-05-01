import AOS from "aos";
import "aos/dist/aos.css";
import { ChevronLeft, Minus, Plus, Trash } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Background from "../assets/cart-bg.jpg";
import Logo from "../assets/logo.png";
import Footer from "../components/Footer";
import { useCartStore } from "../stores/cart";
import { formatWhatsappOrder } from "../utils/whatsapp";
const Cart: React.FC = () => {
  useEffect(() => {
    AOS.init({ once: true, duration: 700, offset: 80 });
  }, []);
  const { items, removeFromCart } = useCartStore();
  const total = items.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0
  );
  const navigate = useNavigate();


  // Form state
  const [name, setName] = useState("");
  const [address, setAddress] = useState("");

  // WhatsApp handler
  const handleWhatsappOrder = () => {
    const url = formatWhatsappOrder({
      name,
      address,
      items,
      total
    });
    window.open(url, "_blank");
  };

  return (
    <>

      <div
        className="min-h-screen py-10 bg-cover  bg-no-repeat bg-center relative bg-primary"
      >
        <button
          className="btn btn-neutral rounded-lg mx-4 "
          onClick={() => navigate("/")}
          type="button"
        >
          <ChevronLeft /> Seguir comprando
        </button>
        {/* Overlay para mejorar legibilidad */}
        <div className=" z-10 p-4">
          {/* Header llamativo */}
          <div className="flex flex-col md:justify-center items-center gap-3 my-16" data-aos="fade-down">
            <h1 className="text-3xl font-extrabold">Tu Carrito</h1>
            <p className="text-base-content/70 text-sm">Revisa tus productos y finaliza tu compra</p>
          </div>

          <div className="flex flex-col gap-4 md:w-1/2 mx-auto justify-center items-start">
            {/* Formulario */}
            <div className="card border border-dashed border-base-300 bg-base-100 w-full" data-aos="fade-up" data-aos-delay="100">
              <div className="card-body w-full p-6">
                <h2 className="text-xl font-bold mb-4">Datos para tu pedido</h2>
                <form className="flex flex-col gap-4">
                  <div className="flex gap-2 ">
                    <div className="flex flex-col gap-4 w-full">
                      <label className="form-control w-full">
                        <input className="input rounded-lg" value={name} onChange={e => setName(e.target.value)} placeholder="Nombres Completos" />
                      </label>
                      <label className="form-control w-full">
                        <input className="input rounded-lg" value={address} onChange={e => setAddress(e.target.value)} placeholder="Dirección de entrega" />
                      </label>
                    </div>
                    <img src={Logo} alt="logo" className="w-32 h-28 hidden md:block" />
                  </div>
                  <button
                    type="button"
                    className="btn bg-primary rounded-lg"
                    onClick={handleWhatsappOrder}
                  >
                    Enviar Pedido
                  </button>
                </form>
              </div>
            </div>
            {/* Carrito */}
            <div className="card border w-full border-dashed border-base-300 bg-base-100 mb-8" data-aos="fade-up" data-aos-delay="200">
              <div className="card-body p-4 md:p-8">
                <ul className="flex flex-col md:gap-8 ">
                  {items.map((item, idx) => (
                    <li
                      key={item.id}
                      className="flex flex-col md:justify-between md:flex-row gap-4 md:items-center bg-base-200/80 rounded-xl transition"
                      data-aos="zoom-in"
                      data-aos-delay={100 + idx * 50}
                    >
                      <div className="flex items-center gap-2">
                        <div className="avatar">
                          <div className="w-20 h-20 rounded-xl border border-base-300 bg-base-100 md:w-24 md:h-24">
                            <img src="https://laticamp.com/wp-content/uploads/2024/02/tofdos-los-sabores-sin-fondo-1.1-300x300.png" alt={item.name} className="object-cover" />
                          </div>
                        </div>
                        <div className="flex-1 flex flex-col justify-between md:gap-2 min-w-0">
                          <span className="font-bold text-lg truncate">{item.name}</span>
                          <span className="text-accent text-xs md:text-sm">{item.presentation}</span>
                          <div className="flex items-center mt-1 gap-4 justify-between md:justify-start">
                            <span className="badge badge-success badge-soft badge-lg text-base">x{item.quantity}<span className="hidden md:block">unidades</span></span>
                            <span className="font-bold text-base">S/. {(item.price * item.quantity).toFixed(2)}</span>
                          </div>
                        </div>
                      </div>
                      <div className="flex gap-4">
                        <div className="flex items-center gap-2 rounded-lg px-1">
                          <button
                            className="btn btn-sm btn-circle"
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
                          <span className="text-xl">{item.quantity}</span>
                          <button
                            className="btn btn-sm btn-circle"
                            aria-label={`Aumentar cantidad de ${item.name}`}
                            onClick={() => useCartStore.getState().updateQuantity(item.id, item.quantity + 1)}
                            tabIndex={0}
                          >
                            <Plus className="w-4 h-4" />
                          </button>
                        </div>
                        <button className="btn btn-circle btn-error btn-sm" onClick={() => removeFromCart(item.id)} aria-label={`Eliminar ${item.name}`}>
                          <Trash className="w-4 h-4" />
                        </button>
                      </div>
                      <div className="divider md:hidden" />
                    </li>
                  ))}
                </ul>
                {items.length > 0 && (
                  <div className="flex justify-between items-center text-lg font-bold md:divider md:mt-10" data-aos="fade-up" data-aos-delay="350">
                    <span>Total:</span>
                    <span className="text-2xl">S/. {total.toFixed(2)}</span>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );


};

export default Cart;
