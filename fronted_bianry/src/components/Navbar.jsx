// src/components/Navbar.jsx
import React, { useState } from 'react';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800"><img src="" alt="" /></h1>
        <div className="hidden md:flex space-x-6">
          <a href="#services" className="text-gray-600 hover:text-blue-600">Services</a>
          <a href="#training" className="text-gray-600 hover:text-blue-600">Training</a>
          <a href="#about" className="text-gray-600 hover:text-blue-600">About Us</a>
          <a href="#contact" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Contact Us</a>
        </div>
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)} className="text-gray-800 focus:outline-none">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}></path>
            </svg>
          </button>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden px-6 pb-4">
          <a href="#services" className="block py-2 text-gray-600 hover:text-blue-600">Services</a>
          <a href="#training" className="block py-2 text-gray-600 hover:text-blue-600">Training</a>
          <a href="#about" className="block py-2 text-gray-600 hover:text-blue-600">About Us</a>
          <a href="#contact" className="block mt-2 bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">Contact Us</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;