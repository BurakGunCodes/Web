let timeElapsed = 0;
let timeElapsedSec = 0;
let timeElapsedMin = 0;
let timeElapsedHour = 0;
let counterState = 0;

let clock = document.getElementById("clock");



// document.getElementById("clock").innerHTML = "burakbaba" ;

let start = document.querySelector(".start");
let stopp = document.querySelector(".stop");
let reset = document.querySelector(".reset");
let set = document.querySelector(".set");

function stopCounter() {
    counterState = 0 ;
    clearInterval(interval);
}

var time = 1000;
function startCounter() {
    counterState = 1;
    // clock.textContent = 0 ;
    // interval = setInterval(increaseCounter, time);
    interval = setInterval(decreaseCounter, time);

}

function addZeroBefore(n) {
    return (n < 10 ? '0' : '') + n;
}

function showTime() {
    clock.textContent = "Time Elapsed " + (timeElapsedHour) + ":" + (timeElapsedMin) + ":" + (timeElapsedSec);

    //clock.textContent = "Time Elapsed " + addZeroBefore(timeElapsedHour) +":"+ addZeroBefore(timeElapsedMin)+":"+addZeroBefore(timeElapsedSec);
}

function resetCounter() {
    timeElapsed = 0;
    timeElapsedSec = 0;
    timeElapsedMin = 0;
    timeElapsedHour = 0;

    showTime();
}


function increaseCounter() {


    timeElapsedSec++;
    // set fonksiyonunda bu değerlerden daha büyük değer girilmesi durumunda 0 olarak atayacak
    if (timeElapsedSec >= 60) {
        timeElapsedSec = 0;
        timeElapsedMin++;
    }

    if (timeElapsedMin >= 60) {
        timeElapsedMin = 0;
        timeElapsedHour++;
    }
    if (timeElapsedHour >= 24) {
        timeElapsedHour = 0;
    }

    showTime();

}


function decreaseCounter() {

    if (timeElapsedSec < 0) timeElapsedSec = 60;

    timeElapsedSec--;
    // set fonksiyonunda bu değerlerden daha büyük değer girilmesi durumunda 0 olarak atayacak
    if (timeElapsedSec < 0 || timeElapsedSec >= 60) {
        timeElapsedSec = 59;
        timeElapsedMin--;
    }

    if (timeElapsedMin < 0 || timeElapsedMin >=60) {
        timeElapsedMin = 59;
        timeElapsedHour--;
    }
    if (timeElapsedHour < 0 || timeElapsedHour >=24) {
        timeElapsedHour = 23;
    }

    showTime();
}



start.addEventListener("click", () => {

    if (counterState == 0) {
        startCounter();
    }else{
        alert("Timer is in use already");
    }
});

stopp.addEventListener("click", () => {
    stopCounter();
    counterState = 0;
});

reset.addEventListener("click", () => {
    stopCounter();
    resetCounter();
    counterState = 0;
});


set.addEventListener("click", () => {

    stopCounter();

    var name = window.prompt("Enter Value");
    const timeArray = name.split(":");

    timeElapsedSec = timeArray[2];
    timeElapsedMin = timeArray[1];
    timeElapsedHour = timeArray[0];

        // set fonksiyonunda bu değerlerden daha büyük değer girilmesi durumunda 0 olarak atayacak
        if (timeElapsedSec < 0 || timeElapsedSec >= 60) {
            timeElapsedSec = 59;
            timeElapsedMin--;
        }
    
        if (timeElapsedMin < 0 || timeElapsedMin >=60) {
            timeElapsedMin = 59;
            timeElapsedHour--;
        }
        if (timeElapsedHour < 0 || timeElapsedHour >=24) {
            timeElapsedHour = 23;
        }

        
    showTime();


});
