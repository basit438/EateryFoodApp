import React from 'react';
import 'boxicons';

function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300 py-8">
      <div className="container-footer mx-auto text-center">
        {/* Description */}
        <p className="max-w-xl mx-auto mb-6 text-lg">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Incidunt consequuntur amet culpa cum itaque neque.
        </p>

        {/* Footer Links */}
        <ul className="flex justify-center space-x-6 mb-6">
          <li><a href="/" className="hover:text-red-400 transition-colors duration-300">About</a></li>
          <li><a href="/" className="hover:text-red-400 transition-colors duration-300">Careers</a></li>
          <li><a href="/" className="hover:text-red-400 transition-colors duration-300">History</a></li>
          <li><a href="/" className="hover:text-red-400 transition-colors duration-300">Services</a></li>
          <li><a href="/" className="hover:text-red-400 transition-colors duration-300">Projects</a></li>
          <li><a href="/" className="hover:text-red-400 transition-colors duration-300">Blog</a></li>
        </ul>

        {/* Social Media Icons */}
        <ul className="flex justify-center space-x-6 mb-6">
  <li>
    <a href="/" className="hover:text-red-400 transition-colors duration-300">
      <i className='bx bxl-facebook'></i> {/* Facebook icon */}
    </a>
  </li>
  <li>
    <a href="/" className="hover:text-red-400 transition-colors duration-300">
      <i className='bx bxl-instagram'></i> {/* Instagram icon */}
    </a>
  </li>
  <li>
    <a href="/" className="hover:text-red-400 transition-colors duration-300">
      <i className='bx bxl-twitter'></i> {/* Twitter icon */}
    </a>
  </li>
  <li>
    <a href="/" className="hover:text-red-400 transition-colors duration-300">
      <i className='bx bxl-linkedin'></i> {/* LinkedIn icon */}
    </a>
  </li>
  <li>
    <a href="/" className="hover:text-red-400 transition-colors duration-300">
      <i className='bx bxl-github'></i> {/* GitHub icon */}
    </a>
  </li>
</ul>

      </div>
    </footer>
  );
}

export default Footer;
