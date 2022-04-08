import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import package
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faXmark } from "@fortawesome/free-solid-svg-icons";
import Chart from 'chart.js/auto'

// component import
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import TermAndCondition from "./pages/TermsAndCondition";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Navbar from "./components/NavigationBar";

library.add(fas, faXmark);

const App = () => {
    return (
        <React.Fragment>
            <section className=" xl:p-3 xl:grid xl:grid-cols-[270px_1fr] xl:gap-x-[20px]">
                {/* left side  */}
                <Navbar />
                {/* right side content  */}
                <Route path="/">
                    <Redirect to="/home" />
                </Route>
                <Route path="/home" component={Home} />
                <Route path="/sign-up" component={Signup} />
                <Route path="/log-in" component={Login} />
                <Route
                    path="/term-and-condition"
                    component={TermAndCondition}
                />
                <Route path="/forgot-password" component={ForgotPassword} />
            </section>
        </React.Fragment>
    );
};

export default App;
