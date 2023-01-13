/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useEffect, useState, createContext } from "react";
import Axios from "axios"
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { Profile } from "./pages/Profile";
import { Contact } from "./pages/Contact";
import { Navbar } from "./pages/Navbar";

export const AppContext = createContext();

function App() {

  const [userName, setUserName] = useState("Keyur");

  return (
    <div className="App">
    <AppContext.Provider value={{ userName, setUserName }}>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<h1 className="display-1 text-danger">Error 404! Page not Found!</h1>} />
        </Routes>
      </Router>
      </AppContext.Provider>
    </div>
  );
}

export default App;