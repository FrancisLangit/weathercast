import { 
    cityForm, 
    mainCard, 
    convertTemperature,
    goBackButton,
    temperatureButton,
} from '../../index.js';


const dataDisplay = (() => {
    /**Where weather data on city searched is shown on user interface.*/
    
    const _div = document.getElementById('data');


    const _updateHeader = (data) => {
        /**
         * Updates the location displayed on the header.
         * 
         * @param {Object} data Object returned calling Open Weather API.
         */
        let headerCity = document.createElement('p');
        headerCity.id = 'dataHeaderCity'
        headerCity.innerHTML = `${data.name}, ${data.sys.country}`

        let headerDiv = document.createElement('div');
        headerDiv.id = 'dataHeader';
        headerDiv.append(headerCity);

        document.getElementById('data').append(headerDiv);
        temperatureButton.create();
    }


    const _updateDataMain = (data, tempCb) => {
        /**
         * Updates icon, temperature, and description displayed under header.
         * 
         * @param {Object} data Object returned calling Open Weather API.
         * @param {Function} tempCb Callback that converts temperature in 
         *      Kelvin to another unit.   
         */
        let icon = document.createElement('img');
        icon.id = 'dataMainIcon';
        icon.src = ( 
            `//openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`);

        let temp = document.createElement('span');
        temp.id = 'dataMainTemp';
        temp.innerHTML = tempCb(data.main.temp);

        let description = document.createElement('span');
        description.innerHTML = ` • ${data.weather[0].description}`;

        let text = document.createElement('p');
        text.id = 'dataMainText';
        text.append(temp, description);

        let dataMain = document.createElement('div');
        dataMain.id = 'dataMain';
        dataMain.append(icon, text);

        _div.append(dataMain);
    }


    const _getDetailsTableRow = (thContent, tdContent, id) => {
        /**
         * Returns a table row node with innerHTML equal to arguments passed.
         * 
         * @param {string} thContent Text content of left column cell.
         * @param {string} tdContent Text content of right column cell. 
         * @param {string} id ID of the tr node to be returned.
         */
        let th = document.createElement('th');
        th.innerHTML = thContent;
        
        let td = document.createElement('td');
        if (id) {
            td.id = id;
        }
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
        let dataDetailsTable = document.createElement('table');
        dataDetailsTable.id = 'dataDetails';
        dataDetailsTable.append(
            _getDetailsTableRow(
                'Real Feel', 
                tempCb(data.main.feels_like),
                'dataDetailsReal',
            ),
            _getDetailsTableRow(
                'Low', 
                tempCb(data.main.temp_min),
                'dataDetailsLow'
            ),
            _getDetailsTableRow(
                'High', 
                tempCb(data.main.temp_max),
                'dataDetailsHigh'
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
        );
        _div.append(dataDetailsTable);
    }


    const _unhide = () => {
        /** 
         * Makes the div displaying data from API visible. 
        */
        let dataDiv = document.getElementById('data');
        dataDiv.style.display = 'block';
    }


    const _showData = (data, tempCb) => {
        /**
         * Updates display to show weather data of city searched.
         * 
         * @param {Object} data Object returned calling Open Weather API.
         * @param {Function} tempCb Callback that converts temperature in 
         *      Kelvin to another unit.
         */
        _updateHeader(data);
        _updateDataMain(data, tempCb);
        _updateDetailsTable(data, tempCb);
    }


    const _showError = (data) => {
        /**
         * Updates display to show error from query.
         * 
         * @param {Object} data Object returned calling Open Weather API.
         */
        let errorCode = document.createElement('p');
        errorCode.id = 'dataErrorCode';
        errorCode.textContent = `Error ${data.cod}`;

        let errorMessage = document.createElement('p');
        errorMessage.id = 'dataErrorMessage';
        errorMessage.textContent = data.message;

        let errorDiv = document.createElement('div');
        errorDiv.id = 'dataError';
        errorDiv.append(errorCode, errorMessage);

        _div.append(errorDiv);
    }


    const update = (data) => {
        /**
         * Shows data display in card and updates its size and contents.
         * 
         * If data.cod returned is 200, weather data from API is displayed. 
         * Otherwise, error from call is shown. 
         * 
         * @param {Object} data Object returned calling Open Weather API.
         */
        cityForm.hide();
        goBackButton.unhide();
        _unhide()
        if (data.cod === 200) {
            mainCard.resizeBigger();
            _showData(data, convertTemperature.getKelvinToCelsius);
        }
        else {
            _showError(data);
        }
    }


    return { update }
})();


export { dataDisplay }