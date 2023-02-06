import React, { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./Styles/App.css";
import Main from "./Pages/Main/Main";
import Form from "./Pages/Form/Form";
import Experience from "./Components/Experience/Experience";

function App() {
  const [pageNum, setPageNum] = useState(1);
  const initialState = {
    personal: {
      firstname: "ირაკლი",
      lastname: "წულაია",
      photo: [
        "blob:http://localhost:3000/276294e4-c8a7-4e97-91bf-3607d396da63",
      ],
      about:
        "ძალიან მიყვარს დიზაინის კეთება. დილით ადრე რომ ავდგები გამამხნევებელი ვარჯიშების მაგიერ დიზაინს ვაკეთებ. ",

      email: "ika.tsulai21@redberry.ge",
      phone: "+995568942133",
    },
    experience: {
      position: "ვებ დეველოპერი",
      company: "redberry",
      start: "",
      end: "",
      description:
        "Experienced Javascript Native Developer with 5 years in the industry. proficient withreact. Used problem-solving aptitude to encahge application performance by 14%.created data visualisation tools and integrated designs.",
      // more experience
    },
    education: {
      university: "წმ. ანდრიას საპატრიარქოს სასწავლებელი,",
      degree: 1,
      education_finish: "",
      education_description: "ssssssssssssss",
      // more
    },
  };

  // const initialState = {
  //   personal: {
  //     firstname: "",
  //     lastname: "",
  //     //photo!!!
  //     about: "ზოგადი ინფო შენ შესახებ",
  //     email: "",
  //     phone: "",
  //   },
  //   experience: {
  //     position: "",
  //     company: "",
  //     start: "",
  //     end: "",
  //     description: "",
  //     // more experience
  //   },
  //   education: {
  //     university: "",
  //     degree: 1,
  //     education_finish: "",
  //     education_description: "",
  //     // more
  //   },
  // };
  useEffect(() => {
    console.log(resumeInfo);
  }, []);
  const [resumeInfo, setResumeInfo] = useState(initialState);
  // const renderForm = () => {
  //   switch (page) {
  //     case 0:

  //     case 1:

  //     case 2:

  //     default:
  //       return;
  //   }
  // };
  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider
          value={{ pageNum, setPageNum, resumeInfo, setResumeInfo }}
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
