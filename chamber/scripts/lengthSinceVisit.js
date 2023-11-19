let message = document.getElementById("message");

const msConversion = 84600000;
const dateToday = new Date();

const today = Date.now();

let lastVisit = Number(window.localStorage.getItem("daysSinceVisit")) || 0;

let daysPassed = (lastVisit - today) / msConversion;

if (daysPassed !== 0){

    if (daysPassed < 1){

        message.innerHTML = "Back so soon! Awesome!";
    } else if (daysPassed > 1){
        message.innerHTML = `You last visted ${daysPassed.toFixed(0)} days ago.`;
    }
} else{
    message.innerHTML = "Welcome! Let us know if you have any questions!";
}

localStorage.setItem("daysSinceVisit", today);
