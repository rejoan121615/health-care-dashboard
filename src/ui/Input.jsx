import React, { useState } from "react";
import useInputValidation from "../hooks/useInputValidation";

const Input = (props) => {
    const changeHandler = (event) => {
        event.preventDefault();
        useInputValidation().value
    };

    const blurHandler = (event) => {};

    const focusHandler = (event) => {};

    return (
        <div className=" flex flex-col ">
            <label htmlFor={props.label} className=" label">
                {props.label}
            </label>
            <input
                type="text"
                value={name}
                onChange={changeHandler}
                onFocus={focusHandler}
                onBlur={blurHandler}
                placeholder={props.placeholder}
            />
        </div>
    );
};

export default Input;
