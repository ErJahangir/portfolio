"use client";
import React from "react";
import { BsFillPatchCheckFill } from "react-icons/bs";
import { ExperienceData, homeSkills } from "./Data";
import Link from "next/link";
import { motion } from "framer-motion";

const Experience = () => {
  return (
    <section id="Experience" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="text-primary tracking-[0.3em] uppercase mb-2">
            My Journey
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold text-center">
            Skills & Experience
          </h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Skills Section */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="experience__card glass"
          >
            <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-wider border-b border-primary/20 pb-4">
              Technical Skills
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4 mb-8">
              {homeSkills.map((skill, index) => (
                <motion.div
                  key={index}
                  whileHover={{ x: 5 }}
                  className="flex items-start gap-4"
                >
                  <BsFillPatchCheckFill className="text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-white">{skill}</h4>
                    <small className="text-light text-xs">Experienced</small>
                  </div>
                </motion.div>
              ))}
            </div>
            <Link
              href="/skills"
              className="inline-block text-primary hover:text-white transition-colors underline underline-offset-4"
            >
              See all technical skills
            </Link>
          </motion.div>

          {/* Experience Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="experience__card glass"
          >
            <h3 className="text-2xl font-bold mb-8 text-white uppercase tracking-wider border-b border-primary/20 pb-4">
              Work Experience
            </h3>
            <div className="flex flex-col gap-10 mb-8">
              {ExperienceData.slice(0, 2).map(
                ({ position, company, about, duration }, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.2 }}
                    className="flex gap-4"
                  >
                    <BsFillPatchCheckFill className="text-2xl text-primary mt-1 flex-shrink-0" />
                    <div>
                      <h4 className="text-xl font-bold text-white">
                        {position}
                      </h4>
                      <div className="flex flex-col mb-2">
                        <small className="text-primary font-medium">
                          {company}
                        </small>
                        <small className="text-light/50 text-xs italic">
                          {duration}
                        </small>
                      </div>
                      <p className="text-light text-sm text-justify leading-relaxed">
                        {about.slice(0, 150)}...
                      </p>
                    </div>
                  </motion.div>
                ),
              )}
            </div>
            <Link
              href="/experience"
              className="inline-block text-primary hover:text-white transition-colors underline underline-offset-4"
            >
              View full career history
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
