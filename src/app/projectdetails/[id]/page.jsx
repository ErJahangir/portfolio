"use client";
import { ProjectData } from "@/app/Component/Data";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const page = (props) => {
  // console.log(props);
  const [data, setData] = useState("");
  const [Images, setImage] = useState([]);
  // console.log("=====>", Images);
  useEffect(() => {
    const project = ProjectData.find(
      (item) => item.id === parseInt(props.params.id)
    );
    setData(project);
    setImage(project.skills);
  }, [props.params.id]);
  return (
    <div className="pt-16">
      <Image
        src="/Project/image.png"
        height={2000}
        width={2000}
        alt="Top image"
      />
      <div className="w-[90%] mx-auto my-4 items-center flex flex-col justify-center gap-4">
        <h2 className="text-4xl font-bold font-serif underline">{data.Name}</h2>
        <p>{data.description}</p>
        <h2 className="text-3xl font-bold font-serif underline">
          The Skills which i used
        </h2>
        <div className="flex flex-wrap gap-4">
          {Images.map((item) => (
            <div className="bg-blue-600 p-1 rounded-lg">{item}</div>
          ))}
        </div>
        <div className="flex flex-row gap-3">
          {data.button && (
            <button className="bg-gradient-to-b from-[#2371c5] to-green-600 px-2 py-1 rounded-md">
              GitHub
            </button>
          )}
          {data.live && (
            <button className="bg-gradient-to-b from-[#1d6c9a] to-green-600 px-2 py-1 rounded-md">
              Go Live
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default page;
