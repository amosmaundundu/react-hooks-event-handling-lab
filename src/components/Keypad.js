// Code Keypad Component Here
import React from "react";

function Keypad (){
    function handleInput(){
        console.log("Entering password...");
    }
    return (
        
        <div>
            <input Type='password'onChange={e=>handleInput(e)}/>

        </div>
    )
}

export default Keypad;