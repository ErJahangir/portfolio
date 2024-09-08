import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="pt-16">
      <Image src="/contactTop.png" width={2500} height={2000} alt="contact" />
      <div className=" font-serif flex flex-col md:flex-row mx-auto">
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
            <div className="flex flex-row gap-3">
              <h2>Email</h2>
              <h2>facebook</h2>
              <h2>linkedin</h2>
              <h2>instagram</h2>
              <h2>gitHub</h2>
            </div>
          </div>
        </div>
        <div className="flex flex-col bg-gradient-to-r from-green-600 to-blue-600 p-3 gap-3 w-full  md:w-[50%] min-h-[400px] justify-center mx-auto">
          <Image
            src="/contactUs.png"
            width={300}
            height={300}
            alt="contact us"
            className="w-80 h-48 self-center"
          />
          <div>
            <p>Name:- </p>
            <input
              className="border text-black placeholder:text-gray-100 pl-2 w-[95%] h-10 rounded-md bg-gradient-to-t from-green-400 outline-none to-blue-500"
              placeholder="Enter your name"
            />
          </div>
          <div>
            <p>email:-</p>
            <input
              className="border text-black placeholder:text-gray-100 pl-2 w-[95%] h-10 rounded-md bg-gradient-to-t from-green-400 outline-none to-blue-500"
              placeholder="Enter your email"
            />
          </div>
          <div>
            <p>type your Message:-</p>
            <textarea
              className="border text-black placeholder:text-gray-100 w-[95%] pl-2 outline-none rounded-md bg-gradient-to-t from-green-500 to-blue-400"
              placeholder="Enter your Message"
            />
          </div>
          <button className="bg-blue-900 p-1 border rounded-lg w-[100px]">
            submit
          </button>
        </div>
      </div>
      <iframe
        width="1500"
        height="400"
        id="gmap_canvas"
        src="https://maps.google.com/maps?q=famous+restaurant%2C+ashoka+garden+thana&t=&z=13&ie=UTF8&iwloc=&output=embed"
        frameborder="0"
        scrolling="no"
        marginheight="0"
        marginwidth="0"
      ></iframe>
    </div>
  );
};

export default page;
