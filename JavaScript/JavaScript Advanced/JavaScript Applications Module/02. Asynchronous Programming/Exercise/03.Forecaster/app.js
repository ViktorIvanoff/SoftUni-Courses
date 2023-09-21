function attachEvents() {

//take all elements
// define weather symbols
// define upcoming and current DIVs
// getButton => addEventListener
// clear previous info, set classes to divs, make hidden div visible

//fetch location data from server = name, code
//code = fetch forecast for today
//update html with todays forecast
//fetch upcoming forecast
//update html based on data

//take elements
const hiddenDivForecast = document.getElementById('forecast');
// later we will need to display this div
const getBtn = document.getElementById('submit');
const inputFieldElement = document.getElementById('location');
const currentWeatherDiv = document.getElementById('current');
const upcomingWeatherDiv = document.getElementById('upcoming');

let sunny = '&#x2600'; // ☀
let partlySunny = '&#x26C5'; // ⛅
let overcast = '&#x2601'; // ☁
let rain = '&#x2614'; // ☂
let degrees = '&#176'; // °
let code = '';

let locationUrl = `http://localhost:3030/jsonstore/forecaster/locations`;
let currentDiv = document.createElement('div');
let upcomingDiv = document.createElement('div');

// addeventlistener
getBtn.addEventListener('click', () => {
    currentDiv.innerHTML = '';
    upcomingDiv.innerHTML = '';

    // set classes to those divs
    currentDiv.setAttribute('class', 'forecasts');
    upcomingDiv.setAttribute('class', 'forecast-info');

    //make hidden div visible
    hiddenDivForecast.style.display = 'inline';

    fetch(locationUrl)
    .then(res => res.json())
    .then(data => {
        data.forEach(locationInfoObject => {
// {code: 'ny', name: 'New York'}code: "ny"name: "New York"
// app.js:52 {code: 'london', name: 'London'}
// app.js:52 {code: 'barcelona', name: 'Barcelona'}
            if (locationInfoObject.name == inputFieldElement.value) {
                return code = locationInfoObject.code;
                // the string code becomes 'london'
            }
        });

        // once we have the code, make another fetch to get the current weather forecast
        fetch(`http://localhost:3030/jsonstore/forecaster/today/${code}`)
        .then(res => res.json())
        .then(data => {

            //create spans
            const spanGroup = document.createElement('span');
            const spanWithSymbol = document.createElement('span');
            const locationSpan = document.createElement('span');
            const temperatureSpan = document.createElement('span');
            const weatherSpan = document.createElement('span');

            // set classes
            spanGroup.setAttribute('class', 'condition');
            spanWithSymbol.setAttribute('class', 'condition symbol');
            locationSpan.setAttribute('class', 'forecast-data');
            temperatureSpan.setAttribute('class', 'forecast-data');
            weatherSpan.setAttribute('class', 'forecast-data');

            //set data
            locationSpan.textContent = data.name;
            temperatureSpan.innerHTML = `${data.forecast.low}${degrees}/${data.forecast.high}${degrees}`;
            weatherSpan.textContent = data.forecast.condition;
            let weather = data.forecast.condition;

            if(weather == 'Sunny'){
                spanWithSymbol.innerHTML = sunny;
            } else if(weather == 'Party sunny') {
                spanWithSymbol.innerHTML = partlySunny;

            } else if(weather == 'Overcast') {
                spanWithSymbol.innerHTML = overcast;
            } else if(weather == 'Rain') {
                spanWithSymbol.innerHTML = rain;
            }

            //append spans to div
            spanGroup.appendChild(locationSpan);
            spanGroup.appendChild(weatherSpan);
            spanGroup.appendChild(temperatureSpan);
            currentDiv.appendChild(spanGroup);
            currentDiv.appendChild(spanWithSymbol);

            currentWeatherDiv.appendChild(currentDiv);

        })
        .catch(error => console.log(error))

        //fetch data for 3 days
        fetch(`http://localhost:3030/jsonstore/forecaster/upcoming/${code}`)
        .then(res => res.json())
        .then(data => {
// forecast : {condition: 'Partly sunny', high: '17', low: '6'}
           let upcomingDays = data.forecast;
          
           upcomingDays.forEach(day => {
           //{condition: 'Rain', high: '8', low: '6'}
            const upcomingSpanGroup = document.createElement('span');
            const symbolSpan = document.createElement('span');
            const highLowSpan = document.createElement('span');
            const forecastSpan = document.createElement('span');

            upcomingSpanGroup.setAttribute('class', 'upcoming');
            symbolSpan.setAttribute('class', 'symbol');
            highLowSpan.setAttribute('class', 'forecast-data');
            forecastSpan.setAttribute('class', 'forecast-data');

            highLowSpan.innerHTML = `${day.low}${degrees}/${day.high}${degrees}`;
            forecastSpan.textContent = day.condition;
            let weatherForecast = day.condition;

            if(weatherForecast == 'Sunny'){
                symbolSpan.innerHTML = sunny;
            } else if(weatherForecast == 'Party sunny') {
                symbolSpan.innerHTML = partlySunny;
            } else if(weatherForecast == 'Overcast') {
                symbolSpan.innerHTML = overcast;
            } else if(weatherForecast == 'Rain') {
                symbolSpan.innerHTML = rain;
            }
            
            upcomingSpanGroup.appendChild(symbolSpan);
            upcomingSpanGroup.appendChild(highLowSpan);
            upcomingSpanGroup.appendChild(forecastSpan);

            upcomingDiv.appendChild(upcomingSpanGroup);
            upcomingWeatherDiv.appendChild(upcomingDiv);
           })
        })
        .catch(error => console.log(error));
    }); 
})
}

attachEvents();