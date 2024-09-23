"use client";
import React, { useState } from "react";
import Image from "next/image";
import { IoMdMail } from "react-icons/io";
import { FaFacebook } from "react-icons/fa6";
import {
  FaFacebookF,
  FaGithub,
  FaGithubSquare,
  FaInstagram,
  FaInstagramSquare,
  FaLinkedin,
  FaLinkedinIn,
} from "react-icons/fa";
import Link from "next/link";

const Page = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState({});
  const [isSubmitted, setIsSubmitted] = useState(false); // For submission feedback

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  // Simple validation function
  const validate = () => {
    const newErrors = {};
    if (!formData.name.trim()) newErrors.name = "Name is required";
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!formData.message.trim()) newErrors.message = "Message is required";
    console.log(errors);
    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      console.log("Form submitted successfully", formData);
      setIsSubmitted(true);

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    }
  };

  return (
    <div className="pt-16">
      <Image
        src="/contactTop.png"
        width={2500}
        height={2000}
        alt="contact"
        priority
      />
      <div className="font-serif flex flex-col md:flex-row mx-auto">
        <div className="flex flex-col w-full p-5 pl-11 gap-7 md:w-[50%] mx-auto justify-center bg-gradient-to-tr from-blue-600 to-green-600">
          <div>
            <h2 className="text-2xl font-bold">Let's Talk</h2>
            <p className="text-gray-200 text-[15px] text-justify">
              I'd love to hear from you! Whether you have a project in mind,
              questions, or just want to connect, feel free to send me a
              message. I'm always open to collaborating on exciting projects,
              offering guidance, or discussing new opportunities. Fill out the
              form below, and I'll get back to you as soon as possible.
            </p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">It's me</h2>

            {/* <li className="text-gray-300 text-[15px]">Jahangir Alam</li> */}
            <li className="text-gray-300 text-[15px]">A web Developer</li>
            <li className="text-gray-300 text-[15px]">
              A mobile Application developer
            </li>
            <li className="text-gray-300 font-serif text-[15px]">
              <Link href="mailto:jahangiralamnke786@gmail.com">
                jahangiralamnk786@gmail.com
              </Link>
            </li>
          </div>
          <div>
            <h1 className="text-2xl font-bold mb-6">Check it</h1>
            <div className="flex md:grid-cols-6 items-center mx-auto gap-2">
              <Link
                href="mailto:jahangiralamnke786@gmail.com"
                target="_blank"
                className=" bg-gray-300 text-blue-500 p-2 rounded-full hover:bg-black hover:text-white duration-1000 hover:shadow-lg "
              >
                <IoMdMail className="text-3xl" />
              </Link>
              <Link
                href="https://www.facebook.com/prem.diwana.9484941"
                target="_blank"
                className=" bg-blue-800 text-red-200 p-2 rounded-full hover:bg-white hover:text-blue-700 duration-1000 hover:shadow-lg "
              >
                <FaFacebookF className="text-3xl" />
              </Link>
              <Link
                target="_blank"
                href="https://www.linkedin.com/in/jahangircse786"
                className=" bg-gray-300 text-blue-700 p-2 rounded-full hover:bg-blue-600 hover:text-white duration-1000 hover:shadow-lg "
              >
                <FaLinkedinIn className="text-3xl" />
              </Link>
              <Link
                target="_blank"
                href="https://www.instagram.com/jahangir.__/"
                className=" bg-pink-500 text-white p-2 rounded-full hover:bg-white hover:text-pink-950 duration-1000 hover:shadow-lg "
              >
                <FaInstagram className="text-3xl" />
              </Link>
              <Link
                target="_blank"
                href="https://github.com/ErJahangir"
                className=" bg-blue-950 text-white p-2 rounded-full hover:bg-gray-400 hover:text-blue-950 duration-1000 hover:shadow-lg "
              >
                <FaGithub className="text-3xl" />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex flex-col bg-gradient-to-r from-green-600 to-blue-600 p-3 gap-3 w-full md:w-[50%] min-h-[400px] justify-center mx-auto">
          <Image
            src="/contactUs.png"
            width={300}
            height={300}
            alt="contact us"
            className="w-80 h-48 self-center"
            priority
          />
          <form onSubmit={handleSubmit}>
            <div>
              <p>Name:</p>
              <input
                aria-label="Name input field"
                className="border text-black placeholder:text-gray-100 pl-2 w-[95%] h-10 rounded-md bg-gradient-to-t from-green-400 outline-none to-blue-500"
                placeholder="Enter your name"
                value={formData.name}
                onChange={handleChange}
                name="name"
              />
              {errors.name && <p className="text-red-600">{errors.name}</p>}
            </div>
            <div>
              <p>Email:</p>
              <input
                aria-label="Email input field"
                className="border text-black placeholder:text-gray-100 pl-2 w-[95%] h-10 rounded-md bg-gradient-to-t from-green-400 outline-none to-blue-500"
                placeholder="Enter your email"
                value={formData.email}
                onChange={handleChange}
                name="email"
              />
              {errors.email && <p className="text-red-600">{errors.email}</p>}
            </div>
            <div>
              <p>Message:</p>
              <textarea
                aria-label="Message input field"
                className="border text-black placeholder:text-gray-100 w-[95%] pl-2 outline-none rounded-md bg-gradient-to-t from-green-500 to-blue-400"
                placeholder="Enter your message"
                value={formData.message}
                onChange={handleChange}
                name="message"
              />
              {errors.message && (
                <p className="text-red-600">{errors.message}</p>
              )}
            </div>
            <button
              type="submit"
              aria-label="Submit contact form"
              className="bg-blue-900 p-1 border rounded-lg w-[100px]"
            >
              Submit
            </button>
            {isSubmitted && (
              <p className="text-green-500">Form submitted successfully!</p>
            )}
          </form>
        </div>
      </div>

      <iframe
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=famous+restaurant%2C+ashoka+garden+thana&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameBorder="0"
        scrolling="no"
        marginHeight="0"
        marginWidth="0"
        title="Google Maps"
        className="w-full h-96"
      ></iframe>
    </div>
  );
};

export default Page;
