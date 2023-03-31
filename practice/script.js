// function to create li list

/* in function
    - create button
    - add value to button from array
    - append button to page
*/

const quesDiv = document.querySelector('#questionCont');
let array = ["one", "two", "three"];

let buttons = '';

for (i=0; i<array.length; i++) {
  let but = document.createElement('button');
  but.textContent = array[i];
  quesDiv.appendChild(but);
}
