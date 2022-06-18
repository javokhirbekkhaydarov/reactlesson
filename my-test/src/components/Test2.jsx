import React from "react";

function test2(props) {
  return (
    <div>
      Date: {props.date.toString()}
      <h2>Why: {props.title}</h2>
      <p>Price {props.amount}</p>
    </div>
  );
}
export default test2;
