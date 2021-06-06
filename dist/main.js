/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const openWeatherApi = (() => {\n    /**Holds configuration and methods associated with getting data from Open\n     * Weather API.*/\n\n    let _apiKey = '5fa4d007560f37c7fe7dc7244617ef63';\n\n    let getPromise = (cityName) => {\n        /**\n         * Get promise from API holding weather data of a city. \n         * \n         * Returns promise from Open Weather API with value as JSON object\n         * holding weather data of city requested.\n         * \n         * @param {string} cityName Name of city to get data for.\n         * \n         * @return {Promise} Promise holding weather data JSON of city.\n        */\n        let url = `http://api.openweathermap.org/data/2.5/weather?q=${\n            cityName}&APPID=${_apiKey}`;\n        return fetch(url, {mode: 'cors'}) \n            .then(response => response.json())\n    }\n\n    return { getPromise }\n})();\n\nopenWeatherApi.getPromise('boston')\n    .then(data => console.log(data));\n\n//# sourceURL=webpack://weathercast/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;