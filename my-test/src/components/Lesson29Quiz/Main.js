import React from "react";
import { useGlobalContext } from "./Context";
import SetupForm from "./SetupForm";
import Modal from "./Modal";
import Loading from "./Loading";
import "./Main.css";
const Main = () => {
  const {
    waiting,
    loading,
    questions,
    index,
    correct,
    error,
    isModalOpen,
    quiz,
  } = useGlobalContext();
  if (waiting) {
    return <SetupForm />;
  }
  if (loading) {
    return <Loading />;
  }
  return <div>Main</div>;
};

export default Main;
