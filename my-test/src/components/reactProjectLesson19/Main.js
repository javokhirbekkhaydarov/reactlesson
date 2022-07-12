import React, { useState, useEffect } from "react";
import Loading from "./Loading";
import Tours from "./Tours";
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

  if (loading) {
    return (
      <main>
        <Loading />
      </main>
    );
  }

  return (
    <main>
      <Tours tours={tours} />
    </main>
  );
};

export default Main;
