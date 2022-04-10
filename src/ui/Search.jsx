import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import NotificationIcon from "../assets/navigation/Notification Icon.svg";
import ProfileImg from "../assets/home/profile.jpg";

const Search = (props) => {
    const [searchVal, setSearchVal] = useState("");

    // change handler
    const changeHandler = () => {
        setSearchVal(event.target.value);
    };
    return (
        <div className=" bg-half-white p-[18px_25px] relative flex items-center border-t-[1px] border-input-border">
            <span className=" inline-block absolute top-[38px] left-10">
                <FontAwesomeIcon className=" text-[#bbbbbb]" icon="fa-solid fa-magnifying-glass" />
            </span>
            <input
                value={searchVal}
                onChange={changeHandler}
                placeholder="Search pathology result"
                className=" rounded-xl grow pl-10 py-[14px]"
            />
        </div>
    );
};

export default Search;
