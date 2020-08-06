import React from "react";
import "./App.scss";
import flats from "../data/flatsDB.json";
import Search from "./Search";
import Flat from "./Flat";
import Map from "./Map";

const App = () => {
  const { name, lat, lng, price, priceCurrency, imageUrl, rating } = flats[0];
  console.log(name);

  return (
    <div className="app">
      <div className="main">
        <div className="search">
          <Search className="search-bar" />
        </div>
        <div className="flats">
          <Flat
            imageUrl={imageUrl}
            name={name}
            price={price}
            priceCurrency={priceCurrency}
            rating={rating}
          />
          <Flat
            imageUrl=""
            name="My wonderful appartment on edgar street"
            price={231}
            priceCurrency={priceCurrency}
            rating={3}
          />
          <Flat
            imageUrl=""
            name="My wonderful appartment on edgar street"
            price={231}
            rating={3}
          />
          <Flat
            imageUrl=""
            name="My wonderful appartment on edgar street"
            price={231}
            rating={3}
          />
          <Flat
            imageUrl=""
            name="My wonderful appartment on edgar street"
            price={231}
            rating={3}
          />
        </div>
      </div>
      <div className="map">
        <Map />
      </div>
    </div>
  );
};

export default App;
