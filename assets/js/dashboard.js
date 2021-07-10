import {CategoryScale, Chart, LinearScale, LineController, LineElement, PointElement} from "chart.js"


const config = {
    type: 'line',
    data: [],
};

Chart.register(LineController, CategoryScale,LinearScale,PointElement,LineElement)

const myChart = new Chart(
    document.getElementById('myChart'),
    config
);

async function showCart(type) {

    const req = await fetch(`dashboard/charts/${type}`)
    const res = await req.json()

    const labels = Object.keys(res.data);
    config.data = {
        labels: labels,
        datasets: [{
            label: 'My First Dataset',
            data: Object.values(res.data),
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
        }]
    };

    myChart.update()
}

(function (){
    const cards =  document.querySelectorAll(".cards")

    cards.forEach(card => {
        card.addEventListener("click", () => showCart(card.dataset.type))
    })
})()
