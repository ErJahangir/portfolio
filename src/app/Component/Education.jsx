import React from "react";
import { EducationData } from "./Data";
import Image from "next/image";

const Education = () => {
  return (
    <div id="Education" className="w-[95%] mx-auto flex flex-col items-center">
      <h2 className="text-2xl uppercase font-serif font-bold my-8 border-b-2">
        Education
      </h2>
      <div className="flex flex-wrap gap-2 mx-auto w-full">
        {EducationData.map((item) => (
          <div
            key={item.id}
            className=" w-[95%] md:w-[400px] flex flex-col items-center gap-3 mx-auto hover:shadow-lg rounded-3xl p-5 bg-[#44447c] border-0 duration-1000  hover:bg-transparent hover:border-[1px]"
          >
            <div>
              <Image
                alt={item.college}
                src={item.logo}
                width={100}
                height={100}
                className="w-[200px] rounded-full h-[200px] md:w-[150px] md:h-[150px] object-cover md:rounded-2xl"
              />
            </div>
            <div>
              <h2 className="font-sans text-xl font-semibold">
                {item.name} - {item.course}
              </h2>
              <h2>{item.college}</h2>
              <h2 className="flex flex-row  gap-8 w-full font-sans pr-8">
                <strong> {item.duration}</strong>
                <strong> {item.marks}</strong>
              </h2>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
