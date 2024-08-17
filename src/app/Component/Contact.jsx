import React from "react";
import { FaGithub, FaHome, FaLinkedinIn, FaPhoneAlt } from "react-icons/fa";
import { CgMail } from "react-icons/cg";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex w-[95%] mx-auto flex-col items-center my-12"
    >
      <h2 className="text-3xl uppercase font-bold border-b-4 border-white">
        Contact me
      </h2>
      <div className="flex flex-col mt-4 md:flex-row gap-5">
        <div className="w-[300px] md:w-[400px] rounded-2xl text-white p-8 flex flex-col justify-center mx-auto border h-[300px]">
          <h2 className="flex flex-row items-center gap-3">
            {" "}
            <FaHome />
            Ashoka Garden, Bhopal
          </h2>
          <h2 className="font-sans flex flex-row items-center gap-3">
            <FaPhoneAlt />
            +91 7557708578
          </h2>
        </div>
        <div className="w-[300px] rounded-2xl border h-[300px] md:w-[400px] p-8 flex flex-col justify-center gap-3">
          <h2 className="flex flex-row items-center gap-3 text-[15px]">
            <FaLinkedinIn className="text-2xl" />
            linkedin.com/in/jahangircse786
          </h2>
          <h2 className="flex flex-row items-center gap-3 text-[15px]">
            <FaGithub className="text-2xl" />
            github.com/ErJahangir
          </h2>
          <h2 className="flex flex-row items-center gap-3 text-[15px]">
            <CgMail className="text-2xl" />
            jahangiralamnke786@gmail.com
          </h2>
        </div>
      </div>
    </div>
  );
};

export default Contact;
