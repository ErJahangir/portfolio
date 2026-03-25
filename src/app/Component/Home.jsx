"use client";
import { useEffect, useState } from "react";
import { HomeData } from "./Data";
import Link from "next/link";
import { FaGithub, FaLinkedinIn, FaDownload } from "react-icons/fa";
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
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section
      id="Home"
      className="relative min-h-screen flex items-center overflow-hidden pt-20"
    >
      {/* Background Blobs */}
      <div className="blob top-[10%] left-[-10%] bg-blue-500/20" />
      <div className="blob bottom-[10%] right-[-10%] bg-purple-500/20" />

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-12"
      >
        {/* Left content */}
        <div className="flex-1 text-center md:text-left z-10">
          <motion.h4
            variants={itemVariants}
            className="text-primary font-medium tracking-widest uppercase mb-4"
          >
            Hello!, I'm
          </motion.h4>
          <motion.div variants={itemVariants} className="mb-4">
            <h1 className="text-5xl md:text-7xl font-bold mb-2">
              <span className="text-white">Jahangir </span>
              <span className="text-primary italic">Alam</span>
            </h1>
            <div className="h-1 w-20 bg-primary mx-auto md:mx-0 rounded-full"></div>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-2xl md:text-3xl font-light text-light mb-6"
          >
            {HomeData.position}
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="text-light max-w-xl text-lg leading-relaxed mb-10 mx-auto md:mx-0"
          >
            {HomeData.About}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            variants={itemVariants}
            className="flex flex-wrap gap-6 justify-center md:justify-start mb-10"
          >
            <Link
              href={HomeData.resume}
              target="_blank"
              className="group relative inline-flex items-center justify-center px-10 py-5 font-bold text-black transition-all duration-300 bg-primary rounded-full hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_50px_rgba(56,189,248,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-3">
                <FaDownload className="text-xl group-hover:animate-bounce" />
                Download Resume
              </span>
              
              {/* Shine Effect Overlay */}
              <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-white/40 skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></div>
              </div>
            </Link>

            <Link
              href="#Contact"
              className="px-10 py-5 rounded-full border-2 border-primary/30 text-white font-bold hover:bg-primary/10 hover:border-primary transition-all duration-300 shadow-lg"
            >
              Let's Talk
            </Link>
          </motion.div>

          {/* Social Socials */}
          <motion.div
            variants={itemVariants}
            className="flex gap-6 justify-center md:justify-start"
          >
            {[
              {
                icon: <FaLinkedinIn />,
                href: HomeData.linkedIn,
                color: "hover:text-primary",
              },
              {
                icon: <FaGithub />,
                href: HomeData.github,
                color: "hover:text-white",
              },
              {
                icon: <CiMail />,
                href: `mailto:${HomeData.email}`,
                color: "hover:text-red-400",
              },
            ].map((social, i) => (
              <Link
                key={i}
                href={social.href}
                target="_blank"
                className={`text-2xl text-light/50 ${social.color} transition-colors`}
              >
                {social.icon}
              </Link>
            ))}
          </motion.div>
        </div>

        {/* Right image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="flex-1 flex justify-center items-center relative"
        >
          <div className="relative animate-float">
            <div className="absolute inset-0 bg-primary/20 blur-[100px] rounded-full scale-110"></div>
            <Image
              src="/me.png"
              height={500}
              width={500}
              alt="Profile Image"
              className="img-profile relative z-10"
              priority
            />
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Home;
