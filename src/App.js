import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./Styles/App.css";
import Main from "./Pages/Main/Main";
import Form from "./Pages/Form/Form";
import Modal from "./Components/Modal/Modal";

function App() {
  const [pageNum, setPageNum] = useState(1);
  const [degreeArr, setDegreeArr] = useState();
  const [validationExp, setValidationExp] = useState(false);
  const [validationEduc, setValidationEduc] = useState(false);
  const [completed, setCompleted] = useState(false);

  const initialState = {
    personal: {
      firstname: "",
      lastname: "",
      photo: [],
      about: "",
      email: "",
      phone: "",
    },
  };
  const [resumeInfo, setResumeInfo] = useState(initialState);
  const [experienceInfo, setExperienceInfo] = useState([
    {
      position: "",
      company: "",
      start: "",
      end: "",
      description: "",
    },
  ]);
  const [educationInfo, setEducationInfo] = useState([
    {
      university: "",
      degree: null,
      education_finish: "",
      education_description: "",
    },
  ]);

  // ================FUNCTIONS================
  const addNewEducationObg = () => {
    setEducationInfo([
      ...educationInfo,
      {
        // id: educationInfo.length,
        university: "",
        degree: null,
        education_finish: "",
        education_description: "",
      },
    ]);
  };
  const addNewExperienceObg = () => {
    setExperienceInfo([
      ...experienceInfo,
      {
        // id: experienceInfo.length,
        position: "",
        company: "",
        start: "",
        end: "",
        description: "",
      },
    ]);
  };

  // It resets the state of the form to its initial state
  const resetArray = () => {
    console.log("resett");
    setResumeInfo(initialState);
    setExperienceInfo([
      {
        // id: 0,
        position: "",
        company: "",
        start: "",
        end: "",
        description: "",
      },
    ]);
    setEducationInfo([
      {
        // id: 0,
        university: "",
        degree: null,
        education_finish: "",
        education_description: "",
      },
    ]);
  };
  useEffect(() => {
    /* A function that is called immediately for degree array */
    (async () => {
      const limit = 10;
      const response = await fetch(
        "https://resume.redberryinternship.ge/api/degrees"
      );
      if (!response.ok) {
        console.error("Request failed");
        return;
      }
      const data = await response.json();
      setDegreeArr(data);
    })();
  }, []);

  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider
          value={{
            pageNum,
            setPageNum,
            resumeInfo,
            setResumeInfo,
            degreeArr,
            experienceInfo,
            setExperienceInfo,
            educationInfo,
            setEducationInfo,
            // VALIDATIONS
            validationExp,
            setValidationExp,
            validationEduc,
            setValidationEduc,
            completed,
            setCompleted,
            // FUNCTIONS
            addNewExperienceObg,
            addNewEducationObg,
            resetArray,
          }}
        >
          <div className="container">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/form" element={<Form />} />
            </Routes>
            <Modal />
          </div>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
