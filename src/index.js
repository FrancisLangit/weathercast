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


const dataConversion = (() => {
    /**Methods that returned converted values of numerical units. */

    const getFormattedUnix = (unixTime) => {
        /**Converst Unix time to standard time.
         * 
         * @param {int} unixTime Time in Unix.
        */
        return new Date(new Date(unixTime * 1000)).toLocaleTimeString();
    }

    const getKelvinToCelcius = (kelvinTemp) => {
        /**
         * Converts Kelvin temperature to Celcius.
         * 
         * @param {float} kelvinTemp Temperature in Kelvin. 
        */
        return `${(kelvinTemp - 273.15).toFixed(2)}°C`;
    }

    const getKelvinToFahrenheit = (kelvinTemp) => {
        /**
         * Converts Kelvin temperature to Celcius.
         * 
         * @param {float} kelvinTemp Temperature in Kelvin. 
        */
        return `${((kelvinTemp - 273.15) * (9/5) + 32).toFixed(2)}°F`;
    }

    return {
        getFormattedUnix,
        getKelvinToCelcius,
        getKelvinToFahrenheit,
    }
})();


const dataDisplay = (() => {
    /**Where weather data on city searched is shown on user interface.*/

    const _updateHeader = (data) => {
        /**
         * Updates the location displayed on the header.
         * 
         * @param {Object} data Object returned calling Open Weather API.
         */
        let header = document.getElementById('dataHeader');
        header.innerHTML = `${data.name}, ${data.sys.country}`;
    }

    const _updateDataMain = (data, tempCb) => {
        /**
         * Updates icon, temperature, and description displayed under header.
         * 
         * @param {Object} data Object returned calling Open Weather API.
         * @param {Function} tempCb Callback that converts temperature in 
         *      Kelvin to another unit.   
         */
        document.getElementById('dataMainIcon').src = (
            `//openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        document.getElementById('dataMainText').innerHTML = (
            `${tempCb(data.main.temp)} • ${data.weather[0].description}`);
    }

    const _getDetailsTableRow = (thContent, tdContent) => {
        /**
         * Returns a table row node with innerHTML equal to arguments passed.
         * 
         * @param {string} thContent Text content of left column cell.
         * @param {string} tdContent Text content of right column cell. 
         */
        let th = document.createElement('th');
        th.innerHTML = thContent;
        
        let td = document.createElement('td');
        td.innerHTML = tdContent;

        let tr = document.createElement('tr');
        tr.append(th, td);

        return tr;
    }

    const _updateDetailsTable = (data, tempCb) => {
        /**
         * Updates contents of the data showing supplementary data from API. 
         * 
         * @param {Object} data Object returned calling Open Weather API.
         * @param {Function} tempCb Callback that converts temperature in 
         *      Kelvin to another unit.   
         */
        let detailsTable = document.getElementById('dataDetails');
        detailsTable.append(
            _getDetailsTableRow(
                'Real Feel', 
                tempCb(data.main.feels_like)
            ),
            _getDetailsTableRow(
                'Low/High', 
                `${tempCb(data.main.temp_min)}/${tempCb(data.main.temp_max)}`
            ),
            _getDetailsTableRow(
                'Pressure', 
                `${data.main.pressure} hPa`
            ),
            _getDetailsTableRow(
                'Humidity', 
                `${data.main.humidity}%`
            ),
            _getDetailsTableRow(
                'Wind Speed', `${data.wind.speed} m/s`
            ),
            _getDetailsTableRow(
                'Clouds', `${data.clouds.all}%`
            ),
            _getDetailsTableRow(
                'Sunrise', 
                dataConversion.getFormattedUnix(data.sys.sunrise)
            ),
            _getDetailsTableRow(
                'Sunset', 
                dataConversion.getFormattedUnix(data.sys.sunset)
            ),
        );
    }

    const _show = () => {
        /** 
         * Makes the div displaying data from API visible. 
        */
        let dataDiv = document.getElementById('data');
        dataDiv.style.display = 'block';
    }

    const update = (data, tempCb) => {
        /**
         * Shows data display in card and updates its contents.
         * 
         * @param {Object} data Object returned calling Open Weather API.
         * @param {Function} tempCb Callback that converts temperature in 
         *      Kelvin to another unit.
         */
        cityForm.hide();
        _show()
        _updateHeader(data);
        _updateDataMain(data, tempCb);
        _updateDetailsTable(data, tempCb);
    }

    return { update }
})();