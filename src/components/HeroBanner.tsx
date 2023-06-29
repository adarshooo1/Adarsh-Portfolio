import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Link from "next/link";
import { PageInfo } from "../../typings";
import { urlFor } from "../../adarsh-portfolio-backend";

type Props = {
  pageInfo : PageInfo;
};

const HeroBanner = ({pageInfo}: Props) => {
  const [text, count] = useTypewriter({
    words: [
      `Hii , I'm ${pageInfo?.name}`,
      "< A self taught developer />",
      "< Eat,  Code,  Sleep />",
    ],
    typeSpeed: 100,
    loop: true,
    delaySpeed: 800,
  });
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden">
      <BackgroundCircles />
      <img
        className="relative rounded-full h-48 w-48 mx-auto object-cover transition-all hover:scale-110"
        src={urlFor(pageInfo?.heroImage)?.url()}
        alt="My Image"
      />

      <div className="z-20">
        <h2 className="text-sm tracking-[15px] uppercase text-white pb-2 transition-all hover:scale-125">
         {pageInfo.role}
        </h2>
        <h1 className="text-5xl lg:6xl font-semibold scroll-px-10">
          <span className="mr-3 text-orange-400">{text}</span>
          <Cursor cursorColor="#FB923C" />
        </h1>

        <div className="pt-5">
          <Link href="#about" passHref>
            <button className="heroButton tracking-[3px]">About</button>
          </Link>
          <Link href="#skills" passHref>
            <button className="heroButton tracking-[3px]">Skills</button>
          </Link>
          <Link href="#projects" passHref>
            <button className="heroButton tracking-[3px]">Project</button>
          </Link>
          <Link href="#contacts" passHref>
            <button className="heroButton tracking-[3px]">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;