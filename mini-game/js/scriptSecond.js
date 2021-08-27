// btn values
const newGame = document.querySelector(".main__new");
const rollDice = document.querySelector(".main__roll");
const hold = document.querySelector(".main__hold");

//arrays of elements
const dicesArray = document.querySelectorAll(".main__dice");
const playerOne = document.querySelector("#player1");
const playerTwo = document.querySelector("#player2");
const currentScorePlayer0 = document.querySelector("#player1__current");
const currentScorePlayer1 = document.querySelector("#player2__current");
const playerOneTotal = document.querySelector("#player1__total");
const playerTwoTotal = document.querySelector("#player2__total");

//some needed values
let current = 0;
let finalScorePlayer1 = 0;
let finalScorePlayer2 = 0;
let activePlayer = 0;
//let finalScore = [0, 0];

// Congratulations block
const congrats = document.querySelector(".main__congrats");
const congratsText = document.querySelector(".main__congrats-text");

// ADD event on ROLL
rollDice.addEventListener("click", function () {
  dicesArray.forEach((element) => {
    element.classList.remove("show");
  });

  const randomValue = Math.trunc(Math.random() * 6 + 1);
  dicesArray[randomValue - 1].classList.add("show");

  activePlayer = playerOne.classList.contains("active") ? 0 : 1;

  if (activePlayer === 0) {
    current += randomValue;
    currentScorePlayer0.textContent = current;
  } else {
    current += randomValue;
    currentScorePlayer1.textContent = current;
  }

  if (randomValue === 1 && activePlayer === 0) {
    switchPlayer();
  } else if (randomValue === 1 && activePlayer === 1) {
    switchPlayer();
  }
});

// Hold btn listener
hold.addEventListener("click", () => {
  dicesArray.forEach((element) => {
    element.classList.remove("show");
  });

  if (activePlayer === 0) {
    finalScorePlayer1 += current;
    playerOneTotal.textContent = finalScorePlayer1;
    switchPlayer();
  } else {
    finalScorePlayer2 += current;
    playerTwoTotal.textContent = finalScorePlayer2;
    switchPlayer();
  }

  //victory
  if (finalScorePlayer1 >= 50) {
    congrats.classList.add("show");
    congratsText.textContent = "Player 1 had won!!!✨🎉";
  } else if (finalScorePlayer2 >= 50) {
    congrats.classList.add("show");
    congratsText.textContent = "Player 2 had won!!!✨🎉";
  }
});

// New game btn
newGame.addEventListener("click", () => {
  document.location.reload();
});

//functions
function switchPlayer() {
  playerTwo.classList.toggle("active");
  playerOne.classList.toggle("active");
  activePlayer === 0
    ? (currentScorePlayer0.textContent = current = 0)
    : (currentScorePlayer1.textContent = current = 0);
}
