import Image from "next/image";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
const About = () => {
  return (
    <div id="About" className="flex flex-col items-center  ">
      <h2 className="capitalize ">Get to know</h2>
      <h2>About me</h2>
      <div className="flex flex-wrap  mx-auto items-center justify-between">
        <div className="bg-white rounded-2xl my-10 mx-auto">
          <Image
            height={50}
            width={300}
            src="/topimage.png"
            className=" w-[300px] h-[350px] -rotate-12 bg-slate-500 hover:rotate-0 duration-500 rounded-2xl"
          />
        </div>
        <div className="flex flex-col mx-auto w-[95%] lg:w-[49%] gap-5 ">
          <div className="flex flex-wrap gap-3 mx-auto">
            <div className="w-[250px] md:w-[200px] flex flex-col mx-auto relative items-center rounded-xl duration-1000 h-[250px] md:h-[200px] border bg-green-500  group">
              <h2 className="text-3xl font-bold font-serif ml-10 group-hover:hidden duration-1000 my-auto ">
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
              <h2 className="text-3xl font-bold font-serif ml-10 group-hover:hidden duration-1000 my-auto ">
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
            <div className="w-[250px] md:w-[200px] flex flex-col mx-auto relative items-center rounded-xl duration-1000 h-[250px] md:h-[200px] border bg-green-500  group">
              <h2 className="text-3xl font-bold font-serif ml-10 group-hover:hidden duration-1000 my-auto ">
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
          <h2 className="w-[95%] mx-auto text-justify">
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
