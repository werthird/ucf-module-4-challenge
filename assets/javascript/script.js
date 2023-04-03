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




/* ===================================================================================
---------  CREATE ELEMENTS TO APPEND TO PAGE -----------
====================================================================================*/

const createH2 = document.createElement('h2');





/* ===================================================================================
---------  GLOBALLY DECLARED VARIABLES -----------
====================================================================================*/

let timeLeft = 31;
let score = 0;
let trackQuestion = 0;






/* ===================================================================================
---------  ARRAY TO STORE QUESTIONS, OPTIONAL ANSWERS, AND CORRECT ANSWERS -----------
====================================================================================*/

const quizArray = [
  // Question 1
  {
    q: "How to write single line comments in Javascript?",
    a: ['1. <!-- comment -->', '2. // comment', '3. # comment', '4. """ comment """'],
    c: '2. // comment',
  },
  // Question 2
  {
    q: "How to write a strict equality operator in JavaScript?", 
    a: ["1. =", "2. ---", "3. ==", "4. ==="], 
    c: "4. ===" 
  },
  // Question 3
  {
    q: "Commonly used data types in JavaScript DO NOT include:", 
    a: ["1. booleans", "2. strings", "3. alerts", "4. numbers"], 
    c: "3. alerts" 
  },
  // Question 4
  {
    q: "What would be the result of console.log(3+2+'7'+(8-4))",
    a: ["1. 574", "2. 57(4)", "3. 16", "4. 5'7'4"],
    c: "1. 574"
  },
  // Question 5
  {
    q: "Which IS NOT a valid for for a variable?",
    a: ["1. let color = 'red';", "2. var age = 9;", "3. let var = true;", "4. const breed = 'dog';"],
    c: "3. let var = true;"
  },
  // Question 6
  {
    q: "The condition in an if/else statement is enclosed within ______?",
    a: ['1. ""', "2. {}", "3. ()", "4. []"],
    c: "3. ()"
  },
];




/* ===================================================================================
--------- GLOBAL FUNCTIONS -----------
====================================================================================*/

// Start game function
  function startQuiz() {
    startTimer();
    runQuiz();
    startGame.textContent = '';                       // Clears start quiz button from screen
  }



// Timer function
  function startTimer() {
    let timerInterval = setInterval(function() {
      timeLeft--;                                   // Calls on timer variable and reduces 
      timerSpan.textContent = `${timeLeft}`;        // Displays count down in span on page

      if(timeLeft <= 0) {                          // Stops timer when count down reaches 0
        clearInterval(timerInterval);
      }
    }, 1000);
  }


  
// Check correct answer function
  function clicked(event) {                              
    if (event.target.textContent === quizArray[trackQuestion].c) {   // If correct answer is clicked
      trackQuestion ++;
      clearDiv();
    } else {                                                         // If incorrect answer is clicked
      trackQuestion ++;
      timeLeft = timeLeft - 10;
      clearDiv();
    };
  };



  // Clears div of questions function
  function clearDiv() {                                   
    const answersDiv = document.querySelector('#answersContainer'); // Grabs answers div again 
    answersDiv.innerHTML = "";                             // Clears answers div
    runQuiz();                                             // Runs quiz game again
  }


  




// Event listener rewrites content when START QUIZ button is clicked
startButton.addEventListener('click', startQuiz);



/* ===================================================================================
--------- RUN QUIZ FUNCTION -----------
====================================================================================*/

// Appends question and answers to page function
function runQuiz() {
    questionsDiv.textContent = quizArray[trackQuestion].q;       // Adds question to question div
    for (i=0; i<quizArray[trackQuestion].a.length; i++) {        // Creates button for each item in answers array
      const but = document.createElement('button');
      but.textContent = quizArray[trackQuestion].a[i];
      but.setAttribute('class', 'answersButton');                // Sets button class and id
      but.setAttribute('id', `button${i+1}`);
      but.addEventListener('click', clicked);                    // Adds event listener to each button
      answersDiv.appendChild(but);                               // Appends button to answers div
    };
};





    

