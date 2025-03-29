import axios from "axios";

const API_KEY = "73ae53c288652c9cfbaf98558c6ff0c7";
const BASE_URL = "https://api.openweathermap.org/data/2.5";

/**
 * Fetches current weather and 5-day forecast for a given city.
 * @param {string} city - City name
 * @returns {Promise<{ weatherData: object, forecastData: object }>}
 */
export const fetchWeather = async (city) => {
  try {
    // Fetch current weather
    const weatherResponse = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    // Fetch 5-day forecast
    const forecastResponse = await axios.get(`${BASE_URL}/forecast`, {
      params: {
        q: city,
        appid: API_KEY,
        units: "metric",
      },
    });

    return {
      weatherData: weatherResponse.data,
      forecastData: forecastResponse.data,
    };
  } catch (error) {
    throw new Error("City not found or API error");
  }
};
