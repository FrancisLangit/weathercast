import { dataConversion } from './index.js';
import { dataDisplay } from './index.js';


const openWeatherApi = (() => {
    /**Methods for getting promises from Open Weather API.*/

    let _apiKey = '5fa4d007560f37c7fe7dc7244617ef63';


    const call = (cityName) => {
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