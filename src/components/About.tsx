import { motion } from "framer-motion";
import React from "react";

type Props = {};

const About = (props: Props) => {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      transition={{
        duration: 1.2,
      }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      className="h-screen flex relative flex-col text-center md:text-left md:flex-row justify-evenly max-w-7xl px-10 mx-auto items-center"
    >
      <h3 className="uppercase text-white tracking-[20px] absolute top-24">
        About
      </h3>
      <motion.img
        initial={{
          x: -200,
          opacity: 0,
        }}
        transition={{
          duration: 1.2,
        }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        src="/My-Image2.webp"
        className="-mb-20  md:mb-0 flex-shrink-0 w-52 h-52 rounded-full object-cover md:rounded-lg md:w-56 md:h-80 xl:w-[300px] xl:h-[400px]"
      />
      <div className="space-y-10 px-0 md:px-10">
        <h4 className=" text-white uppercase text-3xl font-semibold">
          Here is a little{" "}
          <span className="uppercase tracking-[3px] stroked-text text-red-500">
            Introduction
          </span>
        </h4>
        <p className="text-base">
          "Hi, I'm
          <span className="uppercase tracking-[3px] stroked-text text-red-500 text-lg font-semibold">
            {" "}
            Adarsh Kumar Singh
          </span>
          , a management student with a passion for technology. Despite my
          academic background, I've always had a strong desire to learn and
          explore the world of development. I am a self-taught developer,
          constantly seeking opportunities to enhance my skills and expand my
          knowledge in various tech domains. With a curious mindset and
          dedication, I strive to create meaningful and innovative solutions."
        </p>
      </div>
    </motion.div>
  );
};

export default About;
