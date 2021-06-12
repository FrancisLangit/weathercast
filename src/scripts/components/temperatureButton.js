import { convertTemperature } from '../../index.js';


const temperatureButton = (() => {
    /**
     * Button that changes scale of temperature values displayed. 
     */
    let _tempCb = convertTemperature.getCelciusToFahrenheit;
    let _isCelcius = true; 


    const _toggleTempNode = (tempNode, tempCb) => {
        /**
         * Converts the scale of the temperature value in a given node based 
         * on a callback function passed.
         * 
         * @param {Node} tempNode Node to convert innerHTML of.
         * @param {tempCb} tempCb Callback function from convertTemperature
         *      module wil convert value of tempNode.
         */
        tempNode.innerHTML = tempCb(parseFloat(tempNode.innerHTML));
    }


    const _toggleButton = () => {
        let tempBtn = document.getElementById('dataHeaderTempButton');
        if (_isCelcius) {
            _tempCb = convertTemperature.getFahrenheitToCelcius;
            tempBtn.innerHTML = '°F';
            _isCelcius = false;
        } else {
            _tempCb = convertTemperature.getCelciusToFahrenheit;
            tempBtn.innerHTML = '°C';
            _isCelcius = true;
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
        tempBtn.id = 'dataHeaderTempButton';
        tempBtn.innerHTML = '°C';
        tempBtn.addEventListener('click', _toggleTempDisplays)
        document.getElementById('dataHeader').appendChild(tempBtn);
    }


    return { create }
})();


export { temperatureButton }