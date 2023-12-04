const baseURL = "https://jase863.github.io/wdd230/chamber/index.html";
const linksURL = "https://jase863.github.io/wdd230/chamber/data/members.json";

const shops = document.getElementById('businesses');

async function getLinks() {

    const response = await fetch(linksURL);

    const data = await response.json();

    displayLinks(data.businesses);

    
}

getLinks();

function displayLinks(businesses) {
    businesses.forEach((business) => {
        let shopList = document.createElement("li");
        let shopName = business.name;
        let infos = business.info;

        shopList.textContent = `${shopName}: `;

        infos.forEach((info) =>{

            let iconImage = document.createElement("img")
            let linkAnchor = document.createElement("a");

            let url = info.url;
            let icon = info.icon;
            let phone = info.phone;

            iconImage.src = `${icon}`;
            iconImage.alt = `image of the ${shopName} logo`;
            linkAnchor.href = (url);
            linkAnchor.innerHTML = `${url}`;

            shopList.appendChild(linkAnchor);
            shopList.appendChild(iconImage);
        })

        shops.appendChild(shopList);
    });
}
