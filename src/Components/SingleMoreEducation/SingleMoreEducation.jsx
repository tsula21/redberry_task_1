import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import DropDownMenu from "../DropDownMenu/DropDownMenu";
//
import red from "../../Assets/form/validation/red.svg";
import green from "../../Assets/form/validation/green.svg";

const SingleMoreEducation = ({ index }) => {
  const { educationInfo, setEducationInfo, validation } =
    useContext(UserContext);
  return (
    <>
      <section className="school validation_main">
        <div>
          <h2 className="global_input_titles">სასწავლებელი</h2>
          <input
            className="global_common_input normal_inputs full_input"
            type="text"
            placeholder="სასწავლებელი"
            value={educationInfo[index].university}
            onChange={(e) => {
              setEducationInfo(
                educationInfo.map((item) => {
                  if (item.id == index) {
                    return {
                      ...educationInfo[index],
                      university: e.target.value,
                    };
                  } else {
                    return item;
                  }
                })
              );
            }}
          />
          <div className="global_input_validations">მინიმუმ 2 სიმბოლო</div>
        </div>
        <img
          className="validation_icons"
          src={validation ? green : red}
          alt="red"
        />
      </section>
      <section className="working_date">
        <div>
          <h2 className="global_input_titles">ხარისხი</h2>
          <div className="date_input">
            <DropDownMenu index={index} />
          </div>
        </div>
        <div>
          <h2 className="global_input_titles">დამთავრების რიცხვი</h2>
          <div className="date_input">
            <input
              type="date"
              placeholder="mm / dd / yyyy"
              value={educationInfo[index].education_finish}
              onChange={(e) => {
                setEducationInfo(
                  educationInfo.map((item) => {
                    if (item.id == index) {
                      return {
                        ...educationInfo[index],
                        education_finish: e.target.value,
                      };
                    } else {
                      return item;
                    }
                  })
                );
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
          value={educationInfo[index].education_description}
          onChange={(e) => {
            setEducationInfo(
              educationInfo.map((item) => {
                if (item.id == index) {
                  return {
                    ...educationInfo[index],
                    education_description: e.target.value,
                  };
                } else {
                  return item;
                }
              })
            );
          }}
        ></textarea>
      </section>
      <div className="tab_divider_line"></div>
    </>
  );
};

export default SingleMoreEducation;
