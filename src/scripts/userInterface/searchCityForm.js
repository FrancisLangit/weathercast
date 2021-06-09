import { openWeatherApi } from '../openWeatherApi.js';


const weatherDataDisplay = (() => {
    /**Where weather data on city searched is shown on user interface.*/

    let _div = document.getElementById('weatherDataDisplay'); 

    const update = (dataMain, dataWeather) => {
        console.log(dataMain);
        console.log(dataWeather);
    }

    return { update }
})(); 


const searchCityForm = (() => {
    /**Form that user fills in when searching for a city.*/

    const _displayWeatherData = () => {
        /**
         * Displays weather data of city queried by user in form.
         */
        let userInput = document.getElementById('searchCityInput').value;
        openWeatherApi.getPromise(userInput)
            .then(data => weatherDataDisplay.update(
                data.main, 
                data.weather[0],
            )
        );
    }

    const _setUp = () => {
        /**
         * Sets up methods to fire upon submission of form.
         * 
         * Adds submit event listener to form making it display data from Open
         * Weather API based on user's inputted city.
         */
        let form = document.getElementById('searchCityForm');
        form.addEventListener('submit', event => {
            event.preventDefault(); // Prevent submit from refreshing browser.
            _displayWeatherData();
        });
    }

    _setUp();
})();

export { searchCityForm }