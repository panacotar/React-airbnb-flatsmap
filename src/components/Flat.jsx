import React from "react";
import "./Flat.scss";
import PropTypes from "prop-types";

const Flat = ({
  id,
  imageUrl,
  name,
  price,
  priceCurrency,
  rating,
  onSelect,
  selected
}) => {
  const handleClick = () => {
    onSelect(id);
  };

  return (
    <div className={selected ? "flat select" : "flat"} onClick={handleClick}>
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
            <b>
              {price} {priceCurrency}
            </b>
          </p>
        </div>
      </div>
      <div className="flat-description">
        <p>{name}</p>
      </div>
    </div>
  );
};

Flat.propTypes = {
  imageUrl: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  priceCurrency: PropTypes.number.isRequired,
  rating: PropTypes.number.isRequired,
};

export default Flat;
