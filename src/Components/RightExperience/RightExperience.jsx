import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import "./RightExperience.css";

const RightExperience = ({ index }) => {
  const { experienceInfo } = useContext(UserContext);
  return (
    <div className="rightExperience">
      <h2 className="global_rendered_description_title">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h2>
      <section>
        <p className="global_rendered_subtitle">
          {experienceInfo[index].position},
        </p>
        <p className="global_rendered_subtitle">
          {experienceInfo[index].company}
        </p>
      </section>
      <p className="global_rendered_subtitle_italic">
        {experienceInfo[index].start} - {experienceInfo[index].end}
      </p>
      <p className="global_rendered_description">
        {experienceInfo[index].description}
      </p>
    </div>
  );
};

export default RightExperience;
