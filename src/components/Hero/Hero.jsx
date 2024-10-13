import React from 'react';
import Heroimg from '../../assets/Hero.jpg';
import './Hero.css'; 

function Hero() {
  return (
    <section className="hero-section relative h-screen flex flex-col justify-center pl-16 text-white">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 bg-cover bg-center" style={{ backgroundImage: `url(${Heroimg})` }}>
        <div className="bg-black opacity-50 inset-0 absolute"></div>
      </div>
      <div className="max-w-xl relative z-10">
        <h1 className="text-5xl font-bold">Let's find Your</h1>
        <h1 className="text-5xl font-bold mb-4 text-red-400">Favorite Food</h1>

        <p className="text-lg mb-8 transition-all duration-500 transform hover:scale-105 hover:font-semibold hover:text-red-300 text-shadow">
          Discover the best dishes from top restaurants around you. Whether you're craving a juicy burger, a classic pizza, or a gourmet meal, we’ve got you covered. Start your food journey with us today!
        </p>

        <div className="hero-btn-wrapper space-x-4">
          <button className="bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full transition-all duration-300">
            Search Now
          </button>
          <button className="bg-white text-red-500 hover:bg-gray-100 py-2 px-6 rounded-full transition-all duration-300">
            Know More
          </button>
        </div>
      </div>
    </section>
  );
}

export default Hero;
