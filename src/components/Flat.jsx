import React from "react";
import "./Flat.scss";

const Flat = ({ imageUrl, name, price, rating }) => {
  return (
    <div className="flat">
      <div className="flat-img">
        <img src={imageUrl} alt="Random flat img" />
      </div>
      <div className="flat-info">
        <div className="rating">
          <p>{rating} ⭐ </p>
        </div>
        <div className="description">
          <p>{name}</p>
          <p>{price}</p>
        </div>
      </div>
    </div>
  );
};

export default Flat;
