"use client";
import React from "react";
import { Skills } from "../Component/Data";
import Image from "next/image";
import { motion } from "framer-motion";
import Link from "next/link";

const Page = () => {
  // Categorization could be manual or automated if we had categories in Data.jsx.
  // For now, I'll just make the grid much more premium.

  return (
    <div className="pt-32 pb-24 min-h-screen bg-slate-900/60 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-[50%] h-[50%] bg-primary/10 blur-[150px] -z-10 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-[40%] h-[40%] bg-purple-500/10 blur-[120px] -z-10"></div>

      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-24"
        >
          <div className="inline-block px-4 py-1.5 rounded-full glass border-primary/20 mb-6 font-black text-[10px] uppercase tracking-[0.3em] text-primary">
            Stack Architecture
          </div>
          <h2 className="text-6xl md:text-7xl font-black text-white mb-6 tracking-tight">
            Technical <span className="text-primary italic">Toolkit</span>
          </h2>
          <p className="text-light/60 max-w-2xl mx-auto text-lg font-medium">
            A comprehensive overview of the technologies and tools I leverage to
            build state-of-the-art mobile and web applications.
          </p>
          <div className="h-1.5 w-24 bg-gradient-to-r from-primary to-purple-500 mx-auto mt-10 rounded-full"></div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
        >
          {Skills.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9, y: 20 }}
              whileInView={{ opacity: 1, scale: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass p-8 rounded-[2rem] flex flex-col items-center gap-6 group hover:border-primary/40 transition-all duration-500 border-white/5 shadow-xl relative overflow-hidden"
            >
              {/* Card background effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>

              <div className="relative z-10">
                <div className="absolute inset-0 bg-primary/20 blur-2xl rounded-full scale-0 group-hover:scale-150 transition-transform duration-700"></div>
                <div className="w-24 h-24 glass rounded-3xl flex items-center justify-center border-white/10 group-hover:border-primary/30 transition-all duration-500 transform group-hover:rotate-6 shadow-2xl">
                  <Image
                    src={item.image}
                    width={100}
                    height={100}
                    alt={item.Skills}
                    className="w-14 h-14 object-contain"
                  />
                </div>
              </div>

              <div className="text-center relative z-10">
                <h2 className="text-2xl font-black text-white group-hover:text-primary transition-colors mb-2">
                  {item.Skills}
                </h2>
                <div className="h-1 w-8 bg-primary/30 group-hover:w-full transition-all duration-500 rounded-full mx-auto mb-4"></div>
                <p className="text-light/50 text-xs font-bold leading-relaxed opacity-0 group-hover:opacity-100 transition-opacity duration-500 uppercase tracking-widest">
                  {item.About || "Advanced Proficiency"}
                </p>
              </div>

              {/* Progress indicator (decorative) */}
              <div className="absolute bottom-0 left-0 h-1 bg-gradient-to-r from-primary via-blue-400 to-purple-500 w-0 group-hover:w-full transition-all duration-1000"></div>
            </motion.div>
          ))}
        </motion.div>

        {/* Footer CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-32 text-center glass p-12 rounded-[3rem] border-white/5 max-w-4xl mx-auto"
        >
          <h3 className="text-3xl font-black text-white mb-6">
            Always Learning, Always Evolving.
          </h3>
          <p className="text-light/60 text-lg mb-10 max-w-xl mx-auto font-medium">
            Currently deep-diving into{" "}
            <span className="text-primary">System Design</span> and{" "}
            <span className="text-white">Cloud Architecture</span> to broaden my
            engineering horizons.
          </p>
          <Link
            href="/#Contact"
            className="px-12 py-5 rounded-full bg-primary text-black font-black hover:bg-white transition-all shadow-2xl shadow-primary/20 transform hover:-translate-y-1"
          >
            Discuss a Project
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
