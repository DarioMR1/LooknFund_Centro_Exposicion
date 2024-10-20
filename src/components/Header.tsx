import React, { useState } from 'react';
import { Menu, X, Search, Globe, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLanguageMenu = () => setIsLanguageMenuOpen(!isLanguageMenuOpen);

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <span className="text-2xl font-bold text-primary">LooknFund</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <Link to="/" className="text-gray-700 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition duration-300 py-2 px-3 rounded">Home</Link>
          <Link to="/about" className="text-gray-700 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition duration-300 py-2 px-3 rounded">About Us</Link>
          <Link to="/stories" className="text-gray-700 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition duration-300 py-2 px-3 rounded">Inspiring Stories</Link>
          <Link to="/wall-of-dreams" className="text-gray-700 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition duration-300 py-2 px-3 rounded">Wall of Dreams</Link>
          <Link to="/community" className="text-gray-700 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition duration-300 py-2 px-3 rounded">Community</Link>
          <Link to="/contact" className="text-gray-700 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition duration-300 py-2 px-3 rounded">Contact</Link>
        </nav>

        <div className="hidden md:flex items-center space-x-6">
          <div className="relative">
            <input
              type="text"
              placeholder="Search..."
              className="py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
            />
            <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
          </div>

          <div className="relative">
            <button
              onClick={toggleLanguageMenu}
              className="flex items-center text-gray-700 hover:text-primary transition duration-300"
            >
              <Globe size={18} className="mr-1" />
              EN
              <ChevronDown size={14} className="ml-1" />
            </button>
            {isLanguageMenuOpen && (
              <div className="absolute right-0 mt-2 py-2 w-48 bg-white rounded-md shadow-xl z-20">
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">English</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Español</a>
                <a href="#" className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100">Français</a>
              </div>
            )}
          </div>

          <Link
            to="/create-profile"
            className="bg-primary hover:bg-accent text-white font-semibold py-2 px-4 rounded-full transition duration-300 text-sm"
          >
            Join Us
          </Link>
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden text-gray-700 hover:text-primary transition duration-300" onClick={toggleMenu}>
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white py-4 px-6">
          <div className="space-y-4">
            <Link to="/" className="block text-gray-700 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition duration-300 py-2 px-3 rounded">Home</Link>
            <Link to="/about" className="block text-gray-700 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition duration-300 py-2 px-3 rounded">About Us</Link>
            <Link to="/stories" className="block text-gray-700 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition duration-300 py-2 px-3 rounded">Inspiring Stories</Link>
            <Link to="/wall-of-dreams" className="block text-gray-700 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition duration-300 py-2 px-3 rounded">Wall of Dreams</Link>
            <Link to="/community" className="block text-gray-700 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition duration-300 py-2 px-3 rounded">Community</Link>
            <Link to="/contact" className="block text-gray-700 hover:text-primary hover:bg-primary hover:bg-opacity-10 transition duration-300 py-2 px-3 rounded">Contact</Link>
            <div className="relative">
              <input
                type="text"
                placeholder="Search..."
                className="w-full py-2 px-4 pr-10 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary text-sm"
              />
              <Search className="absolute right-3 top-2.5 text-gray-400" size={18} />
            </div>
            <Link
              to="/create-profile"
              className="block bg-primary hover:bg-accent text-white font-semibold py-2 px-4 rounded-full transition duration-300 text-center text-sm"
            >
              Join Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;