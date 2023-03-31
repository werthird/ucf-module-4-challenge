/* ===================================================================================
---------------       GRAB ELEMENTS FROM PAGE         ---------------
====================================================================================*/
// Grab the container DIV
const questionsDiv = document.querySelector('#questionContainer');
const answersDiv = document.querySelector('#answersContainer');
const startQuiz = document.querySelector('#startQuiz');

const timerElement = document.querySelector("#timer");

// Grab the elements in the container DIV
let containerH1 = document.querySelector('#heading');
let containerP = document.querySelector('#paragraph');
let startButton = document.querySelector('#button');




/* ===================================================================================
---------  CREATE ELEMENTS TO APPEND TO PAGE -----------
====================================================================================*/

const createH2 = document.createElement('h2');





/* ===================================================================================
---------  GLOBALLY DECLARED VARIABLES -----------
====================================================================================*/

let timeLeft = 31;






/* ===================================================================================
---------  ARRAY TO STORE QUESTIONS, OPTIONAL ANSWERS, AND CORRECT ANSWERS -----------
====================================================================================*/

const testArray = [
  // Question 1
  {
    q1: "How to write single line comments in Javascript?",
    a1: ['1. <!-- comment -->', '2. // comment', '3. # comment', '4. """ comment """'],
    c1: '2. // comment',
  },
  {
    q2: "question2", 
    a2: "answer2", 
    c2: "correct2" 
  },
  {
    q3: "question3", 
    a3: "answer3", 
    c3: "correct3" 
  }
];




/* ===================================================================================
--------- GLOBAL FUNCTIONS -----------
====================================================================================*/

// Timer function
  function startTimer() {
    // Sets interval in variable
    let timerInterval = setInterval(function() {
      timeLeft--;
      timerElement.textContent = `${timeLeft}`;

      if(timeLeft === 0) {
        // Stops execution of action at set interval
        clearInterval(timerInterval);
      }
    }, 1000);
  }


// Check correct answer function
  function clicked(event) {
    if (event.target.textContent === testArray[0].c1) {
    console.log('That is the correct answer!');
    } else {
      console.log('Sorry, that is incorrect');
    }
  };











// Event listener rewrites content when START QUIZ button is clicked
startButton.addEventListener('click', runQuiz);

// Create a function that re-writes the content in the container div
function runQuiz() {

// Starts timer
    startTimer();


// Appends question and answers to page
    questionsDiv.textContent = testArray[0].q1;       // Adds question to question div

    for (i=0; i<testArray[0].a1.length; i++) {        // Creates button for each item in answers array
      const but = document.createElement('button');
      but.textContent = testArray[0].a1[i];
      but.setAttribute('class', 'answersButton');
      but.setAttribute('id', `button${i+1}`);

      but.addEventListener('click', clicked);         // Adds event listener to each button

      answersDiv.appendChild(but);                    // Appends button to answers div

    }
    startQuiz.textContent = '';                       // Clears start quiz button from screen
    
    
}



    

