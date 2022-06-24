import React, { useState, useEffect } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checksize = () => {
 
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener(`resize`, checksize);
    return ()=> {
        window.removeEventListener("resize" , checksize)
    }
  });

  return (
    <>
      <h1>Window</h1>
      <h2>{size}</h2>
    </>
  );
};

export default UseEffectCleanUp;
