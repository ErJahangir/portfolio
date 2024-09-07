"use client";
import Link from "next/link";
import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { FiAlignJustify } from "react-icons/fi";
import Image from "next/image";

const Navigation = () => {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed px-10 bg-black shadow-2xl flex flex-row gap-[70px] justify-between py-1 w-full ">
      {/* <h2 className="text-2xl md:text-3xl font-bold"></h2> */}
      <Image
        src="/icon1.png"
        height={200}
        width={200}
        alt="Logo"
        className="w-28 object-cover h-14 "
      />
      <button
        className="absolute pl-[85%]   lg:hidden"
        onClick={() => setShow(!show)}
      >
        <FiAlignJustify className="text-3xl text-white" />
      </button>
      <div className="hidden lg:flex md:gap-[10px] lg:gap-[45px] items-center md:text-[15px] lg:text-[20px] font-serif text-[#8e8989] ">
        <Link href="#" className="hover:text-white">
          Home
        </Link>
        <Link href="#About" className="hover:text-white">
          About
        </Link>
        <Link href="#Experience" className="hover:text-white">
          Experience
        </Link>
        <Link href="#Project" className="hover:text-white">
          Project
        </Link>
        <Link href="#Education" className="hover:text-white">
          Education
        </Link>
        <Link href="#Contact" className="hover:text-white">
          Contact me
        </Link>
      </div>
      {show ? (
        <div className="flex z-auto flex-col text-left absolute top-[72px] bg-[#465064] gap-2 lg:hidden text-[20px] text-white w-full p-4 -ml-6">
          <Link href="#" onClick={() => setShow(!show)}>
            Home
          </Link>
          <Link href="#About" onClick={() => setShow(!show)}>
            About
          </Link>
          <Link href="#Experience" onClick={() => setShow(!show)}>
            Experience
          </Link>
          <Link href="#Project" onClick={() => setShow(!show)}>
            Project
          </Link>
          <Link href="#Education" onClick={() => setShow(!show)}>
            Education
          </Link>
          <Link href="#Contact" onClick={() => setShow(!show)}>
            Contact me
          </Link>
        </div>
      ) : null}
    </div>
  );
};

export default Navigation;
