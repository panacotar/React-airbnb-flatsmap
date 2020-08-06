import React from "react";
import "./Flat.scss";

const Flat = ({ imageUrl, name, price, priceCurrency, rating }) => {
  return (
    <div className="flat">
      <div className="flat-img">
        <img src={imageUrl} alt="Random flat img" />
      </div>
      <div className="flat-info">
        <div className="rating">
          <p>
            <b>{rating}</b>{" "}
            <span role="img" aria-label="star">
              ⭐
            </span>
          </p>
        </div>
        <div className="price">
          <p>
            <b>{price} {priceCurrency}</b>
          </p>
        </div>
      </div>
      <div className="flat-description">
        <p>{name}</p>
      </div>
    </div>
  );
};

export default Flat;
