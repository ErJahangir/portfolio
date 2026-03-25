"use client";
import React, { useEffect, useState } from "react";
import { ProjectData } from "@/app/Component/Data";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaChevronLeft, FaTools, FaCalendarAlt } from "react-icons/fa";

const ProjectDetail = ({ params }) => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const project = ProjectData.find((item) => item.id === parseInt(params.id));
    if (project) {
      setData(project);
    }
  }, [params.id]);

  if (!data) return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin"></div>
    </div>
  );

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="blob top-0 right-0 bg-blue-500/10 scale-150" />
      <div className="blob bottom-0 left-0 bg-purple-500/10 scale-150" />

      <div className="container mx-auto max-w-5xl">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-12"
        >
          <Link 
            href="/projectdetails" 
            className="inline-flex items-center gap-2 text-light hover:text-primary transition-colors font-bold group"
          >
            <FaChevronLeft className="group-hover:-translate-x-1 transition-transform" /> Back to projects
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Header & Description Section */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-12"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-8 leading-tight">
              {data.Name}
            </h1>
            
            <div className="flex flex-wrap gap-8 py-8 border-y border-white/5 mb-12">
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.2em] text-light/40 font-bold">Category</span>
                <span className="text-white font-medium">Software Development</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.2em] text-light/40 font-bold">Role</span>
                <span className="text-white font-medium">Lead Developer</span>
              </div>
              <div className="flex flex-col gap-1">
                <span className="text-xs uppercase tracking-[0.2em] text-light/40 font-bold">Year</span>
                <span className="text-white font-medium">2024</span>
              </div>
            </div>
          </motion.div>

          {/* Image & Description Grid */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-7"
          >
            <div className="glass rounded-3xl overflow-hidden border-white/5 shadow-2xl mb-10 group">
              {data.img ? (
                <Image
                  src={data.img}
                  width={1200}
                  height={800}
                  alt={data.Name}
                  className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-1000"
                />
              ) : (
                <div className="aspect-video flex items-center justify-center bg-white/5 text-light/10 text-9xl font-bold italic">
                  IMAGE
                </div>
              )}
            </div>
            
            <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
              <span className="w-8 h-1 bg-primary rounded-full"></span> Overview
            </h3>
            <p className="text-light text-xl leading-relaxed text-justify mb-10 opacity-80">
              {data.description}
            </p>
          </motion.div>

          {/* Sidebar Section */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-5"
          >
            <div className="glass p-8 rounded-3xl border-white/5 sticky top-32">
              <h3 className="text-xl font-bold mb-8 text-white flex items-center gap-3">
                <FaTools className="text-primary" /> Tech Stack
              </h3>
              
              <div className="flex flex-wrap gap-3 mb-10">
                {data.skills?.map((skill, index) => (
                  <span 
                    key={index} 
                    className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-light font-medium hover:border-primary/50 transition-colors"
                  >
                    {skill}
                  </span>
                ))}
              </div>

              <div className="flex flex-col gap-4">
                {data.live && (
                  <Link 
                    href={data.live}
                    target="_blank"
                    className="w-full py-4 bg-primary text-slate-900 font-bold rounded-2xl flex items-center justify-center gap-3 hover:scale-[1.02] transition-transform shadow-lg shadow-primary/20"
                  >
                    <FaExternalLinkAlt /> View Live Demo
                  </Link>
                )}
                {data.button && (
                  <Link 
                    href={data.button}
                    target="_blank"
                    className="w-full py-4 glass text-white font-bold rounded-2xl flex items-center justify-center gap-3 hover:bg-white/10 transition-colors"
                  >
                    <FaGithub className="text-xl" /> Browse Source Code
                  </Link>
                )}
              </div>

              <p className="mt-8 text-xs text-light/30 italic text-center">
                Interested in learning more about this project? feel free to contact me.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;
