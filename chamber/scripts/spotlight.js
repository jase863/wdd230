const baseURL = "https://jase863.github.io/wdd230/chamber/index.html";
const spotlightsURL = "https://jase863.github.io/wdd230/chamber/data/members.json";

const spotlight = document.querySelector("#spotlight");


async function getSpotlight() {

    const response = await fetch(spotlightsURL);

    const data = await response.json();

    console.log(data);

    displaySpotlight(data.businesses);

    
}

getSpotlight();

function displaySpotlight(businesses){

    let storedNumber = 0;
    let random = Math.floor(Math.random() * (4-1) + 1);
    let spotlightName = document.createElement("h3");
    let spotlightText = document.createElement("p");

    storedNumber += random;
    let infoPath = businesses[storedNumber].info[0];

    spotlightName.innerText = businesses[storedNumber].name;
    spotlightText.innerText = infoPath.spotlight;
    
    spotlight.appendChild(spotlightName);
    spotlight.appendChild(spotlightText);
}
