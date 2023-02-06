import React, { useContext } from "react";
import "./RightEducatio";
import { UserContext } from "../../UserContext";

const RightExperience = () => {
  const { resumeInfo } = useContext(UserContext);
  return (
    <div className="rightExperience">
      <h2 className="global_rendered_description_title">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h2>
      <p className="global_rendered_subtitle">
        {resumeInfo.education.university}
      </p>
      <p className="global_rendered_subtitle_italic">
        {resumeInfo.education.education_finish}
      </p>
      <p className="global_rendered_description">
        {resumeInfo.education.education_description}
      </p>
    </div>
  );
};

export default RightExperience;
