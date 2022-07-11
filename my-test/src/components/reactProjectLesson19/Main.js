import React, { useState, useEffect } from "react";
import "./Main.css";

const url = "https://course-api.com/react-tours-project";
const Main = () => {
  const [loading, SetLoading] = useState(true);
  const [tours, setTours] = useState([]);

  const fetchTours = async () => {
    SetLoading(true);

    try {
      const response = await fetch(url);
      const tours = await response.json();
      SetLoading(false);
      setTours(tours);
    } catch (error) {
      SetLoading(false);
    }
  };
  useEffect(() => {
    fetchTours();
  }, []);
  return <div>Main</div>;
};

export default Main;
