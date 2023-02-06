import React from "react";
import "./Modal.css";
//
import close from "../../Assets/form/close.svg";

const Modal = () => {
  return (
    <div className="done_modal">
      <div className="done_modal_container">
        <img src={close} alt="close" />
        <p>რეზიუმე წარმატებით გაიგზავნა 🎉</p>
      </div>
    </div>
  );
};

export default Modal;
