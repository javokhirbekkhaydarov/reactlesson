import React from "react";
import Button from "./Button";
import SearchForm from "./SearchForm";
import Stories from "./Stories";
import "./Main.css";
const Main = () => {
  return (
    <>
      <SearchForm />
      <Button />
      <Stories />
    </>
  );
};

export default Main;
