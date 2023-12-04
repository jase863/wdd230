const baseURL = "https://jase863.github.io/wdd230/chamber/index.html";
const linksURL = "https://jase863.github.io/wdd230/chamber/data/members.json";

const activities = document.getElementById('activities');

async function getLinks() {

    const response = await fetch(linksURL);

    const data = await response.json();

    displayLinks(data.businesses);

    
}

getLinks();

function displayLinks(weeks) {
    weeks.forEach((week) => {
        let weeksList = document.createElement("li");
        let weekNum = week.name;
        let links = week.info

        weeksList.textContent = `${weekNum}: `;

        links.forEach((link) =>{

            let linkAnchor = document.createElement("a");
            let address = link.address;
            let phone = link.phone;

            linkAnchor.href = (address);

            if (link != links[links.length - 1]){

                linkAnchor.innerHTML = `${linkTitle} | `;

            } else{
                linkAnchor.innerHTML = `${linkTitle}`
            }
            

            weeksList.appendChild(linkAnchor);
        })

        activities.appendChild(weeksList);
    });
}
