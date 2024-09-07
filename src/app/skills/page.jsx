import React from "react";
import { Skills } from "../Component/Data";
import Image from "next/image";

const page = () => {
  return (
    <div className="pt-16 ">
      <Image
        src="/skillsimg/Top.png"
        width={2500}
        height={1000}
        // className="w-full h-[375px] md:h-[780px] mb-4 object-cover"
      />
      <div className=" grid  grid-cols-1 md:grid-cols-2 py-5 w-[90%] mx-auto gap-4">
        {Skills.map((item) => (
          <div className="w-[95%] bg-gradient-to-t hover:bg-gradient-to-tr scale-100 duration-1000 hover:scale-110 from-[#3774d6] via-[#849253] to-[#33cb47] mx-auto p-2 flex flex-row items-center gap-5 rounded-xl">
            <Image
              src={item.image}
              width={100}
              height={100}
              alt={item.Skills}
              className="w-24 h-24 object-cover bg-white p-1 rounded-xl scale-100 hover:scale-105 duration-1000"
            />
            <h2 className="text-xl font-serif">{item.Skills}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default page;
