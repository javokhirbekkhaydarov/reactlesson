
import React, { useEffect, useState } from "react";

const UseEffectFetchData = () => {
  const url = "https://api.github.com/users ";
  console.log(url);
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users);
  };
  useEffect(() => {
    getUsers();
  }, []);
  return (
    <>
      <h3>github users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url , type} = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}> profile link</a>
                <p>{type }</p>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );

};

export default UseEffectFetchData;
