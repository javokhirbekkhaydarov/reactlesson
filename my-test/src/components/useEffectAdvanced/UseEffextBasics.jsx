import React, { useState, useEffect } from "react";
//!useeffect by default render bo`ladi
//! celeon up function
//! second parameter
const UseEffextBasics = () => {
  const [value, setValue] = useState(0);
 
  useEffect(() => {
    console.log("call effect");
    if (value >= 5) {
      document.title = ` New Messages (${value})`;
    }
  }, [value]);
  console.log("render component");
  return (
    <>
      {/* <h1>{value}</h1>
      <button onClick={() => setValue(value + 1)}>Click Me</button> */}
    </>
  );
};

export default UseEffextBasics;
