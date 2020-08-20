import React from "react";
import { Marker } from "react-mapbox-gl";
import "./MapMarker.scss";

const MapMarker = ({ price, lng, lat, selected }) => {
  return (
    <Marker coordinates={[lng, lat]} anchor="bottom">
      <div className={selected ? "custom-marker select" : "custom-marker"}>{price}</div>
    </Marker>
  );
};

export default MapMarker;
