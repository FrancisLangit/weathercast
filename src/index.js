import './styles/style.css';

import { convertTemperature } from './scripts/convertTemperature.js';
import { openWeatherApi } from './scripts/openWeatherApi.js';

import { cityForm } from './scripts/components/cityForm.js';
import { containerCard } from './scripts/components/containerCard.js';
import { dataDisplay } from './scripts/components/dataDisplay.js';
import { goBackButton } from './scripts/components/goBackButton.js';


const temperatureButton = (() => {


    const _changeDataDisplayTemp = () => {
        console.log('hello world');
    }


    const show = () => {
        let tempBtn = document.createElement('div');
        tempBtn.id = 'dataHeaderTempButton';
        tempBtn.innerHTML = '°C';
        tempBtn.addEventListener('click', _changeDataDisplayTemp)
        document.getElementById('dataHeader').appendChild(tempBtn);
    }

    return { show }
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