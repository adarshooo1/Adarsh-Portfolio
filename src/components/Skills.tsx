import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import { Skill as SkillType } from "../../typings";

type Props = {
  skills: SkillType[];
};

function Skills({ skills }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5, delay: 0.5 }}
      className="flex relative flex-col text-center h-screen w-full xl:flex-col xl:px-10 justify-center mx-auto items-center overflow-hidden text-2xl"
    >
      <h3 className="uppercase text-white absolute top-24">
        <span className="tracking-[20px]">Skill</span>s
      </h3>

      <h3 className="absolute text-white top-36 uppercase tracking-[3px]      sm:text-lg      font-bold">
        Skills, I know as a{" "}
        <span className="uppercase stroked-text 2xl:stroke-none text-orange-400">
          full stack developer
        </span>
      </h3>

      <div className="grid gap-5         xl:grid-cols-10 xl:mt-20 xl:gap-6      lg:grid-cols-10 lg:mt-28 lg:gap-4      md:grid-cols-5 md:mt-36      sm:grid-cols-5 sm:mt-36       sm:gap-7      xs:grid-cols-4 xs:mt-36  xs:gap-6 ">
        {skills?.slice(0, skills.length / 2).map((skill) => (
          <Skill key={skill._id} skill={skill} />
        ))}

        {skills?.slice(skills.length / 2, skills.length).map((skill) => (
          <Skill key={skill._id} skill={skill} directionLeft />
        ))}
      </div>
    </motion.div>
  );
}

export default Skills;
