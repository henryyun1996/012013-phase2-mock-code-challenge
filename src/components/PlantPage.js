import React, { useState, useEffect } from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

const plantAPI = "http://localhost:6001/plants";

function PlantPage() {
  const [plantInfo, setPlantInfo] = useState([]);

  useEffect(() => {
    fetch(plantAPI)
      .then((response) => response.json())
      .then((plantInfo) => setPlantInfo(plantInfo));
  }, []);

  function renderNewPlant(name, image, price) {
    const plantObj = {
      name: name,
      image: image,
      price: price,
    };
    fetch(plantAPI, {
      method: "POST",
      header: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify(plantObj),
    })
      .then((response) => response.json())
      .then((plant) => setPlantInfo([...plantInfo, plant]));
  }

  function handleFilter(filterInput) {
    return plantInfo.filter((plant) =>
      plant.name.toUpperCase().includes(filterInput.toUpperCase())
    );
  }

  const filteredPlantList = handleFilter("");

  return (
    <main>
      <NewPlantForm renderNewPlant={renderNewPlant} />
      <Search handleFilter={handleFilter} />
      <PlantList plantInfo={filteredPlantList} />
    </main>
  );
}

export default PlantPage;