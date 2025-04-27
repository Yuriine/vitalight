interface WhatsappOrderParams {
  name: string;
  address: string;
  items: Array<{ name: string; quantity: number; price: number }>;
  total: number;
}

/**
 * Genera un link de WhatsApp con el mensaje de pedido para VitaLight
 */
export function formatWhatsappOrder({ name, address, items, total }: WhatsappOrderParams): string {
  const phoneNumber = "51914019629"; // Cambia por el número oficial VitaLight (sin +, incluye código país)
  const productLines = items
    .map(
      (item) =>
        `*•* *${item.name}*  (x${item.quantity})  -  *S/. ${(item.price * item.quantity).toFixed(2)}*`
    )
    .join("%0A");

  const message =
    `¡Hola VitaLight!%0A%0A` +
    `Quisiera hacer un pedido con los siguientes detalles:%0A` +
    `*UBICACIÓN:*%0A${address}%0A` +
    `_________________________%0A` +
    `*CLIENTE:*%0A• ${name}%0A` +
    `*PRODUCTOS SOLICITADOS:*%0A${productLines}%0A` +
    `_________________________%0A` +
    `*PRECIO TOTAL:*  *S/. ${total.toFixed(2)}*%0A` +
    `%0AEspero la confirmación. Gracias.`;
  return `https://wa.me/${phoneNumber}?text=${message}`;
}