import { useState } from "react";
import {
  getWeatherByCity,
  getWeatherByLocation,
} from "../services/weatherApi";

export const useWeather = () => {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const fetchWeather = async (city) => {
    try {
      setLoading(true);
      setError("");
      const res = await getWeatherByCity(city);
      setWeather(res.data);
    } catch {
      setError("City not found");
    } finally {
      setLoading(false);
    }
  };

  const fetchWeatherByLocation = () => {
    if (!navigator.geolocation) {
      setError("Geolocation is not supported");
      return;
    }

    setLoading(true);
    setError("");

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const { latitude, longitude } = position.coords;
          const res = await getWeatherByLocation(latitude, longitude);
          setWeather(res.data);
        } catch {
          setError("Failed to get weather for your location");
        } finally {
          setLoading(false);
        }
      },
      () => {
        setError("Location permission denied");
        setLoading(false);
      }
    );
  };

  return {
    weather,
    loading,
    error,
    fetchWeather,
    fetchWeatherByLocation,
  };
};
