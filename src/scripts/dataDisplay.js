import { cityForm } from './index.js';
import { dataConversion } from './index.js';


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


export { dataDisplay }