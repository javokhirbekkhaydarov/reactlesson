import React, { useState, useRef, useEffect } from "react";

const UseRef = () => {
    const [inputValue, setInputValue] = useState()
  return (
    <>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
    </>
  );
};

export default UseRef;
