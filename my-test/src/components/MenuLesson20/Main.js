import React, { useState } from "react";
import Menu from "./Menu";
import items from "./data";
import "./Main.css";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
const Main = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if(category === "all") {
        setMenuItems(items);
        return;
    }

    const newItems = items.filter
  }
  return <div>Main</div>;
};

export default Main;
