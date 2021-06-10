import { dataConversion } from './index.js';
import { dataDisplay } from './index.js';
import { openWeatherApi } from './index.js';


const cityForm = (() => {
    /**Form that user fills in when searching for a city.*/

    let _cityFormDiv = document.getElementById('cityForm');


    const _displayWeatherData = () => {
        /**
         * Displays weather data of city queried by user in form.
         */
        let userInput = document.getElementById('cityFormInput').value;
        openWeatherApi.getPromise(userInput)
            .then(data => {
                dataDisplay.update(data, dataConversion.getKelvinToCelcius);
            });
    }


    const _setUp = () => {
        /**
         * Sets up methods to fire upon submission of form.
         * 
         * Adds submit event listener to form making it display data from Open
         * Weather API based on user's inputted city.
         */
        _cityFormDiv.addEventListener('submit', event => {
            event.preventDefault(); // Prevent submit from refreshing browser.
            _displayWeatherData();
        });
    }

    
    const hide = () => {
        /**
         * Hides the div holding contents of form.
         */
        _cityFormDiv.style.display = 'none';
    }


    const show = () => {
        /**
         * Unhides the div holding contents of form.
         */
         _cityFormDiv.style.display = 'block';
    }


    _setUp();

    return { hide, show }
})();


export { cityForm }