import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./Education.css";
//
import SingleMoreEducation from "../SingleMoreEducation/SingleMoreEducation";

const Education = () => {
  const { setPageNum, educationInfo, addNewEducationObg } =
    useContext(UserContext);
  return (
    <>
      {educationInfo.map((item, index) => {
        return <SingleMoreEducation key={index} index={index} item={item} />;
      })}

      <button className="addmorefield" onClick={() => addNewEducationObg()}>
        სხვა სასწავლებლის დამატება
      </button>
      <button
        className="next_back personal_page short"
        onClick={() => setPageNum(2)}
      >
        უკან
      </button>
      <button className="next_back personal_page" onClick={() => setPageNum(3)}>
        ᲓᲐᲡᲠᲣᲚᲔᲑᲐ
      </button>
    </>
  );
};

export default Education;
