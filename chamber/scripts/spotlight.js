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
    let random = Math.floor(Math.random() * (businesses.length + 1));
    let randomBusiness = "";
    let spotlightText = document.createElement("h3");
    storedNumber += random;
    let infoPath = businesses[storedNumber].info[0];

    // alert(infoPath.memberLevel);

    while (randomBusiness === ""){


        if (infoPath.memberLevel != "Gold" || infoPath.memberLevel != "Silver"){

            if (){
                ;
            }
            
    } else{

        randomBusiness = businesses[storedNumber].name;
        alert(randomBusiness);

        }
    }
}
