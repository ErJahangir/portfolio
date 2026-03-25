"use client";
import React from "react";
import { Skills } from "../Component/Data";
import Image from "next/image";
import { motion } from "framer-motion";

const Page = () => {
  return (
    <div className="pt-24 min-h-screen">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="text-primary tracking-[0.3em] uppercase mb-2">My Toolkit</h4>
          <h2 className="text-4xl md:text-5xl font-bold">Technical Skills</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 py-10"
        >
          {Skills.map((item, index) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="glass p-6 rounded-2xl flex flex-row items-center gap-6 group hover:border-primary/50 transition-all"
            >
              <div className="relative">
                <div className="absolute inset-0 bg-primary/20 blur-xl rounded-full scale-0 group-hover:scale-110 transition-transform"></div>
                <Image
                  src={item.image}
                  width={100}
                  height={100}
                  alt={item.Skills}
                  className="relative z-10 w-16 h-16 object-contain bg-white/10 p-2 rounded-xl"
                />
              </div>
              <h2 className="text-lg font-bold text-white group-hover:text-primary transition-colors">
                {item.Skills}
              </h2>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Page;
