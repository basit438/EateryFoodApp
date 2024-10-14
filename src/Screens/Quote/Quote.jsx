import React from 'react'
import Data from '../../Data/QuoteData';
import { useState } from 'react';
import QuoteCard from '../../components/QuoteCard/QuoteCard';
function Quote() {
  return (
    <div className='quote-container'>
      {
        Data.map((quote ,index ) =>{
          return(
            <QuoteCard
            key={index}
              quote={quote.quote}
              name={quote.author}
            />
          )
        })
      }
      
    </div>
  )
}

export default Quote
