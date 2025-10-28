"use client";

import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Typewriter from "typewriter-effect";
import ParticlesHero from "./ParticleBg";
import Link from "next/link";

const Hero = () => {
  return (
    <div className="relative h-screen flex items-center justify-center text-white overflow-hidden flex-col">
      <ParticlesHero />
      <div className="relative z-10 flex flex-col items-center">
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-center font-bold tracking-wide mt-15"
        >
          Creating web products,
          <br /> brands <span className="text-cyan-200">and experiences.</span>
        </h1>
        <h2
          data-aos="fade-up"
          data-aos-delay="400"
          className="mt-5 text-sm px-2 text-center sm:text-2xl font-medium flex items-cemter"
        >
          Hi! I&apos;m Arfa - A Passionate
          <span className="text-cyan-200 font-bold">
            <Typewriter
              options={{
                strings: [
                  "AI Developer",
                  "Frontened Developer",
                  "Backened Developer",
                ],
                autoStart: true,
                loop: true,
                delay: 75,
                deleteSpeed: 50,
                wrapperClassName: "pl-2",
              }}
            />
          </span>
        </h2>
        <Link href="/Work">
          <button
            data-aos="fade-up"
            data-aos-delay="600"
            className="mt-20 px-10 py-4 text-black bg-blue-400 hover:bg-cyan-800 hover:text-white transition-all duration-300 cursor-pointer rounded-full text-lg font-medium"
          >
            <span>See my work</span>
            <BsArrowRight className="w-5 h-5 ml-2 inline-block" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
