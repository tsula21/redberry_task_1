import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./Education.css";
//
import SingleMoreEducation from "../SingleMoreEducation/SingleMoreEducation";

const Education = () => {
  const {
    setPageNum,
    educationInfo,
    addNewEducationObg,
    validationEduc,
    setCompleted,
  } = useContext(UserContext);

  const allDone = () => {
    if (validationEduc) {
      console.log("completed");
      setCompleted(true);
    } else {
      console.log("not completed");
    }
  };

  const addNewSection = () => {
    if (validationEduc) {
      addNewEducationObg();
    } else {
      console.log("fill all fields to add more Education");
    }
  };
  return (
    <>
      {educationInfo.map((item, index) => {
        return <SingleMoreEducation key={index} index={index} item={item} />;
      })}

      <button className="addmorefield" onClick={() => addNewSection()}>
        სხვა სასწავლებლის დამატება
      </button>
      <button
        className="next_back personal_page short"
        onClick={() => setPageNum(2)}
      >
        უკან
      </button>

      <button className="next_back personal_page" onClick={() => allDone()}>
        ᲓᲐᲡᲠᲣᲚᲔᲑᲐ
      </button>

      {/* {validationEduc ? (
        <Link to="/completed">
          <button className="next_back personal_page" onClick={() => allDone()}>
            ᲓᲐᲡᲠᲣᲚᲔᲑᲐ
          </button>
        </Link>
      ) : (
        <button className="next_back personal_page">ᲓᲐᲡᲠᲣᲚᲔᲑᲐ</button>
      )} */}
    </>
  );
};

export default Education;
