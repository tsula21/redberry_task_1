import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./Education.css";
//
import down_arrow from "../../Assets/form/down_arrow.svg";
import DropDownMenu from "../DropDownMenu/DropDownMenu";

const Education = () => {
  const { pageNum, setPageNum, resumeInfo, setResumeInfo } =
    useContext(UserContext);
  return (
    <>
      <section className="school">
        <h2 className="global_input_titles">სასწავლებელი</h2>
        <input
          className="global_common_input normal_inputs full_input"
          type="text"
          placeholder="სასწავლებელი"
          value={resumeInfo.education.university}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.education,
              university: e.target.value,
            };
            const updateResumeInfo = { ...resumeInfo, education: updateValue };
            setResumeInfo(updateResumeInfo);
          }}
        />
        <div className="global_input_validations">მინიმუმ 2 სიმბოლო</div>
      </section>
      <section className="working_date">
        <div>
          <h2 className="global_input_titles">ხარისხი</h2>
          <div className="date_input">
            <DropDownMenu />
            {/* <input type="text" placeholder="აირჩიეთ ხარისხი" />
            <img src={down_arrow} alt="down_arrow" /> */}
          </div>
        </div>
        <div>
          <h2 className="global_input_titles">დამთავრების რიცხვი</h2>
          <div className="date_input">
            <input
              type="date"
              placeholder="mm / dd / yyyy"
              value={resumeInfo.education.education_finish}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.education,
                  education_finish: e.target.value,
                };
                const updateResumeInfo = {
                  ...resumeInfo,
                  education: updateValue,
                };
                setResumeInfo(updateResumeInfo);
              }}
            />
          </div>
        </div>
      </section>
      <section className="about_me education_field">
        <h2 className="global_input_titles">აღწერა</h2>
        <textarea
          className="global_textarea experience_page"
          placeholder="განათლების აღწერა"
          value={resumeInfo.education.education_description}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.education,
              education_description: e.target.value,
            };
            const updateResumeInfo = { ...resumeInfo, education: updateValue };
            setResumeInfo(updateResumeInfo);
          }}
        ></textarea>
      </section>
      <div className="tab_divider_line"></div>
      <button className="addmorefield">მეტი გამოცდილების დამატება</button>
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
