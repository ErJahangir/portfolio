// import Image from "next/image";
// import Link from "next/link";
// import React from "react";
// import { HomeData } from "./Data";
// const Home = () => {
//   return (
//     <div className="flex w-[85%] flex-col md:flex-row items-center justify-between mx-auto">
//       <div className="flex flex-col md:w-[48%] items-start gap-2 mx-auto">
//         <h2 className="text-2xl">Hello!, I'm</h2>
//         <div className="text-container">
//           <h2 className="text-3xl md:text-5xl font-bold text">Jahangir Alam</h2>
//         </div>
//         <h2>{HomeData.position}</h2>
//         <h2 className="text-gray-400 text-[15px] text-justify">
//           {HomeData.About}
//         </h2>
//         <div className="flex flex-row gap-3 my-10">
//           <Link
//             href={HomeData.resume}
//             download
//             target="_blank"
//             className="border px-5 py-3 rounded-lg bg-[#303079] text-white hover:bg-transparent text-[15px] md:text-xl capitalize font-semibold duration-1000 hover:shadow-2xl"
//           >
//             Resume
//           </Link>
//           <Link
//             href="#Contact"
//             className="border px-6 py-3 rounded-lg bg-[#303079] text-[15px] md:text-xl capitalize font-semibold duration-1000 hover:text-white hover:shadow-2xl hover:bg-transparent"
//           >
//             Contact us
//           </Link>
//         </div>

//         <div className="flex flex-row gap-5  mb-10">
//           <Link
//             href={HomeData.linkedIn}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-blue-500 p-2 rounded-full text-white hover:text-blue-500 hover:bg-white"
//           >
//             <FaLinkedinIn className="text-3xl" />
//           </Link>

//           <Link
//             href={HomeData.github}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-slate-500 p-2 rounded-full text-black hover:text-white hover:bg-gray-700"
//           >
//             <FaGithub className="text-3xl" />
//           </Link>
//           <Link
//             href={HomeData.email}
//             target="_blank"
//             rel="noopener noreferrer"
//             className="bg-red-200 p-2 rounded-full text-blue-950 hover:text-black hover:bg-white"
//           >
//             <CiMail className="text-3xl" />
//           </Link>
//         </div>
//       </div>
//       <div className="md:w-[48%] relative flex items-center justify-center">
//         <div className="cloud1-div">
//           <CiCloudDrizzle className="cloud1" />
//         </div>
//         <Image
//           src="/first1.png"
//           height={400}
//           width={400}
//           // className="object-cover"
//         />

//         <div className="cloud2-div">
//           <CiCloudDrizzle className="cloud2" />
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Home;
"use client";
import { useEffect, useState } from "react";
import { HomeData } from "./Data";
import Link from "next/link";
import { FaCloudRain, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CiCloudDrizzle, CiMail } from "react-icons/ci";
import Image from "next/image";

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true); // This ensures the code only runs after mounting on the client
  }, []);

  if (!mounted) return null; // Or render a loading state to avoid SSR mismatch

  return (
    <div className="flex w-[85%] flex-col md:flex-row items-center justify-between mx-auto">
      {/* Left section */}
      <div className="flex flex-col md:w-[48%] items-start gap-2 mx-auto">
        <h2 className="text-2xl">Hello!, I'm</h2>
        <div className="text-container">
          <h2 className="text-3xl md:text-5xl font-bold">Jahangir Alam</h2>
        </div>
        <h2 className="text-xl">{HomeData.position}</h2>
        <h2 className="text-gray-400 text-[15px] text-justify">
          {HomeData.About}
        </h2>

        {/* Resume & Contact buttons */}
        <div className="flex flex-row gap-3 my-10">
          <Link
            href={HomeData.resume}
            target="_blank"
            className="border px-5 py-3 rounded-lg bg-[#303079] text-white hover:bg-transparent text-[15px] md:text-xl capitalize font-semibold duration-500 hover:shadow-2xl"
          >
            Resume
          </Link>
          <Link
            href="#Contact"
            className="border px-6 py-3 rounded-lg bg-[#303079] text-[15px] md:text-xl capitalize font-semibold duration-500 hover:text-white hover:shadow-2xl hover:bg-transparent"
          >
            Contact us
          </Link>
        </div>

        {/* Social links */}
        <div className="flex flex-row gap-5 mb-10">
          <Link
            href={HomeData.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-blue-500 p-2 rounded-full text-white hover:text-blue-500 hover:bg-white duration-300"
          >
            <FaLinkedinIn className="text-3xl" />
          </Link>
          <Link
            href={HomeData.github}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-slate-500 p-2 rounded-full text-black hover:text-white hover:bg-gray-700 duration-300"
          >
            <FaGithub className="text-3xl" />
          </Link>
          <Link
            href={`mailto:${HomeData.email}`}
            target="_blank"
            rel="noopener noreferrer"
            className="bg-red-200 p-2 rounded-full text-blue-950 hover:text-black hover:bg-white duration-300"
          >
            <CiMail className="text-3xl" />
          </Link>
        </div>
      </div>

      {/* Right section with clouds and image */}
      <div className="md:w-[48%] relative flex items-center justify-center">
        <div className="absolute top-0 left-0 cloud1-div">
          <CiCloudDrizzle className="cloud1 text-gray-400" />
        </div>

        <Image
          src="/first1.png"
          height={400}
          width={400}
          alt="Profile Image"
          className="object-contain"
        />

        <div className="absolute bottom-0 right-0 cloud2-div">
          <CiCloudDrizzle className="cloud2 text-gray-400" />
        </div>
      </div>
    </div>
  );
};

export default Home;
