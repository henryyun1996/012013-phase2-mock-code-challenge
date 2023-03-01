import React from "react";
import PlantCard from "./PlantCard";

function PlantList({ plantInfo }) {
  // console.log(plantInfo)
  return (
    <ul className="cards">{plantInfo.map(plant => {
      return (
        <PlantCard 
          key={plant.id}
          name={plant.name} 
          image={plant.image} 
          price={plant.price} 
        />
    )})}</ul>
  );
}

export default PlantList;
