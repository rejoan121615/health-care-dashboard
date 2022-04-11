import React from "react";
import ProfileImg from "../assets/home/profile.jpg";
import { NavLink } from "react-router-dom";

const PersonCardChat = (props) => {
    return (
        <NavLink to={`/chats/${props.id}`}>
            <div className=" px-[22px] py-[19.5px] flex justify-between bg-[#f7f7f7] border-b-[1px] border-input-border">
                {/* image  */}
                <div className=" flex items-center gap-x-2">
                    <div className=" relative w-12">
                        <div className=" absolute w-[5px] h-[5px] rounded-full bg-green right-2"></div>
                        <img
                            src={ProfileImg}
                            alt="profile image"
                            className=" w-12 rounded-full"
                        />
                    </div>
                    {/* texts  */}
                    <div>
                        <h6 className=" heading text-matt-black">
                            Dr.Ibrahim Yekeni
                        </h6>
                        <p className=" capitalize text-red">family doctor</p>
                    </div>
                </div>
                {/* active was  */}
                <p>3 min ago</p>
            </div>
        </NavLink>
    );
};

export default PersonCardChat;
