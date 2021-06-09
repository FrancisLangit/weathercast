import './styles/style.css';


const openWeatherApi = (() => {
    /**Methods for getting promises from Open Weather API.*/

    let _apiKey = '5fa4d007560f37c7fe7dc7244617ef63';

    const getPromise = (cityName) => {
        /**
         * Get promise from API holding weather data of a city. 
         * 
         * Returns promise from Open Weather API with value as JSON object
         * holding weather data of city requested.
         * 
         * @param {string} cityName Name of city to get data for.
         * 
         * @return {Promise} Promise holding weather data of city as JSON.
        */
        let url = `//api.openweathermap.org/data/2.5/weather?q=${
            cityName}&APPID=${_apiKey}`;
        return fetch(url, {mode: 'cors'})
            .then(response => response.json());
            
    }

    return { getPromise }
})();


const cityForm = (() => {
    /**Form that user fills in when searching for a city.*/
    let _cityFormDiv = document.getElementById('cardCityForm');


    const _displayWeatherData = () => {
        /**
         * Displays weather data of city queried by user in form.
         */
        let userInput = document.getElementById('cardCityFormInput').value;
        openWeatherApi.getPromise(userInput)
            .then(data => dataDisplay.update(
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

    return { hide, show}
})();


const dataDisplay = (() => {
    /**Where weather data on city searched is shown on user interface.*/

    let _div = document.getElementById('cardDataDisplay'); 

    const update = (dataMain, dataWeather) => {
        console.log(dataMain);
        console.log(dataWeather);
        cityForm.hide();
    }

    return { update }
})(); 