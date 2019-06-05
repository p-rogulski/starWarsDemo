import React from "react";
import ItemCard from "../../../common/components/item-card";

const Hero = ({ personalData,className }) => (
  <ItemCard title={personalData.name} className={`ItemCard ${className}`}>
    <div className="ItemCard__details">
      <div className="detail detail--gender">
        <label>Gender: </label>
        <span>{personalData.gender}</span>
      </div>
      <div className="detail detail--hairColor">
        <label>Hair color: </label>
        <span>{personalData.hair_color}</span>
      </div>
      <div className="detail detail--mass">
        <label>Mass: </label>
        <span>{personalData.mass}</span>
      </div>
      <div className="detail detail--skinColor">
        <label>Skin color: </label>
        <span>{personalData.skin_color}</span>
      </div>
    </div>
  </ItemCard>
);

export default Hero;
