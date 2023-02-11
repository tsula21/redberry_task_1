import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import red from "../../Assets/form/validation/red.svg";
import green from "../../Assets/form/validation/green.svg";

const SingleMoreExperience = ({ index }) => {
  const { experienceInfo, setExperienceInfo, validation } =
    useContext(UserContext);

  return (
    <div className="experience_tab">
      <section className="position validation_main">
        <div>
          <h2 className="global_input_titles">თანამდებობა</h2>
          <input
            className="global_common_input normal_inputs full_input"
            type="text"
            placeholder="დეველოპერი, დიზაინერი, ა.შ."
            required
            // pattern="^[ა-ჰ2-9_ ]*.{3,}$"
            pattern="^[2-9_ ]*.{3,}$"
            value={experienceInfo[index].position}
            onChange={(e) => {
              setExperienceInfo(
                experienceInfo.map((item) => {
                  if (item.id == index) {
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
          />
          <div className="global_input_validations">მინიმუმ 2 სიმბოლო</div>
        </div>
        <img
          className="validation_icons"
          src={validation ? green : red}
          alt="red"
        />
      </section>
      <section className="employer validation_main">
        <div>
          <h2 className="global_input_titles">დამსაქმებელი</h2>
          <input
            className={`global_common_input normal_inputs full_input ${
              experienceInfo[0].company.length == 1 && "redline"
            }`}
            type="text"
            placeholder="დამსაქმებელი"
            pattern="^[2-9_ ]*.{3,}$"
            value={experienceInfo[index].company}
            onChange={(e) => {
              setExperienceInfo(
                experienceInfo.map((item) => {
                  if (item.id == index) {
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
        <img
          className="validation_icons"
          src={validation ? green : red}
          alt="red"
        />
      </section>
      <section className="working_date">
        <div>
          <h2 className="global_input_titles">დაწყების რიცხვი</h2>
          <div
            className={`date_input ${
              experienceInfo[index].start.length && "global_validation_green"
            }`}
          >
            <input
              className="date_inputs"
              type="date"
              placeholder="mm / dd / yyyy"
              value={experienceInfo[index].start}
              onChange={(e) => {
                setExperienceInfo(
                  experienceInfo.map((item) => {
                    if (item.id == index) {
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
            // className="date_input"
            className={`date_input ${
              experienceInfo[index].end.length && "global_validation_green"
            }`}
          >
            <input
              className="date_inputs"
              type="date"
              placeholder="mm / dd / yyyy"
              value={experienceInfo[index].end}
              onChange={(e) => {
                setExperienceInfo(
                  experienceInfo.map((item) => {
                    if (item.id == index) {
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
          className="global_textarea experience_page"
          placeholder="როლი თანამდებობაზე და ზოგადი აღწერა"
          value={experienceInfo[index].description}
          onChange={(e) => {
            setExperienceInfo(
              experienceInfo.map((item) => {
                if (item.id == index) {
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
