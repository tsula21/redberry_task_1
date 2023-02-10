import React, { useContext } from "react";
import { Link } from "react-router-dom";
import "./FormHeader.css";
import { UserContext } from "../../UserContext";
//
import back from "../../Assets/form/left_arrow.svg";

const FormHeader = () => {
  const { pageNum, setPageNum, resetArray } = useContext(UserContext);

  return (
    <div className="global_header_container">
      <Link to="/" onClick={() => resetArray()}>
        <div className="global_back_icon">
          <img src={back} alt="back" />
        </div>
      </Link>

      <div className="global_content_header">
        <span>
          {pageNum == 1 && <div className="page_title">ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ</div>}
          {pageNum == 2 && <div className="page_title">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</div>}
          {pageNum == 3 && <div className="page_title">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</div>}
          <p>{pageNum}/3</p>
        </span>
        <div className="global_underline"></div>
      </div>
    </div>
  );
};

export default FormHeader;
