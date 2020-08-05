import React from "react";
import "./App.scss";
import Search from "./Search";
import Map from "./Map"

const App = () => {
  return (
    <div className="app">
      <div className="main">
        <div className="search">
          <Search className="search-bar" />
        </div>
        <div className="flats">
          <h1>List of Flats here</h1>
        </div>
      </div>
      <div className="map">
        <Map />
      </div>
    </div>
  );
};

export default App;
