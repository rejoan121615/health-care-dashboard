import React, { useState } from "react";
import Input from "../ui/Input";
import Logo from "../assets/logo/only-logo.svg";

const Logout = () => {
    const [value, setValue] = useState("");

    const changeHandler = (event) => {
        setValue(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(value);
    };

    return (
        <div className=" w-full border-2 h-[78.5%] rounded-[15px] flex items-center justify-center">
            <div className=" flex justify-center flex-col w-3/6 xl:max-w-[650px] ">
                <img className=" w-24 mx-auto" src={Logo} alt="icon" />
                <form onSubmit={submitHandler}>
                    <div className=" flex flex-col mt-11">
                        <label htmlFor="email" className=" label">
                            email
                        </label>
                        <input
                            type="email"
                            value={value}
                            onChange={changeHandler}
                            placeholder="wearecrx@gmail.com"
                        />
                    </div>
                    <input
                        type="submit"
                        value="submit"
                        className="submit w-full bg-form-bg"
                    />
                </form>
            </div>
        </div>
    );
};

export default Logout;
