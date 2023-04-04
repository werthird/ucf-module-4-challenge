const scoreUl = document.querySelector('#scoreBoard');
let scoreLogInit = localStorage.getItem('initials');
let scoreLogScore = localStorage.getItem('score');

let scoreLi = document.createElement('li');
scoreLi.textContent = scoreLogInit + scoreLogScore;

scoreUl.append(scoreLi);