import React from "react";
import Image from "next/image";
import {Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";

type Props = {};

function Projects({}: Props) {
  const projects = ["Portfolio", "Nike Shoe Store", "Microsoft Store Frontend"];

  return (
    <motion.div
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.5}}
    className="h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0">
      <h3 className="absolute top-24 uppercase text-2xl text-white">
        <span className="tracking-[20px]">project</span>s
      </h3>

      <div className="reltive w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 -mb-40">
        {projects.map((project, i) => (
          <div
            key={i}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-20 md:p-44 h-screen"
          >
            <Image
              src="/Project-Portfolio.webp"
              height={200}
              width={500}
              alt="Project 1"
            />
            <div className="space-y-10 px-0 md:px-10 mx-w-6xl">
              <h4 className="text-4xl font-semibold text-center">
                Project {i + 1} of 3:{" "}
                <span className="uppercase font-bold">
                  <ProjectTypewriter words={[project]} loop delay={1000} /><Cursor />
                </span>
              </h4>
              <p className="text-sm text-center md:text-left">
                {project} app Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum numquam doloribus laborum recusandae laudantium sapiente molestias eaque nisi iste libero, odit, voluptatibus obcaecati similique incidunt aperiam ipsum adipisci sed facere minus ipsam qui? Quaerat accusamus excepturi nobis facere, dolorum nostrum! Vel ad dignissimos assumenda sapiente praesentium, asperiores suscipit aliquam illum.
              </p>
            </div>
          </div>
        ))}
      </div>

      <div className="w-full absolute top-[30%] bg-[#FB923C]/20 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
}

type ProjectTypewriterProps = {
  words: string[];
  loop?: boolean;
  delay?: number;
};

const ProjectTypewriter: React.FC<ProjectTypewriterProps> = ({
  words,
  loop = true,
  delay = 2000,
}) => {
  const [text, count] = useTypewriter({
    words,
    loop,
    delaySpeed: delay,
  });

  return <>{text}</>;
};

export default Projects;
