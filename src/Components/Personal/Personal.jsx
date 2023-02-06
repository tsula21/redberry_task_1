import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./Personal.css";
import UploadImage from "../Upload/Upload";
//

const Personal = () => {
  const { pageNum, setPageNum, resumeInfo, setResumeInfo } =
    useContext(UserContext);

  return (
    <>
      <section className="personal_name">
        <div className="firstName">
          <h2 className="global_input_titles">სახელი</h2>
          <input
            className="global_common_input name_inputs normal_inputs"
            type="text"
            placeholder="ანზორ"
            value={resumeInfo.personal.firstname}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.personal,
                firstname: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, personal: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
          <div className="global_input_validations">
            მინიმუმ 2 ასო, ქართული ასოები
          </div>
        </div>
        <div className="lastName">
          <h2 className="global_input_titles">გვარი</h2>
          <input
            className="global_common_input name_inputs normal_inputs"
            type="text"
            placeholder="მუმლაძე"
            value={resumeInfo.personal.lastname}
            onChange={(e) => {
              const updateValue = {
                ...resumeInfo.personal,
                lastname: e.target.value,
              };
              const updateResumeInfo = { ...resumeInfo, personal: updateValue };
              setResumeInfo(updateResumeInfo);
            }}
          />
          <div className="global_input_validations">
            მინიმუმ 2 ასო, ქართული ასოები
          </div>
        </div>
      </section>
      <section className="upload_section">
        <h2 className="global_input_titles">პირადი ფოტოს ატვირთვა</h2>
        <UploadImage />
      </section>
      <section className="about_me">
        <h2 className="global_input_titles">ჩემ შესახებ (არასავალდებულო)</h2>
        <textarea
          className="global_textarea"
          value={resumeInfo.personal.about}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.personal,
              about: e.target.value,
            };
            const updateResumeInfo = { ...resumeInfo, personal: updateValue };
            setResumeInfo(updateResumeInfo);
          }}
        >
          ზოგადი ინფო შენ შესახებ
        </textarea>
      </section>
      <section className="gmail">
        <h2 className="global_input_titles">ელ.ფოსტა</h2>
        <input
          className="global_common_input normal_inputs full_input"
          type="text"
          placeholder="anzorr666@redberry.ge"
          value={resumeInfo.personal.email}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.personal,
              email: e.target.value,
            };
            const updateResumeInfo = { ...resumeInfo, personal: updateValue };
            setResumeInfo(updateResumeInfo);
          }}
        />
        <div className="global_input_validations">
          უნდა მთავრდებოდეს @redberry.ge-ით
        </div>
      </section>
      <section className="phone">
        <h2 className="global_input_titles">მობილურის ნომერი</h2>
        <input
          className="global_common_input normal_inputs full_input"
          type="text"
          placeholder="+995 551 12 34 56"
          value={resumeInfo.personal.phone}
          onChange={(e) => {
            const updateValue = {
              ...resumeInfo.personal,
              phone: e.target.value,
            };
            const updateResumeInfo = { ...resumeInfo, personal: updateValue };
            setResumeInfo(updateResumeInfo);
          }}
        />
        <div className="global_input_validations">
          უნდა აკმაყოფილებდეს ქართული მობილურის ნომრის ფორმატს
        </div>
      </section>

      <button className="next_back personal_page" onClick={() => setPageNum(2)}>
        ᲨᲔᲛᲓᲔᲒᲘ
      </button>
    </>
  );
};

export default Personal;
