"use client";

import { NavLinks } from "@/app/components/constants";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { BiDownload } from "react-icons/bi";
import { HiBars3BottomRight } from "react-icons/hi2";

type Props = {
  openNav: () => void;
};

const Nav = ({ openNav }: Props) => {
  const [navBg, setNavBg] = useState(false);

  useEffect(() => {
    const handler = () => {
      if (window.scrollY >= 90) setNavBg(true);
      if (window.scrollY < 90) setNavBg(false);
    };

    window.addEventListener("scroll", handler);

    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <div
      className={`transition-all ${
        navBg ? "bg-[#101327d9] shadow-md" : "fixed"
      } duration-200 h-[12vh] z-[10000] fixed w-full`}
    >
      <div className="flex items-center h-full justify-between w-[90%] mx-auto">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-white rounded-full flex items-center justify-center flex-col">
            <Image src="/images/logo.png" width={60} height={60} alt="logo" />
          </div>
          <h1 className="text-xl hidden sm:block md:text-2xl text-white font-bold">
            Arfa
          </h1>
        </div>
        {/* Nav */}
        <div className="hidden xl:flex items-center space-x-10">
          {NavLinks.map((item, id) => {
            return (
              <Link
                key={id}
                href={item.url}
                className="text-base hover:text-cyan-300 hover:underline hover:decoration-2 text-white font-medium transition-all duration-200"
              >
                <p>{item.label}</p>
              </Link>
            );
          })}
        </div>
        {/* Button */}
        <div className="flex items-center space-x-4">
          {/* CV Button */}
          <button className="px-8 py-3.5 text-small cursor-pointer rounded-lg text-black bg-blue-300 hover:bg-cyan-700 hover:text-white transition-all duration-300 flex items-center space-x-2">
            <BiDownload className="w-5 h-5" />
            <span>Download CV</span>
          </button>
          {/* Burger Menu */}
          <HiBars3BottomRight
            onClick={openNav}
            className="w-8 h-8 cursor-pointer text-white lg:hidden"
          />
        </div>
      </div>
    </div>
  );
};

export default Nav;
