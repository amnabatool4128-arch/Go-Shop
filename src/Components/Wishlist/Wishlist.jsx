import React from "react";

const Wishlist = ({
  activePanel,
  handleClose,
  wishlist, // lowercase
  addToCart,
  clearWishlist,
}) => {
  return (
    <div
      className={`flex flex-col justify-between gap-5 bg-zinc-100 fixed top-0 right-0 bottom-0 z-40 left-auto w-full max-w-sm border border-zinc-300 py-5 transform transition-transform duration-300 ${
        activePanel === "wishlist" ? "translate-x-0" : "translate-x-full"
      }`}
    >
      {/* Heading */}
      <div className="px-4 sm:px-6">
        <h3 className="text-2xl sm:text-3xl font-bold text-zinc-800 text-center">
          Your Wishlist
        </h3>
      </div>

      {/* Wishlist Items */}
      <div className="flex-1 flex flex-col gap-2 px-4 sm:px-6 overflow-y-auto max-h-[80vh]">
        {wishlist.length === 0 ? (
          <p className="text-zinc-800 text-center font-semibold text-lg sm:text-xl mt-10">
            Your wishlist is Empty
          </p>
        ) : (
          wishlist.map((Product) => (
            <div
              key={Product.id} // ✅ unique key
              className="flex items-center gap-3 px-2 py-2 border border-zinc-300 bg-white"
            >
              <div className="w-16 h-16 sm:w-20 sm:h-20">
                <img
                  src={Product.image}
                  alt={Product.name}
                  className="w-full h-full object-contain"
                />
              </div>
              <div className="flex-1">
                <div className="flex justify-between items-center">
                  <h4 className="font-semibold text-zinc-800 text-base sm:text-lg">
                    {Product.name}
                  </h4>
                  <p className="text-xs sm:text-sm text-zinc-500">
                    Added: {Product.addedDate}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-1">
                  <span className="text-blue-600 font-semibold text-base sm:text-lg">
                    Rs.{Product.price.toFixed(2)}
                  </span>
                  {Product.onSale && (
                    <span className="text-zinc-500 font-semibold text-sm line-through ml-2">
                      Rs.{Product.oldPrice.toFixed(2)}
                    </span>
                  )}
                  <button
                    className="bg-blue-600 text-white text-xs sm:text-sm px-3 py-2 rounded-lg active:bg-blue-700 cursor-pointer"
                    onClick={() => addToCart(Product)}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))
        )}
      </div>

      {/* Buttons */}
      <div className="flex flex-col sm:flex-row gap-2 px-4 sm:px-6">
        <button
          className="bg-blue-600 text-white flex-1 py-3 rounded-lg active:bg-blue-700 cursor-pointer"
          onClick={handleClose}
        >
          Close
        </button>
        <button
          className="bg-blue-600 text-white flex-1 py-3 rounded-lg active:bg-blue-700 cursor-pointer"
          onClick={clearWishlist}
        >
          Clear All
        </button>
      </div>
    </div>
  );
};
export default Wishlist;