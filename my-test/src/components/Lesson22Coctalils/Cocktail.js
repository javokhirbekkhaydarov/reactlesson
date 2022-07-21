import React from "react";
import { Link } from "react-router-dom";
const Cocktail = ({ image, name, id, info, glass }) => {
  return (
    <article className="coctail">
      <div className="image-container">
        <img src={image} alt={name} />
      </div>
      <div className="cocktail-footer">
        <h3>{name}</h3>
        <h4>{glass}</h4>
        <h5>{info}</h5>
      </div>
    </article>
  );
};

export default Cocktail;
