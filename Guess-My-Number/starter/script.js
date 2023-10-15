'use strict';

// let highScore = 99;
// document.querySelector('.message').textContent = 'Correct Number!!';

// document.querySelector('.highscore').textContent = highScore;

// document.querySelector('.number').textContent = highScore;

// document.querySelector('.score').textContent = highScore;

// document.querySelector('.guess').value = highScore;

const secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
// document.querySelector('.number').textContent = secretNumber;

// Reseting button
document.querySelector('.again').addEventListener('click', function () {
  document.querySelector('.message').textContent = 'Start guessing..';
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  document.querySelector('.score').textContent = score;
  document.querySelector('.highscore').textContent = 0;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
});

// Game
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  // when there is no input
  if (!guess) {
    document.querySelector('.message').textContent = '😱 NO NUMBER!!';

    //when player wins
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '💖 Correct Number';
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    document.querySelector('.number').textContent = secretNumber;

    // when guess is too high
  } else if (guess > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = 'Too High';
      score--;
      document.querySelector('.score').textContent = score;

      // when player loses
    } else {
      document.querySelector('.message').textContent = '😱 YOU LOST!!';
      document.querySelector('.score').textContent = 0;
    }

    //when guess is too low
  } else if (guess < secretNumber) {
    document.querySelector('.message').textContent = 'Too Low';
    score--;
    document.querySelector('.score').textContent = score;
  }
});
