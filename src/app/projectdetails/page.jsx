import Link from "next/link";
import React from "react";
import { ProjectData } from "../Component/Data";
import Image from "next/image";

const page = () => {
  return (
    <div className="pt-16">
      <Image
        src="/Project/top.png"
        width={2000}
        height={700}
        alt="Project image"
      />
      <div className="w-[95%] mb-5  mx-auto flex flex-col items-center">
        <h4 className="text-3xl uppercase border-b-2 mb-6">Projects</h4>
        <div className="flex flex-wrap gap-2 mx-auto w-full">
          {ProjectData.map((item) => (
            <Link
              href={`/projectdetails/${item.id}`}
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
                    href={item.button}
                    className="border p-2 px-3 rounded-lg bg-[#172d33] font-serif hover:bg-transparent duration-1000  hover:shadow-md hover:border-green-800"
                  >
                    GitHub
                  </Link>
                ) : null}
                {item.live ? (
                  <Link
                    href={item.live}
                    className="border p-2 px-3 rounded-lg bg-[#172d33] font-serif hover:bg-transparent duration-1000  hover:shadow-md hover:border-green-800"
                  >
                    Go Live
                  </Link>
                ) : null}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default page;
