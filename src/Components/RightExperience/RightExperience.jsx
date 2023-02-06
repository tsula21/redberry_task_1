import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import "./RightExperience.css";

const RightExperience = () => {
  const { resumeInfo } = useContext(UserContext);
  return (
    <div className="rightExperience">
      <h2 className="global_rendered_description_title">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h2>
      <section>
        <p className="global_rendered_subtitle">
          {resumeInfo.experience.position},
        </p>
        <p className="global_rendered_subtitle">
          {resumeInfo.experience.company}
        </p>
      </section>
      <p className="global_rendered_subtitle_italic">
        {resumeInfo.experience.start} - {resumeInfo.experience.end}
      </p>
      <p className="global_rendered_description">
        {resumeInfo.experience.description}
      </p>
    </div>
  );
};

export default RightExperience;
