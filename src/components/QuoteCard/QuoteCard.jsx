import React from 'react';

function QuoteCard(props) {
  return (
    <div className="quote-card bg-red-100 shadow-lg rounded-lg p-6 max-w-full text-center  my-4 border border-red-200 mx-5">
      <p className="text-gray-700 text-lg font-medium italic mb-4">{props.quote}</p>
      <h1 className="text-red-600 font-bold text-2xl">{props.name}</h1>
    </div>
  );
}

export default QuoteCard;
