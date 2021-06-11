import './styles/style.css';

import { convertTemperature } from './scripts/convertTemperature.js';
import { openWeatherApi } from './scripts/openWeatherApi.js';

import { cityForm } from './scripts/components/cityForm.js';
import { containerCard } from './scripts/components/containerCard.js';
import { dataDisplay } from './scripts/components/dataDisplay.js';
import { goBackButton } from './scripts/components/goBackButton.js';


const temperatureButton = (() => {
    /**
     * Button that changes unit of temperature values displayed. 
     */


    const _changeDataDisplayTemp = () => {
        let dataMainTemp = document.getElementById('dataMainTemp');
        dataMainTemp.innerHTML = convertTemperature.getCelciusToFahrenheit(
            parseFloat(dataMainTemp.innerHTML));
    }


    const create = () => {
        /**Creates and sets up a clickable div that changes the temperature
         * values displayed.*/
        let tempBtn = document.createElement('div');
        tempBtn.id = 'dataHeaderTempButton';
        tempBtn.innerHTML = '°C';
        tempBtn.addEventListener('click', _changeDataDisplayTemp)
        document.getElementById('dataHeader').appendChild(tempBtn);
    }


    return { create }
})();


export { 
    convertTemperature, 
    openWeatherApi, 
    
    cityForm, 
    containerCard,
    dataDisplay, 
    goBackButton,
    temperatureButton,
}