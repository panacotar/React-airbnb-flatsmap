import React from "react";
import "./FlatList.scss";
import Flat from "./Flat";

const FlatList = ({ flats }) => {
  return(
    <div className="flats">
      {flats.map((flat) => {
        return (
          <Flat
            key={flat.id}
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