import React, { useContext } from "react";
import { UserContext } from "../../UserContext";

const SingleMoreExperience = ({ index }) => {
  const { experienceInfo, setExperienceInfo } = useContext(UserContext);
  return (
    <div className="experience_tab">
      <section className="position">
        <h2 className="global_input_titles">თანამდებობა</h2>
        <input
          className="global_common_input normal_inputs full_input"
          type="text"
          placeholder="დეველოპერი, დიზაინერი, ა.შ."
          value={experienceInfo[index].position}
          onChange={(e) => {
            setExperienceInfo(
              experienceInfo.map((item) => {
                if (item.id == index) {
                  return { ...experienceInfo[index], position: e.target.value };
                } else {
                  return item;
                }
              })
            );
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
          value={experienceInfo[index].company}
          onChange={(e) => {
            setExperienceInfo(
              experienceInfo.map((item) => {
                if (item.id == index) {
                  return { ...experienceInfo[index], company: e.target.value };
                } else {
                  return item;
                }
              })
            );
          }}
        />
        <div className="global_input_validations">მინიმუმ 2 სიმბოლო</div>
      </section>
      <section className="working_date">
        <div>
          <h2 className="global_input_titles">დაწყების რიცხვი</h2>
          <div className="date_input">
            <input
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
          <div className="date_input">
            <input
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
