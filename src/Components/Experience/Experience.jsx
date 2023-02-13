import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import SingleMoreExperience from "../SingleMoreExperience/SingleMoreExperience";
import "./Experience.css";
//

const Experience = () => {
  const { setPageNum, experienceInfo, addNewExperienceObg, validationExp } =
    useContext(UserContext);
  const [indicator, setIndicator] = useState(true);
  const nextPage = () => {
    if (validationExp) {
      console.log("next");
      setPageNum(3);
      setIndicator(true);
    } else {
      console.log("fill all fields");
      setIndicator(false);
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
        return (
          <SingleMoreExperience
            key={index}
            index={index}
            item={item}
            indicator={indicator}
            setIndicator={setIndicator}
          />
        );
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
