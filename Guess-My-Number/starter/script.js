'use strict';

// let highScore = 99;
// document.querySelector('.message').textContent = 'Correct Number!!';

// document.querySelector('.highscore').textContent = highScore;

// document.querySelector('.number').textContent = highScore;

// document.querySelector('.score').textContent = highScore;

// document.querySelector('.guess').value = highScore;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;
let score = 20;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '😱 NO NUMBER!!';
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '💖 Correct Number';
    document.querySelector('.score').textContent = score;
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '😱 YOU LOST!!';
      document.querySelector('.score').textContent = 0;
    }
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
