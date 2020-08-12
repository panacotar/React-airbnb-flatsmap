import React, { Component } from "react";
import "./App.scss";
import flatsDB from "../data/flatsDB.json";
import Search from "./Search";
import FlatList from "./FlatList";
import Map from "./Map";

class App extends Component {
  // const { name, lat, lng, price, priceCurrency, imageUrl, rating } = flatsDB[0];
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      loaded: false,
    };
  }

  componentDidMount() {
    this.setState({ flats: flatsDB, loaded: true });
  }

  render() {
    const { flats, loaded } = this.state;
    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <Search className="search-bar" />
          </div>
          {loaded ? <FlatList flats={flats} /> : <h1>Loading...</h1>}
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
