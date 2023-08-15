"use client"
import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <nav className="fixed top-0 w-full bg-[#4d79ff] p-4 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <a href="#" className="text-white text-xl font-semibold">
          Logo
        </a>
        <div
          className={`hidden md:flex space-x-4 ${
            menuOpen ? 'hidden' : ''
          } transition-opacity duration-300 ease-in-out`}
        >
          <a href="#" className="text-white hover:text-gray-300">
            Home
          </a>
          <a href="#" className="text-white hover:text-gray-300">
            About
          </a>
          <div className="relative group">
            <a href="#" className="text-white hover:text-gray-300">
              Services
            </a>
          </div>
          <a href="#" className="text-white hover:text-gray-300">
            Contact
          </a>
        </div>
        <div className="md:hidden">
          <button
            className="text-white"
            onClick={toggleMenu}
          >
            <svg
              className={`w-6 h-6 ${menuOpen ? 'hidden' : ''} transition-opacity duration-300 ease-in-out`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
            <svg
              className={`w-6 h-6 ${menuOpen ? '' : 'hidden'} transition-opacity duration-300 ease-in-out`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="md:hidden bg-[#4d79ff] space-y-4 transition-opacity duration-300 ease-in-out">
          <a href="#" className="block text-white p-2 hover:bg-[#3c64e1]">
            Home
          </a>
          <a href="#" className="block text-white p-2 hover:bg-[#3c64e1]">
            About
          </a>
          <a href="#" className="block text-white p-2 hover:bg-[#3c64e1]">
            Services
          </a>
          <a href="#" className="block text-white p-2 hover:bg-[#3c64e1]">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
