import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const SearchBar = ({ onSearch }) => {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!city.trim()) return;
    onSearch(city);
    setCity("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex bg-white rounded-lg overflow-hidden"
    >
      <input
        className="flex-1 px-4 py-2 outline-none text-gray-700"
        placeholder="Search city..."
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="bg-blue-600 px-4 text-white">
        <FaSearch />
      </button>
    </form>
  );
};

export default SearchBar;
