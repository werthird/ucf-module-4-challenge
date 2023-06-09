/* ===================================================================================
---------------       GRAB ELEMENTS FROM PAGE         ---------------
====================================================================================*/
// Grab the container DIV
const questionsDiv = document.querySelector('#questionContainer');
const answersDiv = document.querySelector('#answersContainer');
const startGame = document.querySelector('#startQuizDiv');
const alertMessage = document.querySelector('#alertMessage');

// Timer span
const timerSpan = document.querySelector("#timer");

// Grab the elements in the container DIV
let containerH1 = document.querySelector('#heading');
let containerP = document.querySelector('#paragraph');
let startButton = document.querySelector('#button');
let submitLink = document.querySelector('#submitLink');


/* ===================================================================================
---------  CREATE ELEMENTS TO APPEND TO PAGE -----------
====================================================================================*/




/* ===================================================================================
---------  GLOBALLY DECLARED VARIABLES -----------
====================================================================================*/

let timeLeft = 51;
let score = 0;
let trackQuestion = 0;
let scoreTrack;

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
    startGame.style.display = 'none';                // Clears start quiz button from screen
  }



// Timer function
  function startTimer() {
    let timerInterval = setInterval(function() {
      timeLeft--;                                                   // Calls on timer variable and reduces 
      timerSpan.textContent = `${timeLeft}`;                        // Displays count down in span on page
      if(timeLeft <= 0 || trackQuestion === quizArray.length) {     // Stops timer when count down reaches 0
        clearInterval(timerInterval);
        finalScore();
      }
    }, 1000);
  }


  
// Check correct answer function
  function checkAnswer(event) {    
    alertMessage.style.opacity = 1;
    if (event.target.textContent === quizArray[trackQuestion].c) {
      alertMessage.textContent = 'Correct!';
      setTimeout(function(){                            // Function to fade out message after set time
        alertMessage.style.opacity = '0';
      }, 2000);
    } else {
      timeLeft = timeLeft - 10;                       // Reduced timeleft for incorrect answers
      alertMessage.textContent = 'Incorrect.'; 
      setTimeout(function(){                            // Function to fade out message after set time
        alertMessage.style.opacity = '0';
      }, 2000);
    };
    trackQuestion ++;                                 // Increases question tracker
    clearDiv();                                       // Clears div of previous questions
  };



  // Clears div of questions function
  function clearDiv() {                                   
    const answersDiv = document.querySelector('#answersContainer'); // Grabs answers div again 
    answersDiv.innerHTML = "";                                      // Clears answers div
    checkEndGame();                                                 // Runs quiz game again
  };


  // Checks if game should end function
  function checkEndGame() {
    if (timeLeft <= 0 || trackQuestion === quizArray.length) {
      finalScore();
    } else {
      runQuiz();
    };
  };
  

// Event listener rewrites content when START QUIZ button is clicked
startButton.addEventListener('click', startQuiz);


/* ===================================================================================
--------- RUN QUIZ FUNCTION -----------
====================================================================================*/

// Appends question and answers to page function
function runQuiz() {
    questionsDiv.textContent = quizArray[trackQuestion].q;       // Adds question to question div
    questionsDiv.setAttribute('class', 'enlargen');
    for (i=0; i<quizArray[trackQuestion].a.length; i++) {        // Creates button for each item in answers array
      const but = document.createElement('button');
      but.textContent = quizArray[trackQuestion].a[i];
      but.setAttribute('class', 'answersButton');                // Sets button class and id
      but.setAttribute('id', `button${i+1}`);
      but.addEventListener('click', checkAnswer);                // Adds event listener to each button
      answersDiv.appendChild(but);                               // Appends button to answers div
    };
};


/* ===================================================================================
--------- SUBMIT SCORE FUNCTION -----------
====================================================================================*/

function finalScore() {
  questionsDiv.textContent = `Your score is ${timeLeft} points!`;
  const answersDiv = document.querySelector('#answersContainer'); // Grabs answers div again 
  
  answersDiv.innerHTML = "";                                      // Clears answers div

  const initLabel = document.createElement('label');              //Creates label for input
  initLabel.setAttribute('for', 'initialsInput');
  initLabel.setAttribute('id', 'initialsLabel');
  initLabel.textContent = 'Please enter your initials to save your score!';
  answersDiv.appendChild(initLabel);
  
  const initInput = document.createElement('input');              // Creates input for initials
  initInput.type = 'text';
  initInput.setAttribute('class', 'initialsInput');
  initInput.setAttribute('id', 'initialsInput');
  answersDiv.appendChild(initInput);                              // Appends text input to page

  startGame.style.display = '';                                   // Shows hidden div
  startButton.style.display = 'none';                             // Hides startButton
  submitLink.style.display = '';                                  // Shows submit button
};


/* ===================================================================================
--------- LOCAL STORAGE FUNCTION -----------
====================================================================================*/
// Checks if local storage already has score stored
if ( localStorage.getItem('score') ) {                      // If local storage has score scored
  const stringArray = localStorage.getItem('score');        
  scoreTrack = JSON.parse(stringArray);                     // Build object and pass into scoreTrack array
} else {                                                    // If local storage does not
  scoreTrack = [];                                          // Set scoreTrack to empty array
};

// Submits score into local storage
submitLink.addEventListener('click', function() {
  let initInput = document.querySelector('#initialsInput'); // Grabs input from page
  let userScore = {                                         // Creates new object from input and timeLeft
    name: initInput.value,
    score: timeLeft,
  };
  scoreTrack.push(userScore);                               // Appends to scoreTrack array
  const arrayString = JSON.stringify(scoreTrack);           // Changes scoreTrack into string
  localStorage.setItem('score', arrayString);               // Sends scoreTrack into local storage
});


