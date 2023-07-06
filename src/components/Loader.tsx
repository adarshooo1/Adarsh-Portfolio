import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { languages } from "../data/language";

const Loader = () => {
  const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentLanguageIndex((prevIndex) => prevIndex + 1);
    }, getTotalDuration(currentLanguageIndex));

    return () => clearTimeout(timer);
  }, [currentLanguageIndex]);

  // For the first and last data/language.ts we want to display loader for 500 mili-seconds and remaining for all it will display for 200 mili-seconds;
  const getTotalDuration = (currentIndex: number) => {
    let totalDuration = 0;
    for (let i = 0; i <= currentIndex; i++) {
      if (i === 0 || i === languages.length - 1) {
        totalDuration = 500;
      } else {
        totalDuration = 200;
      }
    }
    return totalDuration;
  };

  const currentLanguage = languages[currentLanguageIndex % languages.length];

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-[rgb(4,4,4)] text-white">
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
