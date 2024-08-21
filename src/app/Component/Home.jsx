import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";

const Home = () => {
  return (
    <div className="flex  h-[750px] md:h-[900px] w-[98%]  md:w-[80%] flex-row items-center justify-between mx-auto">
      <div className="flex flex-col gap-3 mx-auto">
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
      <div className="flex flex-col items-center gap-2 mx-auto">
        <h2 className="text-2xl">Hello!, I'm</h2>
        <div className="text-container">
          <h2 className="text-3xl md:text-5xl font-bold text">Jahangir Alam</h2>
        </div>
        <h2 className="text-gray-400 text-[15px]">
          Software Engineering Undergraduate
        </h2>
        <div className="flex flex-row gap-3 my-10">
          <Link
            href="/new-resume.pdf"
            download
            className="border px-5 py-3 rounded-lg hover:bg-green-700 hover:text-gray-900 text-[15px] md:text-xl capitalize font-semibold duration-1000"
          >
            Resume
          </Link>
          <Link
            href="#Contact"
            className="border px-6 py-3 rounded-lg bg-green-600 text-[15px] md:text-xl capitalize font-semibold duration-1000 hover:text-black hover:bg-white"
          >
            Contact us
          </Link>
        </div>
        <Image
          height={50}
          width={300}
          alt="Image"
          src="/topimage.png"
          className=" bg-black rounded-xl w-[230px] h-[280px] md:w-[300px] md:h-[350px]"
        />
      </div>
      <div className="rotate-90 hidden md:flex text-xl md:text-2xl mx-auto">
        Scroll Down
      </div>
    </div>
  );
};

export default Home;
