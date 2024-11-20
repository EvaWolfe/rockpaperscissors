// const player = ;


window.alert('Welcome to the Thunderdome!');

const choice = window.prompt('Choose your fighter! R, P, or S!');

if (choice.toLowerCase() = 'r') {
  window.alert('Rock!');

  // {
  // if (choice.toLocaleLowerCase() = 'p') {
  // alert('Paper!');
  // }
};

function randomComputerChoice(); {
  const choices.toLowerCase = ['R', 'P', 'S'];
  const randomIndex = math.floor(Math.random) * choices.length;
  return choices[randomIndex];
};