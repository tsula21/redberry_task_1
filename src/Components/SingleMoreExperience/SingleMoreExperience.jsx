import React, { useContext, useEffect, useState } from "react";
import { UserContext } from "../../UserContext";
import red from "../../Assets/form/validation/red.svg";
import green from "../../Assets/form/validation/green.svg";

const SingleMoreExperience = ({ index, indicator, setIndicator }) => {
  const { experienceInfo, setExperienceInfo, setValidationExp, validationExp } =
    useContext(UserContext);

  const [forPosition, setForPosition] = useState(null);
  const [forEmployer, setForEmployer] = useState(null);
  const [forAbout, setForAbout] = useState(null);
  const [forStart, setStart] = useState(null);
  const [forEnd, setEnd] = useState(null);

  const positionValidation = () => {
    const regex = /^.{2,}$/;
    if (regex.test(experienceInfo[index].position)) {
      setForPosition(true);
      console.log("val true");
    } else if (
      !regex.test(experienceInfo[index].position) &&
      experienceInfo[index].position !== ""
    ) {
      setForPosition(false);
      console.log("val false");
    } else {
      // setForPosition(null);
      console.log("val null");
    }
  };
  const employerValidation = () => {
    const regex = /^.{2,}$/;
    if (regex.test(experienceInfo[index].company)) {
      setForEmployer(true);
    } else if (
      !regex.test(experienceInfo[index].company) &&
      experienceInfo[index].company !== ""
    ) {
      setForEmployer(false);
    } else {
      // setForEmployer(null);
    }
  };
  const aboutValidation = () => {
    const regex = /^.{3,}$/;
    if (regex.test(experienceInfo[index].description)) {
      setForAbout(true);
    } else if (
      !regex.test(experienceInfo[index].description) &&
      experienceInfo[index].description !== ""
    ) {
      setForAbout(false);
    } else {
      // setForAbout(null);
    }
  };

  const nextPage = () => {
    if (
      forPosition &&
      forEmployer &&
      forAbout &&
      experienceInfo[index].start &&
      experienceInfo[index].end
    ) {
      setValidationExp(true);
      setIndicator(true);
    } else {
      setValidationExp(false);
    }
  };

  const testfunc = () => {
    if (
      forPosition &&
      forEmployer &&
      forAbout &&
      experienceInfo[index].start &&
      experienceInfo[index].end
    ) {
      //  setValidationExp(true);
    } else {
      // setValidationExp(false);
      if (forPosition == null) {
        setForPosition(false);
      }
      if (forEmployer == null) {
        setForEmployer(false);
      }
      if (forAbout == null) {
        setForAbout(false);
      }
      if (!experienceInfo[index].end.length) {
        setEnd(false);
        console.log(forEnd, "end");
      }
      if (!experienceInfo[index].start.length) {
        setStart(false);
        console.log(forStart, "start");
      }
    }
  };

  useEffect(() => {
    if (!indicator) {
      testfunc();
    }
  }, [indicator]);

  useEffect(() => {
    positionValidation();
    employerValidation();
    aboutValidation();
    nextPage();
  }, [
    experienceInfo[index].position,
    experienceInfo[index].company,
    experienceInfo[index].description,
    experienceInfo[index].end,
    experienceInfo[index].start,
    forAbout,
    forPosition,
    forEmployer,
  ]);
  return (
    <div className="experience_tab">
      <section className="position validation_main">
        <div>
          <h2 className="global_input_titles">თანამდებობა</h2>
          <input
            className={`global_common_input normal_inputs full_input ${
              forPosition && "isValid"
            } ${forPosition == false && "invalid"}`}
            type="text"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
            pattern="^[2-9_ ]*.{3,}$"
            value={experienceInfo[index].position}
            onChange={(e) => {
              setExperienceInfo(
                experienceInfo.map((item, i) => {
                  if (i == index) {
                    return {
                      ...experienceInfo[index],
                      position: e.target.value,
                    };
                  } else {
                    return item;
                  }
                })
              );
            }}
            // onChange={(e) => {
            //   setExperienceInfo(
            //     experienceInfo.map((item) => {
            //       if (item.id == index) {
            //         return {
            //           ...experienceInfo[index],
            //           position: e.target.value,
            //         };
            //       } else {
            //         return item;
            //       }
            //     })
            //   );
            // }}
          />
          <div className="global_input_validations">მინიმუმ 2 სიმბოლო</div>
        </div>
        <div
          className={`validation_icons ${forPosition == false ? "redd" : ""}`}
        ></div>
        <div
          className={`validation_icons ${forPosition == true ? "greenn" : ""}`}
        ></div>
      </section>
      <section className="employer validation_main">
        <div>
          <h2 className="global_input_titles">დამსაქმებელი</h2>
          <input
            className={`global_common_input normal_inputs full_input ${
              forEmployer && "isValid"
            } ${forEmployer == false && "invalid"}`}
            type="text"
            placeholder="დამსაქმებელი"
            pattern="^[2-9_ ]*.{3,}$"
            value={experienceInfo[index].company}
            onChange={(e) => {
              setExperienceInfo(
                experienceInfo.map((item, i) => {
                  if (i == index) {
                    return {
                      ...experienceInfo[index],
                      company: e.target.value,
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
          className={`validation_icons ${forEmployer == false ? "redd" : ""}`}
        ></div>
        <div
          className={`validation_icons ${forEmployer == true ? "greenn" : ""}`}
        ></div>
      </section>
      <section className="working_date">
        <div>
          <h2 className="global_input_titles">დაწყების რიცხვი</h2>
          <div
            className={`date_input ${
              experienceInfo[index].start.length && "global_validation_green"
            } ${forStart == false && "invalid"}`}
          >
            <input
              className="date_inputs"
              type="date"
              placeholder="mm / dd / yyyy"
              value={experienceInfo[index].start}
              onChange={(e) => {
                setExperienceInfo(
                  experienceInfo.map((item, i) => {
                    if (i == index) {
                      return {
                        ...experienceInfo[index],
                        start: e.target.value,
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
        <div>
          <h2 className="global_input_titles">დამთავრების რიცხვი</h2>
          <div
            className={`date_input ${
              experienceInfo[index].end.length && "global_validation_green"
            } ${forEnd == false && "invalid"}`}
          >
            <input
              className="date_inputs"
              type="date"
              placeholder="mm / dd / yyyy"
              value={experienceInfo[index].end}
              onChange={(e) => {
                setExperienceInfo(
                  experienceInfo.map((item, i) => {
                    if (i == index) {
                      return {
                        ...experienceInfo[index],
                        end: e.target.value,
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
      <section className="about_me">
        <h2 className="global_input_titles">აღწერა</h2>
        <textarea
          className={`global_textarea experience_page ${
            forAbout && "isValid"
          } ${forAbout == false && "invalid"}`}
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          value={experienceInfo[index].description}
          onChange={(e) => {
            setExperienceInfo(
              experienceInfo.map((item, i) => {
                if (i == index) {
                  return {
                    ...experienceInfo[index],
                    description: e.target.value,
                  };
                } else {
                  return item;
                }
              })
            );
          }}
        >
          ზოგადი ინფო შენ შესახებ
        </textarea>
      </section>
      <div className="tab_divider_line"></div>
    </div>
  );
};

export default SingleMoreExperience;
