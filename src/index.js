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

    let _tempCb = convertTemperature.getCelciusToFahrenheit;


    const _convertTempNode = (tempNode, _tempCb) => {
        tempNode.innerHTML = _tempCb(parseFloat(tempNode.innerHTML));
    }


    const _toggleTempCb = () => {
        if (_tempCb === convertTemperature.getCelciusToFahrenheit) {
            _tempCb = convertTemperature.getFahrenheitToCelcius;
        }
        else {
            _tempCb = convertTemperature.getCelciusToFahrenheit;
        }
    }


    const _toggleDisplay = () => {
        let tempBtn = document.getElementById('dataHeaderTempButton');
        if (tempBtn.innerHTML === '°C') {
            tempBtn.innerHTML = '°F'
        } else {
            tempBtn.innerHTML = '°C'
        }
    }
    

    const _convertTempDisplays = () => {
        _convertTempNode(document.getElementById('dataMainTemp'), _tempCb);
        _convertTempNode(document.getElementById('dataDetailsReal'), _tempCb);
        _convertTempNode(document.getElementById('dataDetailsLow'), _tempCb);
        _convertTempNode(document.getElementById('dataDetailsHigh'), _tempCb);
        _toggleTempCb();
        _toggleDisplay();
    }


    const create = () => {
        /**Creates and sets up a clickable div that changes the temperature
         * values displayed.*/
        let tempBtn = document.createElement('div');
        tempBtn.id = 'dataHeaderTempButton';
        tempBtn.innerHTML = '°C';
        tempBtn.addEventListener('click', _convertTempDisplays)
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