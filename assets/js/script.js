const playerScore_span = document.getElementById("player-score"); //player score counter
const gameScore_span = document.getElementById("game-score"); //game score counter
const resultDisplay = document.getElementById("result"); // result text for game
const startButton = document.getElementById("start"); // start button
const ruleDisplay = document.getElementById("rules-info"); // text area for rules
const comboDisplay = document.getElementById("combos") // text area for combinations
const ruleButton = document.getElementById("rule-btn") // rule button
const closeButton = document.getElementById("close-btn") // close rules button
const restartButton = document.getElementById("restart"); // restart game button
const scoreArea = document.getElementById("score-area") // displays score area
const openingDisplay = document.getElementById("opening"); // opening text
const rockOption = document.getElementById("rock"); // rock button
const paperOption = document.getElementById("paper"); // paper button
const scissorsOption = document.getElementById("scissors"); // scissors button
const lizardOption = document.getElementById("lizard"); // lizard button
const spockOption = document.getElementById("spock"); // spock button

let playerScore = 0; // player score
let gameScore = 0; // game score



startButton.addEventListener('click', startGame); // start button event listener
restartButton.addEventListener('click', startGame); // restart button event listener
ruleButton.addEventListener('click', showRules); // game rules button event listener
closeButton.addEventListener('click', closeRules); // close rules button event listner

/**
 * Credits to web dev simplified https://www.youtube.com/watch?v=riDzcEQbX6k for the concept of hide/unhide for elements on game
 */

// shows rules function

function showRules() {
  openingDisplay.classList.add("hide") // hides main open txt
  ruleDisplay.classList.remove("hide"); // displays rules
  comboDisplay.classList.remove("hide"); // displays comination list
  ruleButton.classList.add("hide"); // hides main rule button
  closeButton.classList.remove("hide"); // displays close rule button
  startButton.classList.add("hide"); // hides start button 

}

// close rules function

function closeRules() {
  openingDisplay.classList.remove("hide") // displays main open text when rules are closed
  ruleDisplay.classList.add("hide"); // hides rules display
  comboDisplay.classList.add("hide"); // hides combinaton list
  closeButton.classList.add("hide"); // hides close button for rules 
  ruleButton.classList.remove("hide"); // displays rule button on main screen
  startButton.classList.remove("hide"); // displays start game button
}

//start game function

function startGame() {
  startButton.classList.add("hide"); // hides start button from game area
  restartButton.classList.add("hide"); // hides restart button from game area
  openingDisplay.classList.add("hide"); // hides open text from game area
  ruleDisplay.classList.add("hide"); // hides rules from game area
  comboDisplay.classList.add("hide"); // hides combination from game area
  ruleButton.classList.add("hide"); // hides rule button from game area
  closeButton.classList.add("close"); //hides close rule button from game area
  scoreArea.classList.remove("hide"); // displays player and game score area
  resultDisplay.classList.remove("hide"); // displays game results
  rockOption.classList.remove("hide"); // displays rock button
  paperOption.classList.remove("hide"); // displays paper button
  scissorsOption.classList.remove("hide"); // displays scissors button
  lizardOption.classList.remove("hide"); // displays lizard button
  spockOption.classList.remove("hide"); // displays spock button
  playerScore = 0; // displays zero for player score
  gameScore = 0; // displays zero for game score
  playerScore_span.innerHTML = playerScore; // sets players start score to zero
  gameScore_span.innerHTML = gameScore; // sets game start score to zero
  resultDisplay.innerHTML = "Select a button to start!" // displays a start text in results area
}

/**
 * credits to https://alexabotello.medium.com/javascript-rock-paper-scissors-game-5c7dbb10038a on how 
 * to implement random number generator, switch case and event listeners that function together.
 */

//randomise game move selection

function getGameChoice() {
  const option = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
  const randomNumber = Math.floor(Math.random() * 5) + 1;
  return option[randomNumber];
}

//win, loose, draw sequence

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
  rockOption.addEventListener('click', () => game("rock")); // rock butoon event listener

  paperOption.addEventListener('click', () => game("paper")); // paper button event listener

  scissorsOption.addEventListener('click', () => game("scissors")); // scissors button event listner

  lizardOption.addEventListener('click', () => game("lizard")); // lizard button event listner

  spockOption.addEventListener('click', () => game("spock")); // spock button event listener
}

main();

/** credits to sebhastian .com https://sebhastian.com/rock-paper-scissors-javascript/ on how to 
 * implement a score counter for the game
 */

//score counter and result display//

function win(playerChoice, gameChoice) {
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

//end game function// 

function endGame() {
  restartButton.classList.remove("hide"); // displays restart button
  rockOption.classList.add("hide"); // hides rock button
  paperOption.classList.add("hide"); // hides paper button
  scissorsOption.classList.add("hide"); // hides scissors button
  lizardOption.classList.add("hide"); // hides lizards button
  spockOption.classList.add("hide"); // hides spock button
}