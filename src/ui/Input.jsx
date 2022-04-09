import React, { useState } from "react";

const Input = (props) => {
    
    // value 
    const [value, setValue] = useState("");

    // change handler 
    const changeHandler = (event) => {
        setValue(event.target.value);
    }

    return (
        <div className=" flex flex-col ">
            <label htmlFor={props.label} className=" label">
                {props.label}
            </label>
            <input
                type={props.type? props.type: "text"}
                value={value}
                onChange={changeHandler}
                placeholder={props.holder}
            />
        </div>
    );
};

export default Input;
