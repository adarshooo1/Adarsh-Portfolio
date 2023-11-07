import React from "react";
import { motion } from "framer-motion";
import { Skill } from "../../typings";
import { urlFor } from "../../adarsh-portfolio-backend";

type Props = {
  skill: Skill;
  directionLeft?: boolean;
};

function Skill({ skill, directionLeft }: Props) {
  const [isHovered, setIsHovered] = React.useState(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div
      className="relative flex cursor-pointer"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      <motion.img
        initial={{
          y: directionLeft ? 100 : -100,
          opacity: 0,
        }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        src={urlFor(skill.image).url()}
        alt={skill.title}
        className="rounded-full border border-gray-500 object-cover w-24 h-24    xl:w-24 xl:h-24      lg:w-[5rem] lg:h-[5rem]     md:w-20 md:h-20    sm:w-16 sm:h-16    xs:w-12 xs:h-12      filter group-hover:grayscale transition duration-300 ease-in-out"
      />

      {isHovered && (
        // For making Gray effect over skills while hover
        <div className="absolute opacity-90 bg-gray-500 h-24 w-24 rounded-full z-0             xl:w-24 xl:h-24      lg:w-[5rem] lg:h-[5rem]    md:w-20 md:h-20      sm:w-16 sm:h-16     xs:w-12 xs:h-12">
          <div className="flex items-center justify-center h-full">
            <p className="font-bold text-black opacity-100     xl:text-3xl    sm:text-lg">
              {skill.progress}%
            </p>
          </div>
        </div>
      )}
    </div>
  );
}

export default Skill;
