import React from "react";
import { Routes, Route } from "react-router-dom";
import Footer from "./Footer";
import Navbar from "./Navbar";
import "../Router/MainRouter.css";
import Home from "./Home";
import About from "./About";
import Books from "./Books";

const MainRouter = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/" element={<About />} />
        <Route path="/" element={<Books />} />
      </Routes>

      <Footer />
    </>
  );
};

export default MainRouter;
