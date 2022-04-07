import React from "react";
import { Switch, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup";
import { library } from "@fortawesome/fontawesome-svg-core";
import {  fas, faXmark} from "@fortawesome/free-solid-svg-icons";

library.add(fas, faXmark);

const App = () => {
    return (
        <React.Fragment>
            <LoginSignup />
        </React.Fragment>
    );
};

export default App;
