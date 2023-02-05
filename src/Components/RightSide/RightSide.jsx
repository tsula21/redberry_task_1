import React, { useContext, useState } from "react";
import "./RightSide.css";
import { UserContext } from "../../UserContext";
//
import mail from "../../Assets/form/mail_icon.svg";
import phone from "../../Assets/form/phone.svg";
import mini_logo from "../../Assets/form/mini_logo.svg";
import avatar from "../../Assets/form/avatar.png";

const RightSide = () => {
  const { resumeInfo, setResumeInfo } = useContext(UserContext);

  return (
    <div
      className={`rightside ${
        resumeInfo.personal.firstname.length > 0 && "active"
      }`}
    >
      <div className="text_field">
        <section>
          <p className="global_rendered_fullname">
            {resumeInfo.personal.firstname}
          </p>
          <p className="global_rendered_fullname">
            {resumeInfo.personal.lastname}
          </p>
        </section>
        <span className="text_field_span first">
          <img src={mail} alt="mail" />
          <p>{resumeInfo.personal.email}</p>
        </span>
        <span className="text_field_span second">
          <img src={phone} alt="phone" />
          <p>{resumeInfo.personal.phone}</p>
        </span>
        <h2 className="global_rendered_description_title">ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ</h2>
        <div className="about_me_field">{resumeInfo.personal.about}</div>
      </div>
      <div className="image_field">
        {/* <img src={resumeInfo.personal.photo} alt="avatar" /> */}
        <div
          style={{
            backgroundImage: `url(${resumeInfo.personal.photo})`,
          }}
        ></div>
      </div>
      {/* <div className="tab_divider_rightside"></div> */}

      <img className="rightside_logo" src={mini_logo} alt="logo" />
    </div>
  );
};

export default RightSide;
