import React from "react";
import { FaFacebook, FaInstagramSquare, FaTelegram, FaReact, FaNodeJs } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";
import {ReactTyped }from "react-typed";
import pic from "../../public/software.png"

const Home = () => {
  return (
    <>
      <div name="Home"className="max-w-screen-2xl mx-auto  container  md:px-20 my-20 p-2 shadow-lg">
        <div className="flex flex-col md:flex-row items-center">

          {/* Left Section */}
          <div className="md:w-1/2 order-2 md:order-1 mt-12 md:mt-24">
            <span className="text-2xl">Welcome In My Feed</span>

            <div className="flex space-x-2 text-2xl md:text-4xl ">
              <h1>
                Hello, I'm a{" "}
                <ReactTyped
                  className="text-red-400 font-bold"
                  strings={["Developer", "Programmer", "Coder"]}
                  typeSpeed={40}
                  backSpeed={50}
                  loop
                />
              </h1>
            </div>

            <p className="mt-4 text-justify">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Quas nisi necessitatibus hic enim, maiores sequi nostrum.
            </p>

            {/* Social & Skills */}
            <div className="flex flex-col md:flex-row  items-center space-y-6 md:space-y-0 justify-between mt-6 ">

              {/* Social */}
              <div>
                <h1 className="font-bold">Available on</h1>
                <ul className="flex   md:flex-row space-x-5 mt-2 ">
                  <li> <a href=" https://www.facebook.com"><FaFacebook className="text-2xl cursor-pointer hover:scale-110 duration-200" /> </a></li>
                  <li> <a href="https://www.instagram.com"><FaInstagramSquare className="text-2xl cursor-pointer hover:scale-110 duration-200" /> </a></li>
                  <li> <a href="https://in.linkedin.com "><FaLinkedin className="text-2xl cursor-pointer hover:scale-110 duration-200" /> </a></li>
                  <li> <a href="https://web.telegram.org"><FaTelegram className="text-2xl cursor-pointer hover:scale-110 duration-200" /> </a></li>
                </ul>
              </div>

              {/* Skills */}
              <div className="">
                <h1 className="font-bold">Working Skill On</h1>
                <ul className="flex space-x-5 mt-2">
                  <li><SiMongodb className="text-2xl cursor-pointer hover:scale-110 duration-200" /></li>
                  <li><SiExpress className="text-2xl cursor-pointer hover:scale-110 duration-200" /></li>
                  <li><FaReact className="text-2xl cursor-pointer hover:scale-110 duration-200" /></li>
                  <li><FaNodeJs className="text-2xl cursor-pointer hover:scale-110 duration-200" /></li>
                </ul>
              </div>

            </div>
          </div>

          {/* Right Section */}
          <div className="md:ml-48 md:mt-20 md:w-1/2 order-1">
            <img
              src={pic}
              className="rounded-full md:w-[450px] md:h-[450px]"
              alt="profile"
            />
          </div>

        </div>
      </div>
      
      <hr className=" bg-black"/>
    </>
  );
};

export default Home;
