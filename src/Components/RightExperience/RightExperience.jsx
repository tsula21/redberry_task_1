import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import "./RightExperience.css";

const RightExperience = () => {
  const { resumeInfo, setResumeInfo } = useContext(UserContext);
  return (
    <div className="rightExperience">
      <h2 className="global_rendered_description_title">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h2>
      <p className="global_rendered_subtitle">
        {resumeInfo.experience.position}
      </p>
      <p className="global_rendered_subtitle_italic">2020-09-23 - 2020-09-23</p>
      <p className="global_rendered_description">
        {resumeInfo.experience.description}
      </p>
    </div>
  );
};

export default RightExperience;
