"use client";
import React from "react";
import { FaGithub, FaHome, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import Link from "next/link";
import { motion } from "framer-motion";

const Contact = () => {
  const contactInfo = [
    {
      icon: <FaHome />,
      label: "Location",
      value: "Noida, Uttar Pradesh, India",
      href: null
    },
    {
      icon: <FaPhoneAlt />,
      label: "Phone",
      value: "+91 7557708578",
      href: "tel:+917557708578"
    },
    {
      icon: <CgMail />,
      label: "Email",
      value: "jahangiralamnke786@gmail.com",
      href: "mailto:jahangiralamnke786@gmail.com"
    }
  ];

  const socialLinks = [
    { icon: <FaLinkedinIn />, href: "https://linkedin.com/in/jahangircse786", label: "LinkedIn" },
    { icon: <FaGithub />, href: "https://github.com/ErJahangir", label: "GitHub" },
  ];

  return (
    <section id="Contact" className="py-20 relative overflow-hidden">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="text-primary tracking-[0.3em] uppercase mb-2">Get In Touch</h4>
          <h2 className="text-4xl md:text-5xl font-bold">Contact Me</h2>
          <div className="h-1 w-20 bg-primary mx-auto mt-4 rounded-full"></div>
        </motion.div>

        <div className="flex flex-col lg:flex-row gap-12 max-w-5xl mx-auto">
          {/* Contact Cards */}
          <div className="flex-1 grid grid-cols-1 gap-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="glass p-6 rounded-2xl flex items-center gap-6 group hover:bg-primary/5 transition-colors"
              >
                <div className="text-3xl text-primary p-4 bg-white/5 rounded-xl group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <div>
                  <p className="text-xs uppercase tracking-widest text-primary/50 font-bold mb-1">{item.label}</p>
                  {item.href ? (
                    <Link href={item.href} className="text-lg font-medium text-white hover:text-primary transition-colors">
                      {item.value}
                    </Link>
                  ) : (
                    <p className="text-lg font-medium text-white">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Social Links & CTA */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex-1 glass p-10 rounded-3xl flex flex-col justify-center items-center text-center"
          >
            <h3 className="text-2xl font-bold mb-6 italic text-white/50">"Building digital experiences with passion and precision."</h3>
            
            <div className="flex gap-6 mb-10">
              {socialLinks.map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  target="_blank"
                  className="w-14 h-14 rounded-full glass flex items-center justify-center text-2xl text-white hover:bg-primary hover:text-slate-900 transition-all shadow-lg hover:shadow-primary/20"
                >
                  {social.icon}
                </Link>
              ))}
            </div>

            <p className="text-light mb-8 max-w-sm">
              I'm always open to discussing new projects, creative ideas or opportunities to be part of your visions.
            </p>

            <Link
              href="mailto:jahangiralamnke786@gmail.com"
              className="group relative inline-flex items-center justify-center px-12 py-5 font-bold text-black transition-all duration-300 bg-primary rounded-full hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(56,189,248,0.3)] hover:shadow-[0_0_50px_rgba(56,189,248,0.6)]"
            >
              <span className="relative z-10 flex items-center gap-3">Send an Email</span>
              <div className="absolute top-0 left-0 w-full h-full rounded-full overflow-hidden pointer-events-none">
                <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-white/40 skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></div>
              </div>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
