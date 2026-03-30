import React from 'react'
import Logo from "../../assets/logo.png"
import {  FaSearch } from "react-icons/fa";
import { HiShoppingBag } from "react-icons/hi2";
import { GoHeartFill } from "react-icons/go";
const Navbar = ({
  handleScroll,
  setSearchTerm,
  isScrolled,
  handlePanel,
  totalItems,
  wishlist,
}) => {
  return (
    <header
      className={`bg-white fixed top-0 left-0 right-0 transition-all duration-300 z-30 ${isScrolled ? "shadow-xl" : ""}`}
    >
      {/* Logo */}
      <nav className="max-w-[1400px] md:px-12 px-6 md:py-10 py-5 mx-auto flex items-center justify-between h-[12vh]  md:h-[14vh] gap-3">
        <div className="flex items-center gap-2">
          <h1 className="lg:text-2xl sm:text-xl font-bold text-[14px] tracking-wide">
            G<span className="text-blue-800">O</span>-Shop
          </h1>
          <a
            href="https://www.google.com"
            className="flex w-8 h-8 sm:w-10 sm:h-10 bg-zinc-100 rounded-full p-2 "
          >
            <img
              src={Logo}
              alt="logo"
              className="w-full h-full object-contain"
            />
          </a>
        </div>
        {/* Nav Action */}
        <div className="flex items-center gap-x-5 sm:gap-x-2 ">
          {/* Search Box */}
          <div className="flex p-1 rounded-full border-2 border-blue-600">
            <input
              type="text"
              name="search"
              id="search"
              placeholder="Search..."
              autoComplete="off"
              className="lg:h-[5vh] lg:pl-4 flex-1 bg-transparent focus:outline-none"
              onFocus={handleScroll}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="flex items-center justify-center w-10 h-10 rounded-full bg-blue-700 text-white text-lg transition-all duration-300  hover:scale-110">
              <FaSearch />
            </button>
          </div>
          {/* Icon */}
          <button
            className="lg:text-4xl md:text-3xl sm:text-2xl text-zinc-800 relative cursor-pointer"
            onClick={() => handlePanel("wishlist")}
          >
            <GoHeartFill />
            {wishlist.length > 0 && (
              <span className="flex items-center justify-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px] sm:text-xs absolute lg:top-4 lg:right-4 sm:top-2 sm:right-2 border-2 border-white">
                {wishlist.length}
              </span>
            )}
          </button>
          <button
            className="lg:text-4xl md:text-3xl sm:text-2xl text-zinc-800 relative cursor-pointer"
            onClick={() => handlePanel("cart")}
          >
            <HiShoppingBag />
            {totalItems > 0 && (
              <span className="flex items-center justify-center bg-red-600 text-white w-5 h-5 rounded-full text-[14px]  absolute lg:top-4 lg:right-6 sm:top-2 sm:right-2 border-2 border-white">
                {totalItems}
              </span>
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar
