let location = 'manila';
let apiKey = '5fa4d007560f37c7fe7dc7244617ef63';
let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${location}&` +
    `APPID=${apiKey}`

fetch(apiUrl, {mode: 'cors'})
    .then(function(response) {
        return (response.json());
    })
    .then(function(response) {
        console.log(response);
    });