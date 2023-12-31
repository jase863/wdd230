const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const url = "https://api.openweathermap.org/data/2.5/weather?lat=49.75&lon=6.64&units=imperial&appid=792c40ba8e4c311347a688df4de2ee45"
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
    
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    weatherIcon.src = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    weatherIcon.alt = `image of ${data.weather[0].description}`
    captionDesc.textContent = data.weather[0].description;
}


