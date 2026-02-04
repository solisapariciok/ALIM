// script.js

// Open-Meteo API URL
const apiURL = 'https://api.open-meteo.com/v1/forecast?latitude=35&longitude=-78&current_weather=true';

// Map weather codes to conditions
const weatherCodes = {
  0: "Clear sky",
  1: "Mainly clear",
  2: "Partly cloudy",
  3: "Overcast",
  45: "Fog",
  48: "Depositing rime fog",
  51: "Light drizzle",
  61: "Slight rain",
  71: "Slight snow fall",
  80: "Rain showers",
  95: "Thunderstorm"
};

// Fetch the data
fetch(apiURL)
  .then(res => res.json())
  .then(data => {
    const current = data.current_weather;

    // Check which page is loaded
    const tempDiv = document.getElementById('temperature');
    const condDiv = document.getElementById('condition');

    if (tempDiv) {
      // index.html page
      tempDiv.textContent = `Temperature: ${current.temperature}°C`;
    }

    if (condDiv) {
      // conditions.html page
      const code = current.weathercode;
      condDiv.textContent = `Condition: ${weatherCodes[code] || "Unknown"}`;
    }
  })
  .catch(err => console.error('Error fetching weather:', err));
