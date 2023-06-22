import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";
import Link from "next/link";

type Props = {};

export default function Header({}: Props) {
  return (
    <header className="sticky top-0 p-5 flex items-start justify-between max-w-6xl mx-auto z-20 xl:items-center">
      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          delay: 2,
          duration: 1,
        }}
        className="flex flex-row items-center"
      >
        {/* Social Icons */}
        <div>
          <SocialIcon
            url="https://github.com/adarshooo1"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
        <div>
          <SocialIcon
            url="https://www.linkedin.com/in/adarshooo1"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>

        <div>
          <SocialIcon
            url="https://twitter.com/adarsh_ooo1"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
        
        <div>
          <SocialIcon
            url="https://www.instagram.com/__adarsh_ooo1__"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>

        <div>
          <SocialIcon
            url="https://leetcode.com/adarshsinghak001"
            fgColor="gray"
            bgColor="transparent"
          />
        </div>
      </motion.div>

      <Link href="#contacts">
        <motion.div
          initial={{
            x: -500,
            opacity: 0,
            scale: 0.5,
          }}
          animate={{
            x: 0,
            opacity: 1,
            scale: 1,
          }}
          transition={{
            delay: 2,
            duration: 1,
          }}
          className="flex flex-row items-center text-gray-300"
        >
          <SocialIcon
            className="cursor-pointer"
            network="email"
            fgColor="gray"
            bgColor="transparent"
          />
          <p className="uppercase hidden md:inline-flex text-sm text-gray-400">
            Get In Touch
          </p>
        </motion.div>
      </Link>
    </header>
  );
}
