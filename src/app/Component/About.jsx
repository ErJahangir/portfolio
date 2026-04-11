"use client";
import Image from "next/image";
import React from "react";
import { FaGraduationCap, FaCode, FaMobileAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { HomeData } from "./Data";
import Link from "next/link";

const About = () => {
  const stats = [
    {
      label: "Experience",
      value: "2+ Years",
      icon: <FaMobileAlt />,
      color: "from-blue-500 to-cyan-400",
    },
    {
      label: "Projects",
      value: "10+ Completed",
      icon: <FaCode />,
      color: "from-purple-500 to-pink-500",
    },
    {
      label: "Education",
      value: "B.Tech CSE",
      icon: <FaGraduationCap />,
      color: "from-orange-500 to-yellow-500",
    },
  ];

  return (
    <section
      id="About"
      className="py-24 relative overflow-hidden bg-slate-900/30"
    >
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          {/* Image Side */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex-1 relative"
          >
            <div className="relative z-10 rounded-[3rem] overflow-hidden glass p-4 border-white/10 group">
              <div className="relative rounded-[2.5rem] overflow-hidden">
                <Image
                  src="/first1.png"
                  height={600}
                  width={600}
                  alt="Jahangir Alam portrait"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent opacity-60"></div>
              </div>

              {/* Overlay Badge */}
              <div className="absolute bottom-10 left-10 glass px-6 py-4 rounded-2xl border-primary/20 backdrop-blur-2xl">
                <p className="text-white font-black text-2xl">Jahangir Alam</p>
                <p className="text-primary text-xs font-bold uppercase tracking-widest">
                  Mobile Architect
                </p>
              </div>
            </div>

            {/* Background decorative elements */}
            <div className="absolute -top-10 -left-10 w-40 h-40 bg-primary/20 blur-[80px] -z-10 animate-pulse"></div>
            <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-purple-500/10 blur-[100px] -z-10"></div>
          </motion.div>

          {/* Content Side */}
          <div className="flex-[1.2]">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h4 className="text-primary tracking-[0.4em] uppercase mb-4 text-sm font-bold">
                Identity
              </h4>
              <h2 className="text-3xl md:text-4xl font-black text-white mb-8">
                Passionate{" "}
                <span className="text-primary italic">Developer</span> <br />&
                Innovator
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12"
            >
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass p-6 rounded-3xl border-white/5 hover:border-primary/20 transition-all group"
                >
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${stat.color} flex items-center justify-center text-white text-xl mb-4 shadow-lg group-hover:scale-110 transition-transform`}
                  >
                    {stat.icon}
                  </div>
                  <p className="text-white font-black text-xl">{stat.value}</p>
                  <p className="text-light/60 text-xs font-bold uppercase tracking-widest">
                    {stat.label}
                  </p>
                </div>
              ))}
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="glass p-10 rounded-[2.5rem] border-white/5 relative mb-12"
            >
              <p className="text-light text-xl leading-relaxed mb-10 font-medium">
                I am a dedicated{" "}
                <span className="text-white">React Native Developer</span> with
                a proven track record of creating high-impact mobile
                applications. My focus lies at the intersection of performance,
                security, and seamless user experiences.
              </p>

              <div className="flex flex-wrap gap-12">
                <div className="space-y-4">
                  <h5 className="text-primary text-xs font-black uppercase tracking-widest">
                    Specialties
                  </h5>
                  <ul className="text-white/80 font-bold space-y-2">
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Payment Ecosystems
                    </li>
                    <li className="flex items-center gap-3">
                      <span className="w-1.5 h-1.5 bg-primary rounded-full"></span>
                      Push notification systems
                    </li>
                  </ul>
                </div>
                <div className="space-y-4">
                  <h5 className="text-primary text-xs font-black uppercase tracking-widest">
                    Location
                  </h5>
                  <p className="text-white/80 font-bold">
                    Noida, Uttar Pradesh, India
                  </p>
                  <p className="text-light/40 text-xs font-bold italic">
                    Open to Remote / Relocation
                  </p>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="flex gap-6"
            >
              <Link
                href="#Contact"
                className="px-10 py-5 rounded-full bg-primary text-black font-black hover:bg-white transition-all shadow-xl shadow-primary/20"
              >
                Start a Conversation
              </Link>
              <Link
                href="#Experience"
                className="px-10 py-5 rounded-full glass border-white/10 text-white font-black hover:bg-white/5 transition-all"
              >
                View Experience
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
