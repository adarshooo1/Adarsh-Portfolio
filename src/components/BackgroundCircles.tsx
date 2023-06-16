import { motion } from "framer-motion";
import React from "react";

type Props = {};

const BackgroundCircles = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [1, 0.2, 0.4, 0.8, 0.1, 1.0],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
      className="relative flex justify-center items-center"
    >
      {/* <div className="border border-orange-100 rounded-full h-[150px] w-[150px] mt-52 animate-pulse absolute" /> */}
      <div className="border border-white rounded-full h-[300px] w-[300px] mt-52 animate-ping absolute" />
      <div className="border border-orange-200 rounded-full h-[500px] w-[500px] mt-52 animate-ping absolute" />
      <div className="border border-white rounded-full h-[650px] w-[650px] mt-52 animate-ping absolute" />
      <div className="border border-orange-300 rounded-full h-[800px] w-[800px] mt-52 animate-ping absolute" />
    </motion.div>
  );
};

export default BackgroundCircles;
