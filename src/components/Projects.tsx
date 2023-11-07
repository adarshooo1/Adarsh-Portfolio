import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { Project } from "../../typings";
import { urlFor } from "../../adarsh-portfolio-backend";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";

type Props = {
  projects: Project[];
};

function Projects({ projects }: Props) {
  return (
    // Parent Box
    <div className="h-full relative">
      {/*Main Header */}
      <div className="w-full text-center pt-24">
        <span className="uppercase text-2xl text-white">
          <span className="tracking-[20px]">project</span>s
        </span>
      </div>

      {/* Background Diagonal Bar */}

      <div className="w-full absolute top-[30%] h-64 bg-[#FB923C]/20 left-0 -skew-y-12"></div>
      {/* ==================================PROJECT IMAGE , PROJECT TITLE, PROJECT SKILLS USED, DESCRIPTION======================================= */}

      {/* Child Which has project image , Project Skill , project Description */}
      <div className="relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory scrollbar-track-zinc-700/20 scrollbar-thumb-[#FB923C] scrollbar-thin">
        {projects.map((project, i) => (
          <div
            key={project._id}
            //Align image with all content for all the screen sizes                                              | Extra large Screen | Large Screens | Medium Screens | Smaller Screens | Mobile Screens
            className="w-full flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-5      xl:mt-0            lg:mt-0        md:mt-0         sm:mt-0         xs:mt-0 "
          >
            {/* ====================================================================================================== */}

            {/* Image Container */}
            {/*  */}
            <Link href={`${project.linkToBuild}`} target="_blank">
              <motion.img
                initial={{
                  y: -80,
                  opacity: 0,
                }}
                transition={{ duration: 1.5 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                src={urlFor(project?.image).url()}
                alt={project?.title}
                //Setting Image Width according to the screen sizes
                className="xl:w-[800px] lg:w-[600px] md:w-[500px] sm:w-[400px] xs:w-[350px] cursor-pointer"
              />
            </Link>

            {/* ====================================================================================================== */}

            {/* Project Title */}
            <div className="space-y-10 px-0 md:px-5 mx-w-7xl">
              <div className="xs:text-sm sm:text-lg  md:text-xl lg:text-2xl text-4xl font-mono text-center uppercase">
                Project {i + 1} / {projects.length} :{" "}
                <span className="uppercase font-mono xs:text-sm sm:text-lg md:text-xl lg:text-2xl text-4xl">
                  <ProjectTypewriter
                    words={[project?.title]}
                    loop
                    delay={1000}
                  />
                  <Cursor />
                </span>
              </div>

              {/* ====================================================================================================== */}

              {/*  Technology used for make projects */}
              <div className="flex items-center space-x-2 justify-around">
                {project?.technologies.map((technology) => (
                  <Image
                    className="h-10 w-11 xs:h-6 xs:w-6"
                    height={12}
                    width={12}
                    key={technology._id}
                    src={urlFor(technology.image).url()}
                    alt={technology.title}
                  />
                ))}
              </div>

              {/* ====================================================================================================== */}

              {/* Project Description */}
              <p className="md:text-md sm:text-sm lg:text-lg xl:text-xl xl:text-center text-justify">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* ====================================================================================================== */}
    </div>
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
