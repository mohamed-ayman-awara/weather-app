import { createContext, useContext, useState } from "react";

const UnitContext = createContext();

export const UnitProvider = ({ children }) => {
  const [unit, setUnit] = useState("c");

  const toggleUnit = () =>
    setUnit((prev) => (prev === "c" ? "f" : "c"));

  return (
    <UnitContext.Provider value={{ unit, toggleUnit }}>
      {children}
    </UnitContext.Provider>
  );
};

export const useUnit = () => useContext(UnitContext);
