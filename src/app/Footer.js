import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col font-serif items-center py-10 bg-[#105863]">
      <h2 className="text-4xl font-bold ">JAHANGIR</h2>
      <div className="grid grid-cols-3 md:grid-flow-col my-4 gap-2">
        <Link href="#">Home</Link>
        <Link href="#About">About</Link>
        <Link href="#Experience">Experience</Link>
        <Link href="#Project">Projext</Link>
        <Link href="#Education">Education</Link>
        <Link href="#Contact">Contact me</Link>
      </div>
      <div className="flex flex-row gap-3">
        <Link
          href="https://www.linkedin.com/in/jahangircse786"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full text-blue-800 hover:text-white hover:bg-blue-800"
        >
          <FaLinkedinIn className="text-2xl" />
        </Link>

        <Link
          href="https://github.com/ErJahangir"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-white p-3 rounded-full text-black hover:text-white hover:bg-gray-700"
        >
          <FaGithub className="text-2xl" />
        </Link>
      </div>
    </div>
  );
};

export default Footer;
