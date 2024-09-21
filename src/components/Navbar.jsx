import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full top-0 left-0 z-10 sticky">
      <div className="container mx-auto px-6 py-6 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <a href="/">
          <img src="/assets/logo.svg" alt="Logo" className="w-24" />
          </a>
        </div>

        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-8 text-tertiary hover-text-secondary font-semibold border-b-2 border-transparent box-border">
          <li><a href="/" className="hover:text-secondary transition">Accueil</a></li>
          <li><a href="/nos-offres" className="hover:text-secondary transition">Nos offres</a></li>
          <li><a href="/nos-solutions" className="hover:text-secondary transition">Nos solutions</a></li>
          <li><a href="/espace-restaurant" className="bg-primary hover:bg-primary-hover text-white px-4 py-4 rounded-lg transition">Espace restaurant</a></li>
        </ul>

        {/* Menu Burger */}
        <div className="md:hidden text-gray-800">
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      <motion.div
        initial={{ height: 0 }}
        animate={{ height: isOpen ? 'auto' : 0 }}
        className="md:hidden overflow-hidden bg-white shadow-md"
      >
        <ul className="flex flex-col space-y-4 py-4 text-center text-gray-800 font-semibold">
          <li><a href="#accueil" className="hover:text-blue-600 transition">Accueil</a></li>
          <li><a href="#nos-offres" className="hover:text-blue-600 transition">Nos offres</a></li>
          <li><a href="#nos-solutions" className="hover:text-blue-600 transition">Nos solutions</a></li>
          <li><a href="#espace-restaurant" className="hover:text-blue-600 transition">Espace restaurant</a></li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;