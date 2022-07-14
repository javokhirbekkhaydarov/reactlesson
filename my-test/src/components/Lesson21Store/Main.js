import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";
import "./Main.css";

const getLocalStorage = () => {
  let list = localStorage.getItem("list");
  if (list) {
    return (list = JSON.parse(localStorage.getItem("list")));
  } else {
    return [];
  }
};
const Main = () => {
  const [name, setName] = useState(``);
  const [list, setList] = useState(getLocalStorage());
  const [edit, setEdit] = useState(false);
  const [editID, setEditID] = useState(null);
  const [alert, setAlert] = useState({ show: false, msg: "", type: "" });
  return (
    <section>
        
    </section>
  )
};

export default Main;
