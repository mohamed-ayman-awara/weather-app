import { motion } from "framer-motion";

import SearchBar from "../components/SearchBar";
import CurrentWeather from "../components/CurrentWeather";
import LocationButton from "../components/LocationButton";
import SettingsBar from "../components/SettingsBar";
import BackgroundShapes from "../components/BackgroundShapes";

import { useWeather } from "../hooks/useWeather";

const Home = () => {
  const {
    weather,
    loading,
    error,
    fetchWeather,
    fetchWeatherByLocation,
  } = useWeather();

  return (
    <div className="min-h-screen relative flex items-center justify-center bg-gray-900 p-6 overflow-hidden">
      {/* Animated background shapes */}
      <BackgroundShapes />

      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="relative z-10 w-full max-w-xl bg-gray-800 rounded-3xl shadow-xl p-8 text-gray-100"
      >
        {/* Title */}
        <motion.h1
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.5 }}
          className="text-4xl font-extrabold text-center mb-6 tracking-wide"
        >
          🌦 Weather App
        </motion.h1>

        {/* Settings Bar */}
        <SettingsBar />

        {/* Search & Location */}
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="space-y-4"
        >
          <SearchBar onSearch={fetchWeather} />
          <LocationButton onClick={fetchWeatherByLocation} />
        </motion.div>

        {/* Loading State */}
        {loading && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 text-gray-300 italic animate-pulse"
          >
            Loading weather...
          </motion.p>
        )}

        {/* Error State */}
        {error && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center mt-8 text-red-400 font-semibold"
          >
            {error}
          </motion.p>
        )}

        {/* Weather Display */}
        {weather && (
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mt-8"
          >
            <CurrentWeather data={weather} />
          </motion.div>
        )}
      </motion.div>
    </div>
  );
};

export default Home;
