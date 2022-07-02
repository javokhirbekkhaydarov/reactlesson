import React, { useEffect } from "react";

const Modal = ({ modalContent, closeModal }) => {
  useEffect(() => {
    setTimeout(() => {
      closeModal();
    }, 200);
  });
  return <div className="modal">{modalContent}</div>;
};

export default Modal;
