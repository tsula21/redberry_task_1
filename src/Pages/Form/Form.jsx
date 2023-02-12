import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import { Link } from "react-router-dom";
import Personal from "../../Components/Personal/Personal";
import Experience from "../../Components/Experience/Experience";
import Education from "../../Components/Education/Education";
import RightSide from "../../Components/RightSide/RightSide";
import "./Form.css";
import FormHeader from "../../Components/FormHeader/FormHeader";
import back from "../../Assets/form/left_arrow.svg";

const Form = () => {
  const { pageNum, completed, resetArray } = useContext(UserContext);
  return (
    <div className="form">
      <div className={`form_container ${completed && "final"}`}>
        <div className="final_header">
          <Link to="/" onClick={() => resetArray()}>
            <div className="global_back_icon">
              <img src={back} alt="back" />
            </div>
          </Link>
        </div>
        <div className={`form_page_left ${completed ? "final" : ""}`}>
          <div className="form_page_left_container">
            <FormHeader />
            {pageNum == 1 && <Personal />}
            {pageNum == 2 && <Experience />}
            {pageNum == 3 && <Education />}
          </div>
        </div>
        <div className={`form_page_right ${completed ? "final" : ""}`}>
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Form;
