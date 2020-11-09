import React, { Component } from "react";
import "./App.scss";
import ReactMapboxGl from "react-mapbox-gl";
import MapMarker from "./MapMarker";
import flatsDB from "../data/flatsDB.json";
import Search from "./Search";
import FlatList from "./FlatList";

const Map = ReactMapboxGl({
  accessToken: process.env.REACT_APP_MAPBOX_TOKEN,
});

class App extends Component {
  // const { name, lat, lng, price, priceCurrency, imageUrl, rating } = flatsDB[0];
  constructor(props) {
    super(props);
    this.state = {
      flats: [],
      loaded: false,
      search: "",
      center: [13.435, 52.48],
      selectedFlat: {},
    };
  }

  componentDidMount() {
    this.setState({ flats: flatsDB, loaded: true });
  }

  handleSearch = (e) => {
    const { value } = e.target;
    this.setState({ search: value });
  };

  handleClick = (id) => {
    const { flats } = this.state;
    const selectedFlat = flats.find((flat) => flat.id === id);

    this.setState({
      center: [selectedFlat.lng, selectedFlat.lat],
      selectedFlat,
    });
  };

  render() {
    const { flats, loaded, search, center, selectedFlat } = this.state;

    const searchedFlats = flats.filter((flat) =>
      flat.name.match(new RegExp(search, "i"))
    );

    return (
      <div className="app">
        <div className="main">
          <div className="search">
            <Search className="search-bar" search={this.handleSearch} />
          </div>
          {loaded ? (
            <FlatList
              flats={searchedFlats}
              onSelect={this.handleClick}
              selectedFlat={selectedFlat}
            />
          ) : (
            <h1>Loading...</h1>
          )}
        </div>
        <div className="map">
          <Map
            style="mapbox://styles/mapbox/streets-v9"
            center={center}
            zoom={[13]}
            containerStyle={{
              height: "100vh",
              width: "100%",
            }}
          >
            {searchedFlats.map((flat) => {
              return (
                <MapMarker
                  price={flat.price}
                  priceCurrency={flat.priceCurrency}
                  lat={flat.lat}
                  lng={flat.lng}
                  selected={selectedFlat.id === flat.id}
                />
              );
            })}
          </Map>
        </div>
      </div>
    );
  }
}

export default App;
