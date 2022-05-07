let order = [];
let clickedOrder = [];
let score = 0;

const green = 0;
const red = 1;
const yellow = 2;
const blue = 3;

const blueZone = document.querySelector('.blue');
const redZone = document.querySelector('.red');
const greenZone = document.querySelector('.green');
const yellowZone = document.querySelector('.yellow');

let shuffleOrder = () => {
    let colorOrder = Math.floor(Math.random() * 4);
    
    order[order.length] = colorOrder;
    clickedOrder = [];

    for (let i in order){
        let elementoColor = createColorElement(order[i]);
        lightColor(elementoColor, Number(i) + 1);
    }
}

let lightColor = (element, number) => {
    time = time * 500;

    setTimeout(() => {
        element.classList.add('selected');
    }, number - 250);

    setTimeout(() => {
        element.classList.remove('selected');
    })
}