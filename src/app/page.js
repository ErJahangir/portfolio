import React from "react";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Home from "./Component/Home";
import About from "./Component/About";
import Experience from "./Component/Experience";
import Project from "./Component/Project";
import Education from "./Component/Education";
import Contact from "./Component/Contact";
import Link from "next/link";

const page = () => {
  return (
    <div className="mx-auto  pt-24 font-serif">
      <Home />
      <About />
      <Experience />
      <Project />
      <Education />
      <Contact />
    </div>
  );
};

export default page;
