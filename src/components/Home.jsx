import React from "react";
import { FaFacebook, FaInstagramSquare, FaTelegram, FaReact, FaNodeJs } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import pic from "../assets/gaurav.png";

const Home = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto px-6 md:px-16 lg:px-24 py-10 md:py-20">
  <div className="flex flex-col md:flex-row items-center justify-between gap-12">

    {/* Left Section */}
    <div className="w-full md:w-1/2 order-2 md:order-1 text-center md:text-left">

      <span className="text-xl md:text-2xl text-gray-500">
        Welcome In My Feed
      </span>

      <h1 className="mt-4 text-3xl sm:text-4xl md:text-5xl font-bold leading-tight">
        Hello, I'm a{" "}
        <ReactTyped
          className="text-red-400"
          strings={["Developer", "Programmer", "Coder"]}
          typeSpeed={40}
          backSpeed={50}
          loop
        />
      </h1>

      <p className="mt-6 text-base md:text-lg text-gray-600 leading-relaxed max-w-xl">
        I am Gaurav Pawar, a recent graduate in BCA (Computer Applications), and I am passionate about web development. I have hands-on experience in MERN stack and enjoy building responsive websites.
      </p>

      {/* Social & Skills */}
      <div className="flex flex-col md:flex-row items-center md:items-start gap-10 mt-8">

        {/* Social */}
        <div>
          <h2 className="font-semibold text-lg">Available on</h2>
          <div className="flex justify-center md:justify-start gap-6 mt-3 text-2xl">
            <a href="https://www.facebook.com">
              <FaFacebook className="hover:scale-110 hover:text-blue-500 transition duration-300" />
            </a>
            <a href="https://www.instagram.com">
              <FaInstagramSquare className="hover:scale-110 hover:text-pink-500 transition duration-300" />
            </a>
            <a href="https://in.linkedin.com">
              <FaLinkedin className="hover:scale-110 hover:text-blue-600 transition duration-300" />
            </a>
            <a href="https://web.telegram.org">
              <FaTelegram className="hover:scale-110 hover:text-sky-500 transition duration-300" />
            </a>
          </div>
        </div>

        {/* Skills */}
        <div>
          <h2 className="font-semibold text-lg">Working Skill On</h2>
          <div className="flex justify-center md:justify-start gap-6 mt-3 text-2xl">
            <SiMongodb className="hover:scale-110 hover:text-green-500 transition duration-300" />
            <SiExpress className="hover:scale-110 transition duration-300" />
            <FaReact className="hover:scale-110 hover:text-cyan-400 transition duration-300" />
            <FaNodeJs className="hover:scale-110 hover:text-green-600 transition duration-300" />
          </div>
        </div>

      </div>
    </div>

    {/* Right Section */}
    <div className="w-full md:w-1/2 flex justify-center order-1 md:order-2">
      <img
  src={pic}
  alt="profile"
  className="rounded-md w-[300px] h-[300px]    shadow-2xl border-4 border-white"
/>
    </div>

  </div>
</div>

      <hr className="bg-black" />
    </>
  );
};

export default Home;