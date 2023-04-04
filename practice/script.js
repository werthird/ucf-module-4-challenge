/* ===================================================================================
---------------       GRAB ELEMENTS FROM PAGE         ---------------
====================================================================================*/
// Grab the container DIV
const questionsDiv = document.querySelector('#questionContainer');
const answersDiv = document.querySelector('#answersContainer');
const startGame = document.querySelector('#startQuiz');

// Timer span
const timerSpan = document.querySelector("#timer");

// Grab the elements in the container DIV
let containerH1 = document.querySelector('#heading');
let containerP = document.querySelector('#paragraph');
let startButton = document.querySelector('#button');

/* in function
    - create button
    - add value to button from array
    - append button to page
*/

function finalScore() {
  questionsDiv.textContent = 'Please enter your initials to save your highscore';       // Adds question to question div
  const initInput = document.createElement('input');
  initInput.type = 'text';
  initInput.setAttribute('class', 'initialsInput');

  answersDiv.appendChild(initInput);
}

finalScore();
