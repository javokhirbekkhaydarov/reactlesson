import React from "react";
import "./Book.css"
const Book = () => {
  return (
    <div className="book">
      <img className="book_img" src="https://loremflickr.com/320/24" alt="deep work" />

      <div className="book_description">
        <h2 > Deep Work</h2>
        <p>Cal Newport</p>
      </div>
    </div>
  );
};

export default Book