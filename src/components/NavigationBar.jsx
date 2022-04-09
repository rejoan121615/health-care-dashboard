import React from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

// images
import Overview from "../assets/navigation/Overview.svg";
import Appointment from "../assets/navigation/Appointments.svg";
import Doctor from "../assets/navigation/Doctors.svg";
import PathologyResult from "../assets/navigation/Pathology Results.svg";
import Chats from "../assets/navigation/Chats.svg";
import Setting from "../assets/navigation/Settings.svg";
import Logout from "../assets/navigation/Logout.svg";
import Logo from "../assets/navigation/Logo-text.svg";
import Expand from "../assets/navigation/Expand Icon.svg";

const NavigationBar = () => {
    const navigaData = [
        {
            img: Overview,
            name: "overview",
        },
        {
            img: Appointment,
            name: "appointment",
        },
        {
            img: Doctor,
            name: "doctors",
        },
        {
            img: PathologyResult,
            name: "pathology result",
        },
        {
            img: Chats,
            name: "chats",
        },
        {
            img: Setting,
            name: "setting",
        },
        {
            img: Logout,
            name: "logout",
        },
    ];

    return (
        <aside className="rounded-[0px] relative  bg-half-white w-full max-w-[350px] lg:rounded-[15px]">
            {/* brand  */}
            <div className="flex justify-between px-[30px] py-[20px] border-b-2">
                <img src={Logo} alt="logo text" />
                <img src={Expand} alt="expand icon" />
            </div>
            {/* navigation bar  */}
            <ul className=" mt-[35px]">
                {navigaData.map((item, index) => {
                    return (
                        <li key={index}>
                            <NavLink
                                to={item.name}
                                className=" flex items-center py-4 my-3 px-10 capitalize"
                            >
                                <img
                                    className=" mr-4 w-5"
                                    src={item.img}
                                    alt=""
                                />
                                <p>{item.name}</p>
                            </NavLink>
                        </li>
                    );
                })}
            </ul>
            {/* bottom text  */}
            <div className="flex px-[30px] py-[25px] border-t-2 absolute w-full bottom-0">
                <a
                    title="call"
                    href="+8801643941863"
                    className=" w-7 h-7 bg-form-bg rounded-md flex justify-center items-center"
                >
                    <FontAwesomeIcon
                        className=" text-white text-[12px]"
                        icon="fa-solid fa-phone"
                    />
                </a>
                {/* text  */}
                <div className=" ml-2">
                    <p className=" heading capitalize">emergency hotline:</p>
                    <p>+234 92 928 2891 +234 60 621 2098</p>
                </div>
            </div>
        </aside>
    );
};

export default NavigationBar;
