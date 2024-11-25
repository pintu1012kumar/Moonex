import React, { useState } from "react";

const Navbar = () => {
  return (
    <nav className=" text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-2xl font-bold text-yellow-200">
              Moonex
            </a>
          </div>
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-12 font-bold">
            <a href="#" className="hover:text-gray-300 text-yellow-200">
              Home
            </a>
            <a href="#" className="hover:text-gray-300">
              About Us
            </a>
            <a href="#" className="hover:text-gray-300">
              Roadmap
            </a>
            <a href="#" className="hover:text-gray-300">
              FAQs
            </a>
            <a href="#" className="hover:text-gray-300">
              Contact Us
            </a>
          </div>
          <button className="bg-yellow-200 text-black font-bold px-4 py-2 rounded-full hover:bg-green-400">
            Connect Wallet
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
