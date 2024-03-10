import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './Clima.css';

interface WeatherData {
  main: {
    temp: number;
    humidity: number;
  };
  weather: [{ description: string }];
  wind: { speed: number };
}

const WeatherForecast: React.FC = () => {
  const [weather, setWeather] = useState<WeatherData | null>(null);
  const apiKey = '0d0733166ddb8bdcc9d068523f8f7545'; // Replace with your actual API key

  useEffect(() => {
    const fetchWeather = async () => {
      try {
        const response = await axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=Santo%20Domingo,do&appid=${apiKey}&units=metric`
        );
        setWeather(response.data);
      } catch (error) {
        console.error('Error fetching weather data:', error);
      }
    };

    fetchWeather();
  }, [apiKey]);

  return (
    <div className="weather-forecast"> {/* Assuming a CSS class for styling */}
      <h3>Clima en República Dominicana</h3>
      {weather && (
        <div>
          <p>
            <strong>Temperatura:</strong> {weather.main.temp} °C
          </p>
          <p>
            <strong>Clima:</strong> {weather.weather[0].description}
          </p>
          <p>
            <strong>Humedad:</strong> {weather.main.humidity}%
          </p>
          <p>
            <strong>Viento:</strong> {weather.wind.speed} m/s
          </p>
        </div>
      )}
      {!weather && <p>Cargando clima...</p>} {/* Display a loading message while fetching */}
    </div>
  );
};

export default WeatherForecast;