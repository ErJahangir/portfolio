import Link from "next/link";
import React from "react";
import { ProjectData } from "./Data";

const Project = () => {
  return (
    <div id="Project" className="w-[95%] mx-auto flex flex-col items-center">
      {/* <h2 className="text-3xl uppercase">My Recent Works</h2> */}
      <h4 className="text-3xl uppercase border-b-2 mb-6">Projects</h4>
      <div className="flex flex-wrap gap-2 mx-auto w-full">
        {ProjectData.slice(0, 3).map((item) => (
          <Link
            href="/"
            key={item.id}
            className="w-[95%] md:w-[400px] mx-auto flex flex-col items-center justify-center hover:shadow-lg rounded-3xl p-5 bg-[#44447c] duration-[1500ms] hover:border  hover:bg-transparent"
          >
            <h3 className=" text-xl md:text-2xl mb-5">{item.Name}</h3>
            <p className="text-[15px] text-justify mb-5">
              {item.description.slice(0, 120)}...
            </p>
            <div className="flex flex-row gap-2">
              {item.button ? (
                <Link
                  // target="_blank"
                  href={item.button}
                  className="border p-2 px-3 rounded-lg bg-[#172d33] font-serif hover:bg-transparent duration-1000  hover:shadow-md hover:border-green-800"
                >
                  GitHub
                </Link>
              ) : null}
              {item.live ? (
                <Link
                  href={item.live}
                  // target="_blank"
                  className="border p-2 px-3 rounded-lg bg-[#172d33] font-serif hover:bg-transparent duration-1000  hover:shadow-md hover:border-green-800"
                >
                  Go Live
                </Link>
              ) : null}
            </div>
          </Link>
        ))}
      </div>
      <Link
        href="/projectdetails"
        className="font-serif text-3xl border p-1 mt-10 text-green-400 underline rounded-md"
      >
        see all...
      </Link>
    </div>
  );
};

export default Project;
