
// Grabs the ulUser from the page
const ulName = document.querySelector('#userName');
// Grabs the ulScore from the page
const ulScore = document.querySelector('#userScore');


// Gets string from local storage
const stringArray = localStorage.getItem('score');
// Changes string into array of objects
const newArray = JSON.parse(stringArray);
console.log(newArray);




for (i=0; i<newArray.length; i++) {
  // Create li
  const liName = document.createElement('li');
  liName.textContent = newArray[i].name;
  ulName.appendChild(liName);

  // Create li
  const liScore = document.createElement('li');
  liScore.textContent = newArray[i].score;
  ulScore.appendChild(liScore);
}



