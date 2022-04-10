import React from "react";
import PersonChatCard from "../ui/PersonChatCard";
import Search from '../ui/Search'

const Chats = () => {
    return (
        <div className=" page-wrap overflow-hidden grid grid-cols-[1fr_2.2fr]">
            {/* left chat box  */}
            <div className=" border-r-[1px] border-input-border">
                <div className=" overflow-y-auto h-[615px]">
                    {["", "", "", "", "", "", "", "", "", "", "", "", ""].map(
                        (item, index) => {
                            return <PersonChatCard key={index}/>;
                        }
                    )}
                </div>
                <Search />
            </div>
        </div>
    );
};

export default Chats;
