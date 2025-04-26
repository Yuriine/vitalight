import React, { useEffect } from "react";
import { useProductsStore } from "../stores/products";
import { useCartStore } from "../stores/cart";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";

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
        <h2 className="text-2xl md:text-5xl font-bold text-primary text-center mb-2">Nuestros Productos</h2>
        <p className="text-gray-400 text-center text-lg max-w-xl">Naturalmente saludable, para tu mejor versión</p>
      </div>
      {/* Tabs de categorías (no funcionales aún) */}
      <div className="flex flex-wrap gap-2 md:gap-4 mb-8 justify-center">
        {['Mantequillas', 'Granolas', 'Aceites & Vinagres', 'Snacks', 'Semillas'].map((cat, idx) => (
          <React.Fragment key={cat}>
            <button
              className={`font-semibold px-2 py-1 rounded transition-colors focus:outline-none focus:ring-2 focus:ring-primary text-[#253d4e] hover:text-primary ${activeCategory === cat ? 'bg-primary/20 text-primary font-bold' : ''}`}
              // onClick={() => setActiveCategory(cat)} // Si tienes handler
              tabIndex={0}
            >
              {cat}
            </button>
            {idx < 4 && <span className="text-gray-300">|</span>}
          </React.Fragment>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 w-full max-w-6xl">
        {isLoading ? (
          <div className="col-span-full text-center text-lg">Cargando productos...</div>
        ) : error ? (
          <div className="col-span-full text-center text-primary">Error: {error}</div>
        ) : filteredProducts.length === 0 ? (
          <div className="col-span-full text-center text-[#253d4e] text-lg">No hay productos en esta categoría.</div>
        ) : (
          filteredProducts.map((product) => (
            <div key={product.id} className="bg-white rounded-2xl shadow flex flex-col items-center p-6 relative group" data-aos="fade-up">
              {/* Precio en círculo verde pastel */}
              <span className="absolute -left-3 -top-3 -rotate-12 bg-primary  border border-primary rounded-full px-4 py-1 text-base font-bold shadow-md">
                ${product.price.toFixed(2)}
              </span>
              {/* Imagen grande centrada */}
              <img src={product.image} alt={product.name} className="w-36 h-36 object-contain rounded-xl mb-4 mt-6 group-hover:scale-105 transition-transform duration-200" />
              {/* Nombre del producto */}
              <span className="font-bold text-[#253d4e] text-lg text-center mb-2">{product.name}</span>
              {/* Botón Agregar */}
              <button
                className="flex items-center justify-center gap-2 bg-primary text-white px-6 py-2 rounded-full font-semibold mt-2 hover:bg-primary/90 transition-colors text-base shadow-lg"
                onClick={() => { addToCart(product); toast.success('Producto agregado al carrito'); }}
                aria-label={`Agregar ${product.name} al carrito`}
              >
                Agregar
                <ShoppingCart className="w-6 h-6 ml-1" />
              </button>
            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProductTabs;
