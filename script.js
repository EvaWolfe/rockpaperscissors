
//Alert when page loads
window.alert('Welcome to the Thunderdome!');

//Alert window to let player make selection


//global variables
const playerScore = 0;
const computerScore = 0;
let playerChoice;
const choices = ['r', 'p', 's'];

//sets player choice
function getPlayerChoice() {
  playerChoice = window.prompt('Choose your fighter! R, P, or S!');

  //failsafe for invalid choice

  if (!choices.includes(playerChoice)) {
    window.alert(`Your only options are: R, P, or S! Try again!`);
    getPlayerChoice();
  }
};
getPlayerChoice();

//figure out who won
// function winner() {
//   if (playerChoice = 'r' &&= computerChoice != 's') {
//     window.alert('Well done! You win!');
//   }
// };

//overall game function

// function game() {

// };


//computer random choice
function randomComputerChoice() {

  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

//stores computer choice
let computerChoice = randomComputerChoice();
window.alert(`Computer chose: ${computerChoice}!`);

// function winner()
//ask if player wants to play again

//scoreboard: figure out a way to keep score: wins ties & losses. player is needy so much confirm how many times they chose each weapon...tryhard
