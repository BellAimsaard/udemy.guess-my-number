'use strict';

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

let genSecretNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};

let secretNumber = genSecretNumber();
const initial = {};
initial.score = 20;
initial.secretValue = document.querySelector('.number').textContent;
initial.message = document.querySelector('.message').textContent;
let score = initial.score;
let highScore = 0;

//element.addEventListener(event, function, useCapture)
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  //Where thiss no input
  if (!guess) {
    displayMessage('⛔ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    // When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      //   document.querySelector('.message').textContent =
      //     guess > secretNumber ? '📈 Too high!' : '📉 Too Low!';
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('💥 You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

///////////////////////////////////////
// Coding Challenge #1

/* 
Implement a game rest functionality, so that the player can make a new guess! Here is how:

1. Select the element with the 'again' class and attach a click event handler
2. In the handler function, restore initial values of the score and secretNumber variables
3. Restore the initial conditions of the message, number, score and guess input field
4. Also restore the original background color (#222) and number width (15rem)

GOOD LUCK 😀
*/
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.number').textContent = initial.secretValue;
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('.score').textContent = score = initial.score;
  document.querySelector('body').style.backgroundColor = '#222';
  displayMessage(initial.message);
  document.querySelector('.guess').value = '';
  secretNumber = genSecretNumber();
});
