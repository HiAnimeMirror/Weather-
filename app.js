document.getElementById('getWeather').addEventListener('click', function() {
    const city = document.getElementById('cityInput').value;
    const apiKey = '8856d9333be84e37b2295947240607'; // Your WeatherAPI.com API key
    const url = `https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const weatherDisplay = document.getElementById('weatherDisplay');
            if (data.location) {
                weatherDisplay.innerHTML = `
                    <h2>${data.location.name}, ${data.location.country}</h2>
                    <p>Temperature: ${data.current.temp_c} °C</p>
                    <p>Weather: ${data.current.condition.text}</p>
                    <p>Humidity: ${data.current.humidity}%</p>
                `;
            } else {
                weatherDisplay.innerHTML = `<p>${data.error.message}</p>`;
            }
        })
        .catch(error => console.error('Error:', error));
});
