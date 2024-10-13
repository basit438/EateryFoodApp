import React from 'react';
import Logo from '../../assets/logo.svg';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-red-600 text-white shadow-lg py-4">
      <div className="container-header mx-auto flex justify-between items-center px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img src={Logo} alt="Logo" className="h-10 w-10" />
          <h1 className="text-3xl font-bold">Eatery</h1>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-lg hover:text-green-300 transition duration-300">Home</Link>
          <Link to="/quote" className="text-lg hover:text-green-300 transition duration-300">Quote</Link>
          <Link to="/food" className="text-lg hover:text-green-300 transition duration-300">Food</Link>
          <Link to="/resturants" className="text-lg hover:text-green-300 transition duration-300">Restaurants</Link>
          <Link to="/contact" className="text-lg hover:text-green-300 transition duration-300">Contact</Link>
        </nav>

        {/* Get Started Button */}
        <button className="bg-green-500 hover:bg-green-600 text-black font-semibold py-2 px-4 rounded-lg transition duration-300">
          Get Started
        </button>

        {/* Mobile Menu */}
        <div className="md:hidden">
          {/* Add a mobile menu icon here if needed */}
        </div>
      </div>
    </header>
  );
}

export default Header;
