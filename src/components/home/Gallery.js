import React from "react";
import Logements from "../../data/Logements.json";
import Card from "./Card";

function Gallery() {
  return (
    <div className="gallery">
      <ul>
        {Logements.map((card) => (
          <Card key={card.id} card={card} />
        ))}
      </ul>
    </div>
  );
}

export default Gallery;
