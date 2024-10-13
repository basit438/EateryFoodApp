import React from 'react'
import Hero from '../../components/Hero/Hero'
import Hotels from '../../components/Hotels/Hotels'
import data from '../../Data/ReveiwData'
import ReveiwCard from '../../components/ReveiwCard/ReveiwCard'

function Home() {
  return (
    <>
      <Hero/>
      <Hotels/>

      <h1 className='text-4xl font-bold mb-4 text-red-400 text-center p-5' style={{ fontFamily: 'Poppins, sans-serif' }}>Our Reviews</h1>
      <div className="container"> {/* Use the custom class for the container */}
        {data.map((card, index) => (
          <div className="card" key={index}> {/* Use the custom class for each card */}
            <ReveiwCard
              name={card.name}
              position={card.position}
              description={card.description}
              additionalInfo={card.additionalInfo}
            />
          </div>
        ))}
      </div>
        
    </>
  )
}

export default Home
