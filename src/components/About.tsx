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
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row justify-evenly max-w-7xl px-10 mx-auto items-center"
    >
      <h3 className="uppercase text-white absolute top-24 flex text-2xl">
        <span className="tracking-[20px]">About</span> {/* Fixed typo */}
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
        className="-mb-20 md:xs:mb-5 md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-56 md:h-80 xl:w-[300px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className="text-white uppercase text-3xl font-semibold">
          Here is a little{" "}
          <span className="uppercase tracking-[3px] text-orange-500">
            Introduction
          </span>
        </h4>
        <p className="text-lg">
          Hi, I&apos;m{" "}
          <span className="uppercase tracking-[3px] text-orange-500 text-lg font-semibold">
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

