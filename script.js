function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors"];
  const randomIndex = Math.floor(Math.random() * 3);
  return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(userOption, computerResult) {
  if (userOption === computerResult) {
    return null;
  }
  if (
    (userOption === "Rock" && computerResult === "Scissors") ||
    (userOption === "Scissors" && computerResult === "Paper") ||
    (userOption === "Paper" && computerResult === "Rock")
  ) {
    return true;
  }
  return false;
}

function getRoundResults(userOption) {
  const computerResult = getRandomComputerResult();
  const playerResult = hasPlayerWonTheRound(userOption, computerResult);
  if (playerResult) {
    playerScore++;
    return `Player wins! ${userOption} beats ${computerResult}.`;
  } else if (playerResult === false) {
    computerScore++;
    return `Computer wins! ${computerResult} beats ${userOption}.`;
  } else {
    return `It's a tie! Both chose ${userOption}.`;
  }
}

const playerScoreSpanElement = document.getElementById("player-score");
const computerScoreSpanElement = document.getElementById("computer-score");
const roundResultsMsg = document.getElementById("results-msg");
const winnerMsgElement = document.getElementById("winner-msg");
const optionsContainer = document.getElementById("options-container");
const resetGameBtn = document.getElementById("reset-game-btn");

function showResults(userOption) {
  roundResultsMsg.innerText = getRoundResults(userOption);
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;

  if (playerScore === 3 || computerScore === 3) {
    winnerMsgElement.innerText = `${
      playerScore === 3 ? "Player" : "Computer"
    } has won the game.`;
    resetGameBtn.style.display = "block";
    optionsContainer.style.display = "none";
    roundResultsMsg.style.display = "none";
  }
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreSpanElement.innerText = playerScore;
  computerScoreSpanElement.innerText = computerScore;
  resetGameBtn.style.display = "none";
  optionsContainer.style.display = "block";
  winnerMsgElement.innerText = "";
  roundResultsMsg.innerText = "";
}

const rockBtn = document.getElementById("rock-btn");
const paperBtn = document.getElementById("paper-btn");
const scissorsBtn = document.getElementById("scissors-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

resetGameBtn.addEventListener("click", resetGame);
