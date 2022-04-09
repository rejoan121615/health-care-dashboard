import React, { useState } from "react";
import Contrast from "../assets/navigation/Contrast.svg";
import Switch from "react-switch";

const DarkLightBar = (props) => {
    const [checked, setChecked] = useState(false);

    const handleChange = () => {
        setChecked(!checked);
    };

    return (
        <div className=" my-6 flex justify-between items-center">
            {/* left section  */}
            <div>
                <h6 className=" text-base font-bold text-red-500 capitalize">
                    welcome {props.name.split(" ")[1]},
                </h6>
                <p className=" capitalize text-[14px] mt-1">
                    {" "}
                    How're you feeling today?
                </p>
            </div>
            {/* right section  */}
            <div className=" flex items-center">
                <div className=" w-5 h-5 ml-2">
                    <img
                        className=" w-full mt-1"
                        src={Contrast}
                        alt="contrast icon"
                    />
                </div>
                <Switch
                    id="switch"
                    offColor="#e2e2f2"
                    onColor="#f5dee5"
                    offHandleColor="#343434"
                    onHandleColor="#f80d38"
                    uncheckedIcon={false}
                    checkedIcon={false}
                    onChange={handleChange}
                    checked={checked}
                    className=" scale-50 mt-2"
                />
                <p>Apply dark theme</p>
            </div>
        </div>
    );
};

export default DarkLightBar;
