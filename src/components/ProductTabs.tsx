import React, { useEffect } from "react";
import { useProductsStore } from "../stores/products";
import { useCartStore } from "../stores/cart";
import toast from "react-hot-toast";

const ProductTabs: React.FC = () => {
  const { products, isLoading, error, fetchProducts, activeCategory, getProductsByCategoryName } = useProductsStore();
  const { addToCart } = useCartStore();

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  const filteredProducts = activeCategory
    ? getProductsByCategoryName(activeCategory)
    : products;

  return (
    <section className="w-full py-12 px-4 flex flex-col items-center bg-white">
      <div className="mb-8">
        <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">Nuestros Productos</h2>
        <p className="text-[#939393] text-center max-w-xl">Naturalmente saludable, para tu mejor versión</p>
      </div>
      {/* Tabs de categorías (no funcionales aún) */}
      <div className="flex flex-wrap gap-4 mb-8 justify-center">
        <button className="font-semibold text-[#253d4e]">Mantequillas</button>
        <button className="font-semibold text-[#253d4e]">Granolas</button>
        <button className="font-semibold text-[#253d4e]">Aceites & Vinagres</button>
        <button className="font-semibold text-[#253d4e]">Snacks</button>
        <button className="font-semibold text-[#253d4e]">Semillas</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {isLoading ? (
          <div className="col-span-full text-center text-lg">Cargando productos...</div>
        ) : error ? (
          <div className="col-span-full text-center text-red-500">Error: {error}</div>
        ) : filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-[#253d4e] text-lg">No hay productos en esta categoría.</div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow p-4 flex flex-col items-center" data-aos="fade-up">
              <img src={product.image} alt={product.name} className="w-32 h-32 object-cover rounded mb-4" />
              <span className="font-bold text-[#253d4e] text-center">{product.name}</span>
              <span className="text-green-600 font-medium text-sm mb-2">${product.price.toFixed(2)}</span>
              <button
                className="bg-[#3fbb38] text-white px-4 py-2 rounded-full font-semibold mt-2 hover:bg-[#34a32f] transition-colors"
                onClick={() => { addToCart(product); toast.success('Producto agregado al carrito'); }}
                aria-label={`Agregar ${product.name} al carrito`}
              >
                Agregar al carrito
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProductTabs;
