import { dataDisplay } from '../index.js';


const openWeatherApi = (() => {
    /**Methods for getting promises from Open Weather API.*/

    let _apiKey = '5fa4d007560f37c7fe7dc7244617ef63';


    const call = (cityName) => {
        /**
         * Get promise from API holding weather data of a city. 
         * 
         * Passed promise from Open Weather API with value as JSON object
         * holding weather data of city requested to dataDisplay.update().
         * 
         * @param {string} cityName Name of city to get data for.
        */
        let url = `//api.openweathermap.org/data/2.5/weather?q=${
            cityName}&APPID=${_apiKey}`;
        fetch(url, {mode: 'cors'})
            .then(response => {
                return response.json();
            })
            .then(data => {
                dataDisplay.update(data);
            })
    }

    return { call }
})();


export { openWeatherApi }