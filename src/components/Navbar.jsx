"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import Link from "next/link";
import { ImExit } from "react-icons/im";

import { clearUser } from "../redux/features/usersSlice";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const dispatch = useDispatch();

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const handleLogout = () => {
    dispatch(clearUser());
    localStorage.removeItem('user');
    navigate('/Splash');
  };


  return (
    <nav className="fixed top-0 w-full bg-[#4d79ff] p-4 shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        <Link href="/" className="text-white text-xl font-semibold">
          Logo
        </Link>
        <div
          className={`hidden md:flex space-x-4 ${
            menuOpen ? "hidden" : ""
          } transition-opacity duration-300 ease-in-out`}
        >
          <Link href="/" className="text-white hover:underline">
            Home
          </Link>
          <Link href="/#about" className="text-white hover:underline">
            About
          </Link>
          <Link href="/Cars" className="text-white hover:underline">
            Cars
          </Link>
          <Link href="/AddCar" className="text-white hover:underline">
            List Car
          </Link>
          <Link href="/#contact" className="text-white hover:underline">
            Contact
          </Link>
          <Link href="/Splash" className="text-white hover:underline">
            <button onClick={handleLogout} className="flex flex-row justify-around">
              Sign out <ImExit className="m-1"/>
            </button>
          </Link>
        </div>
        <div className="md:hidden">
          <button className="text-white" onClick={toggleMenu}>
            <svg
              className={`w-6 h-6 ${
                menuOpen ? "hidden" : ""
              } transition-opacity duration-300 ease-in-out`}
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
              className={`w-6 h-6 ${
                menuOpen ? "" : "hidden"
              } transition-opacity duration-300 ease-in-out`}
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
          <Link href="/" className="block text-white p-2 hover:bg-[#3c64e1]">
            Home
          </Link>
          <Link
            href="/#about"
            className="block text-white p-2 hover:bg-[#3c64e1]"
          >
            About
          </Link>
          <Link href="/AddCar" className="block text-white p-2 hover:bg-[#3c64e1]">
            List Car
          </Link>
          <Link
            href="/#contact"
            className="block text-white p-2 hover:bg-[#3c64e1]"
          >
            Contact
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
