//Alert when page loads
window.alert('Welcome to the Thunderdome!');

const choice = window.prompt('Choose your fighter! R, P, or S!');

//failsafe for not a valid choice


//computer random choice
function randomComputerChoice() {
  const choices = ['r', 'p', 's'];
  const randomIndex = Math.floor(Math.random() * choices.length);
  return choices[randomIndex];
};

//stores computer choice
let computerChoice = randomComputerChoice();
window.alert(`Computer chose: ${computerChoice}!`);

//figure out who won

//ask if player wants to play again

//scoreboard: figure out a way to keep score: wins ties & losses. player is needy so much confirm how many times they chose each weapon...tryhard
