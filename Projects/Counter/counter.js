let timeElapsed = 0;
let timeElapsedSec = 0;
let timeElapsedMin = 0;
let timeElapsedHour = 0; 
let counterState = 0;

let clock = document.getElementById("clock");



// document.getElementById("clock").innerHTML = "burakbaba" ;

let start = document.querySelector(".start");
let stopp  = document.querySelector(".stop");
let reset = document.querySelector(".reset");


function stopCounter(){
    clearInterval(interval);
}

var time = 1000;
function startCounter(){
    counterState = 1;
    // clock.textContent = 0 ;
    interval = setInterval(increaseCounter, time);

}

function addZeroBefore(n){
    return (n < 10 ? '0' : '') + n;
}

function showTime(){
    clock.textContent = "Time Elapsed " + addZeroBefore(timeElapsedHour) +":"+ addZeroBefore(timeElapsedMin)+":"+addZeroBefore(timeElapsedSec);
}

function resetCounter(){
    timeElapsed = 0;
    timeElapsedSec = 0;
    timeElapsedMin = 0;
    timeElapsedHour = 0; 

    showTime();
}


function increaseCounter(){

    
    timeElapsedSec++ ;

    if(timeElapsedSec == 60){
        timeElapsedSec=0;
        timeElapsedMin++;
    }
 
    if(timeElapsedMin == 60){
        timeElapsedMin=0;
        timeElapsedHour++;
    }
    if(timeElapsedHour == 24){
        timeElapsedHour=0;
    }
       
    showTime();
    
}



start.addEventListener("click", () => {
    
    if(counterState == 0){
        startCounter();
    }
});

stopp.addEventListener("click", () => {
    stopCounter();
    counterState=0;
});

reset.addEventListener("click", () => {
    stopCounter();
    resetCounter();
    counterState = 0;
});