import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="flex flex-col items-center py-10 bg-[#105863]">
      <h2>JAHANGIR</h2>
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
          className="bg-slate-500 p-2 rounded-full text-blue-800 hover:text-white hover:bg-blue-800"
        >
          <FaLinkedinIn className="text-xl" />
        </Link>

        <Link
          href="https://github.com/ErJahangir"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-slate-500 p-2 rounded-full text-black hover:text-white hover:bg-gray-700"
        >
          <FaGithub className="text-xl" />
        </Link>
      </div>
      {/* <div className="border-b-2 w-full my-8"></div>
      <div>
        <h2>@ All Rights Reserved.</h2>
        <h2>All Rights Reserved.</h2>
      </div> */}
    </div>
  );
};

export default Footer;
