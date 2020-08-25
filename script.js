
let canvas = document.querySelector('#canvas');
let time = document.querySelector('#time');
let guess = document.querySelector('#guess');
let score = document.querySelector('#score');


function makeBubbles(){

    for(i=0;i<54;i++){

        let ronden = Math.floor(Math.random()*10);

        canvas.innerHTML = canvas.innerHTML + `<div class="bubbles">${ronden}</div>`
       
    }
}
makeBubbles();

let start = 60;

function timer(){
    if(start>0){
        start--
    }
    else{
        canvas.innerHTML = `<h1>GAMER OVER!!</h1>`
    }
time.innerHTML=start
    
}
setInterval(timer,1000);

function guessNuber(){

    let rondenguess =  Math.floor(Math.random()*10);
    guess.innerHTML = rondenguess
}
guessNuber();

let point = 0;

canvas.addEventListener('click',function(event){
let = clickedNumber = event.target.textContent;


if(clickedNumber== guess.textContent){
point = point + 10;
score.innerHTML = point;
guessNuber();
canvas.innerHTML = '';
makeBubbles();
}

})









