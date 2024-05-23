'use client'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const DoughnutChart = ({accounts}: DoughnutChartProps) => {
    const data = {
        datasets: [
            {
                label: 'Banks',
                data: [10000, 20000, 30000], 
                backgroundColor: [
                    '#3366CC',
                    '#33CC33',
                    '#FF9933'
                ]
            }
        ],
        labels: [
            'Bank 1',
            'Bank 2',
            'Bank 3'
        ]
    }
    return <Doughnut 
    data={data} 
    options={ {
        cutout:'60%',
        plugins: {
            legend: {
                display: false
            }
        }
    }}
    />
}

export default DoughnutChart