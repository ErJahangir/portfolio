"use client";
import Link from "next/link";
import React from "react";
import { ProjectData } from "./Data";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <section id="Project" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="text-primary tracking-[0.3em] uppercase mb-2">
            My Works
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">Featured Projects</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {ProjectData.slice(0, 3).map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass rounded-3xl overflow-hidden group hover:border-primary/50 transition-all flex flex-col"
            >
              <div className="p-8 flex flex-col h-full">
                <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-primary transition-colors">
                  {item.Name}
                </h3>

                <p className="text-light text-sm text-justify mb-6 line-clamp-4">
                  {item.description}
                </p>

                {/* Skills/Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {item.skills?.slice(0, 3).map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded text-light"
                    >
                      {skill}
                    </span>
                  ))}
                  {item.skills?.length > 3 && (
                    <span className="text-[10px] text-primary">
                      +{item.skills.length - 3} more
                    </span>
                  )}
                </div>

                <div className="flex gap-4">
                  {item.button && (
                    <Link
                      href={item.button}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-bold text-white/50 hover:text-white transition-colors"
                    >
                      <FaGithub /> GitHub
                    </Link>
                  )}
                  {item.live && (
                    <Link
                      href={item.live}
                      target="_blank"
                      className="flex items-center gap-2 text-sm font-bold text-primary hover:text-white transition-colors ml-auto"
                    >
                      <FaExternalLinkAlt className="text-xs" /> Live Demo
                    </Link>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-16"
        >
          <Link
            href="/projectdetails"
            className="group relative inline-flex items-center justify-center px-12 py-4 font-bold text-primary transition-all duration-300 border border-primary/50 rounded-full hover:bg-primary/10 hover:border-primary hover:scale-105 active:scale-95 shadow-lg shadow-primary/5"
          >
            <span className="relative z-10">View All Projects</span>
            <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden pointer-events-none">
              <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-primary/20 skew-x-[-25deg] group-hover:left-[150%] transition-all duration-700 ease-in-out"></div>
            </div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
