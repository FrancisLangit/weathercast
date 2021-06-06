import './styles/style.css';

import { openWeatherApi } from './scripts/openWeatherApi.js';

let searchCityForm = document.getElementById('searchCityForm');
searchCityForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let searchCityInput = document.getElementById('searchCityInput').value;
    openWeatherApi.getPromise(searchCityInput)
        .then(data => console.log(data));
});