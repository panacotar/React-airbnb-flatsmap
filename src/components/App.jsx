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
      search: "",
    };
  }

  componentDidMount() {
    this.setState({ flats: flatsDB, loaded: true });
  }

  handleSearch = (e) => {
    // console.log(e.target.value)
    const { value } = e.target;
    this.setState({ search: value });
  };

  render() {
    const { flats, loaded, search } = this.state;

    const searchedFlats = flats.filter((flat) =>
      flat.name.match(new RegExp(search, "i"))
    );
    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <Search className="search-bar" search={this.handleSearch} />
          </div>
          {loaded ? <FlatList flats={searchedFlats} /> : <h1>Loading...</h1>}
        </div>
        <div className="map">
          <Map />
        </div>
      </div>
    );
  }
}

export default App;
