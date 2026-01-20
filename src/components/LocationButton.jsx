import { FaLocationArrow } from "react-icons/fa";

const LocationButton = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="mt-4 w-full flex items-center justify-center gap-2 bg-emerald-500 hover:bg-emerald-600 transition text-white py-2 rounded-lg"
    >
      <FaLocationArrow />
      Use My Location
    </button>
  );
};

export default LocationButton;
