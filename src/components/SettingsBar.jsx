import { motion } from "framer-motion";
import UnitToggle from "./UnitToggle";
import Favorites from "./Favorites";

const SettingsBar = ({ onSelectCity }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="flex justify-between items-center gap-3 bg-white/20 rounded-xl p-3 mb-4"
    >
      <UnitToggle />
      <Favorites onSelect={onSelectCity} />
    </motion.div>
  );
};

export default SettingsBar;
