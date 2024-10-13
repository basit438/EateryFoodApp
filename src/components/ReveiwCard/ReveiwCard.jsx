import React from 'react';
import './ReveiwCard.css'; // Import your custom CSS file
import '../../Screens/Home/Home.css'; // Import your custom CSS file

function ReveiwCard(props) {
  return (
    <div className="card"> {/* Use the custom class for the card */}
      <h2>{props.name}</h2>
      <h3>{props.position}</h3>
      <p>{props.description}</p>
      <p>{props.additionalInfo}</p>
    </div>
  );
}

export default ReveiwCard;
