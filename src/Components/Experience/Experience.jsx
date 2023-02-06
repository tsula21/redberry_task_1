import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./Experience.css";
//
import calendar from "../../Assets/form/calendar.svg";

const Experience = () => {
  const { pageNum, setPageNum, resumeInfo, setResumeInfo } =
    useContext(UserContext);
  return (
    <>
      <div className="experience_tab">
        <section className="position">
          <h2 className="global_input_titles">თანამდებობა</h2>
          <input
            className="global_common_input normal_inputs full_input"
            type="text"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
            value={resumeInfo.experience.position}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.experience,
                position: e.target.value,
              };
              const updateResumeInfo = {
                ...resumeInfo,
                experience: updateValue,
              };
              setResumeInfo(updateResumeInfo);
            }}
          />
          <div className="global_input_validations">მინიმუმ 2 სიმბოლო</div>
        </section>
        <section className="employer">
          <h2 className="global_input_titles">დამსაქმებელი</h2>
          <input
            className="global_common_input normal_inputs full_input"
            type="text"
            placeholder="დამსაქმებელი"
            value={resumeInfo.experience.company}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.experience,
                company: e.target.value,
              };
              const updateResumeInfo = {
                ...resumeInfo,
                experience: updateValue,
              };
              setResumeInfo(updateResumeInfo);
            }}
          />
          <div className="global_input_validations">მინიმუმ 2 სიმბოლო</div>
        </section>
        <section className="working_date">
          <div>
            <h2 className="global_input_titles">დაწყების რიცხვი</h2>
            <div className="date_input">
              <input type="text" placeholder="mm / dd / yyyy" />
              <img src={calendar} alt="calendar" />
            </div>
          </div>
          <div>
            <h2 className="global_input_titles">დამთავრების რიცხვი</h2>
            <div className="date_input">
              <input type="text" placeholder="mm / dd / yyyy" />
              <img src={calendar} alt="calendar" />
            </div>
          </div>
        </section>
        <section className="about_me">
          <h2 className="global_input_titles">აღწერა</h2>
          <textarea
            className="global_textarea experience_page"
            placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
            value={resumeInfo.experience.description}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.experience,
                description: e.target.value,
              };
              const updateResumeInfo = {
                ...resumeInfo,
                experience: updateValue,
              };
              setResumeInfo(updateResumeInfo);
            }}
          >
            ზოგადი ინფო შენ შესახებ
          </textarea>
        </section>
        <div className="tab_divider_line"></div>
      </div>

      {/* =============================== */}
      <button className="addmorefield">მეტი გამოცდილების დამატება</button>
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
