import React from "react";

function test2(props) {
  const month = props.date.toLocaleString("en-Us", { month: "long" });
  const day = props.date.toLocaleString("en-Us", { day: "2-dight" });
  const year = props.date.getFullYear();
  return (
    <div>
      <span>{month}</span>
      <span>{day}</span>
      <span>{year}</span>
      <h2>Why: {props.title}</h2>
      <p>Price {props.amount}</p>
    </div>
  );
}
export default test2;
