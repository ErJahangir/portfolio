import React from "react";

const Education = () => {
  const data = [
    {
      id: 1,
      college: "Sagar Institute of Science Technology & Engineering",
      name: "B.Tech",
      course: "Computer Science and Engineering",
      marks: "8.13 CGPA",
      duration: "08/2020 - 06/2024",
    },
    {
      id: 2,
      college: "RLSY College Bettiah, Bihar",
      name: "12th ",
      course: "Science",
      marks: "74.4%",
      duration: "03/2019 - 04/2020",
    },
    {
      id: 3,
      college: "MJK College, Chamua, Bettiah, Bihar",
      name: "10th",
      course: "General",
      marks: "71.4%",
      duration: "03/2017 - 03/2018",
    },
  ];
  return (
    <div id="Education" className="w-[95%] mx-auto flex flex-col items-center">
      <h2 className="text-2xl uppercase font-serif font-bold my-8 border-b-2">
        Education
      </h2>
      <div className="flex flex-wrap gap-2 mx-auto w-full">
        {data.map((item) => (
          <div
            key={item.id}
            className="w-[400px] h-[200px] flex flex-col justify-center gap-3 mx-auto hover:shadow-lg rounded-3xl p-5 bg-[#44447c] border-0 duration-1000  hover:bg-transparent hover:border-[1px]"
          >
            <h2 className="font-sans text-xl font-semibold">
              {item.name} - {item.course}
            </h2>
            <h2>{item.college}</h2>
            <h2 className="flex flex-row justify-between w-full font-sans pr-8">
              <strong> {item.duration}</strong>
              <strong> {item.marks}</strong>
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Education;
