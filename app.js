answers = ["rock", "paper", "scissors"];

function getComputerChoice() {
  return answers[Math.floor(Math.random() * 3)];
}

const computerSelection = getComputerChoice();

function playGame(player, computerChoice) {
  const playerChoice = player.toLowerCase();

  if (playerChoice === computerChoice) {
    return "draw";
  } else {
    if (playerChoice === "rock") {
      switch (computerChoice) {
        case "paper":
          return "player loses";
          break;
        case "scissors":
          return "player wins";
          break;
      }
    } else if (playerChoice === "paper") {
      switch (computerChoice) {
        case "rock":
          return "player wins";
          break;
        case "scissors":
          return "player loses";
          break;
      }
    } else {
      switch (computerChoice) {
        case "rock":
          return "player loses";
          break;
        case "paper":
          return "player wins";
          break;
      }
    }
  }
}

console.log(playGame("rock", computerSelection));
