import React, { useState, useEffect } from "react";

const UseEffectCleanUp = () => {
  const [size, setSize] = useState(window.innerWidth);
  const [height, setHeight] = useState(window.innerHeight);

  const checkheight = () => {
    setHeight(window.innerHeight);
  };
  const checksize = () => {
    setSize(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener(`resize`, checksize);
    window.addEventListener(`resize`, checkheight);
    return () => {
      window.removeEventListener("resize", checksize);
      window.removeEventListener(`resize`, checkheight);
    };
  });

  return (
    <>
      <h1 > Your Window Size</h1>
      <h2>
      <i>{size}px</i> X  <i>{height}px</i>
      </h2>
    </>
  );
};

export default UseEffectCleanUp;
