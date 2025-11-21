function getRandomComputerResult() {
  const options = ["Rock", "Paper", "Scissors", "Lizard", "Spock"];
  const randomIndex = Math.floor(Math.random() * 5);
  return options[randomIndex];
}

let playerScore = 0;
let computerScore = 0;

function hasPlayerWonTheRound(userOption, computerResult) {
  if (userOption === computerResult) {
    return null;
  }

  /*
  Scissors cuts paper,
  Paper covers rock,
  Rock crushes scissors, 
  Scissors decapitates lizard,
  Lizard poisons Spock,
  Spock smashes schissors,
  Spock vaporizes rock,
  Rock crushes lizard,
  Lizard eats paper,
  Paper disproves Spock.
  */

  const winningCombinations = [
    ["Scissors", "Paper"],
    ["Paper", "Rock"],
    ["Rock", "Scissors"],
    ["Scissors", "Lizard"],
    ["Lizard", "Spock"],
    ["Spock", "Scissors"],
    ["Spock", "Rock"],
    ["Rock", "Lizard"],
    ["Lizard", "Paper"],
    ["Paper", "Spock"],
  ];

  if (winningCombinations.some((combo) => combo[0] === userOption && combo[1] === computerResult)) {
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
    winnerMsgElement.innerText = `${playerScore === 3 ? "Player" : "Computer"
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
const lizardBtn = document.getElementById("lizard-btn");
const spockBtn = document.getElementById("spock-btn");

rockBtn.addEventListener("click", function () {
  showResults("Rock");
});

paperBtn.addEventListener("click", function () {
  showResults("Paper");
});

scissorsBtn.addEventListener("click", function () {
  showResults("Scissors");
});

lizardBtn.addEventListener("click", function () {
  showResults("Lizard");
});

spockBtn.addEventListener("click", function () {
  showResults("Spock");
});

resetGameBtn.addEventListener("click", resetGame);
