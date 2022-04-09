import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
// import package
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas, faXmark, faPhone } from "@fortawesome/free-solid-svg-icons";
import Chart from "chart.js/auto";

// component import
import Signup from "./pages/Signup";
import Login from "./pages/Login";
import TermAndCondition from "./pages/TermsAndCondition";
import ForgotPassword from "./pages/ForgotPassword";
import Home from "./pages/Home";
import Navbar from "./components/NavigationBar";
import Doctors from "./pages/Doctors";
import Logout from './pages/Logout';
import Setting from './pages/Setting';

// import PortalNavBar from "../components/PortalNavBar";
import SearchBar from "./components/SearchBar";
import DarkLightBar from "./components/DarkLightBar";
import PatientTracker from "./components/PatientTracker";

library.add(fas, faXmark, faPhone);

const App = () => {
    // data
    const userData = {
        name: "Mohd Rejoan",
    };

    const patientTrackerData = [
        {
            name: "DIAGNOSTICS",
            totalAmount: "187.2K",
            labels: ["malaria", "cold", "typhoid", "others"],
            data: [25, 64, 87, 46],
        },
        {
            name: "patients",
            totalAmount: "11M",
            labels: ["Male", "Female", "Children"],
            data: [40, 48, 12],
        },
    ];
    return (
        <React.Fragment>
            <section className=" xl:p-3 xl:grid xl:grid-cols-[270px_1fr] xl:gap-x-[20px] xl:h-full">
                {/* left side  */}
                <Navbar />
                <aside>
                    <SearchBar />
                    <DarkLightBar name={userData.name} />
                    {/* all route  */}
                    <Route path="/">
                        <Redirect to="/overview" />
                    </Route>
                    <Route path="/overview" component={Home} />
                    <Route path="/sign-up" component={Signup} />
                    <Route path="/log-in" component={Login} />
                    <Route
                        path="/term-and-condition"
                        component={TermAndCondition}
                    />
                    <Route path="/forgot-password" component={ForgotPassword} />
                    <Route path="/doctors" component={Doctors} />
                    <Route path="/setting" component={Setting} />
                    <Route path="/logout" component={Logout} />
                </aside>
                {/* right side content  */}
            </section>
        </React.Fragment>
    );
};

export default App;
