import React from "react";
import "./App.scss";
import flatsDB from "../data/flatsDB.json";
import Search from "./Search";
import Flat from "./Flat";
import Map from "./Map";

const App = () => {
  // const { name, lat, lng, price, priceCurrency, imageUrl, rating } = flatsDB[0];

  return (
    <div className="app">
      <div className="main">
        <div className="search">
          <Search className="search-bar" />
        </div>
        <div className="flats">
          {flatsDB.map((flat) => {
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
      </div>
      <div className="map">
        <Map />
      </div>
    </div>
  );
};

export default App;
