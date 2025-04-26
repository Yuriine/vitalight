import React from 'react';

function App() {
  return (
    <div className="bg-[#f8f8f8] min-h-screen w-full font-sans">
      {/* Top Bar */}
      <div className="w-full bg-[#3fbb38] h-7 flex items-center justify-end px-4 text-xs text-white">
        Free Shipping On Orders Over $100
        <div className="ml-auto flex gap-2">
          {/* Social icons placeholder */}
          <span>FB</span><span>TW</span><span>LN</span>
        </div>
      </div>
      {/* Header */}
      <header className="w-full bg-white shadow flex items-center py-3 px-8 gap-6">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <span className="font-bold text-2xl text-[#3fbb38]">hyori</span>
        </div>
        {/* Search */}
        <div className="flex-grow flex items-center">
          <input className="border rounded-l-lg px-3 py-1 w-full lg:w-80 focus:outline-none" placeholder="Search product" />
          <button className="bg-[#3fbb38] text-white px-4 py-1 rounded-r-lg">Search</button>
        </div>
        {/* Icons */}
        <div className="flex gap-4 items-center text-[#3fbb38]">
          <span>👤</span>
          <span>🛒</span>
        </div>
      </header>
      {/* Navigation */}
      <nav className="w-full bg-[#eaf8e5] flex items-center px-8 py-2 gap-4">
        <button className="bg-[#3fbb38] text-white rounded px-4 py-2 font-semibold">CATEGORIES</button>
        <ul className="flex gap-6 text-[#253d4e] font-medium text-sm">
          <li>HOME</li>
          <li>CATALOG</li>
          <li>COLLECTIONS</li>
          <li>BLOG</li>
          <li>PAGES</li>
        </ul>
      </nav>
      {/* Hero Banner */}
      <section className="w-full h-[360px] md:h-[450px] bg-green-700 flex items-center justify-between px-8 py-10 relative overflow-hidden">
        <div className="flex flex-col justify-center z-10 text-white max-w-[400px]">
          <span className="uppercase mb-2 text-sm font-semibold">Sale up to 30% all products</span>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Feel Good Food</h1>
          <button className="bg-white text-green-700 px-6 py-2 rounded-full font-semibold w-max">Shop Now</button>
        </div>
        <div className="hidden md:block absolute right-0 top-1/2 -translate-y-1/2 w-2/3 h-full z-0">
          {/* Watermelon img placeholder */}
          <div className="w-full h-full bg-no-repeat bg-center bg-[url('https://images.unsplash.com/photo-1502741126161-b048400d98b5?auto=format&fit=crop&w=800&q=80')] bg-cover opacity-95 rounded-l-[4rem]" />
        </div>
      </section>
      {/* Categorías Destacadas */}
      <section className="w-full flex flex-wrap justify-center gap-6 px-4 py-8">
        <div className="w-full md:w-[280px] bg-pink-100 rounded-lg p-4 flex flex-col justify-between">
          {/* Meat img placeholder */}
          <img src="https://images.unsplash.com/photo-1551218808-94e220e084d2?auto=format&fit=crop&w=400&q=80" alt="Meat" className="rounded mb-3 h-20 object-cover" />
          <span className="font-bold text-[#253d4e] text-lg">Super Healthy</span>
          <button className="mt-2 bg-[#3fbb38] text-white px-4 py-1 rounded-full text-sm">Shop Now</button>
        </div>
        <div className="w-full md:w-[280px] bg-yellow-100 rounded-lg p-4 flex flex-col justify-between">
          {/* Fruits img placeholder */}
          <img src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=400&q=80" alt="Fruits" className="rounded mb-3 h-20 object-cover" />
          <span className="font-bold text-[#253d4e] text-lg">Fresh Fruits</span>
          <span className="text-xs">Flat 25% Discount</span>
          <button className="mt-2 bg-[#3fbb38] text-white px-4 py-1 rounded-full text-sm">Shop Now</button>
        </div>
        <div className="w-full md:w-[340px] bg-green-100 rounded-lg p-4 flex flex-row items-center justify-between gap-2">
          {/* Vegetables img placeholder */}
          <img src="https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=400&q=80" alt="Vegetables" className="rounded h-20 object-cover" />
          <div className="flex flex-col flex-grow">
            <span className="font-bold text-[#253d4e] text-lg">Fresh Vegetables</span>
            <span className="text-xs">Get 30% Off on Your Order</span>
            <button className="mt-2 bg-[#3fbb38] text-white px-4 py-1 rounded-full text-sm w-max">Shop Now</button>
          </div>
        </div>
        <div className="w-full md:w-[240px] bg-blue-100 rounded-lg p-4 flex flex-col justify-between">
          {/* Organic img placeholder */}
          <img src="https://images.unsplash.com/photo-1465101162946-4377e57745c3?auto=format&fit=crop&w=400&q=80" alt="Organic" className="rounded mb-3 h-20 object-cover" />
          <span className="font-bold text-[#253d4e] text-lg">100% Organic</span>
          <button className="mt-2 bg-[#3fbb38] text-white px-4 py-1 rounded-full text-sm">Shop Now</button>
        </div>
      </section>
      {/* Beneficios */}
      <section className="w-full py-12 px-4 bg-[url('https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80')] bg-cover bg-center flex flex-wrap justify-center gap-6">
        <div className="bg-white/90 rounded-lg p-8 w-full md:w-[340px] flex flex-col items-center text-center shadow-md">
          {/* Icon placeholder */}
          <div className="border-2 border-[#3fbb38] text-[#3fbb38] rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-4">🥝</div>
          <p className="font-bold text-lg mb-2">Choose Fruits</p>
          <p className="text-sm text-gray-700">Lorem ipsum is simply dummy text of the printing and type setting industry.</p>
        </div>
        <div className="bg-white/90 rounded-lg p-8 w-full md:w-[340px] flex flex-col items-center text-center shadow-md">
          <div className="border-2 border-[#3fbb38] text-[#3fbb38] rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-4">📦</div>
          <p className="font-bold text-lg mb-2">Place Your Address</p>
          <p className="text-sm text-gray-700">Lorem ipsum is simply dummy text of the printing and type setting industry.</p>
        </div>
        <div className="bg-white/90 rounded-lg p-8 w-full md:w-[340px] flex flex-col items-center text-center shadow-md">
          <div className="border-2 border-[#3fbb38] text-[#3fbb38] rounded-full w-14 h-14 flex items-center justify-center text-3xl mb-4">🚚</div>
          <p className="font-bold text-lg mb-2">Payment & Delivery</p>
          <p className="text-sm text-gray-700">Lorem ipsum is simply dummy text of the printing and type setting industry.</p>
        </div>
      </section>
      {/* Productos Destacados */}
      <section className="w-full py-12 px-4 flex flex-col items-center bg-white">
        <div className="mb-8">
          <p className="text-green-600 text-xs font-semibold text-center">Our products</p>
          <h2 className="text-2xl md:text-4xl font-bold text-center mb-2">This is the heading</h2>
          <p className="text-[#939393] text-center max-w-xl">Latest Product & New Collection</p>
        </div>
        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8 justify-center">
          <button className="font-semibold text-[#253d4e]">Fruits</button>
          <button className="font-semibold text-[#253d4e]">Butter & Eggs</button>
          <button className="font-semibold text-[#253d4e]">Meats</button>
          <button className="font-semibold text-[#253d4e]">Milk & Cream</button>
          <button className="font-semibold text-[#253d4e]">Vegetables</button>
        </div>
        {/* Product Cards Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-6xl">
          {/* Product card placeholders */}
          <div className="bg-white rounded-lg border shadow hover:shadow-lg transition p-4 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1502741126161-b048400d98b5?auto=format&fit=crop&w=200&q=80" alt="Tomato" className="h-20 object-contain mb-3" />
            <span className="font-bold text-[#253d4e]">Tomato</span>
            <span className="text-green-600 font-medium text-sm">99¢/lb</span>
          </div>
          <div className="bg-white rounded-lg border shadow hover:shadow-lg transition p-4 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1465101178521-c1a9136a1408?auto=format&fit=crop&w=200&q=80" alt="Peppers" className="h-20 object-contain mb-3" />
            <span className="font-bold text-[#253d4e]">Sweet Peppers</span>
            <span className="text-green-600 font-medium text-sm">$1.29/ea</span>
          </div>
          <div className="bg-white rounded-lg border shadow hover:shadow-lg transition p-4 flex flex-col items-center">
            <img src="https://images.unsplash.com/photo-1506806732259-39c2d0268443?auto=format&fit=crop&w=200&q=80" alt="Zucchini" className="h-20 object-contain mb-3" />
            <span className="font-bold text-[#253d4e]">Zucchini</span>
            <span className="text-green-600 font-medium text-sm">79¢/ea</span>
          </div>
          <div className="bg-white rounded-lg border shadow hover:shadow-lg transition p-4 flex flex-col items-center relative">
            <span className="absolute top-2 right-2 bg-orange-500 text-xs text-white px-2 py-0.5 rounded-full">Sale</span>
            <img src="https://images.unsplash.com/photo-1543363136-275001277adb?auto=format&fit=crop&w=200&q=80" alt="Plum" className="h-20 object-contain mb-3" />
            <span className="font-bold text-[#253d4e]">Plum Silho</span>
            <span className="text-green-600 font-medium text-sm">$2.10/ea</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default App;
