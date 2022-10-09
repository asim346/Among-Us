let redColor = document.querySelector('#red');
let greenColor = document.querySelector('#green');
let blueColor = document.querySelector('#blue');
let noColor = document.querySelector('#noColor');

let redButton = document.querySelector('#red-button');
let greenButton = document.querySelector('#green-button');
let blueButton = document.querySelector('#blue-button');
let noColorButton = document.querySelector('#noColor-button');

let Remover = () => {
    let activeElement = document.querySelector('.active');
    activeElement.classList.remove('active');
}

let showRed = () => {
    Remover();
    redColor.classList.add('active');
};

let showGreen = () => {
    Remover(); 
    greenColor.classList.add('active');
}

let showBlue = () => {
    Remover();
    blueColor.classList.add('active');
}

let Reset = () => {
    Remover();
    noColor.classList.add('active');
}

redButton.addEventListener('click', showRed);
greenButton.addEventListener('click', showGreen);
blueButton.addEventListener('click', showBlue);
noColorButton.addEventListener('click', Reset)
