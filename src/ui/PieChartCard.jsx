import React from "react";
import { Chart as ChartJS, defaults } from "chart.js";
import { Doughnut } from "react-chartjs-2";

const PieChartCard = (props) => {
    return (
        <div className=" w-2/6 relative px-[14px] py-[15px] rounded-[15px] border-2">
            {/* main title    */}
            <div className=" absolute left-[45%] top-[45%]">
                <h1>Rejoan</h1>
            </div>
            {/* chart name  */}
        <h4>{props.title}</h4>
        {/* chart wrapper  */}
        <div>
          {/* texts  */}
          <div className=""></div>
          {/* chart wrap  */}
          <div>
            <Doughnut
                data={{
                    labels: ["Red", "Blue", "Yellow"],
                    datasets: [
                        {
                            label: "My First Dataset",
                            data: [300, 50, 100],
                            backgroundColor: [
                                "rgb(255, 99, 132)",
                                "rgb(54, 162, 235)",
                                "rgb(255, 205, 86)",
                            ],
                            hoverOffset: 4,
                        },
                    ],
                }}
                options={{
                    cutout: "85%",
                    plugins: {
                        legend: {
                            position: "bottom",
                            fullSize: true,
                            labels: {
                                pointStyle: "circle",
                                usePointStyle: true,
                                padding: 45,
                                font: {
                                    size: 12,
                                    weight: "bold",
                                },
                            },
                        },
                    },
                }}
            />
          </div>
            </div>
        </div>
    );
};

export default PieChartCard;
