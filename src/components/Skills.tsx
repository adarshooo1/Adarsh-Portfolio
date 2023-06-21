import React from "react";
import { delay, motion } from "framer-motion";
import Skill from "./Skill";

type Props = {};

function Skills({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center overflow-clip text-2xl"
    >
      <h3 className="uppercase text-white absolute top-24">
        <span className="tracking-[20px]">Skill</span>s
      </h3>

      <h3 className="absolute text-white top-36 uppercase tracking-[3px] mb-96">
        Skills, I know as a{" "}
        <span className="uppercase stroked-text text-orange-400">
          full stack developer
        </span>
      </h3>

      <div className="grid grid-cols-4 gap-4 -mb-48">
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
        <Skill />
      </div>
    </motion.div>
  );
}

export default Skills;
