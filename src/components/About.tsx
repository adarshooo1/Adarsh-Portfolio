import { motion } from "framer-motion";
import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import { PageInfo } from "../../typings";
import { urlFor } from "../../adarsh-portfolio-backend";

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
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      animate={{ opacity: 1 }} // Updated from `whileInView` to `animate`
      className="h-[125vh] flex relative flex-col text-center md:text-left md:flex-row justify-evenly max-w-7xl px-10 xs:px-2 mx-auto items-center"
    >
      <h3 className="uppercase text-white absolute top-24 flex text-2xl">
        <span className="tracking-[20px]">Abou</span>t {/* Fixed typo */}
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
          delay: 0.5,
        }}
        animate={{ opacity: 1, x: 0 }} // Updated from `whileInView` to `animate`
        src={urlFor(pageInfo?.profilePic).url()}
        // Only for image
        className="object-cover mt-20 flex-shrink-0 rounded-full xl:ml-20 xl:rounded-lg md:rounded-md xl:w-[270px] xl:h-[350px] md:w-[230px] md:h-[300px] md:-mt-8 md:ml-8 sm:h-[210px] sm:w-[210px] sm:mt-32 xs:h-[210px] xs:w-[210px] xs:mt-32"
        // md:xs:mb-5 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-56 md:h-80
      />
      <div className="space-y-10 px-10 xs:px-5 mb-10">
        <h4 className="text-white uppercase text-3xl font-semibold">
          Here is a little{" "}
          <span className="uppercase tracking-[3px] text-orange-500">
            Introduction
          </span>
        </h4>
        <p className="md:text-md sm:text-sm lg:text-lg xl:text-xl text-left">
          Hi, I&apos;m{" "}
          <span className="capitalize tracking-[3px] text-orange-500 text-lg font-semibold ml-2">
            {text}
          </span>
          <Cursor cursorColor="#FB923C" />
          <br />
          {pageInfo?.backgroundInformation}
        </p>
      </div>
    </motion.div>
  );
};

export default About;
