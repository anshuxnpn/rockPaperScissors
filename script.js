let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;
let round = 0;

function getComputerChoice() {
  let randomInteger = Math.floor(Math.random() * choices.length);
  return choices[randomInteger];
}

function playRound(playerSelection, computerSelection) {
  const combinedValue = playerSelection + ' ' + computerSelection;
  switch (combinedValue) {
    case 'rock rock':
    case 'paper paper':
    case 'scissors scissors':
      console.log("It's a tie");
      break;

    case 'rock scissors':
    case 'paper rock':
    case 'scissors paper':
      console.log("You win");
      playerScore++;
      break;

    case 'paper scissors':
    case 'scissors rock':
    case 'rock paper':
      console.log("You lose");
      computerScore++;
      break;

    default:
      console.log("Something went wrong");
      break;
  }
}

const rock = document.getElementById('rock');
const paper = document.getElementById('paper');
const scissors = document.getElementById('scissors');

function buttonClick(e) {
  const playerSelection = e.target.id;
  const computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);

  round++;
  if (round === 5) {
    endGame();
  }
}

rock.addEventListener('click', buttonClick);
paper.addEventListener('click', buttonClick);
scissors.addEventListener('click', buttonClick);

function endGame() {
  console.log("Game over!");

  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (playerScore < computerScore) {
    console.log("You lost the game.");
  } else {
    console.log("It's a tie game.");
  }
}

function game() {
  playerScore = 0;
  computerScore = 0;
  round = 0;
}

game();
