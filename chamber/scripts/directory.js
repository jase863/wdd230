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

        infos.forEach((info) =>{

            // creating elements for dynamic list
            let iconImage = document.createElement("img");
            let nameh3 = document.createElement("h3");
            let linkAnchor = document.createElement("a");
            let addressP = document.createElement("p");
            let phoneP = document.createElement("p");
            let levelP = document.createElement("p");
            let yearsP = document.createElement("p");

            // variables for different json elements
            let address = info.address;
            let phone = info.phone;
            let url = info.url;
            let icon = info.icon;
            let memberLevel = info.memberLevel;
            let memberYears = info.memberYears;

            // element attributes for html document
            nameh3.textContent = shopName;
            iconImage.src = icon;
            iconImage.alt = `image of the ${shopName} logo`;
            linkAnchor.href = (url);
            linkAnchor.innerHTML = `${url}`;
            addressP.textContent = address;
            phoneP.textContent = phone;
            levelP.textContent = memberLevel;
            yearsP.textContent = `${memberYears} years as a member`

            // appending to main list item
            shopList.appendChild(iconImage);
            shopList.appendChild(nameh3);
            shopList.appendChild(linkAnchor);
            shopList.appendChild(addressP);
            shopList.appendChild(phoneP);
            shopList.appendChild(levelP);
            shopList.appendChild(yearsP);
        })

        shops.appendChild(shopList);
    });
}
