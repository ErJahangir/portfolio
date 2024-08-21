import Image from "next/image";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
const About = () => {
  return (
    <div id="About" className="flex flex-col items-center mx-auto w-[95%] ">
      <h2 className="capitalize text-3xl">Get to know</h2>
      <h2 className="text-4xl mb-6 uppercase font-bold">About me</h2>
      <div className="flex flex-col md:flex-row  mx-auto items-center gap-5 md:gap-8">
        {/* <div className="imagediv">
          <Image
            height={50}
            width={300}
            alt="Image"
            src="/topimage.png"
            className="image rounded-3xl"
          />
        </div> */}
        <div className="flex flex-col mx-auto w-[95%] lg:w-[49%] gap-5 ">
          <div className="flex flex-wrap gap-3 mx-auto">
            <div className="w-[250px] md:w-[200px] flex flex-col mx-auto relative items-center rounded-xl duration-1000 h-[250px] md:h-[200px] border bg-green-500  group">
              <h2 className="text-3xl font-bold font-serif group-hover:hidden duration-1000 my-auto md:ml-8 ">
                Go for Degree
              </h2>
              <div className="opacity-0 top-28  group-hover:top-3 absolute group-hover:opacity-100 duration-1000 flex flex-col items-center">
                <h1>
                  <FaGraduationCap className="text-6xl" />
                </h1>
                <h2 className="font-bold text-2xl ">Degree</h2>
                <h2 className="font-bold text-slate-200">B.Tech</h2>
                <h2 className="font-bold text-slate-200">
                  Software Engineering
                </h2>
                <h2 className="font-bold text-slate-200">RGPV</h2>
              </div>
            </div>
            <div className="w-[250px] md:w-[200px] flex flex-col relative items-center rounded-xl duration-1000 h-[250px] md:h-[200px] mx-auto border bg-green-500  group">
              <h2 className="text-3xl font-bold font-serif  group-hover:hidden duration-1000 my-auto md:ml-8">
                Go for Marks
              </h2>
              <div className="opacity-0 top-28 group-hover:top-7 absolute group-hover:opacity-100 duration-1000 flex flex-col items-center">
                <h1>
                  <GiAchievement className="text-6xl" />
                </h1>
                <h2 className="font-bold text-2xl ">CGPA</h2>
                <h2 className="font-bold text-slate-200">8.13</h2>
              </div>
            </div>
            <div className="w-[250px] md:w-[200px] flex flex-col mx-auto relative items-center rounded-xl duration-1000 h-[250px] justify-center md:h-[200px] border bg-green-500  group">
              <h2 className="text-3xl font-bold font-serif group-hover:hidden duration-1000 my-auto md:ml-8">
                Go for Domain
              </h2>
              <div className="opacity-0 top-28 group-hover:top-5 absolute group-hover:opacity-100 duration-1000 flex flex-col items-center">
                <h1>
                  <TbWorld className="text-6xl" />
                </h1>
                <h2 className="font-bold text-2xl ">Domains</h2>
                <h2 className="font-bold text-slate-200">React native</h2>
                <h2 className="font-bold text-slate-200">React js</h2>
              </div>
            </div>
          </div>
          <h2 className="w-[95%] border p-2 rounded-xl bg-[#4a4a90] hover:bg-transparent duration-1000 hover:shadow-3xl mx-auto text-justify">
            I'm a Software Engineering Undergradute at the University of
            Kelaniya. I'm an enthusiastic and driven Software Engineering
            student seeking a challenging internship opportunity to apply and
            expand my technical skills. With a strong academic foundation in
            software engineering and hands-on experience in various programming
            languages, I am eager to contribute to innovative projects and learn
            from experienced professionals in the industry. I am a quick learner
            who is always ready to face challenges.
          </h2>
        </div>
      </div>
    </div>
  );
};

export default About;
