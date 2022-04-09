import React, { useState } from "react";
import { Chart as ChartJS, defaults } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const PieChartCard = (props) => {
    const [chartOptions, setChartOptions] = useState({
        labels: props.labels,
        datasets: [
            {
                label: "My First Dataset",
                data: props.data,
                backgroundColor: ["#feca57", "#100db1", "#f80d38", "#763cef"],
                borderWidth: 0,
            },
        ],
    });

    const optionData = {
        cutout: "75%",
        plugins: {
            legend: {
                position: "bottom",
                fullSize: true,
                labels: {
                    pointStyle: "circle",
                    usePointStyle: true,

                    font: {
                        size: 10,
                        weight: "bold",
                        textTransform: "capitalize",
                    },
                },
            },
            tooltip: {},
        },
    };

    return (
        <div className=" relative px-[20px] py-[15px] rounded-[15px] border-2">
            {/* main title    */}
            {/* chart name  */}
            <h4 className=" font-bold text-[12px] uppercase">diagonestics</h4>
            {/* chart wrapper  */}
            <div className=" grid grid-cols-1 grid-rows-1">
                {/* texts  */}
                <div className=" row-start-1 row-end-2 col-start-1 col-end-2 flex justify-center items-center flex-col">
                    <h3 className=" font-bold uppercase text-form-bg text-[22px]">
                        {props.totalAmount}
                    </h3>
                    <p className=" text-[12px] capitalize text-form-bg">
                        patients{props.catagory}
                    </p>
                </div>
                {/* chart wrap  */}
                <div className=" row-start-1 row-end-2 col-start-1 col-end-2 max-w-[280px] mx-auto">
                    <Doughnut data={chartOptions} options={optionData} />
                </div>
            </div>
        </div>
    );
};

export default PieChartCard;
