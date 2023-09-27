const answers = ["rock", "paper", "scissors"];
let playerScore = 0;
let computerScore = 0;
const btns = Array.from(document.querySelectorAll(".btn-card"));
const result = document.querySelector("#result");
let gameEnded = false; // Flag to track if the game has ended

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    if (!gameEnded) {
      const playerChoice = e.currentTarget.id;
      const computerChoice = getComputerChoice();

      playRound(playerChoice, computerChoice);
    }
  });
});

function getComputerChoice() {
  return answers[Math.floor(Math.random() * 3)];
}

function playRound(playerChoice, computerChoice) {
  if (gameEnded) {
    return; // Do nothing if the game has ended
  }

  if (playerChoice === computerChoice) {
    result.textContent = `You both picked ${playerChoice}, it's a draw.`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    result.textContent = `You win! ${playerChoice} beats ${computerChoice}.`;
  } else {
    computerScore++;
    result.textContent = `Computer wins! ${computerChoice} beats ${playerChoice}.`;
  }

  // Update the scores in the DOM
  document.querySelector("#player-score").textContent = playerScore;
  document.querySelector("#computer-score").textContent = computerScore;

  // Check if one of the players has won the game (e.g., reached a score of 3)
  if (playerScore >= 3 || computerScore >= 3) {
    gameEnded = true; // Set the flag to end the game

    if (playerScore > computerScore) {
      result.textContent = "Player wins the game!";
    } else {
      result.textContent = "Computer wins the game!";
    }

    // Disable the buttons to end the game
    btns.forEach((button) => {
      button.removeEventListener("click", () => {});
    });
  }
}
