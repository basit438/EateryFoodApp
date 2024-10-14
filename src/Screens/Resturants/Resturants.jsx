import React, { useState } from 'react';
import data from '../../Data/RestaurantsData';
import RestaurantCard from '../../components/RestaurantCard/RestaurantCard';

function Resturants() {

  const [searchTerm, setSearchTerm] = useState("");
  const [filterByRating, setFilterByRating] = useState(0); 

  return (
    <>
      <div className='search-bars-wrapper flex justify-between items-center p-6 bg-gray-100'>
        
        {/* Search Input */}
        <input 
          onChange={(e) => setSearchTerm(e.target.value)} 
          type="text" 
          className="search-bar border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-green-500 transition duration-300" 
          placeholder="Search by name" 
        />
        
        {/* Filter by Rating Input */}
        <input 
          onChange={(e) => setFilterByRating(e.target.value)} 
          type="text" 
          className="rating-bar border border-gray-300 rounded-lg py-2 px-4 focus:outline-none focus:border-green-500 transition duration-300" 
          placeholder='Filter by rating' 
        />
        
      </div>

      <div className='resturants-container grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 p-6 bg-gray-100'>
        {
          data
            .filter((restaurant) => 
              restaurant.name.toLowerCase().includes(searchTerm.toLowerCase()) && 
              restaurant.rating >= filterByRating
            )
            .map((restaurant, index) => {
              return (
                <RestaurantCard
                  key={index}
                  name={restaurant.name}
                  description={restaurant.description}
                  url={restaurant.URL}
                  rating={restaurant.rating}
                  type_of_food={restaurant.type_of_food}
                  address={restaurant.address}
                />
              );
            })
        }
      </div>
    </>
  );
}

export default Resturants;
