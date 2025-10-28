"use client";

import React from "react";
import {
  FaBrain,
  FaCss3,
  FaFigma,
  FaHtml5,
  FaJs,
  FaPython,
} from "react-icons/fa";
import { SiNextdotjs, SiSanity } from "react-icons/si";

import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

// { about data }
const about = {
  title: "About Me",
  description:
    "I strive to design and develop interfaces that balance aesthetic appeal with functionality, accessibility and performance.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Arfa",
    },
    {
      fieldName: "Location",
      fieldValue: "Karachi, Pakistan",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Pakistani",
    },
    {
      fieldName: "Email",
      fieldValue: "arfa.naved0906@gmail.com",
    },
    {
      fieldName: "Languages",
      fieldValue: "English, Urdu",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+92) 3268954731",
    },
  ],
};

// { education data }
const education = {
  title: "My Education",
  description:
    "I&apos;m currently advancing my technical knowledge through GIAIC. My learning journey focuses on building practical, real-world projects that combine creativity, design and innovation.",
  items: [
    {
      institute: "GIAIC",
      degree: "Agentic AI",
      duration: "2024 - so on...",
    },
    {
      institute: "Tech Force Pakistan",
      degree: "Frontened Web Development",
      duration: "2024",
    },
    {
      institute: "Intermediate",
      degree: "Computer Science",
      duration: "2023 - 2024",
    },
    {
      institute: "Matriculation",
      degree: "Science",
      duration: "2023",
    },
  ],
};

const skills = {
  title: "My Skills",
  description:
    "Looking forward to build sleek, functional and user-focused web solutions with modern tools and creative thinkings.",
  items: [
    {
      icon: <FaHtml5 />,
      name: "html 5",
    },
    {
      icon: <FaCss3 />,
      name: "css 3",
    },
    {
      icon: <FaJs />,
      name: "javascript",
    },
    {
      icon: <SiNextdotjs />,
      name: "next.js",
    },
    {
      icon: <FaPython />,
      name: "python",
    },
    {
      icon: <FaBrain />,
      name: "agentic.ai",
    },
    {
      icon: <SiSanity />,
      name: "sanity",
    },
    {
      icon: <FaFigma />,
      name: "figma",
    },
  ],
};

const Resume = () => {
  return (
    <div className="min-h-[80vh] flex items-center justify-center pt-12">
      <div className="container mx-auto">
        <Tabs
          defaultValue="education"
          className=" flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList data-aos="fade-right" className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <div className="h-auto flex flex-col gap-6 -mt-10">
              <h2 className="text-white font-bold text-4xl">Why Hire Me ?</h2>
              <p className="text-white/60 ">
                I try to combine strong web development skills in Next.js,
                JavaScript, and UI/UX design with a growing expertise in Python
                and AI. I create clean, user-friendly, and efficient digital
                experiences while always aiming to improve and innovate.
              </p>
            </div>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About Me</TabsTrigger>
          </TabsList>

          {/* content */}
          <div data-aos="fade-left" className="min-h-[70vh] w-full ">
            {/* education */}
            <TabsContent value="education" className="w-full text-white">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul data-aos="flip-left" data-aos-delay="600" className="grid grid-cols-1 mx-5 xl:mx-0 lg:grid-cols-2 gap-[30px]">
                    {education.items.map((item, index) => {
                      return (
                        <li
                          key={index}
                          className="bg-[#232329] h-[184px] py-6 px-10 rounded-xl flex flex-col justify-center items-center lg:items-start gap-1"
                        >
                          <span className="text-cyan-200">{item.duration}</span>
                          <h3 className="text-xl max-w-[300px] min-h-[50px] text-center lg:text-left  ">
                            {item.degree}
                          </h3>
                          <div className="flex items-center gap-3">
                            {/* dot */}
                            <span className="w-[6px] h-[6px] rounded-full bg-cyan-300 "></span>
                            <p className="text-white/60">{item.institute}</p>
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full text-white">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                    {skills.description}
                  </p>
                </div>
                <ul data-aos="fade-right" data-aos-delay="600" className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 xl:gap-[30px]">
                  {skills.items.map((skill, index) => {
                    return (
                      <li key={index}>
                        <TooltipProvider delayDuration={100}>
                          <Tooltip>
                            <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                              <div className="text-6xl group-hover:text-cyan-300 transition-all duration-300">
                                {skill.icon}
                              </div>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="capitalize">{skill.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent
              value="about"
              className="w-full text-center xl:text-left text-white"
            >
              <div data-aos="fade-zoon-in" data-aos-delay="300" className="flex flex-col gap-[30px]">
                <h3 className="text-4xl font-bold">{about.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0">
                  {about.description}
                </p>
                <ul className="grid grid-cols-1 xl:grid-cols-2 mx-auto gap-y-6 max-w-[620px] xl:mx-0">
                  {about.info.map((item, index) => {
                    return (
                      <li
                       data-aos="fade-up" data-aos-delay="200" 
                        key={index}
                        className="flex items-center justify-center xl:justify-start gap-4"
                      >
                        <span className="text-white/60">{item.fieldName}</span>
                        <span className="text-xl">{item.fieldValue}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </div>
  );
};

export default Resume;
