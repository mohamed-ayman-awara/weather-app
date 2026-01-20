import { useEffect, useState } from "react";

export const useFavorites = () => {
  const [favorites, setFavorites] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorites(saved);
  }, []);

  const saveFavorite = (city) => {
    if (favorites.includes(city)) return;
    const updated = [...favorites, city];
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  const removeFavorite = (city) => {
    const updated = favorites.filter((c) => c !== city);
    setFavorites(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
  };

  return { favorites, saveFavorite, removeFavorite };
};
