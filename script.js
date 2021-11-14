let playerScore = 0;
let computerScore = 0;

function resetScore() {
  playerScore = 0;
  computerScore = 0;
}

function computerPlay() {
  let randNum = Math.floor(Math.random() * 3) + 1;

  if (randNum === 1) {
    return "rock";
  } else if (randNum === 2) {
    return "paper";
  } else {
    return "scissors";
  }
}

function playerSelection() {
  let askPlayer = prompt("Rock, Paper, or Scissors?");
  return askPlayer;
}


function newGame(player, computer) {
  player = playerSelection().toLowerCase();
  computer = computerPlay();
  let computerWin = `Computer chose ${computer}, computer wins!`;
  let playerWin = `Computer chose ${computer}, you win!`;
  let tie = `Computer chose ${computer}, it's a tie!`

  if (player === "rock") {
    if (computer === "rock") {
      console.log(tie);
    } else if (computer === "paper") {
      console.log(computerWin);
      computerScore++;
    } else {
      console.log(playerWin);
      playerScore++;
    }
  } else if (player === "paper") {
    if (computer === "rock") {
      console.log(playerWin);
      playerScore++;
    } else if (computer === "paper") {
      console.log(tie);
    } else {
      console.log(computerWin);
      computerScore++;
    }
  } else if (player === "scissors") {
    if (computer === "rock") {
      console.log(computerWin);
      computerScore++;
    } else if (computer === "paper") {
      console.log(playerWin);
      playerScore++;
    } else {
      console.log(tie);
    }
  } else {
    console.log("The selection you chose is invalid, computer automatically wins.")
  }
}

function playGame() {
  resetScore();

  for (let i = 1; i < 6; i++) {
    newGame();
  }

  if (playerScore > computerScore) {
    console.log("Player Wins")
  } else if (computerScore > playerScore) {
    console.log("Computer Wins")
  } else {
    console.log("It's a tie!")
  }
}

//ask the player what they choose
//make computer choose
//compare the values and display the winner
