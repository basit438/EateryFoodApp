import React from 'react';

function QuoteCard(props) {
  return (
    <div className="quote-card bg-white shadow-lg rounded-lg p-6 max-w-full text-center mx-auto my-4 border border-gray-200">
      <p className="text-gray-700 text-lg font-medium italic mb-4">{props.quote}</p>
      <h1 className="text-gray-900 font-bold text-2xl">{props.name}</h1>
    </div>
  );
}

export default QuoteCard;
