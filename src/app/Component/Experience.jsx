"use client";
import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { ExperienceData, homeSkills } from "./Data";
import Link from "next/link";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section
      id="Experience"
      className="py-24 relative overflow-hidden bg-slate-900/50"
    >
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <h4 className="text-primary tracking-[0.4em] uppercase mb-4 text-sm font-bold">
            Expertise & Career
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Experience & <span className="text-primary italic">Skills</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          {/* Skills Section - 4 cols */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 flex flex-col gap-8"
          >
            <div className="glass p-10 rounded-[2.5rem] border-white/5 relative group">
              {/* <div className="absolute top-0 right-0 p-8 text-primary/10 text-6xl font-black">
                SKILLS
              </div> */}
              <h3 className="text-3xl font-black mb-10 text-white flex items-center gap-4">
                Core Toolkit & Skills
              </h3>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 relative z-10">
                {homeSkills.map((skill, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, x: 5 }}
                    className="flex items-center gap-4 group/item"
                  >
                    <div className="w-[20px] h-[20px] rounded-full glass flex items-center justify-center border-primary/20 group-hover/item:border-primary transition-colors">
                      <BsFillPatchCheckFill className="text-primary text-xl" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white group-hover/item:text-primary transition-colors">
                        {skill}
                      </h4>
                      <div className="h-1 w-0 bg-primary group-hover/item:w-full transition-all duration-300 rounded-full mt-1"></div>
                    </div>
                  </motion.div>
                ))}
              </div>

              <div className="mt-12 pt-8 border-t border-white/5">
                <Link
                  href="/skills"
                  className="group flex items-center gap-3 text-primary font-bold hover:text-white transition-all underline decoration-primary/30 underline-offset-8"
                >
                  Explore All Technologies
                  <span className="group-hover:translate-x-2 transition-transform">
                    →
                  </span>
                </Link>
              </div>
            </div>
          </motion.div>

          {/* Timeline Section - 7 cols */}
          <div className="lg:col-span-7">
            <div className="relative pl-8 md:pl-12">
              {/* Timeline line */}
              <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary via-purple-500 to-transparent rounded-full md:left-2"></div>

              <div className="flex flex-col gap-8">
                {ExperienceData.slice(0, 2).map(
                  ({ position, company, about, duration }, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, x: 20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      className="relative group"
                    >
                      <div className="glass p-6 rounded-2xl border-white/5 hover:border-primary/20 transition-all group-hover:bg-primary/5">
                        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-4">
                          <div>
                            <h4 className="text-2xl font-black text-white group-hover:text-primary transition-colors">
                              {position}
                            </h4>
                            <p className="text-primary font-bold">{company}</p>
                          </div>
                          <span className="inline-block px-4 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs font-black uppercase tracking-widest whitespace-nowrap">
                            {duration}
                          </span>
                        </div>
                        <div className="space-y-2">
                          {about?.slice(0, 3).map((point, i) => (
                            <div
                              key={i}
                              className="group/item flex items-start gap-4 transition-all duration-300"
                            >
                              <div className="relative mt-1">
                                <div className="absolute inset-0 bg-primary blur-sm opacity-20 group-hover/item:opacity-40 transition-opacity"></div>
                                <div className="relative w-5 h-5 rounded-md bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shrink-0 shadow-md shadow-primary/10">
                                  <svg
                                    className="w-3 h-3 text-slate-900 font-bold"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                    strokeWidth="4"
                                  >
                                    <path
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      d="M5 13l4 4L19 7"
                                    />
                                  </svg>
                                </div>
                              </div>
                              <p className="text-light group-hover/item:text-white transition-colors text-base font-medium leading-relaxed">
                                {point}
                              </p>
                            </div>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  ),
                )}
              </div>

              <div className="mt-16 text-center md:text-left">
                <Link
                  href="/experience"
                  className="inline-flex items-center gap-4 px-8 py-4 rounded-2xl glass border-primary/20 text-white font-black hover:bg-primary hover:text-black hover:border-primary transition-all duration-300"
                >
                  Full Career Roadmap
                  <BsFillPatchCheckFill className="text-lg" />
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
