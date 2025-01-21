"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaShoppingCart} from "react-icons/fa";
import { FiHelpCircle } from 'react-icons/fi';
import { MdKeyboardArrowDown } from "react-icons/md";
import Image from "next/image"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Top Blue Bar */}
      <div className="bg-blue-900 text-white text-sm py-2">
        <div className="container mx-auto flex flex-wrap items-center justify-between px-4">
          <div className="flex items-center justify-center space-x-4">
            <div className="flex items-center justify-center space-x-1">
              <p>Free Shipping On All Orders Over $50</p>
            </div>
          </div>
          <div className="flex items-center justify-start space-x-4 sm:space-x-6 w-full sm:w-auto mt-2">
            <div className="flex items-center space-x-1 cursor-pointer">
              <p>English</p>
              <MdKeyboardArrowDown className="text-white" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <Link href="/cart"><button>Cart</button></Link>
              <FaShoppingCart className="text-white" />
            </div>
            <div className="flex items-center space-x-1 cursor-pointer">
              <p>Need Help</p>
              <FiHelpCircle className="text-white"/>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <nav className="bg-white text-black">
        <div className="container mx-auto flex flex-wrap items-center justify-between p-4">
                      {/* Logo Section */}
          <div className="flex items-center space-x-2">
            <Image
              src="/navbar/Logo icon.png" // Replace with your logo image path
              alt="Logo"
              className="h-8"
              width={35}
              height={35}
            />
          <div className="text-xl font-bold">
            <Link href="/">Comforty</Link>
          </div>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-6 lg:space-x-8 items-center">
            <Link href="/" className="hover:text-blue-500 transition">Home</Link>
            <Link href="/about-us" className="hover:text-blue-500 transition">About us</Link>
            <Link href="/products" className="hover:text-blue-500 transition">Products</Link>
            <Link href="/contact" className="hover:text-blue-500 transition">Contact</Link>
            <Link href="/faq" className="hover:text-blue-500 transition">Faq</Link>
          </div>

          <div>
            
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-1">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="block md:hidden focus:outline-none order-2"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                ></path>
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="bg-gray-50 border-t border-gray-200 md:hidden">
            <Link href="/" className="block px-4 py-2 hover:text-blue-500 transition">Home</Link>
            <Link href="/about-us" className="block px-4 py-2 hover:text-blue-500 transition">About us</Link>
            <Link href="/product" className="block px-4 py-2 hover:text-blue-500 transition">Products</Link>
            <Link href="/contact" className="block px-4 py-2 hover:text-blue-500 transition">Contact</Link>
            <Link href="/faq" className="hover:text-blue-500 transition">FAQ</Link>
          </div>
        )}
      </nav>
    </>
  );
};

export default Navbar;

