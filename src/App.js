import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { UserContext } from "./UserContext";
import "./Styles/App.css";
import Main from "./Pages/Main/Main";
import Form from "./Pages/Form/Form";

function App() {
  const initialState = {
    personal: {
      firstname: "",
      lastname: "",
      //photo!!!
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
      degree: 1,
      education_finish: "",
      education_description: "",
      // more
    },
  };
  return (
    <BrowserRouter>
      <div className="App">
        <UserContext.Provider value={{}}>
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
