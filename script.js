
//Alert when page loads
window.alert('Welcome to the Thunderdome!');


//global variables
const playerScore = 0;
const computerScore = 0;
let playerChoice;
let computerChoice;
const choices = ['r', 'p', 's'];

//sets player choice
function getPlayerChoice() {
  //Alert window to let player make selection
  playerChoice = window.prompt('Choose your fighter! R, P, or S!');
  //failsafe for invalid choice
  if (!choices.includes(playerChoice)) {
    window.alert(`Your only options are: R, P, or S! Try again!`);
    getPlayerChoice();
  }
};

//computer random choice
function randomComputerChoice() {
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

//Figure out who won

function determineWinner() {
  //Tie
  if (playerChoice === computerChoice) {
    window.alert(`It's a tie!`);
    //player wins
  } else if (
    (playerChoice === 'r' && computerChoice === 's') ||
    (playerChoice === 's' && computerChoice === 'p') ||
    (playerChoice === 'p' && computerChoice === 'r')) {
    window.alert('Winner, Winner, Chicken Dinner!');
    //computer wins
  } else {
    window.alert('Computer Dominates!')
  };
};
//ask if player wants to play again
function playAgain() {
  if (window.confirm(`Would you like to play again?`)) {
    game();
  } else { window.alert(`Thanks for playing!`) };
};


function game() {
  getPlayerChoice();
  //stores computer choice
  computerChoice = randomComputerChoice();
  window.alert(`Computer chose: ${computerChoice}!`);
  determineWinner();
  playAgain();
};
game();
//scoreboard: figure out a way to keep score: wins ties & losses. player is needy so much confirm how many times they chose each weapon...tryhard

//overall game function
