import { openWeatherApi } from '../openWeatherApi.js';


const searchCityForm = (() => {
    /**Form that user fills in when searching for a city.*/

    let _displayCityWeatherData = () => {
        /**
         * Displays weather data of city queried by user in form.
         */
        let userInput = document.getElementById('searchCityInput').value;
        openWeatherApi.getPromise(userInput)
            .then(data => console.log(data));
    }

    let _setUp = () => {
        /**
         * Sets up methods to fire upon submission of form.
         * 
         * Adds submit event listener to form making it display data from Open
         * Weather API based on user's inputted city.
         */
        let form = document.getElementById('searchCityForm');
        form.addEventListener('submit', event => {
            event.preventDefault(); // Prevent submit from refreshing browser.
            _displayCityWeatherData();
        });
    }

    _setUp();
})();

export { searchCityForm }