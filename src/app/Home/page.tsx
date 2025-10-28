'use client'

import React, { useEffect } from "react";
import Hero from "../Hero/Hero";
import Resume from "../Resume/page";
import Work from "../Work/page";
import Contact from "../Contact/page";
import 'aos/dist/aos.css'; // You can also use <link> for styles

const Home = () => {

  useEffect(() => {
  (async () => {
    const AOS = (await import("aos")).default;
    AOS.init({
      duration: 1000,
      easing: "ease",
      once: true,
      anchorPlacement: "top-bottom",
    });
  })();
}, []);

  return (
    <div className="overflow-hidden">
      <Hero />
      <Resume />
      <br /> <br /> <br /> <br />
      <Work />
      <Contact />
    </div>
  );
};

export default Home;
