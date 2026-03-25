"use client";
import React, { useState } from "react";
import { FaGithub, FaFacebookF, FaLinkedinIn, FaInstagram, FaPhoneAlt, FaMapMarkerAlt } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
    setErrors({ ...errors, [name]: "" });
  };

  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setFormData({ name: "", email: "", subject: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 relative overflow-hidden">
      {/* Background elements */}
      <div className="blob top-[-10%] right-[-10%] bg-blue-500/20" />
      <div className="blob bottom-[-10%] left-[-10%] bg-purple-500/20" />

      <div className="container mx-auto max-w-6xl">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h4 className="text-primary tracking-[0.3em] uppercase mb-2 text-sm font-bold">Connect with me</h4>
          <h1 className="text-5xl md:text-7xl font-bold mb-4">Let's <span className="text-primary italic">Talk.</span></h1>
          <p className="text-light max-w-2xl mx-auto text-lg">
            Have a project in mind or just want to say hello? I'm always open to discussing new opportunities and creative ideas.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Contact Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-4 flex flex-col gap-8"
          >
            <div className="glass p-8 rounded-3xl border-white/5">
              <h3 className="text-xl font-bold mb-8 text-white">Contact Information</h3>
              
              <div className="flex flex-col gap-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary text-xl">
                    <IoMdMail />
                  </div>
                  <div>
                    <p className="text-xs text-light/50 font-bold uppercase tracking-wider">Email</p>
                    <p className="text-white font-medium">jahangiralamnke786@gmail.com</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary text-xl">
                    <FaPhoneAlt />
                  </div>
                  <div>
                    <p className="text-xs text-light/50 font-bold uppercase tracking-wider">Phone</p>
                    <p className="text-white font-medium">+91 7557708578</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 glass rounded-2xl flex items-center justify-center text-primary text-xl">
                    <FaMapMarkerAlt />
                  </div>
                  <div>
                    <p className="text-xs text-light/50 font-bold uppercase tracking-wider">Location</p>
                    <p className="text-white font-medium">Noida, UP, India</p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <p className="text-xs text-light/50 font-bold uppercase tracking-wider mb-6">Follow me</p>
                <div className="flex gap-4">
                  {[
                    { icon: <FaLinkedinIn />, href: "https://www.linkedin.com/in/jahangircse786" },
                    { icon: <FaGithub />, href: "https://github.com/ErJahangir" },
                    { icon: <FaInstagram />, href: "https://www.instagram.com/jahangir.__/" },
                    { icon: <FaFacebookF />, href: "https://www.facebook.com/prem.diwana.9484941" }
                  ].map((social, i) => (
                    <Link
                      key={i}
                      href={social.href}
                      target="_blank"
                      className="w-10 h-10 glass rounded-xl flex items-center justify-center text-white hover:bg-primary hover:text-slate-950 transition-all font-bold"
                    >
                      {social.icon}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* Google Map Mini */}
            <div className="glass rounded-3xl overflow-hidden h-64 grayscale contrast-125 opacity-60 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
               <iframe
                src="https://maps.google.com/maps?q=Noida%2C%20India&t=&z=13&ie=UTF8&iwloc=&output=embed"
                className="w-full h-full border-0"
                title="Google Maps"
              ></iframe>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="glass p-10 rounded-3xl border-white/5">
              <form onSubmit={handleSubmit} className="flex flex-col gap-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-light uppercase tracking-wider ml-2">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your Full Name"
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors text-white placeholder:text-light/20"
                    />
                    {errors.name && <span className="text-red-400 text-xs ml-2">{errors.name}</span>}
                  </div>
                  <div className="flex flex-col gap-2">
                    <label className="text-sm font-bold text-light uppercase tracking-wider ml-2">Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your@email.com"
                      className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors text-white placeholder:text-light/20"
                    />
                    {errors.email && <span className="text-red-400 text-xs ml-2">{errors.email}</span>}
                  </div>
                </div>
                
                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-light uppercase tracking-wider ml-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="Project Inquiry / Just saying hi"
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors text-white placeholder:text-light/20"
                  />
                </div>

                <div className="flex flex-col gap-2">
                  <label className="text-sm font-bold text-light uppercase tracking-wider ml-2">Message</label>
                  <textarea
                    rows={6}
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project..."
                    className="bg-white/5 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-primary/50 transition-colors text-white placeholder:text-light/20 resize-none"
                  />
                  {errors.message && <span className="text-red-400 text-xs ml-2">{errors.message}</span>}
                </div>

                <div className="flex items-center gap-6 mt-4">
                  <button
                    type="submit"
                    className="group relative inline-flex items-center justify-center px-12 py-4 font-bold text-black transition-all duration-300 bg-primary rounded-2xl hover:bg-white hover:scale-105 active:scale-95 shadow-[0_0_20px_rgba(56,189,248,0.2)] hover:shadow-[0_0_40px_rgba(56,189,248,0.5)] overflow-hidden"
                  >
                    <span className="relative z-10">Send Message</span>
                    <div className="absolute top-0 -left-[100%] w-[50%] h-full bg-white/40 skew-x-[-25deg] group-hover:left-[150%] transition-all duration-1000 ease-in-out"></div>
                  </button>
                  
                  <AnimatePresence>
                    {isSubmitted && (
                      <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0 }}
                        className="text-primary font-bold"
                      >
                        Message Sent Successfully!
                      </motion.p>
                    )}
                  </AnimatePresence>
                </div>
              </form>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
