import React from "react";
import PortalNavBar from "../components/PortalNavBar";
import SearchBar from "../components/SearchBar";
import DarkLightBar from "../components/DarkLightBar";
import PatientTracker from "../components/PatientTracker";



const Home = () => {
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
        <section>
            <PatientTracker data={patientTrackerData} />
        </section>
    );
};

export default Home;
