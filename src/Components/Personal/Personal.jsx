import React, { useState, useContext, useEffect } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../../UserContext";
import "./Personal.css";
import UploadImage from "../Upload/Upload";
import red from "../../Assets/form/validation/red.svg";
import green from "../../Assets/form/validation/green.svg";
//

const Personal = () => {
  const { setPageNum, resumeInfo, setResumeInfo, resetArr, remove } =
    useContext(UserContext);

  const [forGmail, setForGmail] = useState(null);
  const [forPhone, setForPhone] = useState(null);
  const [forName, setForName] = useState(null);
  const [forLastName, setForLastName] = useState(null);
  // =========================TEST============================

  // =====================================================

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
      // setForName(null);
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
      // setForLastName(null);
    }
  };
  const emailValidation = () => {
    // const regex =
    //   /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@redberry\.ge$/;
    let regex = /^[a-zA-Z0-9_.+-]+@redberry\.ge$/;

    if (regex.test(resumeInfo.personal.email)) {
      setForGmail(true);
    } else if (
      !regex.test(resumeInfo.personal.email) &&
      resumeInfo.personal.email !== ""
    ) {
      setForGmail(false);
    } else {
      // setForGmail(null);
    }
  };
  const numValidation = () => {
    const regex = /^(\+995|00995|0)\s*\d{3}\s*\d{2}\s*\d{2}\s*\d{2}$/;
    if (regex.test(resumeInfo.personal.phone)) {
      setForPhone(true);
    } else if (
      !regex.test(resumeInfo.personal.phone) &&
      resumeInfo.personal.phone !== ""
    ) {
      setForPhone(false);
    } else {
      // setForPhone(null);
    }
  };

  const nextPage = () => {
    if (
      forName &&
      forLastName &&
      forPhone &&
      forGmail &&
      resumeInfo.personal.photo[0]
    ) {
      console.log("next");
      setPageNum(2);
    } else {
      if (forName == null) {
        setForName(false);
      }
      if (forLastName == null) {
        setForLastName(false);
      }
      if (forPhone == null) {
        setForPhone(false);
      }
      if (forGmail == null) {
        setForGmail(false);
      }
      console.log("fill all fields");
    }
  };

  useEffect(() => {
    emailValidation();
    numValidation();
    nameValidation();
    lastNameValidation();
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
            <h2 className="global_input_titles">სახელი</h2>
            <input
              className={`global_common_input name_inputs normal_inputs ${
                forName && "isValid"
              } ${forName == false && "invalid"}`}
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
              } ${forLastName == false && "invalid"}`}
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
            } ${forGmail == false && "invalid"}`}
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
            } ${forPhone == false && "invalid"}`}
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

      <button className="next_back personal_page" onClick={() => nextPage()}>
        ᲨᲔᲛᲓᲔᲒᲘ
      </button>
    </>
  );
};

export default Personal;
