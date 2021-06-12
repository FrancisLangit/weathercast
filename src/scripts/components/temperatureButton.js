import { convertTemperature } from '../../index.js';


const temperatureButton = (() => {
    /**
     * Button that changes scale of temperature values displayed. 
     */
    let _tempCb = convertTemperature.getCelsiusToFahrenheit;
    let _isCelsius = true; 


    const _toggleTempNode = (tempNode, tempCb) => {
        /**
         * Converts the scale of the temperature value in a given node based 
         * on a callback function passed.
         * 
         * @param {Node} tempNode Node to convert innerHTML of.
         * @param {tempCb} tempCb Callback function from convertTemperature
         *      module wil convert value of tempNosde.
         */
        tempNode.innerHTML = tempCb(parseFloat(tempNode.innerHTML));
    }


    const _toggleButton = () => {
        /**
         * Toggles _tempCb, _isCelsius, and display value of button.
         */
        let tempBtn = document.getElementById('temperatureButton');
        if (_isCelsius) {
            _tempCb = convertTemperature.getFahrenheitToCelsius;
            tempBtn.innerHTML = '°F';
            _isCelsius = false;
        } else {
            _tempCb = convertTemperature.getCelsiusToFahrenheit;
            tempBtn.innerHTML = '°C';
            _isCelsius = true;
        }
    }


    const _toggleTempDisplays = () => {
        /**
         * Toggles the scale of the temparature units being displayed on data
         * display and temperature button.
         */
        _toggleTempNode(document.getElementById('dataMainTemp'), _tempCb);
        _toggleTempNode(document.getElementById('dataDetailsReal'), _tempCb);
        _toggleTempNode(document.getElementById('dataDetailsLow'), _tempCb);
        _toggleTempNode(document.getElementById('dataDetailsHigh'), _tempCb);
        _toggleButton();
    }


    const create = () => {
        /**
         * Appends a button to #dataHeader that changes the scale of the
         * temperature units being displaed.
         */
        let tempBtn = document.createElement('div');
        tempBtn.id = 'temperatureButton';
        tempBtn.innerHTML = '°C';
        tempBtn.addEventListener('click', _toggleTempDisplays)
        document.getElementById('dataHeader').appendChild(tempBtn);
    }


    const reset = () => {
        /**
         * Resets _tempCb and _isCelsius variables back to Celsius. 
         */
        _tempCb = convertTemperature.getCelsiusToFahrenheit;
        _isCelsius = true; 
    }


    return { create, reset }
})();


export { temperatureButton }