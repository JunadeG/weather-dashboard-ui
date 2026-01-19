import React, { useState } from "react";
import axios from 'axios';
import SearchBar from './components/SearchBar';
import WeatherDisplay from './components/WeatherDisplay'; // Import the new component
import './App.css';

function App() {
  // We now have three pieces of state to manage the UI
  const [weatherData, setWeatherData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleSearch = (city) => { 
    setLoading(true);     // 1. Set loading to true when search begins
    setWeatherData(null); // Clear old data
    setError(null);       // Clear old errors

    const apiUrl = `http://localhost:8093/api/weather`;
    
    axios.get(apiUrl, { params: { city } })
      .then(response => {
        setWeatherData(response.data); // 2. On success, set the weather data
      })
      .catch(error => {
        // 3. On failure, set an error message
        setError(`Could not fetch weather for ${city}. Please check the city name.`);
        console.error("Error fetching weather data:", error);
      })
      .finally(() => {
        setLoading(false); // 4. In any case, set loading back to false
      });
  };

  return (
    <div className="App">
      <header className="App-header">
        <h1>Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} /> 

        {/* Here is our conditional rendering logic */}
        {loading && <p>Loading...</p>}
        {error && <p className="error">{error}</p>}
        {weatherData && <WeatherDisplay data={weatherData} />}
        
      </header>
    </div>
  );
}

export default App;