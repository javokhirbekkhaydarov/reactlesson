import React, { useState } from "react";

const Tour = ({ id, image, info, name, price }) => {
  const [readMore, setReadMore] = useState(false);
  return (
    <article className="single-tour">
      <img src={image} alt={name} />
      <footer>
        <div className="tour-info">
          <h4>{name}</h4>
        </div>
      </footer>
    </article>
  );
};

export default Tour;
