import axios from "axios";

const API_KEY = import.meta.env.VITE_WEATHER_API_KEY;
const BASE_URL = "https://api.weatherapi.com/v1";

export const getWeatherByCity = (city) => {
  return axios.get(`${BASE_URL}/forecast.json`, {
    params: {
      key: API_KEY,
      q: city,
      days: 7,
    },
  });
};

export const getWeatherByLocation = (lat, lon) => {
  return axios.get(`${BASE_URL}/forecast.json`, {
    params: {
      key: API_KEY,
      q: `${lat},${lon}`,
      days: 7,
    },
  });
};