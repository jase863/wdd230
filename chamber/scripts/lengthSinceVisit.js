let message = document.getElementById("message");

const msConversion = 86400000 ;

const dateThen = new Date();

const dateToday = dateThen.getDate();

let lastVisit = Number(window.localStorage.getItem("daysSinceVisit")) || 0;

let daysPassed = dateToday - lastVisit || 0;

if (daysPassed !== 0){

    if (daysPassed < 1 > 0){

        message.innerHTML = "Back so soon! Awesome!";
    } else if (daysPassed >= 1){
        if (daysPassed == 1){

        message.innerHTML = `You last visted ${daysPassed.toFixed(0)} day ago.`;

        }else{
           
            message.innerHTML = `You last visted ${daysPassed.toFixed(0)} days ago.`;

        }

    }
} else{
    message.innerHTML = "Welcome! Let us know if you have any questions!";
}

console.log(daysPassed);
localStorage.setItem("daysSinceVisit", dateToday);
