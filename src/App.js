/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios"


function App() {
  
  const [reason, setReason] = useState("");

  const fetchEx = (excuse) => {

    Axios.get(`https://excuser-three.vercel.app/v1/excuse/${excuse}/`).then((res) => {
      setReason(res.data[0].excuse);
    });
  };

  return (
    <div className="App container">
      
      <p className="display-3 m-2">Generate an Excuse</p>
      <button className="btn btn-primary m-3 p-2" onClick={() => fetchEx("family")}> Family </button>
      <button className="btn btn-primary m-3 p-2" onClick={() => fetchEx("office")}> Office </button>
      <button className="btn btn-primary m-3 p-2" onClick={() => fetchEx("children")}> Children </button>
      <button className="btn btn-primary m-3 p-2" onClick={() => fetchEx("college")}> College </button>
      <button className="btn btn-primary m-3 p-2" onClick={() => fetchEx("party")}> Party </button>
      <button className="btn btn-primary m-3 p-2" onClick={() => fetchEx("funny")}> Funny </button>
      <button className="btn btn-primary m-3 p-2" onClick={() => fetchEx("unbelievable")}> Unbelievable </button>
      <button className="btn btn-primary m-3 p-2" onClick={() => fetchEx("developers")}> Developers </button>
      <button className="btn btn-primary m-3 p-2" onClick={() => fetchEx("gaming")}> Gaming </button>
      
      <h1>{reason}</h1>
    </div>
  );
}

export default App;
