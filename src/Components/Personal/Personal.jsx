import React from "react";
import { Link } from "react-router-dom";
import "./Personal.css";
//
import back from "../../Assets/form/left_arrow.svg";

const Personal = () => {
  return (
    <div className="global_header_container">
      <Link to="/">
        <div className="global_back_icon">
          <img src={back} alt="back" />
        </div>
      </Link>
      <div className="global_content_header">
        <span>
          <div className="page_title">ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</div>
          <p>1/3</p>
        </span>
        <div className="global_underline"></div>
      </div>
    </div>
  );
};

export default Personal;
