import React, { useState } from "react";

function PlantCard({ name, image, price }) {
  const [availablity, setAvailability] = useState(true)

  function toggleAvailability() {
    setAvailability(availablity => !availablity)
  }

  return (
    <li className="card">
      <img src={image} alt={name} />
      <h4>{name}</h4>
      <p>Price: {price}</p>
      {availablity ? (<button className="primary" onClick={toggleAvailability}>Instock</button>) : (<button onClick={toggleAvailability}>Out of Stock</button>)}
    </li>
  );
}

export default PlantCard;
