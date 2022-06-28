import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users/QuincyLarsonDev";
const MultipleRanding = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setError] = useState(false);
  const [user, setUser] = useState("default user");

  useEffect(() => {
    fetch(url)
      .then((resp) => {
        if (resp.status >= 200 && resp.status <= 299) {
          return resp.json();
        } else {
          setIsLoading(false);
          setError(true);
          throw new Error(resp.statusText);
        }
      })
      .then((user) => {
        const { login } = user;
        setUser(login);
        setIsLoading(false);
      })
      .catch((error) => console.log(error));
  });
  if (isLoading) {
    return <h1>Loading..,</h1>;
  }
  if (isError) {
    return <h1>Errorr.......</h1>;
  }

  return (
    <>
      <div className="container">
        <h2>{user}</h2>
      </div>
    </>
  );
};

export default MultipleRanding;
