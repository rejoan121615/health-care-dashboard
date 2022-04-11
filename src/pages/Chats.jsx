import React from "react";
import PersonChatCard from "../ui/PersonChatCard";
import Search from "../ui/Search";
import ActiveChatHeader from "../ui/ActiveChatHeader";
import SendBox from '../ui/SendBox.jsx'


const Chats = () => {
    const data = (
        <h1 className=" flex flex-col">
            <p>rejoan</p>
            <p>ahmed</p>
        </h1>
    );

    return (
        <div className=" page-wrap overflow-hidden grid grid-cols-[1fr_2.2fr]">
            {/* left chat box  */}
            <div className=" border-r-[1px] border-input-border">
                <div className=" overflow-y-auto h-[615px]">
                    {["", "", "", "", "", "", "", "", "", "", "", "", ""].map(
                        (item, index) => {
                            return <PersonChatCard key={index} id={index} />;
                        }
                    )}
                </div>
                <Search />
            </div>
            {/* right message box  */}
            <div className=" flex flex-col justify-between">
                <ActiveChatHeader />
                <SendBox />
            </div>
        </div>
    );
};

export default Chats;
