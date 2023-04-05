// Grabs the ulUser from the page
const ulName = document.querySelector('#userName');
// Grabs the ulScore from the page
const ulScore = document.querySelector('#userScore');
// Grabs the clear button from the page
const clearStorage = document.querySelector('#buttonClear');


// Gets string from local storage
const stringArray = localStorage.getItem('score');
// Changes string into array of objects
const newArray = JSON.parse(stringArray);


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

clearStorage.addEventListener('click', function() {
  const li = document.querySelectorAll('li');
  const liArray = Array.from(li);
  liArray.forEach(function (li) {
    li.remove();
  });
  localStorage.clear();
  alert("Local Storage will be cleared.");
});

