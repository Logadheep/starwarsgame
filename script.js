// canvas setup
// const canvas = document.getElementById('canvas1');
// const ctx = canvas.getContext('2d') ;
// canvas.width = 800;
// canvas.height = 500;

// let score = 0;
// let gameframe =0;
// ctx.font = '50 px Geogria'
// // mouse intensivity
// let canvasPosition = canvas.getBoundingClientRect();
// const mouse ={
//     x: canvas.width/2,
//     y: canvas.height/2,
//     click: false
// }
// canvas.addEventListener('mousedown', function(event){
//     mouse.x = event.x;
//     mouse.y = event.y;
//     console.log(mouse.x,mouse.y);
// });
// player
// bubbles
// animation loop
const holes = document.querySelectorAll('.hole');
const scoreBoard = document.querySelector('.score');
const moles = document.querySelectorAll('.mole');
const countdownBoard = document.querySelector('.countdown');
const startButton = document.querySelector('.startbutton');

let lastHole;
let timeUp =false;
let timeLimit = 20000;
let score = 0;
let countdown;

function pickRandomHole(holes){
    const randomHole = Math.floor(Math.random()* holes.length);
    const hole = holes[randomHole];
    if (hole === lastHole){
        return pickRandomHole(holes);
    }
    lastHole = hole;
    return hole;
}
function popOut(){
    const time = Math.random()* 1300 + 400;
    const hole = pickRandomHole (holes);
    hole.classList.add('up');
    setTimeout(function(){
        hole.classList.remove('up'); 
        if (!timeUp) popOut();
    }, time)
}
popOut();

function startGame(){
    countdown = timeLimit/1000;
    scoreBoard.textContent = 0;
    scoreBoard.style.display = "block";
    countdownBoard.textContent =  countdown; 
    timeUp = false;
    score = 0;
    popOut;
    setTimeout(function(){
        timeUp = true;
    },timeLimit);

    let startCountdown = setInterval(function(){
        countdown -= 1
        countdownBoard.textContent = countdown;
        if (countdown < 0){
            countdown = 0;
            clearInterval(startCountdown);
            countdownBoard.textContent = "Time's Up!!! \n 🎉🎉🎉🎉🎂🎂🎂Happy Birthday 'U'.Divnesh🎂🎂🎂🎉🎉🎉🎉"
        }
    }, 1000);

}

startButton.addEventListener('click', startGame);

function whack(e){
    score++;
    countdown++;
    this.style.backgroundImage = "url(p2.jpg)";
    this.style.pointerEvents = 'none';
    setTimeout(() => {
        this.style.backgroundImage = "url(p2.jpg)";
        this.style.pointerEvents = 'all';
    }, 800);
    scoreBoard.textContent = score;
}
moles.forEach(mole => mole.addEventListener('click', whack))

// "function startGame"(){
//     countdown= timeLimit/1000;
// } 
