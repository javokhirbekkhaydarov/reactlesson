import React from "react";
import Counter from "../test/Counter";
import { useState } from "react";

import "./Book.css";
const Book = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHunter = (props) => {
    console.log("clicked");
  };
  const titleCHangeHandler = () => {
    setTitle("focusing");
  };

  const titleResetHandler = () => {
    setTitle(props.title);
  };

  return (
    <div className="book">
      <img className="book_img" src={props.img} alt="deep work" />
      <div className="book_desc">
        <h2>{title}</h2>
        <p>{props.author}</p>
        <button onClick={titleCHangeHandler}> Change title</button>
        <br />
        <button onClick={titleResetHandler}>reverse title</button>
        <Counter />
      </div>
    </div>
  );
};

export default Book;
