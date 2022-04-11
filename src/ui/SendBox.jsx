import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import EmojiPicker from "emoji-picker-react";
import FaceIcon from "../assets/icons/face-icon.png";

const SendBox = () => {
    const [showEmojiBox, setShowEmojiBox] = useState(false);
    const [messageBox, setMessageBox] = useState("");

    const messageBoxHandler = (event) => {
        setMessageBox(event.target.value);
    };

    const onEmojiClick = (event, emojiObject) => {
        setMessageBox(messageBox + emojiObject.emoji);
    };

    const emojiHandler = () => {
        setShowEmojiBox(!showEmojiBox);
    };

    const focusHandler = () => {
        showEmojiBox ? setShowEmojiBox(false) : null;
    };

    return (
        <React.Fragment>
            <div className=" border-t-[1px] flex justify-between h-[92px]">
                <div className=" px-[22px] py-[19.5px] flex justify-between border-input-border grow">
                    {/* image  */}
                    <div className=" flex items-center gap-x-2 w-full">
                        {/* emoji component  */}
                        <div className=" relative ">
                            <div>
                                <img
                                    onClick={emojiHandler}
                                    src={FaceIcon}
                                    alt="face icon"
                                    className=" cursor-pointer w-6"
                                />
                            </div>
                            {showEmojiBox && (
                                <div className=" absolute bottom-[60px] left-10">
                                    <EmojiPicker onEmojiClick={onEmojiClick} />
                                </div>
                            )}
                        </div>
                        {/* texts  */}
                        <div className=" w-full">
                            <input
                                value={messageBox}
                                onChange={messageBoxHandler}
                                onFocus={focusHandler}
                                type="text"
                                placeholder="Start typing here"
                                className=" p-0 placeholder:text-black focus-visible:outline-none w-full mt-0 ml-2 border-0 text-[14px] placeholder:text-[14px]"
                            />
                        </div>
                    </div>
                </div>
                {/* send button component  */}
                <div className=" px-[22px] py-[19.5px] flex justify-between items-center border-input-border border-l-[1px]">
                    <button className=" px-[20px] py-[8px] bg-red rounded-3xl">
                        <FontAwesomeIcon
                            icon="fa-solid fa-paper-plane"
                            className=" text-white text-lg"
                        />
                    </button>
                </div>
            </div>
        </React.Fragment>
    );
};

export default SendBox;
