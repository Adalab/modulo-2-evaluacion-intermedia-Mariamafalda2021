'use strict';

//Variables globales:
const selectPlay = document.querySelector('.js-selectPlay');
const button = document.querySelector('.js-button')
const result = document.querySelector('.js-resultado');

//Funciones
function getRandomNumber(max) {
    console.log('crear número');
    return Math.ceil(Math.random() * max);

}
function pickPlay() {
    //Coger el value de la usuaria
    const playerValue = selectPlay.value;
    console.log(playerValue);
}

function renderWinner(winner) {
    console.log('quien gana');
    result.innerHTML = winner;
}


function getWinner() {
    //Generar número aleatorio
    const randomNum = getRandomNumber(10);
    //Coger valor Usuaria
    const playerValue = selectPlay.value;
    console.log(playerValue);
    //Comprobar si es < 3
    if (randomNum < 3) {
        result.innerHTML = 'Gana el ordenador'
    } else {
        result.innerHTML = 'Has ganado tu';
    }

}

function handleClickPlay(event) {
    console.log('Jugar')
    event.preventDefault();
    getWinner();
    renderWinner();
}

//Código que se ejecuta
button.addEventListener('click', handleClickPlay);