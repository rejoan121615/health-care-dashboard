import React, { useState } from "react";

const Input = (props) => {
    // value
    const [value, setValue] = useState("");
    const [focus, setFocus] = useState(false);

    // validation handler
    const validationHandler = (target) => {
        if (!target.length) {
            setFocus(true);
        } else {
            setFocus(false);
        }
    };

    // change handler
    const changeHandler = (event) => {
        setValue(event.target.value);
        validationHandler(event.target.value);
        props.change(value, validationHandler);
    };

    const focusHandler = (event) => {
        validationHandler(event.target.value);
    };

    return (
        <div className=" flex flex-col ">
            <label htmlFor={props.label} className=" label">
                {props.label}
            </label>
            <input
                type={props.type ? props.type : "text"}
                value={value}
                onChange={changeHandler}
                onFocus={focusHandler}
                placeholder={props.holder ? props.holder : ""}
                className={ focus?  "border-2 border-red": "" }
            />
        </div>
    );
};

export default Input;
