"use client";
import React, { useState } from "react";
import Image from "next/image";

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
        <div className="flex flex-col w-full p-5 gap-7 md:w-[50%] mx-auto justify-center bg-gradient-to-tr from-blue-600 to-green-600">
          <div>
            <h2 className="text-2xl font-bold">Let's Talk</h2>
            <p>description</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold">It's me</h2>
            <h2>Jahangir Alam</h2>
            <h2>jahangiralamnk786@gmail.com</h2>
          </div>
          <div>
            <h1 className="text-2xl font-bold">Check it</h1>
            <div className="flex flex-wrap gap-3">
              <h2>Email</h2>
              <h2>Facebook</h2>
              <h2>LinkedIn</h2>
              <h2>Instagram</h2>
              <h2>GitHub</h2>
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
