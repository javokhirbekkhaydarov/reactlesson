import React from "react";

import { useGlobalContext } from "./Context";
const Modal = () => {
  const { isModalOpen, closeModal, correct, questions } = useGlobalContext();
  return (
    <div
      className={`${
        isModalOpen ? "modal-container isOpen" : "modal-container"
      }`}
    >
      <div className="modal-content">
        <h2>Tabriklation 🎉</h2>
        <p>
          Your answered {((correct / questions.length) * 100).toFixed(0)} % of
          questions correctly
        </p>
        <button className="close-btn" onClick={closeModal}>
          play again
        </button>
      </div>
    </div>
  );
};

export default Modal;
