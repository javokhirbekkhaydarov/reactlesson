import React, { useState } from "react";
import Menu from "./Menu";
import items from "./data";
import "./Main.css";
import Categories from "./Categories";

const allCategories = ["all", ...new Set(items.map((item) => item.category))];
const Main = () => {
  const [menuItems, setMenuItems] = useState(items);
  const [categories, setCategories] = useState(allCategories);

  const filterItems = (category) => {
    if (category === "all") {
      setMenuItems(items);
      return;
    }

    const newItems = items.filter((item) => item.category === category);
    setMenuItems(newItems);
  };
  return (
    <main>
      <section className="menu section">
        <div className="title">
          <h2>
            Our Menu
            <div className="underline"></div>
          </h2>
        </div>

        <Categories categories={categories} filterItem={filterItems} />
        <Menu items={menuItems} />
      </section>
    </main>
  );
};

export default Main;
