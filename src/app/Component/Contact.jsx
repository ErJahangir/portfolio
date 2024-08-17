import React from "react";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex w-[95%] mx-auto flex-col items-center my-12"
    >
      <h2>Contact me</h2>
      <div className="flex flex-col mt-4 md:flex-row gap-5">
        <div className="w-[300px] rounded-2xl mx-auto border h-[300px]"></div>
        <div className="w-[300px] rounded-2xl border h-[300px]"></div>
      </div>
    </div>
  );
};

export default Contact;
