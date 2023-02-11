import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./Personal.css";
import UploadImage from "../Upload/Upload";
import red from "../../Assets/form/validation/red.svg";
import green from "../../Assets/form/validation/green.svg";
//

const Personal = () => {
  const {
    pageNum,
    setPageNum,
    resumeInfo,
    setResumeInfo,
    resetArr,
    remove,
    validation,
  } = useContext(UserContext);

  const [forGmail, setForGmail] = useState(null);
  const [forPhone, setForPhone] = useState(null);
  const [forName, setForName] = useState(null);
  const [forLastName, setForLastName] = useState(null);

  const nameValidation = () => {
    const regex = /^[ა-ჰ]{2,}$/;
    if (regex.test(resumeInfo.personal.firstname)) {
      setForName(true);
    } else if (
      !regex.test(resumeInfo.personal.firstname) &&
      resumeInfo.personal.firstname !== ""
    ) {
      setForName(false);
    } else {
      setForName(null);
    }
  };
  const lastNameValidation = () => {
    const regex = /^[ა-ჰ]{2,}$/;
    if (regex.test(resumeInfo.personal.lastname)) {
      setForLastName(true);
    } else if (
      !regex.test(resumeInfo.personal.lastname) &&
      resumeInfo.personal.lastname !== ""
    ) {
      setForLastName(false);
    } else {
      setForLastName(null);
    }
  };
  const emailValidation = () => {
    const regex = /@redberry\.ge/i;
    if (regex.test(resumeInfo.personal.email)) {
      setForGmail(true);
    } else if (
      !regex.test(resumeInfo.personal.email) &&
      resumeInfo.personal.email !== ""
    ) {
      setForGmail(false);
    } else {
      setForGmail(null);
    }
  };
  const numValidation = () => {
    const regex = /^(\+?995)?(79\d{7}|5\d{8})$/;

    if (regex.test(resumeInfo.personal.phone)) {
      setForPhone(true);
      console.log("is valid");
    } else if (
      !regex.test(resumeInfo.personal.phone) &&
      resumeInfo.personal.phone !== ""
    ) {
      console.log("no valid");
      setForPhone(false);
    } else {
      console.log("????");
      setForPhone(null);
    }
  };

  useEffect(() => {
    emailValidation();
    numValidation();
    nameValidation();
    lastNameValidation();
    // console.log(forGmail);
  }, [
    resumeInfo.personal.email,
    resumeInfo.personal.phone,
    resumeInfo.personal.firstname,
    resumeInfo.personal.lastname,
  ]);

  return (
    <>
      <section className="personal_name">
        <div className="firstName">
          <div>
            <h2
              className="global_input_titles"
              onClick={() => console.log(forGmail)}
            >
              სახელი
            </h2>
            <input
              className={`global_common_input name_inputs normal_inputs ${
                forName && "isValid"
              }`}
              type="text"
              placeholder="ანზორ"
              pattern="^[ა-ჰ]{2,16}$"
              value={resumeInfo.personal.firstname}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.personal,
                  firstname: e.target.value,
                };
                const updateResumeInfo = {
                  ...resumeInfo,
                  personal: updateValue,
                };
                setResumeInfo(updateResumeInfo);
              }}
            />
            <div className="global_input_validations">
              მინიმუმ 2 ასო, ქართული ასოები
            </div>
          </div>
          <div
            className={`validation_icons forName ${
              forName == false ? "redd" : ""
            }`}
          ></div>
          <div
            className={`validation_icons forName ${
              forName == true ? "greenn" : ""
            }`}
          ></div>
        </div>
        <div className="lastName">
          <div>
            <h2 className="global_input_titles">გვარი</h2>
            <input
              className={`global_common_input name_inputs normal_inputs ${
                forLastName && "isValid"
              }`}
              type="text"
              placeholder="მუმლაძე"
              pattern="^[ა-ჰ]{2,16}$"
              value={resumeInfo.personal.lastname}
              onChange={(e) => {
                const updateValue = {
                  ...resumeInfo.personal,
                  lastname: e.target.value,
                };
                const updateResumeInfo = {
                  ...resumeInfo,
                  personal: updateValue,
                };
                setResumeInfo(updateResumeInfo);
              }}
            />
            <div className="global_input_validations">
              მინიმუმ 2 ასო, ქართული ასოები
            </div>
          </div>
          {/*  */}
          <div
            className={`validation_icons ${forLastName == false ? "redd" : ""}`}
          ></div>
          <div
            className={`validation_icons  ${
              forLastName == true ? "greenn" : ""
            }`}
          ></div>
        </div>
      </section>
      <section className="upload_section">
        <h2 className="global_input_titles">პირადი ფოტოს ატვირთვა</h2>
        <UploadImage />
      </section>
      <section className="about_me">
        <h2 className="global_input_titles">ჩემ შესახებ (არასავალდებულო)</h2>
        <textarea
          className={`global_textarea ${
            resumeInfo.personal.about.length > 0 && "greenn"
          }`}
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
      <section className="gmail validation_main">
        <div>
          <h2 className="global_input_titles">ელ.ფოსტა</h2>
          <input
            className={`global_common_input normal_inputs full_input ${
              forGmail && "isValid"
            }`}
            type="email"
            // pattern=".+@redberry\.ge"
            placeholder="anzorr777@redberry.ge"
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
        </div>
        <div
          className={`validation_icons ${forGmail == false ? "redd" : ""}`}
        ></div>
        <div
          className={`validation_icons ${forGmail == true ? "greenn" : ""}`}
        ></div>
      </section>
      <section className="phone validation_main">
        <div>
          <h2 className="global_input_titles">მობილურის ნომერი</h2>
          <input
            className={`global_common_input normal_inputs full_input ${
              forPhone && "isValid"
            }`}
            type="text"
            placeholder="+995 551 12 34 56"
            pattern="([+]995)[5][0-9]{8}"
            maxLength="13"
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
        </div>
        <div
          className={`validation_icons ${forPhone == false ? "redd" : ""}`}
        ></div>
        <div
          className={`validation_icons ${forPhone == true ? "greenn" : ""}`}
        ></div>
      </section>

      <button className="next_back personal_page" onClick={() => setPageNum(2)}>
        ᲨᲔᲛᲓᲔᲒᲘ
      </button>
    </>
  );
};

export default Personal;
