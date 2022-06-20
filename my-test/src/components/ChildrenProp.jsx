import React from "react";

import "./Book.css";

const ChildrenProp = (props) => {
  return <div className="border_box">{props.children}</div>;
};

export default ChildrenProp;
