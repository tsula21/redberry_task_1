import React from "react";
import "./RightExperience.css";

const RightExperience = () => {
  return (
    <div className="rightExperience">
      <h2 className="global_rendered_description_title">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</h2>
      <p className="global_rendered_subtitle">
        {/* {resumeInfo.experience.position} */}
        წმ. ანდრიას საპატრიარქოს სასწავლებელი,
      </p>
      <p className="global_rendered_subtitle_italic">2020-09-23 - 2020-09-23</p>
      <p className="global_rendered_description">
        {/* {resumeInfo.experience.description} */}
        ვსწავლობდი გულმოდგინეთ. მყავდა ფრიადები. რაც შემეძლო — ვქენი.
        კომპიუტერები მიყვარდა. ვიჯექი ჩემთვის, ვაკაკუნებდი ამ კლავიშებზე.
        მეუნებოდნენ — დაჯექი, წაიკითხე რამე, რას აკაკუნებ, დრო მოვა და
        ჩაგიკაკუნებსო. აჰა, მოვიდა დრო და ვერა ვარ დეველოპერი?
      </p>
    </div>
  );
};

export default RightExperience;
