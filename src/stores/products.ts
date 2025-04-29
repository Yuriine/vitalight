import { create } from "zustand";
import { devtools } from "zustand/middleware";
import productsData from "../data/products.json";

export interface Product {
  id: number;
  name: string;
  price: number;
  presentation: string;
  category: string;
  image: string;
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
      return get().products.filter((p) => p.category?.toLowerCase() === category.toLowerCase());
    },
    fetchProducts: async () => {
      try {
        set({ isLoading: true, error: null });
        setTimeout(() => {
          set({ 
            products: productsData, 
            isLoading: false 
          });
        }, 300);
      } catch (error) {
        set({ 
          error: "Error al cargar los productos", 
          isLoading: false 
        });
      }
    },
  }))
);

