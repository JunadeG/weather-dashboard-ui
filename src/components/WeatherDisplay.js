import React from 'react';
import './WeatherDisplay.css'; // We will create this file next for styling

// This component receives the weather data via props
function WeatherDisplay({ data }) {
    // A safety check in case no data is passed
    if (!data) {
        return null;
    }

    // Destructuring for easier access to nested data
    const { name, main: mainDetails, weather } = data;
    const weatherDescription = weather && weather.length > 0 ? weather[0].description : 'N/A';
    const iconCode = weather && weather.length > 0 ? weather[0].icon : null;
    const iconUrl = iconCode ? `https://openweathermap.org/img/wn/${iconCode}@2x.png` : '';

    return (
        <div className="weather-display">
            <h2>Weather for {name}</h2>
            <div className="weather-details">
                {iconUrl && <img src={iconUrl} alt={weatherDescription} className="weather-icon" />}
                <p className="temperature">{Math.round(mainDetails.temp)}°C</p>
                <p className="description">{weatherDescription}</p>
                <p className="humidity">Humidity: {mainDetails.humidity}%</p>
            </div>
        </div>
    );
}

export default WeatherDisplay;