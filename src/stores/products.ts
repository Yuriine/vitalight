import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { supabase } from "../utils/supabase";

export interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  description?: string;
  category: string;
}

interface ProductsState {
  products: Product[];
  isLoading: boolean;
  error: string | null;
  fetchProducts: () => Promise<void>;
  activeCategory: string | null;
  setActiveCategory: (category: string | null) => void;
  getProductsByCategoryName: (category: string) => Product[];
}

export const useProductsStore = create<ProductsState>()(
  devtools((set, get) => ({
    products: [],
    isLoading: false,
    error: null,
    activeCategory: null,
    setActiveCategory: (category: string | null) => set({ activeCategory: category }),
    getProductsByCategoryName: (category: string) => {
      // Aquí se asume que cada producto tiene un campo 'category' (ajustar si es diferente)
      return get().products.filter((p) => p.category?.toLowerCase() === category.toLowerCase());
    },
    fetchProducts: async () => {
      set({ isLoading: true, error: null });
      const { data, error } = await supabase.from("products").select("*");
      if (error) {
        set({ error: error.message, isLoading: false });
        return;
      }
      set({ products: data || [], isLoading: false });
    },
  }))
);

