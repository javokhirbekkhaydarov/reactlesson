import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Lesson22Coctalils/Navbar";
import Home from "./components/Lesson22Coctalils/pages/Home";
import About from "./components/Lesson22Coctalils/pages/About";
import Error from "./components/Lesson22Coctalils/pages/Error";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
       
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
