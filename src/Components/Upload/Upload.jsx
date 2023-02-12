import React, { useContext, useState } from "react";
import { UserContext } from "../../UserContext";
import "./Upload.css";

const Upload = () => {
  const { resumeInfo, setResumeInfo } = useContext(UserContext);

  const handleInputChange = (e) => {
    // console.log(e.target.files);
    const updateValue = {
      ...resumeInfo.personal,
      photo: URL.createObjectURL(e.target.files[0]),
    };
    const updateResumeInfo = { ...resumeInfo, personal: updateValue };
    setResumeInfo(updateResumeInfo);
  };
  return (
    <div>
      <input
        className="custom-file-input"
        type="file"
        name="upload_file"
        onChange={handleInputChange}
      />
    </div>
  );
};

export default Upload;
