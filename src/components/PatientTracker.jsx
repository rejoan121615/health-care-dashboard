import React from "react";
import PieChartCard from "../ui/PieChartCard";
import HealthIndex from "../ui/HealthIndex";

const PatientTracker = (props) => {
    console.log(props);
    return (
        <div className=" grid grid-cols-3">
            {props.data.map((item, index) => {
                return <PieChartCard key={index} data={item.data} labels={item.labels} totalAmount={item.totalAmount} />;
            })}
        {/* health index card  */}
            <HealthIndex />
        </div>
    );
};

export default PatientTracker;
