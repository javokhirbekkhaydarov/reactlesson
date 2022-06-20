import React from "react";
import { useState } from "react";
import "./Book.css";
const Book = (props) => {
  const [title, setTitle] = useState(props.title);
  let title = props.title;
  const clickHunter = (props) => {
    console.log("clicked");
  };

  return (
    <div className="book">
      <img className="book_img" src={props.img} alt="deep work" />
      <div className="book_desc">
        <h2>{title}</h2>
        <p>{props.author}</p>
        <button onClick={() => console.log(`clicked`)}> Change title</button>
      </div>
    </div>
  );
};

export default Book;
