import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import SingleMoreExperience from "../SingleMoreExperience/SingleMoreExperience";
import "./Experience.css";
//

const Experience = () => {
  const { setPageNum, experienceInfo, addNewExperienceObg } =
    useContext(UserContext);
  return (
    <>
      {experienceInfo.map((item, index) => {
        return <SingleMoreExperience key={index} index={index} item={item} />;
      })}

      <button className="addmorefield" onClick={() => addNewExperienceObg()}>
        მეტი გამოცდილების დამატება
      </button>
      <button
        className="next_back personal_page short"
        onClick={() => setPageNum(1)}
      >
        უკან
      </button>
      <button className="next_back personal_page" onClick={() => setPageNum(3)}>
        ᲨᲔᲛᲓᲔᲒᲘ
      </button>
    </>
  );
};

export default Experience;
