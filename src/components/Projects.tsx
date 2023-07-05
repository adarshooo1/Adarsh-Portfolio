import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { motion } from "framer-motion";
import { Project } from "../../typings";
import { urlFor } from "../../adarsh-portfolio-backend";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="xs:h-[140vh] sm:h-[150vh] relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-center mx-auto items-center z-0"
    >
      <h3 className="absolute top-24 uppercase text-2xl text-white">
        <span className="tracking-[20px]">project</span>s
      </h3>

      <div className="reltive w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-zinc-700/20 scrollbar-thumb-[#FB923C] scrollbar-thin">
        {projects.map((project, i) => (
          <div
            key={project._id}
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 items-center justify-center p-5 md:p-20 h-screen xs:h-screen xs:mt-40"
          >
            <motion.img
              initial={{
                y: -300,
                opacity: 0,
              }}
              transition={{ duration: 1.5 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              src={urlFor(project?.image).url()}
              alt={project?.title}
              className="xl:w-[600px] mt-10"
            />

            <div className="space-y-10 px-0 md:px-5 mx-w-7xl">
              <h4 className="sm:text-md xs:text-sm md:text-3xl text-4xl font-semibold text-center uppercase">
                Project {i + 1} / 3:{" "}
                <span className="uppercase font-bold">
                  <ProjectTypewriter
                    words={[project?.title]}
                    loop
                    delay={1000}
                  />
                  <Cursor />
                </span>
              </h4>

              <div className="flex items-center space-x-2 justify-center">
                {project?.technologies.map((technology) => (
                  <img
                    className="h-12 w-12 xs:h-6 xs:w-6"
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt={technology.title}
                  />
                ))}
              </div>

              <p className="md:text-md sm:text-sm lg:text-lg xl:text-xl xl:text-center text-left pb-20">
                {project?.summary}
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