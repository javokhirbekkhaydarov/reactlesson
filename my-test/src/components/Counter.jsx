import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addNumberHandler = () => {
    setCounter(counter + 1);
    if (counter === 5) {
      alert("work");
    } else if (counter === 8) {
      alert("new work");
    } else if (counter === 10) {
      alert(" new new work");
    }
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={addNumberHandler}>Add</button>
    </div>
  );
};

export default Counter;
