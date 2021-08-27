// btn values
const newGame = document.querySelector(".main__new");
const rollDice = document.querySelector(".main__roll");
const hold = document.querySelector(".main__hold");

//arrays of elements
const dicesArray = document.querySelectorAll(".main__dice");
const playerOne = document.querySelector("#player1");
const playerTwo = document.querySelector("#player2");
const currentScorePlayer1 = document.querySelector("#player1__current");
const currentScorePlayer2 = document.querySelector("#player2__current");
const playerOneTotal = document.querySelector("#player1__total");
const playerTwoTotal = document.querySelector("#player2__total");

//some needed values
let current = 0;
let finalScorePlayer1 = 0;
let finalScorePlayer2 = 0;

// Congratulations block
const congrats = document.querySelector(".main__congrats");
const congratsText = document.querySelector(".main__congrats-text");

// ADD event on ROLL
rollDice.addEventListener("click", function () {
  dicesArray.forEach((element) => {
    element.classList.remove("show");
  });

  const randomValue = Math.trunc(Math.random() * (7 - 1) + 1);
  dicesArray[randomValue - 1].classList.add("show");

  if (playerOne.classList.contains("active")) {
    current += randomValue;
    currentScorePlayer1.textContent = current;
  } else if (playerTwo.classList.contains("active")) {
    current += randomValue;
    currentScorePlayer2.textContent = current;
  }

  if (randomValue === 1 && playerOne.classList.contains("active")) {
    fromFirstToSecond();
  } else if (randomValue === 1 && playerTwo.classList.contains("active")) {
    fromSecondToFirst();
  }
});

//
hold.addEventListener("click", () => {
  dicesArray.forEach((element) => {
    element.classList.remove("show");
  });

  if (playerOne.classList.contains("active")) {
    finalScorePlayer1 += current;
    playerOneTotal.textContent = finalScorePlayer1;

    fromFirstToSecond();
  } else if (playerTwo.classList.contains("active")) {
    finalScorePlayer2 += current;
    playerTwoTotal.textContent = finalScorePlayer2;

    fromSecondToFirst();
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
function fromFirstToSecond() {
  playerOne.classList.remove("active");
  playerTwo.classList.add("active");
  currentScorePlayer1.textContent = current = 0;
}
function fromSecondToFirst() {
  playerTwo.classList.remove("active");
  playerOne.classList.add("active");
  currentScorePlayer2.textContent = current = 0;
}
