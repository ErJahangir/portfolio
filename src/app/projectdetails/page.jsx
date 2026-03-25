"use client";
import React, { useState } from "react";
import Link from "next/link";
import { ProjectData } from "../Component/Data";
import { motion, AnimatePresence } from "framer-motion";
import { FaGithub, FaExternalLinkAlt, FaArrowRight } from "react-icons/fa";

const ProjectsArchive = () => {
  const [filter, setFilter] = useState("All");
  
  // Extract unique skills/categories for filtering
  const categories = ["All", "Web", "Mobile", "API", "UI/UX"];

  const filteredProjects = filter === "All" 
    ? ProjectData 
    : ProjectData.filter(proj => 
        proj.skills?.some(s => s.toLowerCase().includes(filter.toLowerCase())) ||
        proj.description?.toLowerCase().includes(filter.toLowerCase())
      );

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="blob top-[-10%] left-[-10%] bg-blue-500/20" />
      <div className="blob bottom-[-10%] right-[-10%] bg-purple-500/20" />

      <div className="container mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="text-primary tracking-[0.3em] uppercase mb-2 text-sm font-bold">Portfolio</h4>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Selected <span className="text-primary italic">Works.</span></h1>
          <p className="text-light max-w-2xl mx-auto text-lg mb-12">
            A comprehensive list of my professional projects, experiments, and open-source contributions.
          </p>

          {/* Filter Bar */}
          <div className="flex flex-wrap justify-center gap-3 mb-16">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setFilter(cat)}
                className={`px-8 py-2 rounded-full border transition-all font-bold ${
                  filter === cat 
                  ? "bg-primary border-primary text-slate-950 shadow-lg shadow-primary/20" 
                  : "border-white/10 text-light hover:border-primary/50"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </motion.div>

        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((item, index) => (
              <motion.div
                layout
                key={item.id}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="glass rounded-3xl overflow-hidden group hover:border-primary/50 transition-all flex flex-col"
              >
                {/* Project Image Placeholder/Overlay */}
                <div className="h-48 bg-white/5 relative flex items-center justify-center overflow-hidden">
                  <div className="absolute inset-0 bg-primary/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <span className="text-6xl text-white/5 font-bold group-hover:scale-110 transition-transform duration-700">
                    {item.Name.split(' ')[0]}
                  </span>
                  <Link 
                    href={`/projectdetails/${item.id}`}
                    className="absolute inset-0 z-10"
                  />
                </div>

                <div className="p-8 flex flex-col flex-1">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-2xl font-bold text-white group-hover:text-primary transition-colors leading-tight">
                      {item.Name}
                    </h3>
                    <Link href={`/projectdetails/${item.id}`}>
                      <FaArrowRight className="text-primary -rotate-45 group-hover:rotate-0 transition-transform mt-1" />
                    </Link>
                  </div>
                  
                  <p className="text-light text-sm text-justify mb-6 line-clamp-3 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Skills/Tags */}
                  <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                    {item.skills?.slice(0, 4).map((skill, i) => (
                      <span 
                        key={i} 
                        className="text-[10px] uppercase tracking-wider bg-white/5 border border-white/10 px-2 py-1 rounded text-light"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  <div className="flex gap-6 items-center border-t border-white/5 pt-6">
                    {item.button && (
                      <Link
                        href={item.button}
                        target="_blank"
                        className="flex items-center gap-2 text-xs font-bold text-light hover:text-white transition-colors"
                      >
                        <FaGithub className="text-lg" /> CODE
                      </Link>
                    )}
                    {item.live && (
                      <Link
                        href={item.live}
                        target="_blank"
                        className="flex items-center gap-2 text-xs font-bold text-primary group-hover:text-white transition-colors ml-auto"
                      >
                        <FaExternalLinkAlt /> LIVE DEMO
                      </Link>
                    )}
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filteredProjects.length === 0 && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20"
          >
            <p className="text-light/50 text-xl font-bold italic">No projects found matching this category.</p>
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsArchive;
