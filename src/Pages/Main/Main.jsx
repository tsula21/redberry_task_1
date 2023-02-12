import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./Main.css";
//
import logo from "../../Assets/main/logo.svg";
import logo2 from "../../Assets/main/logo2.png";

const Main = () => {
  const { setPageNum, completed } = useContext(UserContext);
  return (
    <div className="main">
      <div className="main_container">
        <img className="main_logo" src={logo} alt="logo" />
        <div className="global_underline"></div>
        <Link to="/form" onClick={() => setPageNum(1)}>
          <button>ᲠᲔᲖᲘᲣᲛᲔᲡ ᲓᲐᲛᲐᲢᲔᲑᲐ</button>
        </Link>
        <img className="main_logo2" src={logo2} alt="logo2" />
      </div>
    </div>
  );
};

export default Main;
