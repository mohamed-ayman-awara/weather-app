import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useFavorites } from "../hooks/useFavorites";

const Favorites = ({ onSelect }) => {
  const { favorites, removeFavorite } = useFavorites();
  const [open, setOpen] = useState(false);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(!open)}
        className="bg-white/20 px-3 py-1 rounded-lg text-sm"
        aria-label="Toggle favorites dropdown"
      >
        ⭐
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0 }}
            className="absolute right-0 mt-2 w-40 bg-white text-gray-800 rounded-lg shadow-lg p-2 z-50"
          >
            {favorites.length === 0 ? (
              <p className="text-xs text-center text-gray-500">No favorites</p>
            ) : (
              favorites.map((city, i) => (
                <div
                  key={i}
                  className="flex justify-between items-center px-2 py-1 hover:bg-gray-100 rounded cursor-pointer"
                >
                  <span
                    onClick={() => {
                      onSelect(city);
                      setOpen(false);
                    }}
                    className="flex-grow"
                  >
                    {city}
                  </span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      removeFavorite(city);
                    }}
                    className="text-red-500 hover:text-red-700 font-bold"
                    aria-label={`Remove ${city} from favorites`}
                  >
                    &times;
                  </button>
                </div>
              ))
            )}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Favorites;
