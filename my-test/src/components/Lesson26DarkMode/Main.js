import React, { useEffect, useState } from "react";
import data from "./data";
import Article from "./Article";
import "./Main.css";
const getStorageTheme = () => {
  let theme = "light-time";
  if (localStorage.getItem("theme")) {
    theme = localStorage.getItem("theme");
  }
  return theme;
};
const Main = () => {
  const [theme, setTheme] = useState(getStorageTheme());

  const toggleTheme = () => {
    if (theme === "light-theme") {
      setTheme("dark-theme");
    } else {
      setTheme("light-theme");
    }
  };

  useEffect(() => {
    document.documentElement.className = theme;
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <main>
      <nav>
        <div className="nav-center">
          <h1>OverReacted</h1>
          <button className="btn" onClick={toggleTheme}>
            mode
          </button>
        </div>
      </nav>
      <section className="articles">
        {data.map((item) => {
          return <Article key={item.id} />;
        })}
      </section>
    </main>
  );
};

export default Main;
