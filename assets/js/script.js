const gameChoiceDisplay = document.getElementById("game-choice")
const playerChoiceDisplay = document.getElementById("player-choice")
const resultDisplay = document.getElementById("result")
const startButton = document.getElementById("start")
const restartButton = document.getElementById("restart")
const rounddisplay = document.getElementById("round")
const scoreArea = document.getElementById("score-area")
const openingElement = document.getElementById("opening")
const instructionElement = document.getElementById("instruction")
const playButtons = document.getElementById("play-buttons")
const possibleChoices = document.querySelectorAll("button")
let playerChoice



startButton.addEventListener('click', startGame)

function startGame() {
    startButton.classList.add('hide')
    restartButton.classList.add('hide')
    openingElement.classList.add('hide')
    instructionElement.classList.add('hide')
    rounddisplay.classList.remove('hide')
    scoreArea.classList.remove('hide')
    playButtons.classList.remove('hide')
    gameChoiceDisplay.classList.remove('hide')
    playerChoiceDisplay.classList.remove('hide')
    resultDisplay.classList.remove('hide')

}

possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click' , (e) => {
    playerChoice = e.target.id
    playerChoiceDisplay.innerHTML = playerChoice
  }))
  





