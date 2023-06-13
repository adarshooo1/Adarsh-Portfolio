import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { languages } from "../data/language";

const Loader = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLanguageIndex((prevIndex) => prevIndex + 1);
    }, 300);

    return () => clearTimeout(timer);
  }, [currentLanguageIndex]);

  const currentLanguage = languages[currentLanguageIndex % languages.length];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-zinc-900 text-white">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <h2 className="text-4xl font-normal">{currentLanguage.message}</h2>
      </motion.div>
    </div>
  );
};

export default Loader;
