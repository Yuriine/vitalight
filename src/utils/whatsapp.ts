interface WhatsappOrderParams {
  name: string;
  phone: string;
  address: string;
  email: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  total: number;
}

/**
 * Genera un link de WhatsApp con el mensaje de pedido para VitaLight
 */
export function formatWhatsappOrder({ name, phone, address, email, items, total }: WhatsappOrderParams): string {
  const phoneNumber = "51914019629"; // Cambia por el número oficial VitaLight (sin +, incluye código país)
  const productLines = items
    .map(
      (item) =>
        `• ${item.name} x${item.quantity} - $${(item.price * item.quantity).toFixed(2)}`
    )
    .join("%0A");
  const message =
    `¡Hola VitaLight!%0A%0A` +
    `Quiero realizar un pedido:%0A` +
    `------------------------%0A` +
    `${productLines}%0A` +
    `------------------------%0A` +
    `Total: $${total.toFixed(2)}%0A%0A` +
    `Datos de entrega:%0A` +
    `Nombre: ${name}%0A` +
    `Teléfono: ${phone}%0A` +
    `Dirección: ${address}%0A` +
    `Email: ${email}%0A%0A` +
    `¡Gracias! Espero su confirmación.`;
  return `https://wa.me/${phoneNumber}?text=${message}`;
}