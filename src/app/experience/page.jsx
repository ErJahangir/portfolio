import React from "react";
import { ExperienceData } from "../Component/Data";
import Image from "next/image";

const page = () => {
  return (
    <div className="pt-16">
      <Image src="/experience.png" width={2000} height={200} alt="topImage" />
      <div className=" flex flex-col items-center font-serif">
        <h2 className="text-3xl uppercase underline my-5">Experince</h2>
        <Image src="/first.gif" width={500} height={200} alt="topImage" />

        <div className="flex mb-6 flex-col md:flex-row gap-4 w-[90%] mx-auto">
          {ExperienceData.map((item, index) => (
            <div
              key={index}
              className="mx-auto flex flex-col p-8 rounded-lg border-2 border-white hover:shadow-2xl transition-all duration-1000 bg-[#2b636a] hover:bg-transparent w-full md:w-[50%] items-center"
            >
              <h2 className="text-3xl underline font-bold">{item.position}</h2>
              <p className="text-2xl">{item.company}</p>
              <p className="text-sm text-justify my-3">{item.about}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
