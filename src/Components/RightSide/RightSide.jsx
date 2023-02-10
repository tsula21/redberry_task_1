import React, { useContext, useState } from "react";
import "./RightSide.css";
import { UserContext } from "../../UserContext";
import RightPersonal from "../RightPersonal/RightPersonal";
import RightExperience from "../RightExperience/RightExperience";
import RightEducation from "../RightEducation/RightEducatio";
//

import mini_logo from "../../Assets/form/mini_logo.svg";
import avatar from "../../Assets/form/avatar.png";

const RightSide = () => {
  const { resumeInfo, experienceInfo, educationInfo } = useContext(UserContext);

  return (
    <div
      className={`rightside ${
        resumeInfo.personal.firstname.length > 0 && "active"
      }`}
    >
      <div className="rendering_options">
        <RightPersonal />
        <div className="tab_divider_rightside for_personal"></div>
        {experienceInfo.map((item, index) => {
          return <RightExperience key={index} index={index} />;
        })}
        <div className="tab_divider_rightside for_experience"></div>
        {educationInfo.map((item, index) => {
          return <RightEducation key={index} index={index} />;
        })}
      </div>

      <img className="rightside_logo" src={mini_logo} alt="logo" />
    </div>
  );
};

export default RightSide;
