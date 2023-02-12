import React, { useContext } from "react";
import { Link } from "react-router-dom";
import RightSide from "../../Components/RightSide/RightSide";
import { UserContext } from "../../UserContext";
import "./Final.css";
//
import back from "../../Assets/form/left_arrow.svg";

const Final = () => {
  const { resetArray, setCompleted } = useContext(UserContext);
  return (
    <>
      <div className="global_header_container">
        <Link
          to="/"
          onClick={() => {
            resetArray();
            setCompleted(false);
          }}
        >
          <div className="global_back_icon">
            <img src={back} alt="back" />
          </div>
        </Link>
      </div>

      <div className="form_page_right final">
        <RightSide />
      </div>
    </>
  );
};

export default Final;
