const weather = document.querySelector('#weather');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=41.16&lon=-112.06&units=imperial&appid=792c40ba8e4c311347a688df4de2ee45"
async function apiFetch(){
    try{
    response = await fetch(url);

    if (response.ok){

        // let data = await response.json();
        console.log(data);

    }  else {
        
        throw Error(await response.text());
    }
} catch (error){

        console.log(error);

    }

    let data = await response.json();

    displayResults(data);
}

apiFetch();

function displayResults(data){
    
    let weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    
    weather.innerHTML = `<img src="${weatherIcon}" alt= "image of ${data.weather[0].description}"> ${data.main.temp}&deg;F - ${data.weather[0].description}`;
}


