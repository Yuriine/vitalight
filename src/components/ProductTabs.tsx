import React, { useEffect, useState } from "react";
import { useProductsStore } from "../stores/products";
import { useCartStore } from "../stores/cart";
import toast from "react-hot-toast";
import { ShoppingCart } from "lucide-react";



const ProductTabs: React.FC = () => {
  const { products, isLoading, error, fetchProducts, setActiveCategory, activeCategory } = useProductsStore();
  const { addToCart } = useCartStore();
  const [categories, setCategories] = useState<string[]>([]);
  const [searchTerm, setSearchTerm] = useState<string>("");


  const handleAddToCart = (product: any) => {

    addToCart(product);
    toast.success('Producto agregado al carrito');

  };




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

  // Filter products by category and search term
  const filteredProducts = products.filter(
    (product) =>
      product.category === activeCategory &&
      (
        product.name.toLowerCase().includes(searchTerm.toLowerCase())

      )
  );

  const formatCategoryName = (category: string) => {
    return category.split(' ').map(word =>
      word.charAt(0).toUpperCase() + word.slice(1)
    ).join(' ');
  };

  return (
    <section id="productos" className="w-full py-28 pt-44 px-4 flex flex-col items-center bg-white">
      <div className="mb-8">
        <h2 className="text-2xl md:text-5xl font-bold text-primary text-center mb-2">Nuestros Productos</h2>
        <p className="text-[#939393] text-center text-lg max-w-xl">Naturalmente saludable, para tu mejor versión</p>
      </div>

      {/* Search Bar */}
      <div className="w-full max-w-xl mb-6 flex items-center">
        <input
          type="search"
          className="input input-bordered w-full rounded-lg focus:outline-none focus:ring-2 focus:ring-mint-pastel transition-all"
          placeholder="Buscar producto..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          aria-label="Buscar productos"
        />
      </div>

      <div role="tablist" className="tabs tabs-border mb-8 tabs-sm md:tab-md">
        {categories.map((category) => (
          <a
            key={category}
            role="tab"
            className={`tab ${activeCategory === category ? 'tab-active text-mint-pastel [--tab-bg:mint-pastel/20] [--tab-border-color:mint-pastel]' : ''}`}
            onClick={() => setActiveCategory(category)}
          >
            {formatCategoryName(category)}
          </a>
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
              <img src="https://laticamp.com/wp-content/uploads/2024/02/tofdos-los-sabores-sin-fondo-1.1-300x300.png" alt={product.name} className="w-64 h-64 rounded mb-4" />
              <div className="flex flex-col items-center justify-center mb-4">
                <span className="font-black text-xl text-[#3fbb38] ml-2">S/. {product.price.toFixed(2)}</span>
                <span className="font-light text-xl">{product.name}</span>
                <span className="text-sm">{product.presentation}</span>
              </div>

              <button
                className="btn btn-success rounded-xl"
                onClick={() => handleAddToCart(product)}
                aria-label={`Agregar ${product.name} al carrito`}
              >
                Agregar
                <ShoppingCart size={18} />
              </button>

            </div>
          ))
        )}
      </div>
    </section>
  );
};

export default ProductTabs;