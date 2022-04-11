import React from "react";
import ProfileImg from "../assets/home/profile.jpg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActiveChatHeader = () => {
    return (
        <div className=" px-[22px] py-[19.5px] flex justify-between border-b-[1px] border-input-border">
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
                    <p>Active 3min ago</p>
                </div>
            </div>
            {/* right side btn */}
            <div className=" flex items-center justify-center">
                <button>
                    <FontAwesomeIcon
                        icon="fa-solid fa-ellipsis"
                        className=" text-[20px]"
                    />
                </button>
            </div>
        </div>
    );
};

export default ActiveChatHeader;
