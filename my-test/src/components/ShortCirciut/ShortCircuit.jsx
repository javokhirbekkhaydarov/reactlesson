import React, { useState } from "react";

const ShortCircuit = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <button className="btn" onClick={() => setShow(!show)}>
        show/hide
      </button>
      {show && <h1>Ohoy</h1>}
    </>
  );
};

export default ShortCircuit;
