'use strict';

//elementos de mi html
const playBtn = document.querySelector('.play');
const reloadBtn = document.querySelector('.reload');
const moveInput = document.querySelector('.js_move');
const resultInput = document.querySelector('.js_result');
const computerInput = document.querySelector('.js_counter_lost');
const playerInput = document.querySelector('.js_counter_win');

//variables globales
let playerScore = 0;
let computerScore = 0;
let moves = 0;

//Funciones
function getRandomNumber(max) {
    return Math.ceil(Math.random() * max);
}

//generar la jugada aleatoria: ordenador
function generarJugadaAleotoria() {
    let moveComputer = "";
    let number = getRandomNumber(9);
    if (number <= 3) {
        moveComputer = "piedra";
    } else if (number <= 6) {
        moveComputer = "papel"
    } else {
        moveComputer = "tijera";
    }
    return moveComputer;

}

//obtener la jugada de la usuaria
function obtenerJugadaUsuaria() {
    return moveInput.value;
}

//comparar jugadas y ver quien ha ganado
function playGame() {

    let moveComputer = generarJugadaAleotoria();
    let movePlayer = obtenerJugadaUsuaria();
    console.log(`jugada computadora ${moveComputer}`);
    console.log(`jugada usuaria ${movePlayer}`);

    moves++; //aumentar el numero de jugadas
    console.log(moves);

    if (moveComputer === movePlayer) {
        //empate
        resultInput.innerHTML = "Empate!"

    } else if (movePlayer === "piedra") {
        if (moveComputer === "papel") {
            resultInput.innerHTML = "Has perdido!"
            computerScore++;
        } else if (moveComputer === "tijera") {
            resultInput.innerHTML = "Has ganado!"
            playerScore++;
        }

    } else if (movePlayer === "tijera") {
        if (moveComputer === "piedra") {
            resultInput.innerHTML = "Has perdido!"
            computerScore++;
        } else if (moveComputer === "papel") {
            resultInput.innerHTML = "Has ganado!"
            playerScore++;
        }

    } else if (movePlayer === "papel") {
        if (moveComputer === "tijera") {
            resultInput.innerHTML = "Has perdido!"
            computerScore++;
        } else if (moveComputer === "piedra") {
            resultInput.innerHTML = "Has ganado!"
            playerScore++;
        }
    }
    computerInput.innerHTML = "Ordenador: " + computerScore;
    playerInput.innerHTML = "Jugador:  " + playerScore;
}

//bonus: finalizar juego 
function gameOver() {
    if (moves === 10) {
        if (playerScore > computerScore) {
            resultInput.innerHTML = "Has ganado el juego"
        } else if (playerScore < computerScore) {
            resultInput.innerHTML = "Has perdido el juego"
        } else {
            resultInput.innerHTML = "Empate"
        }
        playBtn.classList.add("hidden");
        reloadBtn.classList.remove("hidden");
    }


}

//mostrar resultados: texto, puntuacion
function hadleClickPlayGame(ev) {
    ev.preventDefault();
    playGame();
    gameOver();
}

function handleClickReload(ev) {
    ev.preventDefault();
    playBtn.classList.remove("hidden");
    reloadBtn.classList.add("hidden");
    playerScore = 0;
    computerScore = 0;
    moves = 0;
    resultInput.innerHTML = "Vamos a jugar"
    computerInput.innerHTML = "Ordenador: " + computerScore;
    playerInput.innerHTML = "Jugador:  " + playerScore;
}


//Eventos
playBtn.addEventListener('click', hadleClickPlayGame);
reloadBtn.addEventListener("click", handleClickReload)