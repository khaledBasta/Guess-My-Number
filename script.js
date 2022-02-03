'use strict';
/*
console.log(document.querySelector('.message').textContent);
document.querySelector('.message').textContent = '🎉Correct Number!';
console.log(document.querySelector('.message').textContent);
document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;
document.querySelector('.guess').value = 50;
console.log(document.querySelector('.guess').value);
*/
const randomNumber = function () {
  return Math.trunc(Math.random() * 20) + 1;
};
let secretNumber = randomNumber();
let score = 20;
let highscore = 0;

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};
const displayScore = function (score) {
  document.querySelector('.score').textContent = score;
};
const bodyBackground = function (color) {
  document.querySelector('body').style.backgroundColor = color;
};
const number = document.querySelector('.number');

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  console.log(guess, typeof guess);

  // When there is no input
  if (!guess) {
    displayMessage('⛔ No Number!');

    // When player wins
  } else if (guess === secretNumber) {
    displayMessage('🎉 Correct Number!');
    bodyBackground('#60b347');
    number.style.width = '30rem';
    number.textContent = secretNumber;

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // When player guess too High or too low
  } else if (guess !== secretNumber) {
    if (score > 1) {
      score--;
      displayScore(score);
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!');
    } else {
      displayMessage('💣 GameOver!');
      displayScore(0);
    }
  }
  // else if (guess > secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '📈 Too high!';
  //   } else {
  //     document.querySelector('.message').textContent = '💣 GameOver!';
  //     document.querySelector('.score').textContent = 0;
  //   }

  //   // When player guess too Low
  // } else if (guess < secretNumber) {
  //   if (score > 1) {
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //     document.querySelector('.message').textContent = '📉 Too low!';
  //   } else {
  //     document.querySelector('.message').textContent = '💣 GameOver!';
  //     document.querySelector('.score').textContent = 0;
  //   }
  // }
});

document.querySelector('.again').addEventListener('click', function () {
  score = 20;
  displayScore(score);
  secretNumber = randomNumber();
  bodyBackground('');
  number.style.width = '15rem';
  number.textContent = '?';
  document.querySelector('.guess').value = '';
  displayMessage('Start guessing...');
});
