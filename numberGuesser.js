let highscore = 0;
let currentScore = 20;

let secretNumber = Math.floor(Math.random() * 20) + 1;
let message = document.querySelector(".message");

document.querySelector(".restart").addEventListener("click", function () {
  secretNumber = Math.floor(Math.random() * 20) + 1;
  currentScore = 20;
  document.querySelector(".current-score").textContent =
    "💯 Current Score:" + currentScore;
  message.textContent = "Start guessing...";
  document.querySelector(".input-field").value = "";
  document.querySelector(".content").textContent = "?";
});

document
  .querySelector(".input-field")
  .addEventListener("onchange", function () {
    message.textContent = "Start guessing...";
  });

document.querySelector(".check").addEventListener("click", function () {
  let guess = Number(document.querySelector(".input-field").value);

  if (
    (message.textContent === "You win! 🎉") |
    (message.textContent === "You already won! Please restart the game!")
  ) {
    message.textContent = "You already won! Please restart the game!";
  } else if (currentScore === 0) {
    message.textContent = "You lose!";
  } else if (secretNumber - guess > 5) {
    message.textContent = "Too Low!";
    currentScore--;
    document.querySelector(".current-score").textContent =
      "💯 Current Score:" + currentScore;
  } else if (secretNumber - guess <= 5 && secretNumber - guess > 0) {
    message.textContent = "A little low!";
    currentScore--;
    document.querySelector(".current-score").textContent =
      "💯 Current Score:" + currentScore;
  } else if (guess - secretNumber > 5) {
    message.textContent = "Too High!";
    currentScore--;
    document.querySelector(".current-score").textContent =
      "💯 Current Score:" + currentScore;
  } else if (guess - secretNumber <= 5 && guess - secretNumber > 0) {
    message.textContent = "A little high!";
    currentScore--;
    document.querySelector(".current-score").textContent =
      "💯 Current Score:" + currentScore;
  } else if (guess === secretNumber) {
    let answer = document.querySelector(".content");
    answer.textContent = secretNumber;
    highscore = Math.max(highscore, currentScore);
    message.textContent = "You win! 🎉";
    document.querySelector(".highscore").textContent =
      "🥇 High Score:" + highscore;
  }

  if (currentScore == 0) {
    message.textContent = "You lose! ☹️";
    answer.textContent = secretNumber;
  }
});
