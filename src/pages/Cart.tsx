import { Trash } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router";
import bgImage from "../assets/bg.jpg";
import { useCartStore } from "../stores/cart";
import { formatWhatsappOrder } from "../utils/whatsapp";

const Cart: React.FC = () => {
  const { items, removeFromCart, updateQuantity, clearCart } = useCartStore();
  const total = items.reduce(
    (sum, item) => sum + (Number(item.price) || 0) * (Number(item.quantity) || 1),
    0
  );
  const navigate = useNavigate();


  // Form state
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [address, setAddress] = useState("");
  const [email, setEmail] = useState("");

  // WhatsApp handler
  const handleWhatsappOrder = () => {
    const url = formatWhatsappOrder({
      name,
      phone,
      address,
      email,
      items,
      total
    });
    window.open(url, "_blank");
  };

  return (
    <div
      className="min-h-screen py-10 bg-cover bg-center bg-no-repeat relative"
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      {/* Overlay para mejorar legibilidad */}
      <div className="absolute inset-0 bg-base-200/80 pointer-events-none z-0" />
      <div className="relative z-10 max-w-3xl mx-auto px-2 md:px-0">
        {/* Botón seguir comprando */}
        <div className="mb-2 flex">
          <button
            className="btn btn-link"
            onClick={() => navigate("/")}
            type="button"
          >
            &larr; Seguir comprando
          </button>
        </div>
        {/* Header llamativo */}
        <div className="flex items-center gap-3 mb-8">

          <div>
            <h1 className="text-3xl font-extrabold leading-tight">Tu Carrito</h1>
            <p className="text-base-content/70 text-sm">Revisa tus productos y finaliza tu compra</p>
          </div>
        </div>

        {/* Carrito */}
        <div className="card border border-dashed border-base-300  bg-base-100 mb-8">
          <div className="card-body p-6">
            {items.length === 0 ? (
              <div className="alert alert-warning text-center">¡Tu carrito está vacío!</div>
            ) : (
              <ul className="flex flex-col gap-4">
                {items.map(item => (
                  <li key={item.id} className="flex gap-4 items-center bg-base-200/80 rounded-xl p-3  transition border border-base-300">
                    <div className="avatar">
                      <div className="w-16 h-16 rounded-xl border border-base-300 bg-base-100">
                        <img src={item.image} alt={item.name} className="object-cover w-full h-full" />
                      </div>
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex justify-between items-center">
                        <span className="font-bold text-lg truncate">{item.name}</span>
                        <button className="btn btn-circle btn-ghost btn-sm hover:bg-error/10" onClick={() => removeFromCart(item.id)} aria-label={`Eliminar ${item.name}`}>
                          <Trash className="w-5 h-5 text-error" />
                        </button>
                      </div>
                      <div className="flex gap-2 items-center mt-1">
                        <span className="badge badge-outline badge-lg">x{item.quantity}</span>
                        <span className="text-success font-semibold text-base">S/. {(item.price * item.quantity).toFixed(2)}</span>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
            )}
            {items.length > 0 && (
              <>
                <div className="divider" />
                <div className="flex justify-between items-center text-lg font-bold">
                  <span>Total:</span>
                  <span className="text-2xl">S/. {total.toFixed(2)}</span>
                </div>
              </>
            )}
          </div>
        </div>

        {/* Formulario */}
        <div className="card border border-dashed border-base-300  bg-base-100">
          <div className="card-body p-6">
            <h2 className="text-xl font-bold mb-4">Datos para tu pedido</h2>
            <form className="flex flex-col gap-4">
              <label className="form-control w-full">
                <input className="input input-bordered input-lg w-full rounded-lg" value={name} onChange={e => setName(e.target.value)} placeholder="Tu nombre completo" />
              </label>
              <label className="form-control w-full">
                <input className="input input-bordered input-lg w-full rounded-lg" value={phone} onChange={e => setPhone(e.target.value)} placeholder="Tu número de WhatsApp" />
              </label>
              <label className="form-control w-full">
                <input className="input input-bordered input-lg w-full rounded-lg" value={address} onChange={e => setAddress(e.target.value)} placeholder="Dirección de entrega" />
              </label>

              <button
                type="button"
                className="btn btn-success btn-lg w-full mt-2 shadow-md rounded-lg"
                onClick={handleWhatsappOrder}
                disabled={items.length === 0 || !name || !phone || !address || !email}
              >
                Finalizar pedido por WhatsApp
              </button>
              <button
                type="button"
                className="btn btn-ghost btn-lg w-full mt-2 rounded-lg"
                onClick={() => {
                  clearCart();
                  navigate("/");
                }}
                disabled={items.length === 0}
              >
                Vaciar carrito
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[#f8f8f8] flex flex-col items-center py-10 px-4">
      <h1 className="text-3xl font-bold text-[#3fbb38] mb-8">Finaliza tu compra</h1>
      {items.length === 0 ? (
        <div className="text-gray-500 text-lg">Tu carrito está vacío.</div>
      ) : (
        <div className="w-full max-w-2xl bg-white rounded-2xl shadow-lg p-6 flex flex-col gap-6">
          {/* Formulario de compra */}
          <form className="flex flex-col gap-4 mb-6" onSubmit={e => { e.preventDefault(); handleWhatsappOrder(); }}>
            <input
              className="border rounded px-3 py-2 focus:outline-none"
              placeholder="Nombre completo"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
            <input
              className="border rounded px-3 py-2 focus:outline-none"
              placeholder="Teléfono (WhatsApp)"
              value={phone}
              onChange={e => setPhone(e.target.value)}
              required
            />
            <input
              className="border rounded px-3 py-2 focus:outline-none"
              placeholder="Dirección de entrega"
              value={address}
              onChange={e => setAddress(e.target.value)}
              required
            />
            <input
              className="border rounded px-3 py-2 focus:outline-none"
              placeholder="Correo electrónico"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
            <button
              type="submit"
              className="bg-[#3fbb38] text-white font-semibold rounded-lg py-3 px-8 hover:bg-[#34a32f] transition-colors focus:outline-none focus:ring-2 focus:ring-[#3fbb38] mt-2"
            >
              Realizar pedido por WhatsApp
            </button>
          </form>
          {/* Items del carrito */}
          {items.map(item => (
            <div key={item.id} className="flex items-center gap-4 border-b pb-4 last:border-b-0">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg border" />
              <div className="flex-1">
                <div className="font-semibold text-lg text-[#253d4e]">{item.name}</div>
                <div className="text-green-700 font-bold">${item.price.toFixed(2)}</div>
                <div className="text-sm text-gray-500 flex gap-2 items-center">Cantidad:
                  <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))} aria-label="Disminuir cantidad">-</button>
                  <span>{item.quantity}</span>
                  <button className="px-2 py-1 bg-gray-200 rounded" onClick={() => updateQuantity(item.id, item.quantity + 1)} aria-label="Aumentar cantidad">+</button>
                </div>
              </div>
              <div className="font-bold text-xl text-[#3fbb38]">${(item.price * item.quantity).toFixed(2)}</div>
              <button className="ml-2 text-red-500 hover:text-red-700" onClick={() => removeFromCart(item.id)} aria-label="Eliminar producto">✕</button>
            </div>
          ))}
          <div className="flex justify-between items-center pt-4 border-t mt-4">
            <span className="font-semibold text-lg">Total</span>
            <span className="font-bold text-2xl text-[#3fbb38]
            ">${total.toFixed(2)}</span>
          </div>
          <div className="flex gap-4 mt-4">
            <button className="bg-gray-200 text-gray-700 font-semibold rounded-lg py-3 px-8 hover:bg-gray-300 transition-colors" onClick={clearCart}>Vaciar carrito</button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
