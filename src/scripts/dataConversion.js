const dataConversion = (() => {
    /**Methods that returned converted values of numerical units. */

    const getFormattedUnix = (unixTime) => {
        /**Returns a string with display of passed Unix time in standard time
         * and timezone of user.
         * 
         * @param {int} unixTime Time in Unix.
        */
        let dateObj = new Date(unixTime * 1000);
        let time = dateObj.toLocaleTimeString();
        let timezone = dateObj.getTimezoneOffset() / 60;
        return `${time} • UTC${timezone}`;
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
        getFormattedUnix,
        getKelvinToCelcius,
        getKelvinToFahrenheit,
    }
})();


export { dataConversion }