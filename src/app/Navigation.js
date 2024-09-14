"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiAlignJustify } from "react-icons/fi";
import Image from "next/image";

const Navigation = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed z-50 px-3 md:px-10 bg-black shadow-2xl flex flex-row gap-[70px] justify-between py-1 w-full ">
      {/* <h2 className="text-2xl md:text-3xl font-bold"></h2> */}
      <Link href="/">
        <Image
          src="/icon1.png"
          height={200}
          width={200}
          alt="Logo"
          className="w-28 object-cover h-14 hover:border-2 border-white rounded-lg"
        />
      </Link>
      <button
        className="absolute right-5 top-4  lg:hidden"
        onClick={() => setShow(!show)}
      >
        <FiAlignJustify className="text-3xl text-white" />
      </button>
      <div className="hidden lg:flex md:gap-[10px] lg:gap-[20px] items-center md:text-[15px] lg:text-[20px] font-serif text-[#8e8989] uppercase ">
        <Link
          href="/"
          className="hover:text-white focus:border-b-2 focus:bg-gradient-to-br focus:px-3 focus:from-[#ffffff] focus:to-red-500 focus:text-black"
        >
          Home
        </Link>
        <Link
          href="/#About"
          className="hover:text-white focus:border-b-2 focus:bg-gradient-to-br focus:px-3 focus:from-[#ffffff] focus:to-red-500 focus:text-black"
          // className="hover:text-white focus:text-white focus:underline"
        >
          About
        </Link>
        <Link
          href="/skills"
          className="hover:text-white focus:border-b-2 focus:bg-gradient-to-br focus:px-3 focus:from-[#ffffff] focus:to-red-500 focus:text-black"
          // className="hover:text-white focus:text-white focus:underline"
        >
          Skills
        </Link>
        <Link
          href="/experience"
          className="hover:text-white focus:border-b-2 focus:bg-gradient-to-br focus:px-3 focus:from-[#ffffff] focus:to-red-500 focus:text-black"
          // className="hover:text-white focus:text-white focus:underline"
        >
          Experience
        </Link>
        <Link
          href="/projectdetails"
          className="hover:text-white focus:border-b-2 focus:bg-gradient-to-br focus:px-3 focus:from-[#ffffff] focus:to-red-500 focus:text-black"
          // className="hover:text-white focus:text-white focus:underline"
        >
          Project
        </Link>
        <Link
          href="/#Education"
          className="hover:text-white focus:border-b-2 focus:bg-gradient-to-br focus:px-3 focus:from-[#ffffff] focus:to-red-500 focus:text-black"
          // className="hover:text-white focus:text-white focus:underline"
        >
          Education
        </Link>
        <Link
          href="/contactus"
          className="hover:text-white focus:border-b-2 focus:bg-gradient-to-br focus:px-3 focus:from-[#ffffff] focus:to-red-500 focus:text-black"
          // className="hover:text-white focus:text-white focus:underline"
        >
          Contact me
        </Link>
      </div>
      {show ? (
        <div className="flex z-auto flex-col text-left absolute top-[60px] bg-[#602172] gap-2 lg:hidden text-[20px] text-white w-full p-4 uppercase font-bold font-serif">
          <Link href="/" onClick={() => setShow(!show)}>
            Home
          </Link>
          <Link href="/#About" onClick={() => setShow(!show)}>
            About
          </Link>
          <Link href="/skills" onClick={() => setShow(!show)}>
            Skills
          </Link>
          <Link href="/experience" onClick={() => setShow(!show)}>
            Experience
          </Link>
          <Link href="/projectdetails" onClick={() => setShow(!show)}>
            Project
          </Link>
          <Link href="/#Education" onClick={() => setShow(!show)}>
            Education
          </Link>
          <Link href="/contactus" onClick={() => setShow(!show)}>
            Contact me
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Navigation;
