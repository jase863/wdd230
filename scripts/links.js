const baseURL = "https://jase863.github.io/wdd230/";
const linksURL = "https://jase863.github.io/wdd230/data/links.json";

const activities = document.getElementById('activities');

async function getLinks() {

    const response = await fetch(linksURL);

    const data = await response.json();

    displayLinks(data.weeks);
    
}

getLinks();

function displayLinks(weeks) {
    weeks.forEach((week) => {
        let weeksList = document.createElement("li");
        let weekNum = week.week;
        let links = week.links

        weeksList.textContent = `${weekNum}: `;

        links.forEach((link) =>{

            let linkAnchor = document.createElement("a");
            let linkRef = link.url;
            let linkTitle = link.title;

            linkAnchor.href = (linkRef);

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
