import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./Styles/App.css";
import Main from "./Pages/Main/Main";
import Form from "./Pages/Form/Form";
import Experience from "./Components/Experience/Experience";

function App() {
  const [pageNum, setPageNum] = useState(1);
  const [degreeArr, setDegreeArr] = useState();

  const initialState = {
    personal: {
      firstname: "",
      lastname: "",
      photo: [],
      about: "",
      email: "",
      phone: "",
    },
    // experience: {
    //   position: "",
    //   company: "",
    //   start: "",
    //   end: "",
    //   description: "",
    // },
    // education: {
    //   university: "",
    //   degree: null,
    //   education_finish: "",
    //   education_description: "",
    // },
  };
  const [resumeInfo, setResumeInfo] = useState(initialState);
  const [experienceInfo, setExperienceInfo] = useState([
    {
      id: 0,
      position: "დეველოპერი",
      company: "სილკ უნივერსალი",
      start: "2019-03-16",
      end: "2023-11-25",
      description:
        "ვიყავი დეველოპერი დიდი ხანი,ვიყავი დეველოპერი დიდი ხანი ვიყავი დეველოპერი დიდი ხანი  ვიყავი დეველოპერი დიდი ხანი.",
    },
  ]);
  const [educationInfo, setEducationInfo] = useState([
    {
      id: 0,
      university: "",
      degree: null,
      education_finish: "",
      education_description: "",
    },
  ]);

  // ================FUNCTIONS================
  const addNewEducationObg = () => {
    console.log("add education");
    setEducationInfo([
      ...educationInfo,
      {
        id: educationInfo.length,
        university: "",
        degree: null,
        education_finish: "",
        education_description: "",
      },
    ]);
  };
  const addNewExperienceObg = () => {
    console.log("add experience");
    setExperienceInfo([
      ...experienceInfo,
      {
        id: experienceInfo.length,
        position: "",
        company: "",
        start: "",
        end: "",
        description: "",
      },
    ]);
  };
  const resetArray = () => {
    console.log("resett");
    setResumeInfo(initialState);
    setExperienceInfo([
      {
        id: 0,
        position: "",
        company: "",
        start: "",
        end: "",
        description: "",
      },
    ]);
    setEducationInfo([
      {
        id: 0,
        university: "",
        degree: null,
        education_finish: "",
        education_description: "",
      },
    ]);
  };
  useEffect(() => {
    console.log("request");
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
            // functions
            addNewExperienceObg,
            addNewEducationObg,
            resetArray,
          }}
        >
          <div className="container">
            <Routes>
              <Route path="/" element={<Main />} />
              <Route path="/personal" element={<Form />} />
            </Routes>
          </div>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
