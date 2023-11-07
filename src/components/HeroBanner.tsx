import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import { PageInfo } from "../../typings";
import { urlFor } from "../../adarsh-portfolio-backend";
import Image from "next/image";

type Props = {
  pageInfo: PageInfo;
};

const HeroBanner = ({ pageInfo }: Props) => {
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
      <Image
        className="relative rounded-full w-48 mx-auto object-cover transition-all hover:scale-110"
        height={192}
        width={192}
        src={urlFor(pageInfo?.heroImage)?.url()}
        quality={75} // {number 1-100}
        priority={true} // {false} | {true}
        placeholder="blur"
        blurDataURL={urlFor(pageInfo?.heroImage)?.url()}
        alt={pageInfo.name}
      />

      <div className="z-20">
        <h2 className="text-sm tracking-[15px] uppercase text-white pb-2 transition-all hover:scale-125">
          {pageInfo.role}
        </h2>
        <h1 className="text-5xl 2xl:text-7xl xl:text-6xl md:text-5xl sm:text-3xl xs:text-xl font-semibold scroll-px-10">
          <span className="mr-3 text-orange-400">{text}</span>
          <Cursor cursorColor="#FB923C" />
        </h1>

        <div className="pt-5">
          <a href="#about">
            <button className="heroButton tracking-[3px]">About</button>
          </a>
          <a href="#skills">
            <button className="heroButton tracking-[3px]">Skills</button>
          </a>
          <a href="#projects">
            <button className="heroButton tracking-[3px]">Project</button>
          </a>
          <a href="#contacts">
            <button className="heroButton tracking-[3px]">Contact</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
