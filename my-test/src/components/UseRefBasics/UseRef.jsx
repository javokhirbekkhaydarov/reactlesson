import React, { useState, useRef, useEffect } from "react";

const UseRef = () => {
  const [inputValue, setInputValue] = useState("");
  const count = useRef(0);
  console.log(inputValue);

  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.value);
  };

  useEffect(() => {
    count.current = count.current + 1;
    console.log(refContainer.current.value);

    refContainer.current.focus();
  });

  return (
    <>
      <form className="form-control" onSubmit={handleSubmit}>
        <div>
          <input className="input-control" type="text" ref={refContainer} />
          <button className="btn" type="submit">
            Submit
          </button>
        </div>
      </form>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
      />
      <h1>Render Count : {count.current}</h1>
    </>
  );
};

export default UseRef;
