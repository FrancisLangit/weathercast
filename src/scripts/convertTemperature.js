const convertTemperature = (() => {
    /**Methods that return converted values of numerical units. */

    const getCelsiusToFahrenheit = (celsiusTemp) => {
        /**
         * Returns string of Celsius temperature converted to Fahrenheit.
         * 
         * @param {float} celsiusTemp Temperature in celsius. 
        */
        return `${((celsiusTemp * 9/5) + 32).toFixed(2)}°F`;
    }


    const getFahrenheitToCelsius = (fahrenheitTemp) => {
        /**
         * Returns string of Fahrenheit temperature converted to Celsius.
         * 
         * @param {float} fahrenheitTemp Temperature in Fahrenheit. 
        */
         return `${((fahrenheitTemp - 32) * 5/9).toFixed(2)}°C`;
    }

    
    const getKelvinToCelsius = (kelvinTemp) => {
        /**
         * Returns string of Kelvin temperature converted to Celsius.
         * 
         * @param {float} kelvinTemp Temperature in Kelvin. 
        */
        return `${(kelvinTemp - 273.15).toFixed(2)}°C`;
    }


    const getKelvinToFahrenheit = (kelvinTemp) => {
        /**
         * Returns string of Kelvin temperature converted to Fahrenheit.
         * 
         * @param {float} kelvinTemp Temperature in Kelvin. 
        */
        return `${((kelvinTemp - 273.15) * (9/5) + 32).toFixed(2)}°F`;
    }


    return {
        getCelsiusToFahrenheit,
        getFahrenheitToCelsius,
        getKelvinToCelsius,
        getKelvinToFahrenheit,
    }
})();


export { convertTemperature }