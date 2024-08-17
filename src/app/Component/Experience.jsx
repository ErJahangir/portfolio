import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";

const Experience = () => {
  return (
    <section id="Experience" className="flex flex-col items-center my-9 gap-6">
      <h5>The skills I have</h5>
      <h2>My Experience</h2>

      <div className="container experience__container">
        <div className="experience__frontend">
          <h3>Frontend Development</h3>

          <div className="experience__content">
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Experienced</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>Bootstrap</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="experience__details-icon" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Beginner</small>
              </div>
            </article>
          </div>
        </div>
        {/* End of frontend part */}

        <div className="experience__backend">
          <h3> Experience</h3>
          <div className="flex flex-col gap-6">
            <article className="experience__details">
              <BsFillPatchCheckFill className="text-6xl -mt-4 text-[#60cedf]" />
              <div>
                <h4>React Native</h4>
                <small className="text-slate-300">
                  Abstinent Research & Technology
                </small>
                <p className="text-justify text-sm text-slate-300">
                  I worked as a React native Developer at Abstinent Research &
                  Technology, Bhopal. I worked on two project 1. EMRS and 2.
                  Grocery application both were based on React native, my role
                  was to responsive UI and API integration.I learn many things
                  but main skills are make responsive UI, integrate API, API
                  Testing, Navigation, Vector icon, async storage etc.
                </p>
              </div>
            </article>
            <article className="experience__details">
              <BsFillPatchCheckFill className="text-4xl -mt-1 text-[#60cedf]" />
              <div>
                <h4>React js</h4>
                <small className="text-slate-300">Maitretech Solution</small>
                <p className="text-justify text-sm text-slate-300">
                  I worked on many projects like bhopal acedmy site, shrina
                  niketan hr sec school site, and more. My role was frontend
                  development. I worked on react js and next js as well for
                  developing web pages.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
