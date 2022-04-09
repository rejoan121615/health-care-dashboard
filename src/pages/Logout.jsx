import React, { useState, Ref, useRef } from "react";
import Input from "../ui/Input";
import Logo from "../assets/logo/only-logo.svg";

const Logout = () => {
    const [value, setValue] = useState("");


    const changeHandler = (event) => {
        setValue(event);
        console.log(value)
        console.log(myRef);
        
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(value);
    };

    return (
        <div className=" page-wrap flex items-center justify-center">
            <div className=" flex justify-center flex-col w-3/6 xl:max-w-[650px] ">
                <img className=" w-24 mx-auto" src={Logo} alt="icon" />
                <form onSubmit={submitHandler}>
                    <Input holder="wearecrx@gmail.com" label="email" type="email" change={changeHandler} />
                    <input
                        type="submit"
                        value="submit"
                        className=" submit-blue"
                    />
                </form>
            </div>
        </div>
    );
};

export default Logout;
