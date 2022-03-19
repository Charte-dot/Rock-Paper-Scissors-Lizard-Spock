const gameChoiceDisplay = document.getElementById("game-choice");
const playerChoiceDisplay = document.getElementById("player-choice");
const resultDisplay = document.getElementById("result");
const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const scoreArea = document.getElementById("score-area");
const openingElement = document.getElementById("opening");
const instructionElement = document.getElementById("instruction");
const playButtons = document.getElementById("play-buttons");
const possibleChoices = document.querySelectorAll("button");
let playerChoice;
let gameChoice;


/**
 * event listeners
 */

startButton.addEventListener('click', startGame);

/**
 * start game
 */
function startGame() {
  startButton.classList.add('hide');
  restartButton.classList.add('hide');
  openingElement.classList.add('hide');
  instructionElement.classList.add('hide');
  scoreArea.classList.remove('hide');
  playButtons.classList.remove('hide');
  gameChoiceDisplay.classList.remove('hide');
  playerChoiceDisplay.classList.remove('hide');
  resultDisplay.classList.remove('hide');

}

/**
 * player choices button selector
 */
possibleChoices.forEach(possibleChoices => possibleChoices.addEventListener('click', (e) => {
  playerChoice = e.target.id;
  playerChoiceDisplay.innerHTML = playerChoice;
  generateGameChoice();
  getResults();
}))

/**
 * random game move selection
 */
function generateGameChoice() {
  const randomNumber = Math.floor(Math.random() * 5) + 1
  console.log(randomNumber);

  if (randomNumber === 1); {
    gameChoice = 'lizard';
  }

  if (randomNumber === 2); {
    gameChoice = 'spock';
  }

  if (randomNumber === 3); {
    gameChoice = 'paper';
  }

  if (randomNumber === 4); {
    gameChoice = 'rock';
  }

  if (randomNumber === 5); {
    gameChoice = 'scissors';
  }

  gameChoiceDisplay.innerHTML = gameChoice
};

/**
 * game win, loose, draw senarios
 */
const getResults = () => {
  switch (playerChoice + gameChoice) {
    case 'rockscissors':
    case 'rocklizard':
    case 'paperspock':
    case 'paperrock':
    case 'scissorslizard':
    case 'scissorspaper':
    case 'lizardspock':
    case 'lizardpaper':
    case 'spockrock':
    case 'spockscissors':
      resultDisplay.innerHTML = "You Win!"
      break;
    case 'rockspock':
    case 'rockpaper':
    case 'paperlizard':
    case 'paperscissors':
    case 'scissorsrock':
    case 'scissorsspock':
    case 'lizardrock':
    case 'lizardscissors':
    case 'spockpaper':
    case 'spocklizard':
      resultDisplay.innerHTML = "You Loose!"
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'lizardlizard':
    case 'scissorscissors':
    case 'spockspock':
      resultDisplay.innerHTML = "It's a Draw!"


  }

};