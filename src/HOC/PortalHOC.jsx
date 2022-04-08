import { faHourglass1 } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import ReactDOM from "react-dom";

const PortalElement = (props) => {
    return (
        <div className=" absolute left-0 top-0 w-full h-full lg:hidden">
            <div className=" absolute left-0 top-0 w-screen min-h-screen bg-slate-600"></div>
            <div className=" absolute left-0 top-0 h-full flex justify-center items-center">{props.children}</div>
        </div>
    );
};

const PortalHOC = (PushedElement) => {
    return class NewClass extends React.Component {
        render() {
            return ReactDOM.createPortal(
                <PortalElement>
                    <PushedElement />
                </PortalElement>,
                document.getElementById("portal-root")
            );
        }
    };
};

export default PortalHOC;
