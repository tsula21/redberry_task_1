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
    experience: {
      position: "",
      company: "",
      start: "",
      end: "",
      description: "",
      // more experience
    },
    education: {
      university: "",
      degree: "",
      education_finish: "",
      education_description: "",
      // more
    },
  };

  const [resumeInfo, setResumeInfo] = useState(initialState);
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
          value={{ pageNum, setPageNum, resumeInfo, setResumeInfo, degreeArr }}
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
