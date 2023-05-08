let choices = ['rock', 'paper', 'scissors'];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice(){
  let randomInteger = Math.floor(Math.random()*choices.length);
  return choices[randomInteger];
}


function playRound(playerSelection, computerSelection){
  const combinedValue = playerSelection + ' ' + computerSelection;
  switch (combinedValue){
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

function game() {
  for (let round = 1; round <= 5; round++) {
    console.log(`Round ${round}`);
    let playerSelection = prompt("Please select your input").toLowerCase();
    let computerSelection = getComputerChoice(); 
    playRound(playerSelection, computerSelection);
  }

  console.log("Game over!");

  if (playerScore > computerScore) {
    console.log("You won the game!");
  } else if (playerScore < computerScore) {
    console.log("You lost the game.");
  } else {
    console.log("It's a tie game.");
  }
}

game();






