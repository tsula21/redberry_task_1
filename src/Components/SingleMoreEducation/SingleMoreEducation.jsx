import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import "../DropDownMenu/DropDownMenu.css";
//
import left_arrow from "../../Assets/form/down_arrow.svg";

const SingleMoreEducation = ({ index, indicator, setIndicator }) => {
  const { educationInfo, setEducationInfo, degreeArr, setValidationEduc } =
    useContext(UserContext);
  // For Dropdown Menu
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");
  //
  const [forSchool, setForSchool] = useState(null);
  const [forAbout, setForAbout] = useState(null);
  const [forDegree, setForDegree] = useState(null);
  const [forEnd, setEnd] = useState(null);

  const schoolValidation = () => {
    const regex = /^.{2,}$/;
    if (regex.test(educationInfo[index].university)) {
      setForSchool(true);
    } else if (
      !regex.test(educationInfo[index].university) &&
      educationInfo[index].university !== ""
    ) {
      setForSchool(false);
    } else {
      // setForSchool(null);
    }
  };
  const aboutValidation = () => {
    const regex = /^.{3,}$/;
    if (regex.test(educationInfo[index].education_description)) {
      setForAbout(true);
    } else if (
      !regex.test(educationInfo[index].education_description) &&
      educationInfo[index].education_description !== ""
    ) {
      setForAbout(false);
    } else {
      // setForAbout(null);
    }
  };
  const nextPage = () => {
    if (
      forSchool &&
      forAbout &&
      educationInfo[index].degree &&
      educationInfo[index].education_finish
    ) {
      setValidationEduc(true);
      setIndicator(true);
    } else {
      setValidationEduc(false);
    }
  };
  // ================================================================
  const testfunc = () => {
    if (
      forSchool &&
      forAbout &&
      educationInfo[index].degree &&
      educationInfo[index].education_finish
    ) {
      //
    } else {
      if (forSchool == null) {
        setForSchool(false);
        console.log(forSchool, "school");
      }
      if (forAbout == null) {
        setForAbout(false);
      }
      if (!educationInfo[index].education_finish.length) {
        setEnd(false);
        console.log(forEnd, "end");
      }
      if (forDegree == null) {
        setForDegree(false);
      }
      console.log("else");
    }
  };
  useEffect(() => {
    if (!indicator) {
      testfunc();
      console.log("indicator");
    }
  }, [indicator]);
  // ================================================================
  //
  useEffect(() => {
    aboutValidation();
    schoolValidation();
    nextPage();
  }, [
    educationInfo[index].education_description,
    forAbout,
    forSchool,
    educationInfo[index].university,
    educationInfo[index].education_finish,
    educationInfo[index].degree,
  ]);
  // For Dropdown Menu
  useEffect(() => {
    setEducationInfo(
      educationInfo.map((item, i) => {
        if (i == index) {
          return {
            ...educationInfo[index],
            degree: educationInfo[index].degree,
          };
        } else {
          return item;
        }
      })
    );
  }, [selected]);
  return (
    <>
      <section className="school validation_main">
        <div>
          <h2 className="global_input_titles">სასწავლებელი</h2>
          <input
            className={`global_common_input normal_inputs full_input ${
              forSchool && "isValid"
            }  ${forSchool == false && "invalid"}`}
            pattern="^[2-9_ ]*.{3,}$"
            type="text"
            placeholder="სასწავლებელი"
            value={educationInfo[index].university}
            onChange={(e) => {
              setEducationInfo(
                educationInfo.map((item, i) => {
                  if (i == index) {
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
        <div
          className={`validation_icons ${forSchool == false ? "redd" : ""}`}
        ></div>
        <div
          className={`validation_icons ${forSchool == true ? "greenn" : ""}`}
        ></div>
      </section>
      <section className="working_date">
        <div>
          <h2 className="global_input_titles">ხარისხი</h2>
          <div
            className={`date_input ${
              educationInfo[index].degree && "global_validation_green"
            } ${forDegree == false && "invalid"}`}
          >
            <div className="dropdown">
              <div className="dropdown-btn">
                {educationInfo[index].degree
                  ? educationInfo[index].degree
                  : "აირჩიეთ ხარისხი"}
                <img
                  src={left_arrow}
                  onClick={() => setIsActive(!isActive)}
                  alt="left_arrow"
                />
              </div>
              {isActive && (
                <div className="dropdown-content">
                  {degreeArr.map((item, i) => {
                    return (
                      <div
                        className="dropdown-item"
                        key={i}
                        onClick={(e) => {
                          {
                            setEducationInfo(
                              educationInfo.map((item, i) => {
                                if (i == index) {
                                  return {
                                    ...educationInfo[index],
                                    degree: e.target.textContent,
                                  };
                                } else {
                                  return item;
                                }
                              })
                            );
                          }

                          setIsActive(false);
                        }}
                      >
                        <p>{item.title}</p>
                      </div>
                    );
                  })}
                </div>
              )}
            </div>
          </div>
        </div>
        <div>
          <h2 className="global_input_titles">დამთავრების რიცხვი</h2>
          <div
            className={`date_input ${
              educationInfo[index].education_finish.length &&
              "global_validation_green"
            } ${forEnd == false && "invalid"}`}
          >
            <input
              className="date_inputs"
              type="date"
              placeholder="mm / dd / yyyy"
              value={educationInfo[index].education_finish}
              onChange={(e) => {
                setEducationInfo(
                  educationInfo.map((item, i) => {
                    if (i == index) {
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
          className={`global_textarea experience_page ${
            forAbout && "isValid"
          } ${forAbout == false && "invalid"}`}
          placeholder="განათლების აღწერა"
          value={educationInfo[index].education_description}
          onChange={(e) => {
            setEducationInfo(
              educationInfo.map((item, i) => {
                if (i == index) {
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
