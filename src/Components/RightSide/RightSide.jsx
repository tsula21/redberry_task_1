import React, { useContext, useEffect, useState } from "react";

import "./RightSide.css";
import { UserContext } from "../../UserContext";
import RightPersonal from "../RightPersonal/RightPersonal";
import RightExperience from "../RightExperience/RightExperience";
import RightEducation from "../RightEducation/RightEducatio";
//
import mini_logo from "../../Assets/form/mini_logo.svg";

const RightSide = () => {
  const { resumeInfo, experienceInfo, educationInfo } = useContext(UserContext);

  const checkObjectEmpty = (obj) => {
    return Object.values(obj).every((value) => {
      if (typeof value === "object") {
        return checkObjectEmpty(value);
      } else {
        return !value;
      }
    });
  };

  const isEmpty = checkObjectEmpty(resumeInfo);

  function objTest(arr) {
    return arr.some((obj) => {
      return Object.values(obj).some(Boolean);
    });
  }

  let test2 = objTest(experienceInfo);
  let test3 = objTest(educationInfo);

  return (
    <>
      <div className="rightside">
        <div className="rendering_options">
          {!isEmpty && <RightPersonal />}

          {test2 && (
            <>
              {experienceInfo.map((item, index) => {
                return <RightExperience key={index} index={index} />;
              })}
            </>
          )}

          {test3 && (
            <>
              {educationInfo.map((item, index) => {
                return <RightEducation key={index} index={index} />;
              })}
            </>
          )}
        </div>
      </div>
      <div className="rightside_logo_cont">
        <img className="rightside_logo" src={mini_logo} alt="logo" />
      </div>
    </>
  );
};

export default RightSide;
