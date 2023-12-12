const currentWeather = document.querySelector('#current-weather');
const weather = document.querySelector('#weather');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=37.27&lon=-76.71&units=imperial&appid=792c40ba8e4c311347a688df4de2ee45";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=37.27&lon=-76.71&cnt=24&units=imperial&appid=6fedb83492a81fb83738d1ca84309ba0";
// put in lat and long for williamsburg
async function apiFetch(){
    try{
    response = await fetch(url);
    forecastResponse = await fetch(forecastUrl);

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
    let forecastData = await forecastResponse.json();

    displayResults(data);
    displayForecast(forecastData.list);
    console.log(forecastData.list);
}

apiFetch();

function displayResults(data){
    
    let weatherIcon = `https://openweathermap.org/img/wn/${data.weather[0].icon}.png`;
    
    currentWeather.innerHTML = `Currently: <img src="${weatherIcon}" alt= "image of ${data.weather[0].description}"> ${data.main.temp.toFixed(1)}&deg;F - ${data.weather[0].description}`;
}

function displayForecast(data){

    let date = new Date();

    let baseTemp = 0;

    let temp1 = document.createElement("h3");
    let temp2 = document.createElement("h3");
    let temp3 = document.createElement("h3");

    for(let i=0; i<=5; i++){

        baseTemp += data[i].main.temp;

    }

    let avgTemp1 = baseTemp/6;
    temp1.innerHTML = `${date.getMonth()+1}/${date.getDate()+1}: ${avgTemp1.toFixed(1)}&deg;F`;
    weather.appendChild(temp1);
    baseTemp = 0;

    for(let i=6; i<=13; i++){

        
        baseTemp += data[i].main.temp;
    }

    let avgTemp2 = baseTemp/8;
    temp2.innerHTML = `${date.getMonth()+1}/${date.getDate()+2}: ${avgTemp2.toFixed(1)}&deg;F`;
    weather.appendChild(temp2);
    baseTemp = 0;

    for(let i=14; i<=21; i++){
        
        baseTemp += data[i].main.temp;
    }

    let avgTemp3 = baseTemp/8;
    temp3.innerHTML = `${date.getMonth()+1}/${date.getDate()+3}: ${avgTemp3.toFixed(1)}&deg;F`;
    weather.appendChild(temp3);
    baseTemp = 0;
    
}

