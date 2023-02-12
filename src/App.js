import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./Styles/App.css";
import Main from "./Pages/Main/Main";
import Form from "./Pages/Form/Form";
import Final from "./Pages/Final/Final";
import Experience from "./Components/Experience/Experience";
import RightSide from "./Components/RightSide/RightSide";
import Modal from "./Components/Modal/Modal";

function App() {
  const [pageNum, setPageNum] = useState(1);
  const [degreeArr, setDegreeArr] = useState();
  const [validationExp, setValidationExp] = useState(false);
  const [validationEduc, setValidationEduc] = useState(false);
  const [completed, setCompleted] = useState(true);

  const initialState = {
    // personal: {
    //   firstname: "",
    //   lastname: "",
    //   photo: [],
    //   about: "",
    //   email: "",
    //   phone: "",
    // },
    personal: {
      firstname: "ირაკლი",
      lastname: "წულაია",
      photo: [],
      about:
        "საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ დაზგაზე წიგნის საცდელი ეგზემპლარი დაბეჭდა.",
      email: "ika.tsulai21@redberry.ge",
      phone: "+995568942133",
    },
  };
  const [resumeInfo, setResumeInfo] = useState(initialState);
  const [experienceInfo, setExperienceInfo] = useState([
    // {
    //   position: "",
    //   company: "",
    //   start: "",
    //   end: "",
    //   description: "",
    // },
    {
      position: "დეველოპერი",
      company: "კომპანია კომპანია",
      start: "02/14/2015",
      end: "02/14/2017",
      description:
        "ინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად 1500-იანი წლებიდან იქცა, როდესაც უცნობმა მბეჭდავმა ამწყობ ",
    },
  ]);
  const [educationInfo, setEducationInfo] = useState([
    // {
    //   university: "",
    //   degree: null,
    //   education_finish: "",
    //   education_description: "",
    // },
    {
      university: "საქართველოს ტექნიკური უნივერსიტეტი",
      degree: "ბაკალავრი",
      education_finish: "02/14/2015",
      education_description:
        "საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად საბეჭდი და ტიპოგრაფიული ინდუსტრიის უშინაარსო ტექსტია. იგი სტანდარტად ",
    },
  ]);

  // ================FUNCTIONS================
  const addNewEducationObg = () => {
    console.log("add education");
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
    console.log("add experience");
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
              {/* <Route path="/completed" element={<Final />} /> */}
            </Routes>
            <Modal />
          </div>
        </UserContext.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
