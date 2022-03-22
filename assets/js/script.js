const playerScore_span = document.getElementById("player-score");
const gameScore_span = document.getElementById("game-score");
const resultDisplay = document.getElementById("result");
const startButton = document.getElementById("start");
const restartButton = document.getElementById("restart");
const scoreArea = document.getElementById("score-area");
const openingElement = document.getElementById("opening");
const rulesElement = document.getElementById("rules");
const rockOption = document.getElementById("rock");
const paperOption = document.getElementById("paper");
const scissorsOption = document.getElementById("scissors");
const lizardOption = document.getElementById("lizard");
const spockOption = document.getElementById("spock");

let playerScore = 0;
let gameScore = 0;


//start button event listeners
startButton.addEventListener('click', startGame);
restartButton.addEventListener('click', startGame);



//start game

function startGame() {
  startButton.classList.add("hide");
  restartButton.classList.add("hide");
  openingElement.classList.add("hide");
  rulesElement.classList.add("hide");
  scoreArea.classList.remove("hide");
  resultDisplay.classList.remove("hide");
  rockOption.classList.remove("hide");
  paperOption.classList.remove("hide");
  scissorsOption.classList.remove("hide");
  lizardOption.classList.remove("hide");
  spockOption.classList.remove("hide");
  playerScore = 0;
  gameScore = 0;
  playerScore_span.innerHTML = playerScore;
  gameScore_span.innerHTML = gameScore;
  resultDisplay.innerHTML = "Select a button to start!"



}

//random game move selection

function getGameChoice() {
  const option = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return option[randomNumber];
}

//game win, loose, draw sequence

function game(playerChoice) {
  const gameChoice = getGameChoice();
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
      win(playerChoice, gameChoice);
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
      lose(playerChoice, gameChoice);
      break;
    case 'rockrock':
    case 'paperpaper':
    case 'lizardlizard':
    case 'scissorscissors':
    case 'spockspock':
      draw(playerChoice, gameChoice);
      break;
  }

}

//game button event listeners//

function main() {
  rockOption.addEventListener('click', () => game("rock"));

  paperOption.addEventListener('click', () => game("paper"));

  scissorsOption.addEventListener('click', () => game("scissors"));

  lizardOption.addEventListener('click', () => game("lizard"));

  spockOption.addEventListener('click', () => game("spock"));
}

main();

//score tracker and result display//

function win( playerChoice, gameChoice) {
  playerScore++;
  playerScore_span.innerHTML = playerScore;
  gameScore_span.innerHTML = gameScore;
  resultDisplay.innerHTML = `${playerChoice} beats  ${gameChoice}.... You Win!`;


  if (playerScore > 9) {
    resultDisplay.innerHTML = "Game over, you win!... Play Again";
    endGame();

  }

}
//lose function

function lose(playerChoice, gameChoice) {
  gameScore++;
  playerScore_span.innerHTML = playerScore;
  gameScore_span.innerHTML = gameScore;
  resultDisplay.innerHTML = `${playerChoice} loses to  ${gameChoice}.... You Lose!`;

  if (gameScore > 9) {
    resultDisplay.innerHTML = "Game over, you Lose!... Play Again?";
    endGame();

  }
}

//draw function

function draw(playerChoice, gameChoice) {
  playerScore--;
  playerScore_span.innerHTML = playerScore;
  gameScore_span.innerHTML = gameScore;
  resultDisplay.innerHTML = `${playerChoice} equal  ${gameChoice}.... Its a Draw!`;

  gameScore--;
  playerScore_span.innerHTML = playerScore;
  gameScore_span.innerHTML = gameScore;
  resultDisplay.innerHTML = `${playerChoice} equal  ${gameChoice}.... Its a Draw!`;
}

//end game and reset scores to play again//

function endGame() {
  restartButton.classList.remove("hide");
  rockOption.classList.add("hide");
  paperOption.classList.add("hide");
  scissorsOption.classList.add("hide");
  lizardOption.classList.add("hide");
  spockOption.classList.add("hide");


}