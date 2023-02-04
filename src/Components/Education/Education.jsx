import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./Education.css";
//
import back from "../../Assets/form/left_arrow.svg";

const Education = () => {
  const { pageNum, setPageNum } = useContext(UserContext);
  return (
    <>
      <div className="global_header_container">
        <Link to={`${pageNum == 1 ? "/" : ""}`} onClick={() => setPageNum(2)}>
          <div className="global_back_icon">
            <img src={back} alt="back" />
          </div>
        </Link>
        <div className="global_content_header">
          <span>
            <div className="page_title">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</div>
            <p>3/3</p>
          </span>
          <div className="global_underline"></div>
        </div>
      </div>
      <button
        className="next_back personal_page short"
        onClick={() => setPageNum(2)}
      >
        უკან
      </button>
      <button className="next_back personal_page" onClick={() => setPageNum(3)}>
        ᲨᲔᲛᲓᲔᲒᲘ
      </button>
    </>
  );
};

export default Education;
