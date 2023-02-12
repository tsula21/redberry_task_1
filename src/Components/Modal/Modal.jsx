import React, { useContext, useRef } from "react";
import "./Modal.css";
//
import close from "../../Assets/form/close.svg";
import { UserContext } from "../../UserContext";

const Modal = () => {
  const { completed } = useContext(UserContext);
  const elementRef = useRef(null);

  const handleClick = () => {
    elementRef.current.className = "done_modal";
  };
  return (
    <div ref={elementRef} className={`done_modal  ${completed && "active"}`}>
      <div className="done_modal_container">
        <img onClick={handleClick} src={close} alt="close" />
        <p>რეზიუმე წარმატებით გაიგზავნა 🎉</p>
      </div>
    </div>
  );
};

export default Modal;
