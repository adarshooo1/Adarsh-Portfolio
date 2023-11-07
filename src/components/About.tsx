import { motion } from "framer-motion";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "../../typings";
import { urlFor } from "../../adarsh-portfolio-backend";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

const About = ({ pageInfo }: Props) => {
  const [text, count] = useTypewriter({
    words: [`${pageInfo?.name}`],
    typeSpeed: 100,
    loop: true,
    delaySpeed: 800,
  });

  return (
    // parent div
    <div className="h-screen">
      {/* Page Info */}
      <div className="relative flex uppercase font-thin w-full text-2xl justify-center mt-56">
        <span className="absolute top-[90px]">
          <span className="tracking-[20px]">Abou</span>t
        </span>
      </div>

      {/* Image container define */}

      {/* Parent container of image and texts */}
      <div className="flex w-full h-full items-center xs:flex-col relative justify-center lg:mt-12 xs:mt-16">
        <div className="relative">
          <motion.div
            initial={{
              opacity: 10,
            }}
            transition={{
              duration: 1.2,
            }}
            animate={{ opacity: 1 }} // Updated from `whileInView` to `animate`
            className="flex relative flex-col text-center md:text-left md:flex-row justify-evenly max-w-7xl px-10 xs:px-2 mx-auto items-center"
          >
            {/* A moving motion div */}
            <motion.div
              initial={{
                x: -400,
                opacity: 0,
              }}
              transition={{
                duration: 1.2,
                delay: 0.5,
              }}
              animate={{ opacity: 1, x: 0 }} // Updated from `whileInView` to `animate`
            >
              {/* Image Inside a motion div */}
              <Image
                className="rounded-md h-72 w-60  xs:rounded-full xs:h-52 xs:w-52"
                src={urlFor(pageInfo?.profilePic).url()}
                height={220}
                width={220}
                alt={pageInfo.name}
              />
            </motion.div>
          </motion.div>
        </div>
        {/* text div */}
        <div className="flex flex-col justify-between text-start lg:w-[65%] md:w-[45%] lg:text-xl xs:text-sm p-4">
          <h1 className="text-white uppercase text-2xl font-bold tracking-[3px] xs:text-sm ">
            Here is a little{" "}
            <span className="uppercase tracking-[3px] text-orange-500">
              Introduction
            </span>
          </h1>
          {/* Typewrite Effect */}
          <p className="font- my-4">
            Hi, I&apos;m{" "}
            <span className="capitalize tracking-[3px] text-orange-500  font-semibold ml-2">
              {text}
              <Cursor cursorColor="#FB923C" />
            </span>
          </p>
          <p className="font-mono text-justify">
            {pageInfo?.backgroundInformation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
