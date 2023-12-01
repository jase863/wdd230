const baseURL = "https://jase863.github.io/wdd230/";
const linksURL = "https://jase863.github.io/wdd230/data/links.json";
const activities = document.querySelector('#activities');

async function getLinks() {

    const response = await fetch(linksURL);

    const data = await response.json();

    console.log(data);

    displayLinks(data);
    
}

getLinks();

function displayLinks(weeks) {
    weeks.array.forEach((week) => {
        let card = document.createElement("section");
        let fullName = document.createElement("h2");
        let portrait = document.createElement("img");
        let birthDate = document.createElement("h3");
        let birthPlace = document.createElement("h3");

        fullName.textContent = `${week.week} ${week.week.url}`;
        birthDate.textContent = `Date of Birth ${prophet.birthdate}`
        birthPlace.textContent = `Place of Birth ${prophet.birthplace}`

        portrait.setAttribute("src", prophet.imageurl);
        portrait.setAttribute("alt", `Portrait of ${prophet.name} ${prophet.lastname}`);
        portrait.setAttribute("loading", "lazy");
        portrait.setAttribute("width", "340");
        portrait.setAttribute("height", "440");

        card.appendChild(fullName);
        card.appendChild(birthDate);
        card.appendChild(birthPlace);
        card.appendChild(portrait);


        cards.appendChild(card);
    });
}
