let visits = document.getElementById("visits");
let visitNumber = Number(window.localStorage.getItem("visitNumber-ls")) || 0;

if(visitNumber !== 0) {

    visits.textContent = `Number of Visits: ${visitNumber}`;

} else{

    visitNumber.textContent = visitNumber.textContent = "Welcome to my homepage! Thanks for stopping by!"
}

visitNumber++;

localStorage.setItem("visitNumber-ls", visitNumber);
