import { WiHumidity, WiStrongWind } from "react-icons/wi";
import { useFavorites } from "../hooks/useFavorites";



const CurrentWeather = ({ data }) => {
  if (!data) return null;
const { saveFavorite } = useFavorites();

  return (
    <div className="mt-6 bg-white/30 rounded-xl p-6 text-center">
      <h2 className="text-xl font-semibold">
        {data.location.name}, {data.location.country}
      </h2>

      <img
        src={data.current.condition.icon}
        alt="weather icon"
        className="mx-auto w-32 h-32"
      />

      <p className="text-5xl font-bold">
        {Math.round(data.current.temp_c)}°C
      </p>

      <p className="capitalize opacity-90">
        {data.current.condition.text}
      </p>

      <div className="flex justify-between mt-6 text-sm">
        <div className="flex items-center gap-2">
          <WiHumidity size={24} />
          <span>{data.current.humidity}%</span>
        </div>

        <div className="flex items-center gap-2">
          <WiStrongWind size={24} />
          <span>{data.current.wind_kph} km/h</span>
        </div>
      </div>
      <button
        onClick={() => saveFavorite(data.location.name)}
        className="mt-4 w-full bg-yellow-400 text-black py-2 rounded-lg font-semibold hover:scale-105 transition"
        >
        ⭐ Save City
        </button>
    </div>
  );
};

export default CurrentWeather;
