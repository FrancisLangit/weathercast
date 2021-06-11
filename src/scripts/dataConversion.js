const dataConversion = (() => {
    /**Methods that returned converted values of numerical units. */


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
        getKelvinToCelcius,
        getKelvinToFahrenheit,
    }
})();


export { dataConversion }