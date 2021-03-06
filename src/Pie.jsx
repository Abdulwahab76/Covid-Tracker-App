import React from "react";
import { Pie } from "react-chartjs-2";

const data = {
    labels: ["Red", "Blue", "Yellow"],
    datasets: [
        {
            data: [300, 500, 600],
            backgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
            hoverBackgroundColor: ["#FF6384", "#36A2EB", "#FFCE56"],
        },
    ],
};

function PieTable() {
    return (
        <div>
            <h2>Pie Example</h2>
            <Pie data={data} height={50} />
        </div>
    );
}
export default PieTable;
