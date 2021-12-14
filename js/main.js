'use strict';

//Variables globales:
const userPlay = document.querySelector('.js-userPlay');
const button = document.querySelector('.js-button')
const result = document.querySelector('.js-resultado');


//Funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);

}
function playerPick() {
    //Coger el value de la usuaria
    const playerValue = userPlay.value;
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
    if ($playerValue === 'piedra') {
        if (computerValue === 'piedra') {
            document.querySelector('.result').innerHTML = '<h1>¡Empate!</h1>';
        }
    }
}

function handleClickPlay(event) {

    event.preventDefault();
    const computerValue = getNumber();
    playerPick();
    getWinner();
    /*console.log('Jugar')
    renderWinner();*/
}

//Código que se ejecuta
button.addEventListener('click', handleClickPlay);