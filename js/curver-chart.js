import { requestViewTimestamp } from './dom-loader'


const weeklyData = [
    { chartId: 1 },
    { chartData: [2, 10, 6, 16, 11, 20, 10] }
]
const monthlyData = [
    { chartId: 2 },
    { chartData: [32, 40, 26, 56, 36, 20, 43] },
]
const yearlylyData = [
    { chartId: 3 },
    { chartData: [212, 180, 260, 168, 221, 200, 170] }
]


requestViewTimestamp.addEventListener("change", function () {
 
})



const chartContainer = (chartdata) => {

    const labels = [
        'Sun',
        'Mon',
        'Tue',
        'Wed',
        'Thu',
        'Fri',
        'Sat',
    ];

    const data = {
        labels: labels,
        datasets: [{
            label: '',
            backgroundColor: '#52a0f5',
            borderColor: '#52a0f5',
            borderWidth: 4,
            data: chartdata,
            tension: 0.4,
            pointRadius: 0
        }]
    };

    const config = {
        type: 'line',
        data: data,
        options: {
            legend: {
                labels: {
                    fontColor: "blue",
                    fontSize: 18
                }
            },
            scales: {
                y: {
                    beginAtZero: false,
                    grid: {
                        display: false,
                        borderColor: "lightgrey",
                    },
                    ticks: {
                        color: "rgb(163, 160, 160)",
                    }
                },
                x: {
                    ticks: {
                        color: "rgb(163, 160, 160)",
                    }
                }

            }
        }
    };

    return config
}



const myChart = new Chart(
    document.getElementById("myChart"),
    chartContainer(weeklyData[1].chartData)
);


