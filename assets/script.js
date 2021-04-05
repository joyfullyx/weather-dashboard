var cityInput = document.querySelector('#searched-city');
// var cityInput = 'Houston'
var apiKey = '7051fae55dbddfea67be7da1053dc3fc';
var searchButton = document.querySelector('#search-button');
var resultsDiv = document.querySelector('#results')
var currentCityStats = document.querySelector('#current-city-stats');
var currentDayDiv = document.querySelector('#current-weather');
var currentDate = moment().format('[(] l[)]');
var currentDayIcon = document.querySelector('#current-icon');
var fiveDayCardsAll = document.querySelector('#five-day-cards');
var iconOne = document.querySelector('#icon-one');
var iconTwo = document.querySelector('#icon-two');
var iconThree = document.querySelector('#icon-three');
var iconFour = document.querySelector('#icon-four');
var iconFive = document.querySelector('#icon-five');
var results = document.getElementById('results');

function callApi (city) {
    var searchWeather = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
    fetch(searchWeather).then(function(data){
        return data.json()
    }).then(function(data){
        console.log(data)
        cityInput.textContent = cityInput.value;
        resultsDiv.innerHTML = "";
    
    

    var currentCity = document.createElement('ul');
    currentCity.setAttribute('class', 'currentDayStats')
    currentCity.setAttribute('style', 'list-style-type:none')
    currentDayDiv.append(currentCity);

    var currentIcon = data.weather[0].icon;
    currentDayIcon.setAttribute('src', 'http://openweathermap.org/img/wn/' + currentIcon + '@2x.png');
    currentDayIcon.setAttribute('alt', data.weather[0].description);

    var currentCityDaily = document.createElement('li')
    var currentIcon = data.weather;
    currentCityDaily.textContent = data.name + currentDate;
    currentCity.appendChild(currentCityDaily);

    var dailyTemp = document.createElement('li')
    dailyTemp.textContent = data.main.temp + '\xB0 F'
    currentCity.appendChild(dailyTemp);

    var dailyHumid = document.createElement('li');
    dailyHumid.textContent = 'Humidity: ' + data.main.humidity + '%';
    currentCity.appendChild(dailyHumid);

    var dailyWind = document.createElement('li');
    dailyWind.textContent = 'Wind Speed: ' + data.wind.speed + ' MPH';
    currentCity.appendChild(dailyWind);

    // for five day card
    var fiveDayWeather = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}&units=imperial`;
    fetch(fiveDayWeather).then(function(results){
        return results.json()
    }).then(function(results){
        console.log(results)

        var cardBodyAll = document.querySelector('.card-group');

        var card1 = document.querySelector('#card-one');
        var date1 = document.querySelector('#date-one')
        date1.textContent = results.list[0].dt_txt;
        var fiveDayIcon1 = results.list[0].weather[0].icon;
        iconOne.setAttribute('src', 'http://openweathermap.org/img/wn/' + fiveDayIcon1 + '@2x.png');
        iconOne.setAttribute('alt', results.list[0].weather[0].description);
        var temp1 = document.querySelector('#temp-one');
        temp1.textContent = 'Temp: ' + results.list[0].main.temp + '\xB0 F';
        var humid1 = document.querySelector('#humid-one');
        humid1.textContent = 'Humidity: ' + results.list[0].main.humidity + '%';

        var card2 = document.querySelector('#card-two')
        var date2 = document.querySelector('#date-two')
        date2.textContent = results.list[8].dt_txt;
        var fiveDayIcon2 = results.list[8].weather[0].icon;
        iconTwo.setAttribute('src', 'http://openweathermap.org/img/wn/' + fiveDayIcon2 + '@2x.png');
        iconTwo.setAttribute('alt', results.list[8].weather[0].description);
        var temp2 = document.querySelector('#temp-two');
        temp2.textContent = 'Temp: ' + results.list[8].main.temp + '\xB0 F';
        var humid2 = document.querySelector('#humid-two');
        humid2.textContent = 'Humidity: ' + results.list[8].main.humidity + '%';
        
        var card3 = document.querySelector('#card-three')
        var date3 = document.querySelector('#date-three')
        date3.textContent = results.list[14].dt_txt;
        var fiveDayIcon3 = results.list[14].weather[0].icon;
        iconThree.setAttribute('src', 'http://openweathermap.org/img/wn/' + fiveDayIcon3 + '@2x.png');
        iconThree.setAttribute('alt', results.list[14].weather[0].description);
        var temp3 = document.querySelector('#temp-three');
        temp3.textContent = 'Temp: ' + results.list[14].main.temp + '\xB0 F';
        var humid3 = document.querySelector('#humid-three');
        humid3.textContent = 'Humidity: ' + results.list[14].main.humidity + '%';

        var card4 = document.querySelector('#card-four')
        var date4 = document.querySelector('#date-four')
        date4.textContent = results.list[22].dt_txt;
        var fiveDayIcon4 = results.list[22].weather[0].icon;
        iconFour.setAttribute('src', 'http://openweathermap.org/img/wn/' + fiveDayIcon4 + '@2x.png');
        iconFour.setAttribute('alt', results.list[22].weather[0].description);
        var temp4 = document.querySelector('#temp-four');
        temp4.textContent = 'Temp: ' + results.list[22].main.temp + '\xB0 F';
        var humid4 = document.querySelector('#humid-four');
        humid4.textContent = 'Humidity: ' + results.list[22].main.humidity + '%';

        var card5 = document.querySelector('#card-five')
        var date5 = document.querySelector('#date-five')
        date5.textContent = results.list[30].dt_txt;
        var fiveDayIcon5 = results.list[30].weather[0].icon;
        iconFive.setAttribute('src', 'http://openweathermap.org/img/wn/' + fiveDayIcon5 + '@2x.png');
        iconFive.setAttribute('alt', results.list[30].weather[0].description);
        var temp5 = document.querySelector('#temp-five');
        temp5.textContent = 'Temp: ' + results.list[30].main.temp + '\xB0 F';
        var humid5 = document.querySelector('#humid-five');
        humid5.textContent = 'Humidity: ' + results.list[30].main.humidity + '%';
    })

    })
}


searchButton.addEventListener('click', function(event){
    event.preventDefault();
    console.log('submitted')

    var city = cityInput.value;
    console.log(city);
    cityInput.textContent = 'Search City';

    currentDayDiv.setAttribute('style', 'visibility:visible');
    fiveDayCardsAll.setAttribute('style', 'visibility:visible');

    callApi(city);
})

