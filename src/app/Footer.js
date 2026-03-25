"use client";
import Link from "next/link";
import React from "react";
import { CiMail } from "react-icons/ci";
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoMdCall, IoMdMail } from "react-icons/io";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="bg-slate-950/80 backdrop-blur-md border-t border-white/5 py-16 text-light mt-20">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
          {/* Logo/Brand */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h2 className="text-3xl font-bold text-white mb-4 tracking-tighter">
              JAHANGIR <span className="text-primary italic">ALAM</span>
            </h2>
            <p className="text-sm max-w-xs leading-relaxed">
              Software Developer specializing in modern web and mobile ecosystems. 
              Building the future, one line of code at a time.
            </p>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-primary/80">
              Navigation
            </h3>
            <div className="grid grid-cols-2 gap-x-8 gap-y-3">
              {[
                { name: "Home", href: "/" },
                { name: "About", href: "/#About" },
                { name: "Skills", href: "/skills" },
                { name: "Experience", href: "/experience" },
                { name: "Projects", href: "/projectdetails" },
                { name: "Contact", href: "/contactus" },
              ].map((link) => (
                <Link 
                  key={link.name} 
                  href={link.href}
                  className="hover:text-primary transition-colors text-sm"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-xl font-bold text-white mb-6 uppercase tracking-widest text-primary/80">
              Get In Touch
            </h3>
            <div className="flex flex-col gap-4">
              <Link href="tel:+917557708578" className="flex items-center gap-3 hover:text-primary transition-colors">
                <IoMdCall className="text-primary text-xl" />
                <span>+91 7557708578</span>
              </Link>
              <Link href="mailto:jahangiralamnke786@gmail.com" className="flex items-center gap-3 hover:text-primary transition-colors">
                <IoMdMail className="text-primary text-xl" />
                <span className="break-all">jahangiralamnke786@gmail.com</span>
              </Link>
              <div className="flex gap-4 mt-2">
                {[
                  { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/jahangircse786" },
                  { icon: <FaGithub />, href: "https://github.com/ErJahangir" },
                  { icon: <CiMail />, href: "mailto:jahangiralamnke786@gmail.com" },
                ].map((social, i) => (
                  <Link
                    key={i}
                    href={social.href}
                    target="_blank"
                    className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-xl hover:bg-primary hover:text-slate-900 transition-all border border-white/10"
                  >
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-white/5 pt-8 text-center text-xs text-light/30">
          <p>© {new Date().getFullYear()} Jahangir Alam. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
