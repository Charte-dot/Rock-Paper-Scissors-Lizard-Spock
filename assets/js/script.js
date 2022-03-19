const gameChoice = document.getElementById("game-choice")
const playerChoice = document.getElementById("player-choice")
const resultDisplay = document.getElementById("result")
const startButton = document.getElementById("start")
const restartButton = document.getElementById("restart")
const rounddisplay = document.getElementById("round")
const scoreArea = document.getElementById("score-area")
const openingElement = document.getElementById("opening")
const instructionElement = document.getElementById("instruction")
const playButtons = document.getElementById("play-buttons")


startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    restartButton.classList.add('hide')
    openingElement.classList.add('hide')
    instructionElement.classList.add('hide')
    rounddisplay.classList.remove('hide')
    scoreArea.classList.remove('hide')
    playButtons.classList.remove('hide')




}




