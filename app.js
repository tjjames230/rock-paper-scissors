const answers = ["rock", "paper", "scissors"];
const playerScore = document.querySelector("#player-score");
const computerScore = document.querySelector("#computer-score");
const btns = Array.from(document.querySelectorAll(".btn-card"));

btns.forEach((button) => {
  button.addEventListener("mouseenter", (e) => {
    e.target.classList.toggle("shadow");
  });

  button.addEventListener("mouseleave", (e) => {
    e.target.classList.toggle("shadow");
  });
});

btns.forEach((button) => {
  button.addEventListener("click", (e) => {
    console.log(e.target.id);
  });
});

function getComputerChoice() {
  return answers[Math.floor(Math.random() * 3)];
}

function getPlayerChoice() {
  let question = prompt("Select rock, paper, or scissors");
  return question.toLowerCase();
}

function playGame() {
  while (playerScore < 3 && computerScore < 3) {
    console.log(playRound());
  }

  if (playerScore > computerScore) {
    return "Player wins the game!";
  } else {
    return "Computer wins the game!";
  }
}

function playRound() {
  let computerChoice = getComputerChoice();
  let playerChoice;

  if (playerChoice === computerChoice) {
    return `You both picked ${playerChoice}, it's a draw. 
    The score is player: ${playerScore} computer: ${computerScore}`;
  } else if (
    (playerChoice === "rock" && computerChoice === "scissors") ||
    (playerChoice === "paper" && computerChoice === "rock") ||
    (playerChoice === "scissors" && computerChoice === "paper")
  ) {
    playerScore++;
    return `You win! ${playerChoice} beats ${computerChoice}.
    The score is player: ${playerScore} computer: ${computerScore}`;
  } else {
    computerScore++;
    return `Computer wins! ${computerChoice} beats ${playerChoice}.
    The score is player: ${playerScore} computer: ${computerScore}`;
  }
}
