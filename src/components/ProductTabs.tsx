import React, { useEffect, useState } from "react";
import { useProductsStore } from "../stores/products";
import { useCartStore } from "../stores/cart";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";

const ProductTabs: React.FC = () => {
  const { products, isLoading, error, fetchProducts, activeCategory, getProductsByCategoryName, setActiveCategory } = useProductsStore();
  const { addToCart } = useCartStore();
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    if (products.length > 0) {
      const uniqueCategories = [...new Set(products.map(product => product.category))];
      setCategories(uniqueCategories);
      
      if (!activeCategory && uniqueCategories.length > 0) {
        setActiveCategory(uniqueCategories[0]);
      }
    }
  }, [products, activeCategory, setActiveCategory]);

  const filteredProducts = activeCategory
    ? getProductsByCategoryName(activeCategory)
    : products;

  const formatCategoryName = (category: string) => {
    return category.split(' ').map(word => 
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <section id="productos" className="w-full py-28 px-4 flex flex-col items-center bg-white">
      <div className="mb-8">
        <h2 className="text-2xl md:text-5xl font-bold text-primary text-center mb-2">Nuestros Productos</h2>
        <p className="text-[#939393] text-center text-lg max-w-xl">Naturalmente saludable, para tu mejor versión</p>
      </div>
      
      {/* Tabs de categorías dinámicas desde db.json */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        {categories.map((category, index) => (
          <React.Fragment key={category}>
            <button 
              className={`font-semibold transition-colors ${activeCategory === category ? 'text-primary font-bold' : 'text-[#253d4e]'}`}
              onClick={() => setActiveCategory(category)}
            >
              {formatCategoryName(category)}
            </button>
            {index < categories.length - 1 && <span className="text-gray-300">|</span>}
          </React.Fragment>
        ))}
      </div>
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full max-w-6xl">
        {isLoading ? (
          <div className="col-span-full text-center text-lg">Cargando productos...</div>
        ) : error ? (
          <div className="col-span-full text-center text-red-500">Error: {error}</div>
        ) : filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-[#253d4e] text-lg">No hay productos en esta categoría.</div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg p-4 flex flex-col items-center relative" data-aos="fade-up">
              <div className="absolute top-6 left-6 transform rotate-[-15deg] rounded-full shadow-lg z-10 w-14 h-14 flex items-center justify-center bg-primary">
                <span className="font-bold text-lg text-white">${product.price.toFixed(2)}</span>
              </div>
              <img src="https://laticamp.com/wp-content/uploads/2024/02/tofdos-los-sabores-sin-fondo-1.1-300x300.png" alt={product.name} className="w-64 h-64 rounded mb-4" />
              <span className="font-light text-xl text-[#253d4e] text-center">{product.name}</span>
              <button
                className="bg-primary text-white px-4 py-2 rounded-xl mt-2 transition-colors flex gap-2 items-center justify-center"
                onClick={() => { addToCart(product); toast.success('Producto agregado al carrito'); }}
                aria-label={`Agregar ${product.name} al carrito`}
              >
                <span className="text-lg font-light">Agregar</span>
                <ShoppingCart className="w-8 h-8" />
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProductTabs;