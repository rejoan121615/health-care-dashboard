import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";

const SearchBar = (props) => {
    const [searchVal, setSearchVal] = useState("");

    // change handler
    const changeHandler = () => {
        setSearchVal(event.target.value);
    };
    return (
        <div className=" rounded-3xl bg-half-white p-[21px_25px] relative">
            <span className=" inline-block absolute top-[38px] left-10">
                <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" />
            </span>
            <input
                value={searchVal}
                onChange={changeHandler}
                placeholder="Search pathology result"
                className=" rounded-xl w-full pl-10 py-[14px]"
            />
        </div>
    );
};

export default SearchBar;
