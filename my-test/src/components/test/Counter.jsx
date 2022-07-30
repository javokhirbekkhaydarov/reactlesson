import React, { useState } from "react";

const Counter = () => {
  const [counter, setCounter] = useState(0);

  const addNumberHandler = () => {
    setCounter(counter + 1);
  };
  const removeNumberHandler = () => {
    setCounter(counter - 1);
  };
  return (
    <div>
      <p>{counter}</p>
      <button onClick={addNumberHandler}>Add</button>
      <button onClick={removeNumberHandler}>Remove</button>
      <button onClick={() => setCounter(0)}>Reset</button>
    </div>
  );
};

export default Counter;
