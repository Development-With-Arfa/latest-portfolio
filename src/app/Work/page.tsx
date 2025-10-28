"use client";

import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Link from "next/link";
import Image from "next/image";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";

const projects = [
  {
    num: "01",
    name: "Tic Tac Toe",
    title: "Project-1",
    description:
      "This was my First Project which I build for the first time in my life. A fully interactive Tic Tac Toe game featuring smooth gameplay, and dynamic win detection for an engaging experience.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "JavaScript" }],
    image: "/images/project-1.webp",
    live: "https://tic-tac-toe-game-green-pi.vercel.app/",
    github: "https://github.com/Development-With-Arfa/tic_tac_toe_game.git",
  },
  {
    num: "02",
    name: "Clinic Website",
    title: "Project-2",
    description:
      "This is a website in which I integrate alot of my efforts in the field of NextJs. I used routing and tailwind css and some libraries like shadcn etc.",
    stack: [
      { name: "NextJS" },
      { name: "Tailwind CSS" },
      { name: "TypeScript" },
      { name: "Figma" },
    ],
    image: "/images/project-2.png",
    live: "https://clinic-website-gold.vercel.app/",
    github: "https://github.com/Development-With-Arfa/Clinic_website.git",
  },
  {
    num: "03",
    name: "CarHub",
    title: "Project-3",
    description:
      "This is a website which was a hackathon of our institute. This is a website made in specific time and with specific theme. I tried my best to make it functional and getting the data fron Database",
    stack: [
      { name: "NextJS" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
      { name: "Sanity" },
      { name: "Figma" },
    ],
    image: "/images/project-3.png",
    live: "https://hackathon-2-rosy.vercel.app/",
    github: "https://github.com/Development-With-Arfa/Hackathon-2.git",
  },
  {
    num: "04",
    name: "Chair-Commerce Website",
    title: "Project-4",
    description:
      "This is a website which was a hackathon of our institute. This is a website made in specific time and with specific theme. I tried my best to make it functional and getting the data fron Database",
    stack: [
      { name: "NextJS" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
      { name: "Sanity" },
      { name: "Figma" },
    ],
    image: "/images/project-4.png",
    live: "https://e-commerce-delta-nine-27.vercel.app/",
    github: "https://github.com/Development-With-Arfa/E-commerce.git",
  },
  {
    num: "05",
    name: "Data Enctyption System | Secure Data Storage",
    title: "Project-5",
    description:
      "I tried to make a Data Storage System with Home page, Store Data option, Retrieve the Stored data and Login page. It stores the data and make sure that you data is safe and cannot be retrieved without your passkey.",
    stack: [{ name: "Python" }, { name: "Streamlit" }],
    image: "/images/project-5.png",
    live: "https://tdghcbbbtp5n9acdo2g9kv.streamlit.app/",
    github: "https://github.com/Development-With-Arfa/secure_data_encryption",
  },
  {
    num: "06",
    name: "Personal Library Manager",
    title: "Project-6",
    description:
      "It is a Library Manager with the options to Add Book, Remove Book, Search and Save. It keeps the record of all the books present in your library easily.",
    stack: [{ name: "Python" }, { name: "Streamlit" }],
    image: "/images/project-6.png",
    live: "https://librarymanager-chvs6cepcqbxxvy53psy8o.streamlit.app/",
    github: "https://github.com/Development-With-Arfa/Library_Manager.git",
  },
  {
    num: "07",
    name: "Password Generator and Strength Classifier",
    title: "Project-7",
    description:
      "It is a Password Generator. You can easily generate a strong password for your safe side. It also classifies the strength of password after you generate it and can easily save your password for future use. It makes your life easier.",
    stack: [{ name: "Python" }, { name: "Streamlit" }],
    image: "/images/project-7.png",
    live: "https://development-with-arfa-password-app-main-uniblt.streamlit.app/",
    github: "https://github.com/Development-With-Arfa/Password_app.git",
  },
  {
    num: "08",
    name: "Excel-CSV Convertor | Data Sweeper",
    title: "Project-8",
    description:
      "This can convert Excel to CSV and vice versa. It also provide the data sweeping system by removing the duplicates and filling the empty spaces. ALso provides visual representation of your data and dowload the respective file safely.",
    stack: [{ name: "Python" }, { name: "Streamlit" }],
    image: "/images/project-8.png",
    live: "https://excel-csv-transformer-drtv9vyugsutl6bkrf8bhr.streamlit.app/",
    github:
      "https://github.com/Development-With-Arfa/excel-csv-transformer.git",
  },
  {
    num: "09",
    name: "Dynamic Resume Builder",
    title: "Project-9",
    description:
      "This is a basic Resume Builder which can help you building your resume in a snap. I is dynamic, can be edited as per requirement and can br shared easily. It is a one stop solution for your resume.",
    stack: [{ name: "HTML" }, { name: "CSS" }, { name: "TypeScript" }],
    image: "/images/project-9.png",
    live: "https://milestone-5-puce-rho.vercel.app/",
    github: "https://github.com/Development-With-Arfa/Milestone-5.git",
  },
  {
    num: "10",
    name: "Adventure Site",
    title: "Project-10",
    description: "This is a website which was a practice for my NextJS.",
    stack: [
      { name: "NextJS" },
      { name: "TailwindCSS" },
      { name: "TypeScript" },
    ],
    image: "/images/project-10.png",
    live: "https://nextjs-with-custom-css.vercel.app/",
    github:
      "https://github.com/Development-With-Arfa/Nextjs_with_customCSS.git",
  },
];

const Work = () => {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    const currentIndex = swiper.activeIndex;
    setProject(projects[currentIndex]);
  };

  return (
    <>
      <h2 className="text-5xl flex justify-center font-bold text-white/90 py-12">
        My Work
      </h2>
      <section className="min-h-[80vh] flex flex-col justify-center xl:px-0">
        <div className="container mx-auto text-white">
          <div className="flex flex-col xl:flex-row xl:gap-[30px]">
            <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none ml-5">
              <div className="flex flex-col gap-[30px] h-[50%]">
                {/* outline no */}
                <div className="text-8xl leading-none font-extrabold text-transparent [-webkit-text-stroke:1px_cyan]">
                  {" "}
                  {project.num}
                </div>
                {/* project-catagory */}
                <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-cyan-300 transition-all duration-500 capitalize">
                  {project.name}
                </h2>
                {/* description */}
                <p className="text-white/60">{project.description}</p>
                {/* stack */}
                <ul className="flex gap-4">
                  {project.stack.map((item, index) => {
                    return (
                      <li key={index} className="text-xl text-cyan-200">
                        {item.name}
                        {/* remove the last commo */}
                        {index != project.stack.length - 1 && ","}
                      </li>
                    );
                  })}
                </ul>
                {/* border */}
                <div className="border border-white/20"></div>
                {/* button */}
                <div className="flex item-center gap-4">
                  {/* live project button */}
                  <Link href={project.live} target="_main">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="h-[70px] w-[70px] rounded-full bg-white/5 flex justify-center cursor-pointer items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-cyan-200" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>

                  {/* github project button */}
                  <Link href={project.github} target="_main">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="h-[70px] w-[70px] rounded-full bg-white/5 flex justify-center items-center group cursor-pointer">
                          <BsGithub className="text-white text-3xl group-hover:text-cyan-200" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Github Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                </div>
              </div>
            </div>
            <div className="w-full xl:w-[50%]">
              <Swiper
                spaceBetween={30}
                slidesPerView={1}
                className="xl:h-[520px] mb-12"
                onSlideChange={handleSlideChange}
              >
                {projects.map((project, index) => {
                  return (
                    <SwiperSlide key={index} className="w-full">
                      <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                        {/* overlay */}
                        <div></div>
                        {/* image */}
                        <div className="relative w-full h-full">
                          <Image
                            src={project.image}
                            fill
                            className="object-cover"
                            alt=""
                          />
                        </div>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Work;
