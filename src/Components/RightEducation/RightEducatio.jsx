import React, { useContext } from "react";
import "./RightEducatio";
import { UserContext } from "../../UserContext";

const RightExperience = ({ index }) => {
  const { educationInfo } = useContext(UserContext);
  return (
    <div className="rightExperience">
      <h2 className="global_rendered_description_title">ᲒᲐᲜᲐᲗᲚᲔᲑᲐ</h2>
      <p className="global_rendered_subtitle">
        {educationInfo[index].university}, {educationInfo[index].degree}
      </p>
      <p className="global_rendered_subtitle_italic">
        {educationInfo[index].education_finish}
      </p>
      <p className="global_rendered_description">
        {educationInfo[index].education_description}
      </p>
    </div>
  );
};

export default RightExperience;
