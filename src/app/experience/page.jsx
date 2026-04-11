"use client";
import React from "react";
import { ExperienceData } from "../Component/Data";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h4 className="text-primary tracking-[0.3em] uppercase mb-2">
            My Journey
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">Work Experience</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto flex flex-col gap-8 pb-20">
          {ExperienceData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="glass p-8 rounded-2xl text-left relative group hover:border-primary/30 transition-all"
            >
              <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-6 gap-4">
                <div>
                  <h3 className="text-3xl font-bold text-white group-hover:text-primary transition-colors">
                    {item.position}
                  </h3>
                  <p className="text-xl text-primary font-medium">
                    {item.company}
                  </p>
                </div>
                <span className="px-4 py-1 rounded-full bg-white/5 text-light text-xs font-bold border border-white/10 uppercase tracking-widest">
                  Remote / On-site
                </span>
              </div>

              <div className="h-px w-full bg-white/5 mb-6 group-hover:bg-primary/20 transition-colors"></div>

              <div className="space-y-1">
                {item?.about?.map((point, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="group/item flex items-start gap-4 p-2 rounded-xl transition-all duration-300 hover:bg-white/5"
                  >
                    <div className="relative mt-1.5">
                      <div className="absolute inset-0 bg-primary blur-md opacity-20 group-hover/item:opacity-40 transition-opacity"></div>
                      <div className="relative w-5 h-5 rounded-md bg-gradient-to-br from-primary to-purple-500 flex items-center justify-center shrink-0 shadow-lg shadow-primary/20">
                        <svg
                          className="w-3 h-3 text-slate-900 font-bold"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth="3.5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                    </div>
                    <span className="text-light group-hover/item:text-white transition-colors text-[17px] leading-relaxed">
                      {point}
                    </span>
                  </motion.div>
                ))}
              </div>

              <div className="absolute -left-2 top-1/2 -translate-y-1/2 w-1 h-20 bg-primary rounded-full opacity-0 group-hover:opacity-100 transition-opacity"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Page;
