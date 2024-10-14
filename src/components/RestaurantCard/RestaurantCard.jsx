import React from 'react';

function RestaurantCard(props) {
  return (
   <>
    <div className='restaurant-card max-w-sm rounded-lg overflow-hidden shadow-lg bg-white p-6 transition duration-300 transform hover:scale-105 hover:shadow-xl'>
      <h1 className='text-2xl font-bold text-red-400 mb-2'>{props.name}</h1>
      <p className='text-gray-600 mb-2'>{props.description}</p>
      <p className='text-gray-500 italic mb-2'> <i class='bx bxs-bowl-hot' ></i> {props.type_of_food}</p>
      <div className="flex items-center justify-between mb-4">
        <span className='text-green-500 font-semibold'>Rating: {props.rating}</span>
        <span className='text-sm text-gray-500'> <i class='bx bxs-map'></i> {props.address}</span>
      </div>
      <a 
        className='bg-red-400 text-white px-4 py-2 rounded-lg hover:bg-red-700 transition duration-300 ease-in-out' 
        href={props.url}
        target="_blank" 
        rel="noopener noreferrer"
      >
        Visit Us
      </a>
    </div>
   </>
  );
}

export default RestaurantCard;
