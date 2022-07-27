import React, { useState, useEffect } from "react";
import { UseFetch } from "./UseFetch";
const Main = () => {
  const { loading, data } = UseFetch();
  const { page, setPage } = useState(0);
  const { followers, setFollowers } = useState([]);
  useEffect(
    () => {
      if (loading) return setFollowers(data[page]);
    },
    loading,
    page
  );

  const nextPage = () => {
    setPage((oldPage) => {
      let nextPage = oldPage + 1;
      if (nextPage > data.length - 1) {
        nextPage = 0;
      }
      return nextPage;
    });
  };

  const prevPage = () => {
    setPage((oldPage) => {
      let prevPage = oldPage - 1;
      if (prevPage < data.length - 1) {
      }
      return prevPage;
    });
  };
  return <div>Main</div>;
};

export default Main;
