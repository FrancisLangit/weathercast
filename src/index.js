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
            .then(data => dataDisplay.update(data));
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

    const _updateHeader = (data) => {
        let header = document.getElementById('dataHeader');
        header.innerHTML = `${data.name}, ${data.sys.country}`;
    }

    const _updateDataMain = (data) => {
        document.getElementById('dataMainIcon').src = (
            `//openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);
        document.getElementById('dataMainText').innerHTML = (
            `${data.main.temp} • ${data.weather[0].description}`);
    }

    const _getDetailsTableRow = (thContent, tdContent) => {
        let th = document.createElement('th');
        th.innerHTML = thContent;
        
        let td = document.createElement('td');
        td.innerHTML = tdContent;

        let tr = document.createElement('tr');
        tr.append(th, td);

        return tr;
    }

    const _updateDetailsTable = (data) => {
        let detailsTable = document.getElementById('dataDetails');
        detailsTable.appendChild(_getDetailsTableRow(
            'Real Feel', data.main.feels_like));
        detailsTable.appendChild(_getDetailsTableRow(
            'Low / High', `${data.main.temp_min} / ${data.main.temp_max}`));
        detailsTable.appendChild(_getDetailsTableRow(
            'Pressure', data.main.pressure));
        detailsTable.appendChild(_getDetailsTableRow(
            'Humidity', data.main.humidity));
        detailsTable.appendChild(_getDetailsTableRow(
            'Wind Speed', `${data.wind.speed} m/s`));
        detailsTable.appendChild(_getDetailsTableRow(
            'Clouds', `${data.clouds.all}%`));
        detailsTable.appendChild(_getDetailsTableRow(
            'Sunrise', data.sys.sunrise));
        detailsTable.appendChild(_getDetailsTableRow(
            'Sunset', data.sys.sunset));
    }

    const update = (data) => {
        cityForm.hide();
        document.getElementById('data').style.display = 'block';
        _updateHeader(data);
        _updateDataMain(data);
        _updateDetailsTable(data);
    }

    return { update }
})(); 