import React from "react";
import Hero from "../Hero/Hero";
import Resume from "../Resume/page";
import Work from "../Work/page";
import Contact from "../Contact/page";

const Home = () => {
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
