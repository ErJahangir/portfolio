import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdCall, IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <div className="flex flex-col font-serif items-center py-10 bg-[#105863] text-[#c6c4c4]">
      <h2 className="text-4xl font-bold ">JAHANGIR</h2>
      <div className="w-[95%] border-2 rounded-md border-red-500 mt-3 mx-6"></div>
      <div className="flex flex-col md:flex-row  justify-between w-[90%] md:w-[70%] mt-3 gap-4">
        <div className=" flex flex-col gap-3 mx-auto">
          <h2 className="mx-auto text-3xl font-bold capitalize  text-[#082053]">
            Pages
          </h2>
          <div className="grid grid-cols-3 gap-2 ">
            <Link href="/">Home</Link>
            <Link href="/#About">About</Link>
            <Link href="/experience">Experience</Link>
            <Link href="/projectdetails">Projext</Link>
            <Link href="/#Education">Education</Link>
            <Link href="/contactus">Contact me</Link>
          </div>
        </div>
        <div className="flex flex-col mx-auto ">
          <h2 className="capitalize text-3xl text-[#082053] font-bold ">
            Follow me
          </h2>
          <div className="flex flex-row  my-4 gap-3 mx-auto">
            <Link
              href="https://www.linkedin.com/in/jahangircse786"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full text-blue-800 hover:text-white hover:bg-blue-800  duration-1000"
            >
              <FaLinkedinIn className="text-2xl" />
            </Link>

            <Link
              href="https://github.com/ErJahangir"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white p-2 rounded-full text-black hover:text-white hover:bg-gray-700 duration-1000"
            >
              <FaGithub className="text-2xl" />
            </Link>
            <Link
              href="mailto:jahaniralamnke786@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-red-200 p-2 rounded-full text-blue-950 hover:text-black hover:bg-white duration-1000"
            >
              <CiMail className="text-2xl" />
            </Link>
          </div>
        </div>
        <div className="flex flex-col mx-auto">
          <h2 className="text-3xl capitalize text-[#082053] mx-auto  font-bold font-serif">
            contact
          </h2>
          <div className="flex items-center flex-row gap-2 ">
            <IoMdCall />
            <Link href="tel:+917557708578" className="font-sans">
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
