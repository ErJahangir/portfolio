"use client";
import React from "react";
import { EducationData } from "./Data";
import Image from "next/image";
import { motion } from "framer-motion";

const Education = () => {
  return (
    <section id="Education" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          <h4 className="text-primary tracking-[0.3em] uppercase mb-2">Qualifications</h4>
          <h2 className="text-4xl md:text-5xl font-bold">My Education</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {EducationData.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="glass p-8 rounded-3xl flex flex-col items-center gap-6 group hover:bg-primary/5 transition-all text-center"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-110 transition-transform"></div>
                <Image
                  alt={item.college}
                  src={item.logo}
                  width={120}
                  height={120}
                  className="relative z-10 w-24 h-24 md:w-28 md:h-28 object-contain rounded-2xl bg-white/10 p-2"
                />
              </div>

              <div>
                <h3 className="text-xl font-bold text-white mb-1">
                  {item.name} in {item.course}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">{item.college}</p>
                
                <div className="flex flex-col gap-2 items-center">
                  <span className="px-4 py-1 rounded-full bg-white/5 text-light text-xs font-bold border border-white/10">
                    {item.duration}
                  </span>
                  <span className="text-primary font-bold text-lg">
                    {item.marks}
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
