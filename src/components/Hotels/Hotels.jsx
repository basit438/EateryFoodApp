import React from 'react';
import Hotelimg from '../../assets/Hotels.jpg';
import './Hotels.css';

function Hotels() {
  return (
    <section className='hotels-section flex h-screen p-5'>
      {/* Hotel Image Section */}
      <div className='hotel-img w-1/2'>
        <img src={Hotelimg} alt="Hotels" className="object-cover h-full w-full" />
      </div>

      {/* Hotel Content Section */}
      <div className='hotel-content flex flex-col justify-center items-center p-10 w-1/2'>
  <h1 className='text-4xl font-bold mb-4 text-red-400 text-center' style={{ fontFamily: 'Poppins, sans-serif' }}>Hotels</h1>
  <p className='text-lg mb-4 text-center' style={{ fontFamily: 'Poppins, sans-serif' }}>
    Discover a range of luxurious and comfortable hotels. Whether you're looking for a cozy retreat or a lavish getaway, we've got the perfect options for you. Book your stay with us today and experience exceptional hospitality!
  </p>
  <p className='text-base text-center' style={{ fontFamily: 'Poppins, sans-serif' }}>
    Our hotels offer a range of facilities and services to ensure that you have everything you need to make your stay as comfortable and enjoyable as possible.
  </p>
  <button className='mt-6 bg-red-500 hover:bg-red-600 text-white py-2 px-6 rounded-full transition-all duration-300'>
    Explore More
  </button>
</div>


    </section>
  );
}

export default Hotels;
