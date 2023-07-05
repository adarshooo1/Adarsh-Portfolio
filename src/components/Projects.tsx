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
    // Parent Box
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      //                          Universal                                                                                        |  Extra Large Screens   |   Larger Screen    |   Medium Screen   |    Smaller Screen    |    Mobile Screen     |
      className="h-screen relative flex overflow-hidden flex-col max-w-full justify-start text-center m-auto items-center z-0 pb-5       xl:h-[160vh]            lg:h-[150vh]         md:h-[120vh]         sm:h-[110vh]           xs:h-[140vh]"
    >

            {/* ====================================================================================================== */}

      {/*Main Header */}
      <h3 className="absolute top-24 uppercase text-2xl text-white">
        <span className="tracking-[20px]">project</span>s
      </h3>


            {/* ====================================================================================================== */}

      {/* Child Which has project image , Project Skill , project Discription */}
      <div className="reltive w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar scrollbar-track-zinc-700/20 scrollbar-thumb-[#FB923C] scrollbar-thin">
        {projects.map((project, i) => (
          <div
            key={project._id}
            //Align image with all content for all the screen sizes                                              | Extra large Screen | Large Screens | Medium Screens | Smaller Screens | Mobile Screens
            className="w-screen flex-shrink-0 snap-center flex flex-col space-y-5 justify-center items-center p-5      xl:mt-36            lg:mt-40        md:mt-40          sm:mt-40         xs:mt-40 "
          >

            {/* ====================================================================================================== */}

            {/* Image Container */}
            {/*  */}
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
              //Setting Image Width according to the screen sizes
              className="xl:w-[800px] lg:w-[600px] md:w-[500px] sm:w-[400px] xs:w-[350px]"
            />


            {/* ====================================================================================================== */}

            {/* Project Title */}
            <div className="space-y-10 px-0 md:px-5 mx-w-7xl">
              <h4 className="xs:text-sm sm:text-lg  md:text-xl lg:text-2xl text-4xl font-semibold text-center uppercase">
                Project {i + 1} / 3:{" "}
                <span className="uppercase font-bold xs:text-sm sm:text-lg md:text-xl lg:text-2xl text-4xl">
                  <ProjectTypewriter
                    words={[project?.title]}
                    loop
                    delay={1000}
                  />
                  <Cursor />
                </span>
              </h4>

            {/* ====================================================================================================== */}

              {/*  Technology used for make projects */}
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

            {/* ====================================================================================================== */}

              {/* Project Discription */}
              <p className="md:text-md sm:text-sm lg:text-lg xl:text-xl xl:text-center text-left pb-20">
                {project?.summary}
              </p>
            </div>
          </div>
        ))}
      </div>

            {/* ====================================================================================================== */}

      {/* background Orange Line which is Diagonally placed to Beautify */}
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
