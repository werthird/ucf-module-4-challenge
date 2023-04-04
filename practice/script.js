
// Grab input1 from page
let inputField1 = document.querySelector('#input1');
// Grab the button from the page
let submitButton = document.querySelector('#submit');
// Grab timer span value
let timer = document.querySelector('#timer').textContent;

let trackArray;

// let trackArray = [];
if ( localStorage.getItem('score') ) {
    const stringArray = localStorage.getItem('score');
    trackArray = JSON.parse(stringArray);
  } else {
    trackArray = [];
  }

  console.log(trackArray);

// // Add an event listener to button
submitButton.addEventListener('click', function() {

  // Creates an object for each submit and pushes into array
  let userScore = {
    name: inputField1.value,
    score: timer,
  };
  trackArray.push(userScore);

  // Change trackArray into a string
  const arrayString = JSON.stringify(trackArray);
  console.log(arrayString);

  localStorage.setItem('score', arrayString);

  
});

