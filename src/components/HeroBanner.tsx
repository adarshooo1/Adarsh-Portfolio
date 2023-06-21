import React from "react";
import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import Image from "next/image";
import Link from "next/link";

type Props = {};

const HeroBanner = (props: Props) => {
  const [text, count] = useTypewriter({
    words: [
      "Hii , I'm Adarsh Singh",
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
        src="/my-image.webp"
        alt="My Image"
        className="relative rounded-full mx-auto object-cover transition-all hover:scale-110"
        width={150}
        height={150}
        priority={true}
      />

      <div className="z-20">
        <h2 className="text-sm uppercase text-white pb-2 transition-all hover:scale-125">
          <span className="tracking-[15px]">Software Enginee</span>r
        </h2>
        <h1 className="text-5xl lg:6xl font-semibold scroll-px-10">
          <span className="mr-3 text-orange-400">{text}</span>
          <Cursor cursorColor="#FB923C" />
        </h1>

        <div className="pt-5">
          <Link href="#about">
            <button className="heroButton tracking-[3px]">About</button>
          </Link>
          <Link href="#skills">
            <button className="heroButton tracking-[3px]">Skills</button>
          </Link>
          <Link href="#projects">
            <button className="heroButton tracking-[3px]">Project</button>
          </Link>
          <Link href="#contacts">
            <button className="heroButton tracking-[3px]">Contact</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default HeroBanner;
