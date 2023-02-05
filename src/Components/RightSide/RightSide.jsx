import React, { useContext, useState } from "react";
import "./RightSide.css";
import { UserContext } from "../../UserContext";
import RightPersonal from "../RightPersonal/RightPersonal";
import RightExperience from "../RightExperience/RightExperience";
import RightEducation from "../RightEducation/RightExperience";
//

import mini_logo from "../../Assets/form/mini_logo.svg";
import avatar from "../../Assets/form/avatar.png";

const RightSide = () => {
  const { resumeInfo, setResumeInfo } = useContext(UserContext);

  return (
    <div
      className={`rightside ${
        resumeInfo.personal.firstname.length > 0 && "active"
      }`}
    >
      <div className="rendering_options">
        <RightPersonal />
        <div className="tab_divider_rightside for_personal"></div>
        <RightExperience />
        <div className="tab_divider_rightside for_experience"></div>
        <RightEducation />
      </div>

      {/* <div className="tab_divider_rightside"></div> */}

      <img className="rightside_logo" src={mini_logo} alt="logo" />
    </div>
  );
};

export default RightSide;
