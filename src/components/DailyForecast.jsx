import { motion } from "framer-motion";

const DailyForecast = ({ days }) => {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mt-6">
      {days.map((day, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: i * 0.1 }}
          className="bg-white/20 rounded-xl p-3 text-center"
        >
          <p className="text-sm">
            {new Date(day.date).toLocaleDateString("en", { weekday: "short" })}
          </p>

          <img
            src={day.day.condition.icon}
            className="mx-auto"
            alt=""
          />

          <p className="font-bold">
            {Math.round(day.day.maxtemp_c)}° /{" "}
            {Math.round(day.day.mintemp_c)}°
          </p>
        </motion.div>
      ))}
    </div>
  );
};

export default DailyForecast;
