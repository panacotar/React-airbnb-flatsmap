import React from "react";
import { Marker } from "react-mapbox-gl";
import "./MapMarker.scss";

const MapMarker = ({ price, lng, lat }) => {
  return (
    <Marker coordinates={[13.3501, 52.5145]} anchor="bottom">
      <div className="custom-marker">301eur</div>
    </Marker>
  );
};

export default MapMarker;
