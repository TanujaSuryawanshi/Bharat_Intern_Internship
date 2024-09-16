// const apiKey = 'YOUR_API_KEY';

// function getWeather() {
//     const city = document.getElementById('city').value;
//     if (!city) {
//         alert('Please enter a city name');
//         return;
//     }

//     fetch(https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric)
//         .then(response => response.json())
//         .then(data => {
//             if (data.cod !== 200) {
//                 alert('City not found');
//                 return;
//             }

//             const weatherResult = document.getElementById('weather-result');
//             weatherResult.innerHTML = `
//                 <h2>${data.name}</h2>
//                 <p>Temperature: ${data.main.temp} °C</p>
//                 <p>Weather: ${data.weather[0].description}</p>
//                 <p>Humidity: ${data.main.humidity}%</p>
//                 <p>Wind Speed: ${data.wind.speed} m/s</p>
//             `;
//         })
//         .catch(error => {
//             console.error('Error fetching the weather data', error);
//             alert('Error fetching the weather data');
//         });
// }