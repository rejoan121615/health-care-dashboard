import React, { useState, useReducer } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import TermsAndCondition from "../pages/TermsAndCondition";

const FormTemplate = (props) => {
    console.log(props.type);

    const [logIn, setLogin] = useState(false);

    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const nameChangeHandler = (event) => {
        setName(event.target.value);
    };

    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const passChangeHandler = (event) => {
        setPassword(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        console.log(name, email, password);
    };

    return (
        <section className=" bg-form-bg w-screen h-screen flex items-center justify-center">
            <div className=" mx-auto max-w-[562px] w-full ml-4 mr-4 sm:mx-0">
                {/* cross button  */}
                <div className=" text-center">
                    <button className=" border-white border-2 rounded-full px-[12px] py-[5px]">
                        <FontAwesomeIcon
                            icon="fa-solid fa-xmark"
                            className=" text-white"
                            size="2x"
                        />
                    </button>
                </div>
                {/* form  */}
                <form
                    onSubmit={submitHandler}
                    className=" bg-white rounded-[15px] p-[55px] mt-10"
                >
                    {/* name input  */}

                    {props.type && (
                        <div className=" input-container ">
                            <label htmlFor="name" className=" label">
                                name
                            </label>
                            <input
                                type="text"
                                value={name}
                                onChange={nameChangeHandler}
                                placeholder="Ex. Mohd Rejoan"
                            />
                        </div>
                    )}

                    {/* email input  */}
                    <div className=" input-container">
                        <label htmlFor="email" className=" label">
                            email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={emailChangeHandler}
                            placeholder="Ex. wearecrx@gmail.com"
                        />
                    </div>
                    {/* password input  */}
                    <div className="input-container mb-0">
                        <label htmlFor="password" className=" label">
                            password
                        </label>
                        <input
                            type="password"
                            value={password}
                            onChange={passChangeHandler}
                            placeholder="Ex. XXXXXXX"
                        />
                    </div>
                    {/* term and condition  */}
                    <div
                        className={`flex items-center mt-3 ${
                            !props.type ? "justify-between" : ""
                        }`}
                    >
                        {!props.type ? (
                            <React.Fragment>
                                <div className=" flex items-center">
                                    <input
                                        type="checkbox"
                                        className=" mt-0 mr-2 cursor-pointer"
                                    />
                                    <p className=" label capitalize">
                                        remember me
                                    </p>
                                </div>
                                <Link
                                    to="/forgot-password"
                                    className=" text-blue-700 capitalize underline text-[12px]"
                                >
                                    forgot password
                                </Link>
                            </React.Fragment>
                        ) : (
                            <React.Fragment>
                                <input
                                    type="checkbox"
                                    className=" mt-0 mr-2 cursor-pointer"
                                />
                                <p className="label">
                                    I accept the{" "}
                                    <Link
                                        to="/term-and-condition"
                                        className=" text-blue-700 capitalize underline"
                                    >
                                        term and condition
                                    </Link>
                                </p>
                            </React.Fragment>
                        )}
                    </div>
                    {/* submit button  */}
                    <input
                        type="submit"
                        value="submit"
                        className="submit w-full bg-form-bg"
                    />
                    {/* another links  */}
                    <div className=" flex items-center justify-center mt-[30px] text-[14px]">
                        <p className=" mr-2">
                            {!props.type
                                ? "Don't have a account?"
                                : "Already have a account?"}{" "}
                        </p>{" "}
                        {props.type ? (
                            <Link
                                to="/log-in"
                                className=" text-blue-700 underline"
                            >
                                Login
                            </Link>
                        ) : (
                            <Link
                                to="/sign-up"
                                className=" text-blue-700 underline"
                            >
                                Sign-up
                            </Link>
                        )}
                    </div>
                </form>
            </div>
        </section>
    );
};

export default FormTemplate;
