"use client";
import { useEffect, useState } from "react";
import { HomeData } from "./Data";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaDownload, FaRocket } from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Image from "next/image";
import { motion } from "framer-motion";

const Home = () => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.8, ease: [0.6, 0.05, -0.01, 0.9] },
    },
  };

  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Dynamic Background Elements */}
      <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-primary/20 blur-[120px] rounded-full animate-pulse" />
      <div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-purple-500/10 blur-[100px] rounded-full animate-bounce-slow" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 md:px-12 flex flex-col lg:flex-row items-center justify-between gap-16"
      >
        {/* Left content */}
        <div className="flex-1 text-center lg:text-left z-10">
          <motion.div
            variants={itemVariants}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass border-primary/20 mb-8"
          >
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
            </span>
            <span className="text-xs font-bold uppercase tracking-widest text-white/80">
              Available for Opportunities
            </span>
          </motion.div>

          <motion.div variants={itemVariants} className="mb-6">
            <h4 className="text-primary font-bold tracking-[0.4em] uppercase mb-4 text-sm md:text-base">
              Hi, I'm
            </h4>
            <h1 className="text-4xl md:text-5xl font-black mb-4 leading-tight">
              <span className="text-white">Jahangir </span>
              <span className="bg-gradient-to-r from-primary via-blue-400 to-purple-500 bg-clip-text text-transparent italic drop-shadow-sm">
                Alam
              </span>
            </h1>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-xl md:text-3xl font-light text-light mb-8 max-w-2xl"
          >
            Crafting{" "}
            <span className="text-white font-medium">High-Performance</span>{" "}
            Mobile Experiences.
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-light/80 max-w-xl text-lg leading-relaxed mb-12 mx-auto lg:mx-0 font-medium"
          >
            {HomeData.About}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 justify-center lg:justify-start mb-12"
          >
            <Link
              href={HomeData.resume}
              target="_blank"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-black transition-all duration-300 bg-primary rounded-full hover:scale-105 active:scale-95 shadow-[0_20px_50px_rgba(56,189,248,0.3)] hover:shadow-[0_20px_70px_rgba(56,189,248,0.5)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FaDownload className="text-xl group-hover:translate-y-1 transition-transform" />
                Download CV
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity rounded-full"></div>
            </Link>

            <Link
              href="#Project"
              className="group flex items-center gap-3 px-10 py-5 rounded-full border-2 border-primary/20 text-white font-bold hover:bg-primary/5 hover:border-primary transition-all duration-300 shadow-lg"
            >
              <span>View Projects</span>
              <FaRocket className="text-primary group-hover:rotate-12 transition-transform" />
            </Link>
          </motion.div>

          {/* Social Socials */}
          <motion.div
            variants={itemVariants}
            className="flex gap-8 justify-center lg:justify-start items-center"
          >
            {[
              {
                icon: <FaLinkedinIn />,
                href: HomeData.linkedIn,
                label: "LinkedIn",
                color: "hover:text-primary",
              },
              {
                icon: <FaGithub />,
                href: HomeData.github,
                label: "GitHub",
                color: "hover:text-white",
              },
              {
                icon: <CiMail />,
                href: `mailto:${HomeData.email}`,
                label: "Email",
                color: "hover:text-red-400",
              },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                className={`flex items-center gap-2 text-2xl text-light/40 ${social.color} transition-all duration-300 hover:scale-110`}
                title={social.label}
              >
                {social.icon}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
          className="flex-1 flex justify-center items-center relative"
        >
          <div className="relative">
            {/* Multi-layered glow */}
            <div className="absolute inset-0 bg-primary/30 blur-[120px] rounded-full scale-125 animate-pulse"></div>
            <div className="absolute inset-[-20%] bg-purple-500/20 blur-[80px] rounded-full mix-blend-overlay"></div>

            <div className="relative z-10 glass p-5 rounded-[3rem] border-white/10 shadow-2xl backdrop-blur-3xl group">
              <div className="overflow-hidden rounded-[2.5rem]">
                <Image
                  src="/me.png"
                  height={600}
                  width={600}
                  alt="Jahangir Alam"
                  className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-110"
                  priority
                />
              </div>

              {/* Floating badges */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -right-8 top-1/4 glass px-6 py-4 rounded-3xl border-primary/30 shadow-2xl z-20"
              >
                <p className="text-primary font-black text-xl leading-tight">
                  2+
                </p>
                <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest leading-tight">
                  Years Exp.
                </p>
              </motion.div>

              <motion.div
                animate={{ y: [0, 10, 0] }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute -left-12 bottom-1/4 glass px-6 py-4 rounded-3xl border-purple-500/30 shadow-2xl z-20"
              >
                <p className="text-purple-400 font-black text-xl leading-tight">
                  Android/iOS
                </p>
                <p className="text-white/60 text-[10px] uppercase font-bold tracking-widest leading-tight">
                  Cross-Platform
                </p>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
