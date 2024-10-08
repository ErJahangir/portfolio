"use client";
import React, { useEffect, useState } from "react";
import { ProjectData } from "@/app/Component/Data";
import Image from "next/image";

const Page = ({ params }) => {
  const [data, setData] = useState(null); // Initialized as null for better checks
  const [images, setImages] = useState([]);

  useEffect(() => {
    const project = ProjectData.find((item) => item.id === parseInt(params.id));
    if (project) {
      setData(project);
      setImages(project.skills);
    }
  }, [params.id]);

  if (!data) return <div>Loading...</div>; // Loading state for better UX

  return (
    <div className="pt-16">
      <Image
        src="/Project/top.png"
        height={2000}
        width={2000}
        alt="Top image"
      />
      <div className="w-[90%] mx-auto my-4 items-center flex flex-col justify-center gap-4">
        <h2 className="text-2xl md:text-4xl font-bold font-serif underline">
          {data?.Name}
        </h2>
        <div className="flex flex-col md:flex-row gap-4 items-center">
          {data.img && (
            <Image
              src={data.img}
              width={1000}
              height={1000}
              quality={100}
              alt="image"
              className="rounded-lg w-[98%] h-[400px] md:w-[48%]"
            />
          )}
          <div className="flex flex-col gap-3 items-center">
            <p className="text-justify">{data?.description}</p>

            <h2 className="text-3xl font-bold font-serif underline">
              The Skills I Used
            </h2>
            <div className="flex flex-wrap gap-4">
              {images.map((skill, index) => (
                <div key={index} className="bg-blue-600 p-1 rounded-lg">
                  {skill}
                </div>
              ))}
            </div>

            <div className="flex flex-row gap-3">
              {data.button && (
                <a
                  href={data.button}
                  target="_blank"
                  className="bg-gradient-to-b from-[#2371c5] to-green-600 px-2 py-1 rounded-md"
                >
                  GitHub
                </a>
              )}
              {data.live && (
                <a
                  href={data.live}
                  target="_blank"
                  className="bg-gradient-to-b from-[#1d6c9a] to-green-600 px-2 py-1 rounded-md"
                >
                  Go Live
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
