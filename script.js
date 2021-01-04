'use strict';

function rando() {return Math.floor(Math.random()*10)+1}

let value = rando()

let score = 10;
let highscore = 0
var gamePlaying = true;

document.querySelector('.message').textContent


document.querySelector('.check').addEventListener('click', function () {
    if (gamePlaying){
        score -= 1
    var userNum = Number(document.querySelector('.guess').value)
   if (userNum === value){
       document.querySelector('.message').textContent = 'Winner!'
       document.querySelector('body').style.backgroundColor = '#e09347';
       if (highscore < score){
           document.querySelector('.highscore').textContent = score;
           highscore = score
       }
       gamePlaying = false
   } else if (userNum > value) {
    document.querySelector('.message').textContent = 'Too high lol';
   } else if (userNum < value) {
    document.querySelector('.message').textContent = 'Das not enough';
   }
   document.querySelector('.score').textContent = score;
   
}
})

document.querySelector('.again').addEventListener('click', function() {
gamePlaying = true;
document.querySelector('.guess').textContent = ''
value = rando()
score = 10
document.querySelector('.score').textContent = score;
document.querySelector('body').style.backgroundColor = '#000000'
document.querySelector('.message').textContent = 'Try again mate'
});