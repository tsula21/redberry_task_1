import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import SingleMoreExperience from "../SingleMoreExperience/SingleMoreExperience";
import "./Experience.css";
//

const Experience = () => {
  const { setPageNum, experienceInfo, addNewExperienceObg, validationExp } =
    useContext(UserContext);
  const nextPage = () => {
    if (validationExp) {
      console.log("next");
      setPageNum(3);
    } else {
      console.log("fill all fields");
    }
  };

  const addNewSection = () => {
    if (validationExp) {
      addNewExperienceObg();
    } else {
      console.log("fill all fields to add more experience");
    }
  };
  return (
    <>
      {experienceInfo.map((item, index) => {
        return <SingleMoreExperience key={index} index={index} item={item} />;
      })}

      <button className="addmorefield" onClick={() => addNewSection()}>
        მეტი გამოცდილების დამატება
      </button>
      <button
        className="next_back personal_page short"
        onClick={() => setPageNum(1)}
      >
        უკან
      </button>
      <button className="next_back personal_page" onClick={() => nextPage()}>
        ᲨᲔᲛᲓᲔᲒᲘ
      </button>
    </>
  );
};

export default Experience;
