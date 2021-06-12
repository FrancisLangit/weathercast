const convertTemperature = (() => {
    /**Methods that return converted values of numerical units. */

    const getCelciusToFahrenheit = (celciusTemp) => {
        /**
         * Returns string of Celcius temperature converted to Fahrenheit.
         * 
         * @param {float} celciusTemp Temperature in celcius. 
        */
        return `${((celciusTemp * 9/5) + 32).toFixed(2)}°F`;
    }


    const getFahrenheitToCelcius = (fahrenheitTemp) => {
        /**
         * Returns string of Fahrenheit temperature converted to Celcius.
         * 
         * @param {float} fahrenheitTemp Temperature in Fahrenheit. 
        */
         return `${((fahrenheitTemp - 32) * 5/9).toFixed(2)}°C`;
    }

    
    const getKelvinToCelcius = (kelvinTemp) => {
        /**
         * Returns string of Kelvin temperature converted to Celcius.
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
        getCelciusToFahrenheit,
        getFahrenheitToCelcius,
        getKelvinToCelcius,
        getKelvinToFahrenheit,
    }
})();


export { convertTemperature }