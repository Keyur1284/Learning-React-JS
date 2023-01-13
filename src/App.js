/* eslint-disable no-unused-vars */
import "./App.css";
import React, { useEffect, useState } from "react";
import Axios from "axios"


function App() {
  
  const [user, setUser] = useState("");
  const [predictedAge, setPredictedAge] = useState(null);

  const predictor = () => {

    Axios.get(`https://api.agify.io/?name=${user}`).then((res) => {
      setPredictedAge(res.data);
    });
  };

  return (
    <div className="App container">
      
      <input placeholder="Ex. Keyur" onChange={(event) => setUser(event.target.value)} />
      <button className="btn btn-primary m-3 p-2" onClick={predictor}> Predict Age </button>

      <h1>Name :- {predictedAge?.name}</h1>
      <h1>Predicted Age :- {predictedAge?.age}</h1>
      <h1>Count :- {predictedAge?.count}</h1>

      <div>

      </div>

    </div>
  );
}

export default App;
