import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { Product } from "./products";

export interface CartItem extends Product {
  quantity: number;
}

interface CartState {
  items: CartItem[];
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: number) => void;
  clearCart: () => void;
  updateQuantity: (productId: number, quantity: number) => void;
  total: number;
}

export const useCartStore = create<CartState>()(
  devtools((set, get) => ({
    items: [],
    addToCart: (product, quantity = 1) => {
      set((state) => {
        const existing = state.items.find((item) => item.id === product.id);
        if (existing) {
          return {
            items: state.items.map((item) =>
              item.id === product.id ? { ...item, quantity: item.quantity + quantity } : item
            ),
          };
        }
        return {
          items: [...state.items, { ...product, quantity }],
        };
      });
    },
    removeFromCart: (productId) => {
      set((state) => ({ items: state.items.filter((item) => item.id !== productId) }));
    },
    clearCart: () => set({ items: [] }),
    updateQuantity: (productId, quantity) => {
      set((state) => ({
        items: state.items.map((item) =>
          item.id === productId ? { ...item, quantity } : item
        ),
      }));
    },
    get total() {
      return get().items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    },
  }))
);
