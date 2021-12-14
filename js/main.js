'use strict';

//Variables globales:
const selectPlay = document.querySelector('.js-selectPlay');
const button = document.querySelector('.js-button')
const result = document.querySelector('.js-resultado');

//Funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);

}
function pickPlay() {
    //Coger el value de la usuaria
    const playerValue = selectPlay.value;
}

function renderWinner(winner) {
    console.log('quien gana');
    result.innerHTML = winner;
}


function getNumber() {
    //Generar número aleatorio
    const randomNum = getRandomNumber(10);
    let computerValue = ''
    //Comprobar si es < 3
    if (randomNum < 3) {
        computerValue = 'tijera';

    } else if (randomNum >= 6) {
        computerValue = 'papel'
    } else {
        computerValue = 'piedra'
    }
    return computerValue;
}

function getWinner() {

}

function handleClickPlay(event) {

    event.preventDefault();
    const computerValue = getNumber();
    pickPlay();
    getWinner();
    /*console.log('Jugar')
    renderWinner();*/
}

//Código que se ejecuta
button.addEventListener('click', handleClickPlay);