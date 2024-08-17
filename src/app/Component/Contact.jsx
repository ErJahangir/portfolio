import React from "react";

const Contact = () => {
  return (
    <div
      id="Contact"
      className="flex w-[95%] mx-auto flex-col items-center my-12"
    >
      <h2>Contact me</h2>
      <div className="flex flex-col mt-4 md:flex-row gap-5">
        <div className="w-[300px] rounded-2xl p-8 flex flex-col items-center justify-center mx-auto border h-[300px]">
          <h2>Ashoka Garden, Bhopal</h2>
          <h2 className="font-sans">+91 7557708578</h2>
        </div>
        <div className="w-[300px] rounded-2xl border h-[300px]"></div>
      </div>
    </div>
  );
};

export default Contact;
