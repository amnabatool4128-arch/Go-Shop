import React, { useState } from "react";
import ProductList from "./ProductList";
import { GoHeartFill } from "react-icons/go";

const Products = ({ searchTerm, addToCart, addToWishlist, wishlist }) => {
  const categories = ["All", "Men", "Women", "Kids", "New Arrivals", "On Sale"];
  const [activeTab, setActiveTab] = useState("All");

  // Filter products by category & search
  const filteredItems = ProductList.filter((item) => {
    const matchesCategory =
      activeTab === "All" ||
      (activeTab === "New Arrivals" && item.newArrival) ||
      (activeTab === "On Sale" && item.onSale) ||
      activeTab === item.category;

    const matchesSearch = item.name
      .toLowerCase()
      .includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  // Render each product card
  const renderProducts = filteredItems.map((Product) => (
    <div
      key={Product.id}
      className="bg-zinc-100 p-4 sm:p-5 border-[1px] border-zinc-300 rounded-lg flex flex-col"
    >
      {/* Top icons */}
      <div className="flex justify-between items-center mb-3">
        <button
          className={`text-2xl sm:text-3xl cursor-pointer ${
            wishlist.some((item) => item.id === Product.id)
              ? "text-green-600"
              : "text-zinc-300"
          }`}
          onClick={() => addToWishlist(Product)}
        >
          <GoHeartFill />
        </button>

        {(Product.onSale || Product.newArrival) && (
          <span
            className={`px-2 sm:px-3 py-1 text-white text-xs sm:text-sm rounded ${
              Product.onSale ? "bg-blue-600" : "bg-green-600"
            }`}
          >
            {Product.onSale ? "Sale" : "New"}
          </span>
        )}
      </div>

      {/* Product Image */}
      <div className="w-full h-48 sm:h-56 md:h-60 overflow-hidden rounded-lg">
        <img
          src={Product.image}
          alt={Product.name}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Product Details */}
      <div className="text-center mt-4 sm:mt-6">
        <h3 className="text-lg sm:text-xl font-semibold">{Product.name}</h3>
        <div className="mt-2 mb-4">
          <span className="text-blue-600 font-semibold text-base sm:text-lg">
            Rs.{Product.price.toFixed(2)}
          </span>
          {Product.onSale && (
            <span className="text-zinc-500 font-semibold text-sm sm:text-base line-through ml-2">
              Rs.{Product.oldPrice.toFixed(2)}
            </span>
          )}
        </div>
        <button
          className="bg-black text-white text-sm sm:text-base py-2 px-4 sm:px-6 rounded-lg cursor-pointer active:bg-blue-700"
          onClick={() => addToCart(Product)}
        >
          Add to Cart
        </button>
      </div>
    </div>
  ));

  return (
    <section
      id="product-section"
      className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 py-10"
    >
      {/* Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-2 sm:gap-3 mt-6 sm:mt-8">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveTab(category)}
            className={`px-3 sm:px-6 py-1 sm:py-2 rounded-full text-sm sm:text-base cursor-pointer transition-colors duration-200 ${
              activeTab === category
                ? "bg-blue-600 text-white"
                : "bg-zinc-100 text-zinc-800 hover:bg-zinc-200"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-8">
        {filteredItems.length === 0 ? (
          <p className="col-span-1 sm:col-span-2 lg:col-span-4 text-center text-zinc-800 text-base sm:text-lg bg-zinc-100 py-3 rounded">
            No product found
          </p>
        ) : (
          renderProducts
        )}
      </div>
    </section>
  );
};

export default Products;
