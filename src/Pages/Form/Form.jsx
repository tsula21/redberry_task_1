import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import Personal from "../../Components/Personal/Personal";
import Experience from "../../Components/Experience/Experience";
import Education from "../../Components/Education/Education";
import RightSide from "../../Components/RightSide/RightSide";
import "./Form.css";
import FormHeader from "../../Components/FormHeader/FormHeader";

const Form = () => {
  const { pageNum } = useContext(UserContext);
  return (
    <div className="form">
      <div className="form_container">
        <div className="form_page_left">
          <div className="form_page_left_container">
            <FormHeader />
            {pageNum == 1 && <Personal />}
            {pageNum == 2 && <Experience />}
            {pageNum == 3 && <Education />}
          </div>
        </div>
        <div className="form_page_right">
          <RightSide />
        </div>
      </div>
    </div>
  );
};

export default Form;
