answers = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
  return answers[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  let question = prompt("Select rock, paper or scissors");
  return question;
}

function playGame() {
  while (playerScore < 3 || computerScore < 3) {
    playRound();
  }
}

function playRound() {
  const computerChoice = getComputerChoice();
  const playerChoice = getPlayerChoice().toLowerCase();

  if (playerChoice === computerChoice) {
    return `You both picked ${playerChoice}, draw. The score is player: ${playerScore} computer: ${computerScore}`;
  } else {
    if (playerChoice === "rock") {
      switch (computerChoice) {
        case "paper":
          computerScore++;
          return `Paper beats rock, player loses. The score is player: ${playerScore} computer: ${computerScore}`;
          break;
        case "scissors":
          playerScore++;
          return `Rock beats scissors, player wins. The score is player: ${playerScore} computer: ${computerScore}`;
          break;
      }
    } else if (playerChoice === "paper") {
      switch (computerChoice) {
        case "rock":
          playerScore++;
          return `Paper beats rock, player wins. The score is player: ${playerScore} computer: ${computerScore}`;
          break;
        case "scissors":
          computerScore++;
          return `Scissors beats paper, player loses. The score is player: ${playerScore} computer: ${computerScore}`;
          break;
      }
    } else {
      switch (computerChoice) {
        case "rock":
          computerScore++;
          return `Rock beats scissors, player loses. The score is player: ${playerScore} computer: ${computerScore}`;
          break;
        case "paper":
          playerScore++;
          return `Scissors beats paper, player wins. The score is player: ${playerScore} computer: ${computerScore}`;
          break;
      }
    }
  }
}

console.log(playGame());
