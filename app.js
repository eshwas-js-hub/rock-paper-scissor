const startGameBtn = document.getElementById('start-game-btn'); 

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSOR = 'SCISSOR';
const DEFAULT = ROCK;

const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WIN = 'PLAYER_WIN';
const RESULT_COMPUTER_WIN = 'COMPUTER_WIN'; 

let gameIsRunning = false;

//  Function that handles Player Choice
const getPlayerChoice = function() {
  const selection = prompt(`Choose ${ROCK}, ${PAPER}, ${SCISSOR}!!`).toUpperCase();

  if(selection !== ROCK &&
    selection !== PAPER && 
    selection !== SCISSOR ) {
      alert(`INVALID INPUT!! We choosed ${DEFAULT} as the default!`);
      return DEFAULT;
    }
    return selection;
};

// Function that handles Computer CHoice
const getComputerChoice = function() {

  const randomValue = Math.random();
  if(randomValue < 0.34) {
    return ROCK;
  } else if ( randomValue < 0.67) {
    return PAPER;
  } else {
    return SCISSOR;
  }

};

const getResults = function(pChoice, cChoice) {

  if(pChoice === cChoice) {
    return RESULT_DRAW;
  } else if ( pChoice === ROCK && cChoice === PAPER ||
              pChoice === SCISSOR && cChoice === ROCK ||
              pChoice === PAPER && cChoice === SCISSOR ) {
                return RESULT_COMPUTER_WIN;
  }
  else {
      return RESULT_PLAYER_WIN;
    }

}


startGameBtn.addEventListener('click', function() {  
  if(gameIsRunning) return;
  gameIsRunning = true;
  console.log('Game is starting');
  const playerSelection = getPlayerChoice();
  const computerSelection = getComputerChoice();
  console.log(playerSelection, computerSelection);
  const winner = getResults(playerSelection, computerSelection);
  console.log(winner);
})

