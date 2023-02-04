import React from "react";
import Personal from "../../Components/Personal/Personal";
import RightSide from "../../Components/RightSide/RightSide";
import "./Form.css";

const Form = () => {
  return (
    <div className="form">
      <div className="form_container">
        <div className="form_page_left">
          <Personal />
        </div>
        <div className="form_page_right">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Form;
