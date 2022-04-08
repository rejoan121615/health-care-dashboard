import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NotificationIcon from "../assets/navigation/Notification Icon.svg";
import ProfileImg from "../assets/home/profile.jpg";

const SearchBar = (props) => {
    const [searchVal, setSearchVal] = useState("");

    // change handler
    const changeHandler = () => {
        setSearchVal(event.target.value);
    };
    return (
        <div className=" rounded-3xl bg-half-white p-[21px_25px] relative flex items-center">
            <span className=" inline-block absolute top-[38px] left-10">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </span>
            <input
                value={searchVal}
                onChange={changeHandler}
                placeholder="Search pathology result"
                className=" rounded-xl grow pl-10 py-[14px]"
            />
            <button className=" w-8 h-8 rounded-full bg-white flex items-center justify-center mx-[15px]">
                <img src={NotificationIcon} alt="notification icon" />
            </button>
            {/* profile components  */}
            <div className=" flex gap-x-[15px] border-l-2 pl-[15px]">
                {/* img  */}
                <img
                    src={ProfileImg}
                    alt="Man profile image"
                    className=" w-10 h-10 rounded-full"
                />
                {/* details  */}
                <div className=" ">
                    <h6 className=" text-[12px] font-bold text-light-black">
                        Mohd Rejoan
                    </h6>
                    <p className=" text-[12px] capitalize text-form-bg">patient</p>
                </div>
            </div>
        </div>
    );
};

export default SearchBar;
