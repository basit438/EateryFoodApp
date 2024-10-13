import React from 'react';
import './ReveiwCard.css'; // Import your custom CSS file
import '../../Screens/Home/Home.css'; // Import your custom CSS file

function ReveiwCard(props) {
  return (
    <div>
      <h2 className="text-lg font-bold mb-2">{props.name}</h2>
      <h3 className="text-base text-gray-500 mb-2">{props.position}</h3>
      <p className="mb-2 text-gray-800">{props.description}</p>
      <p className="text-gray-600">{props.additionalInfo}</p>
    </div>
  );
}

export default ReveiwCard;