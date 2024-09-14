import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdCall, IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col font-serif items-center py-10 bg-[#105863]">
      <h2 className="text-4xl font-bold ">JAHANGIR</h2>
      <div className="flex flex-row items-start justify-between w-[90%] md:w-[70%] mt-3">
        <div className="grid grid-cols-2 gap-2">
          <h2>Pages</h2>
          <Link href="/">Home</Link>
          <Link href="/#About">About</Link>
          <Link href="/experience">Experience</Link>
          <Link href="/projectdetails">Projext</Link>
          <Link href="/#Education">Education</Link>
          <Link href="/contactus">Contact me</Link>
        </div>
        <div className="flex flex-col gap-3">
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
        <div>
          <h2 className="text-3xl">contact</h2>
          <div className="flex items-center flex-row gap-2 ">
            <IoMdCall />
            <Link href="7557708578" className="font-sans">
              +91 7557708578
            </Link>
          </div>

          <div className="flex items-center flex-row gap-2 ">
            <IoMdMail />
            <Link
              href="mailto:jahangiralamnke786@gmail.com"
              className="font-sans"
            >
              jahangiralamnke786@gmail.com
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
