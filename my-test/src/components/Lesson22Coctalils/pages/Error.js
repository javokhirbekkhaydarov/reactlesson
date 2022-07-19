import React from "react";
import { Link } from "react-router-dom";
import "../../../index.css"
const Error = () => {
  return (
    <section className="section error-page">
      <div className="error-container">
        <h1>404 page note found</h1>
        <Link to={"/"} className="btn btn-primary">
          back to home
        </Link>
      </div>
    </section>
  );
};

export default Error;
