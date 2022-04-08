import React, { useState, useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useHistory } from 'react-router-dom'

const ForgotPassword = () => {
    const [email, setEmail] = useState("");
  const [success, setSuccess] = useState(false);
  const HistoryParams = useHistory()
    // redirect after submit
    useEffect(() => {
      if (success) {
        setTimeout(() => {
          HistoryParams.push('/home')
        }, 3000);
        }
    }, [success]);
  
  
    const emailChangeHandler = (event) => {
        setEmail(event.target.value);
    };

    const submitHandler = (event) => {
        event.preventDefault();
        email ? setSuccess(true) : setSuccess(false);
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
                    {/* email input  */}
                    <div className=" input-container mb-0">
                        <label htmlFor="email" className=" label">
                            email
                        </label>
                        <input
                            type="email"
                            value={email}
                            onChange={emailChangeHandler}
                            placeholder="Ex. wearecrx@gmail.com"
                        />
                        {success && (
                            <span className=" text-green-600 font-semibold text-sm mt-3 text-center ">
                                Recovery link send succesfully
                            </span>
                        )}
                    </div>
                    {/* submit button  */}
                    <input
                        type="submit"
                        value="submit"
                        className="submit w-full bg-form-bg"
                    />
                </form>
            </div>
        </section>
    );
};

export default ForgotPassword;
