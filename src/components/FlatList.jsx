import React from "react";
import "./FlatList.scss";
import Flat from "./Flat";

const FlatList = ({ flats, onSelect, selectedFlat}) => {
  return(
    <div className="flats">
      {flats.map((flat) => {
        return (
          <Flat
            onSelect={onSelect}
            selected={selectedFlat.id === flat.id}
            key={flat.id}
            id={flat.id}
            imageUrl={flat.imageUrl}
            name={flat.name}
            price={flat.price}
            priceCurrency={flat.priceCurrency}
            rating={flat.rating}
          />
        );
      })}
    </div>
  );
}

export default FlatList;