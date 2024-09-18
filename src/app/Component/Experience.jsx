import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { ExperienceData, homeSkills, Skills } from "./Data";
import Link from "next/link";

const Experience = () => {
  return (
    <section
      id="Experience"
      className="flex flex-col items-center my-9 gap-6 w-[95%] mx-auto"
    >
      <h2 className="text-3xl uppercase border-b-2 text-center ">
        My Skills & My Experience
      </h2>

      <div className="experience__container">
        <div className="experience__frontend">
          <h3>TECHNICAL SKILLS</h3>

          <div className="experience__content">
            {homeSkills.slice(0, 5).map((skill, index) => (
              <div key={index}>
                <article className="experience__details">
                  <BsFillPatchCheckFill className="experience__details-icon" />
                  <h4 className="font-sans">{skill}</h4>
                </article>
              </div>
            ))}
          </div>
          <Link href="/skills" className="text-green-500 text-xl underline">
            see all...
          </Link>
        </div>
        {/* End of frontend part */}

        <div className="experience__backend">
          <h3> Experience</h3>
          <div className="flex flex-col gap-6">
            {ExperienceData.map(({ position, company, about }, index) => (
              <article className="experience__details" key={index}>
                <BsFillPatchCheckFill className="text-6xl -mt-4 text-[#60cedf]" />
                <div>
                  <h4>{position}</h4>
                  <small className="text-slate-300">{company}</small>
                  <p className="text-justify text-sm text-slate-300">
                    {about.slice(0, 120)}...
                  </p>
                </div>
              </article>
            ))}
          </div>
          <Link href="/experience" className="text-green-500 text-xl underline">
            see more...
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Experience;
