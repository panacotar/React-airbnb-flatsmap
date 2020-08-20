import React from "react";
import { Marker } from "react-mapbox-gl";
import "./MapMarker.scss";

const MapMarker = ({ price, lng, lat }) => {
  return (
    <Marker coordinates={[lng, lat]} anchor="bottom">
      <div className="custom-marker">301eur</div>
    </Marker>
  );
};

export default MapMarker;
