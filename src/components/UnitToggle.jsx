import { useUnit } from "../context/UnitContext";

const UnitToggle = () => {
  const { unit, toggleUnit } = useUnit();

  return (
    <button
      onClick={toggleUnit}
      className="bg-white/20 px-4 py-1 rounded-lg text-sm"
    >
      °{unit === "c" ? "C" : "F"}
    </button>
  );
};

export default UnitToggle;
