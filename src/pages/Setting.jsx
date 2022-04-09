import React from "react";
import Collapsible from "react-collapsible";
import ProfileImg from "../assets/home/profile.jpg";
import Input from "../ui/Input";

const Setting = () => {
    return (
        <div className=" page-wrap">
            <div className="ml-[86px] flex mt-[41px] gap-x-[110px] items-start">
                <img
                    className=" rounded-full w-[136px] border-4"
                    src={ProfileImg}
                    alt=""
                />
                {/* collapse  */}
                <div className=" w-full max-w-[448px] mt-6 flex flex-col gap-y-5">
                    <Input label="first name" holder="Mohd" />
                    <Input label="last name" holder="Rejoan" />
                    <Input label="email" holder="wearecrx@gmail.com" />
                    <Input label="account type" holder="patient" />
                    <input type="submit" className=" submit-blue mt-4" />
                </div>
            </div>
        </div>
    );
};

export default Setting;
