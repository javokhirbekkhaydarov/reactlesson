import React from "react";
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="nav-center">
        <Link to={"/"}>
          <img
            src={`https://raw.githubusercontent.com/nurmukhamedov/react-projects/663d17d846883f9e8072f6838268c80dbbbd336b/react-project/src/logo.svg`}
            alt="cocktail"
            className="logo"
          />
         
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
