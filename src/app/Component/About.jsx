"use client";
import Image from "next/image";
import React from "react";
import { FaGraduationCap } from "react-icons/fa";
import { GiAchievement } from "react-icons/gi";
import { TbWorld } from "react-icons/tb";
import Link from "next/link";
import { motion } from "framer-motion";
import { HomeData } from "./Data";

const About = () => {
  const cards = [
    {
      title: "Education",
      subtitle: "B.Tech",
      desc: "Software Engineering",
      subdesc: "RGPV University",
      icon: <FaGraduationCap />,
    },
    {
      title: "Achievement",
      subtitle: "8.13 CGPA",
      desc: "Top Tier Performance",
      icon: <GiAchievement />,
    },
    {
      title: "Domains",
      subtitle: "Full Stack",
      desc: "React & React Native",
      icon: <TbWorld />,
    },
  ];

  return (
    <section id="About" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="text-primary tracking-[0.3em] uppercase mb-2">
            Get To Know
          </h4>
          <h2 className="text-4xl md:text-5xl font-bold">About Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Image side */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-2xl overflow-hidden glass p-4 rotate-3 hover:rotate-0 transition-transform duration-500">
              <Image
                src="/first1.png"
                height={500}
                width={500}
                alt="Profile Image"
                className="rounded-xl object-contain w-full"
              />
            </div>
            <div className="absolute -inset-4 bg-primary/20 blur-2xl -z-10 rounded-full"></div>
          </motion.div>

          {/* Content side */}
          <div className="flex-1">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
              {cards.map((card, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass p-6 rounded-2xl text-center group hover:bg-primary/10 transition-colors border-white/5"
                >
                  <div className="text-3xl text-primary mb-3 flex justify-center group-hover:scale-110 transition-transform">
                    {card.icon}
                  </div>
                  <h3 className="font-bold text-white mb-1">{card.title}</h3>
                  <p className="text-primary text-sm font-medium">
                    {card.subtitle}
                  </p>
                  <p className="text-light text-xs mt-1">{card.desc}</p>
                </motion.div>
              ))}
            </div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="glass p-8 rounded-3xl border-white/5 relative"
            >
              <p className="text-light leading-relaxed text-lg text-justify mb-8">
                {HomeData.About}
              </p>

              <div className="flex flex-wrap gap-x-12 gap-y-6 mt-4">
                <div className="flex flex-col gap-2">
                  <h4 className="text-primary uppercase tracking-[0.2em] text-xs font-bold font-sans">
                    Core Focus
                  </h4>
                  <ul className="text-white text-sm space-y-1">
                    <li className="flex items-center gap-2">
                      • Mobile Payment Systems
                    </li>
                    <li className="flex items-center gap-2">
                      • Real-time Notifications
                    </li>
                    <li className="flex items-center gap-2">
                      • Secure Authentication
                    </li>
                  </ul>
                </div>
                <div className="flex flex-col gap-2">
                  <h4 className="text-primary uppercase tracking-[0.2em] text-xs font-bold font-sans">
                    Current Role
                  </h4>
                  <p className="text-white text-sm">
                    React Native Developer (Android & iOS)
                  </p>
                  <p className="text-light/50 text-xs italic">
                    2+ Years Experience
                  </p>
                </div>
              </div>

              <div className="mt-12">
                <Link
                  href="#Contact"
                  className="group relative inline-flex items-center justify-center px-10 py-4 font-bold text-black transition-all duration-300 bg-primary rounded-full hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_50px_rgba(56,189,248,0.6)]"
                >
                  <span className="relative z-10">Let's Connect</span>
                  <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden pointer-events-none">
                    <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-white/40 skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></div>
                  </div>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
