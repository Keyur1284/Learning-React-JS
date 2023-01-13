import { useState } from "react";
import { useContext } from "react";
import { AppContext } from "../App";

export const ChangeProfile = () => {

    const [newUsername, setNewUsername] = useState("");
    const {setUserName} = useContext(AppContext);
    return (
        <div className="container mt-3">
            <input onChange={(event) => {setNewUsername(event.target.value);}} />
            <button className="btn btn-primary mx-2" onClick={() => {setUserName(newUsername);}}>Change Profile</button>
        </div>
    );
}