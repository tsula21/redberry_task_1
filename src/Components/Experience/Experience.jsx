import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./Experience.css";
//
import back from "../../Assets/form/left_arrow.svg";

const Experience = () => {
  const { pageNum, setPageNum } = useContext(UserContext);
  return (
    <>
      <div className="global_header_container">
        <Link to={`${pageNum == 1 ? "/" : ""}`} onClick={() => setPageNum(1)}>
          <div className="global_back_icon">
            <img src={back} alt="back" />
          </div>
        </Link>

        <div className="global_content_header">
          <span>
            <div className="page_title">ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ</div>
            <p>2/3</p>
          </span>
          <div className="global_underline"></div>
        </div>
      </div>
      <div className="experience_tab">
        <section className="position">
          <h2 className="global_input_titles">თანამდებობა</h2>
          <input
            className="global_common_input normal_inputs full_input"
            type="text"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
          />
          <div className="global_input_validations">მინიმუმ 2 სიმბოლო</div>
        </section>
        <section className="employer">
          <h2 className="global_input_titles">დამსაქმებელი</h2>
          <input
            className="global_common_input normal_inputs full_input"
            type="text"
            placeholder="დამსაქმებელი"
          />
          <div className="global_input_validations">მინიმუმ 2 სიმბოლო</div>
        </section>
        <section className="personal_name">
          <div className="firstName">
            <h2 className="global_input_titles">დაწყების რიცხვი</h2>
            <input
              className="global_common_input name_inputs normal_inputs"
              type="text"
              placeholder="mm / dd / yyyy"
            />
          </div>
          <div className="lastName">
            <h2 className="global_input_titles">დამთავრების რიცხვი</h2>
            <input
              className="global_common_input name_inputs normal_inputs"
              type="text"
              placeholder="mm / dd / yyyy"
            />
          </div>
        </section>
        <section className="about_me">
          <h2 className="global_input_titles">აღწერა</h2>
          <textarea
            className="global_textarea experience_page"
            value={"როლი თანამდებობაზე და ზოგადი აღწერა"}
            onChange={(e) => {
              console.log(e);
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
