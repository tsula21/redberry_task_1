import React, { useContext } from "react";
import { UserContext } from "../../UserContext";
import "./RightPersonal.css";
//
import mail from "../../Assets/form/mail_icon.svg";
import phone from "../../Assets/form/phone.svg";

const RightPersonal = () => {
  const { resumeInfo, setResumeInfo } = useContext(UserContext);
  return (
    <div className="right_personal_container">
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
    </div>
  );
};

export default RightPersonal;
