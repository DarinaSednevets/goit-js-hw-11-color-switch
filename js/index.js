
const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
];


const bodyRef = document.querySelector('body');
const btnStartRef = document.querySelector('[data-action="start"]');
const btnStopRef = document.querySelector('[data-action="stop"]');

let timerId = null;

const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
};

function changeColor(array) {
    const randomColor = randomIntegerFromInterval(0, array.length - 1);
    bodyRef.style.background = array[randomColor];
}
const handleStart = () => {
    if (!timerId) {
        btnStartRef.disabled = true;
        btnStopRef.disabled = false;
        timerId = setInterval(() => {
            changeColor(colors)
        }, 100);
    }

}
const handleStop = () => {
    btnStartRef.disabled = false;
    btnStopRef.disabled = true;
    clearInterval(timerId);
    timerId = null;

}
btnStartRef.addEventListener('click', handleStart);
btnStopRef.addEventListener('click', handleStop);



// first solution


// let timerId = null;

// const bodyRef = document.querySelector('body');
// const startBtnRef = document.querySelector('[data-action="start"]');
// const stopBtnRef = document.querySelector('[data-action="stop"]');

// const randomIntegerFromInterval = (min, max) => {
//     return Math.floor(Math.random() * (max - min + 1) + min);
// };

// const handleClickStart = () => {
//     if (!timerId) {
//         timerId = setInterval(() => {
//             bodyRef.setAttribute(
//                 'style',
//                 `background-color: ${colors[randomIntegerFromInterval(0, 5)]}`,
//             );
//         }, 400);
//     }
// };
// const handleClickStop = () => {
//     clearInterval(timerId);
//     timerId = null;
// };
// startBtnRef.addEventListener('click', handleClickStart);
// stopBtnRef.addEventListener('click', handleClickStop);