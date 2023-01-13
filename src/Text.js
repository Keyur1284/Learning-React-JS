/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

export const Text = () => {
    const[text, setText] = useState("");

    useEffect(() => {
        
        console.log("Mounted");

        return () => {
            console.log("Unmounted");
        }

    }, [text]);
    
    return (
        <div>
            <input onChange={(event) => {setText(event.target.value);}} />
            <h1>{text}</h1>
        </div>
    )
}
