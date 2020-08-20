import React from "react";
import "./FlatList.scss";
import Flat from "./Flat";

const FlatList = ({ flats, onSelect }) => {
  return(
    <div className="flats">
      {flats.map((flat) => {
        return (
          <Flat
            onSelect={onSelect}
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