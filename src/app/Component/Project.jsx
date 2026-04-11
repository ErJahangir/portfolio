"use client";
import React from "react";
import { ProjectData } from "./Data";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";

const Project = () => {
  return (
    <section
      id="Project"
      className="py-24 relative overflow-hidden bg-slate-900/40"
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
            Innovation Hub
          </h4>
          <h2 className="text-4xl md:text-5xl font-black text-white">
            Featured <span className="text-primary italic">Projects</span>
          </h2>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-6 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {ProjectData.slice(0, 3).map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group relative flex flex-col glass rounded-[2.5rem] overflow-hidden border-white/5 hover:border-primary/30 transition-all duration-500 hover:-translate-y-2 h-full shadow-2xl"
            >
              {/* Project Image Container */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-primary/20 blur-[60px] opacity-0 group-hover:opacity-100 transition-opacity"></div>
                {project.img ? (
                  <Image
                    src={project.img}
                    alt={project.Name}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                ) : (
                  <div className="w-full h-full bg-slate-800 flex items-center justify-center">
                    <span className="text-light/20 font-black text-4xl uppercase tracking-tighter">
                      {project.Name}
                    </span>
                  </div>
                )}

                {/* Overlay Links */}
                <div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm flex items-center justify-center gap-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-full group-hover:translate-y-0">
                  {project.button && (
                    <Link
                      href={project.button}
                      target="_blank"
                      className="w-14 h-14 rounded-full bg-white text-black flex items-center justify-center text-xl hover:scale-110 transition-transform shadow-xl"
                    >
                      <FaGithub />
                    </Link>
                  )}
                  {project.live && (
                    <Link
                      href={project.live}
                      target="_blank"
                      className="w-14 h-14 rounded-full bg-primary text-black flex items-center justify-center text-xl hover:scale-110 transition-transform shadow-xl"
                    >
                      <FaExternalLinkAlt />
                    </Link>
                  )}
                </div>
              </div>

              {/* Project Info */}
              <div className="p-8 flex flex-col flex-1">
                <div className="mb-4">
                  <h3 className="text-2xl font-black text-white group-hover:text-primary transition-colors mb-2">
                    {project.Name}
                  </h3>
                  <div className="h-1 w-12 bg-primary group-hover:w-20 transition-all duration-500 rounded-full"></div>
                </div>

                <p className="text-light/70 text-sm leading-relaxed mb-8 flex-1 font-medium line-clamp-4 group-hover:line-clamp-none transition-all duration-500">
                  {project.description}
                </p>

                {/* Tech Stack Tags */}
                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.skills?.map((skill, i) => (
                    <span
                      key={i}
                      className="text-[10px] font-black uppercase tracking-widest px-3 py-1.5 rounded-lg glass border-white/5 text-primary bg-primary/5"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="text-center mt-20"
        >
          <Link
            href="/projectdetails"
            className="group relative inline-flex items-center justify-center px-12 py-5 font-bold text-primary transition-all duration-300 border border-primary/20 rounded-full hover:bg-primary hover:text-black hover:scale-105 active:scale-95 shadow-xl shadow-primary/5"
          >
            <span className="relative z-10">Explore All Creations</span>
            <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-10 transition-opacity rounded-full"></div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default Project;
