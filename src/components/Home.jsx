import React from "react";
import { FaFacebook, FaInstagramSquare, FaTelegram, FaReact, FaNodeJs } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { SiMongodb, SiExpress } from "react-icons/si";
import { ReactTyped } from "react-typed";
import { Link } from "react-scroll";
import pic from "../assets/gaurav.png";

const Home = () => {
  return (
    <section name="Home" className="mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
        <div className="order-2 lg:order-1">
          <span className="inline-flex rounded-full border border-blue-200 bg-blue-50 px-3 py-1 text-sm font-medium text-blue-700">
            Welcome to my portfolio
          </span>

          <h1 className="mt-6 text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
            I am a <span className="text-blue-600"><ReactTyped strings={["Developer", "Programmer", "MERN Stack Builder"]} typeSpeed={70} backSpeed={50} loop /></span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-600">
            I am Gaurav Pawar, a passionate web developer focused on creating responsive, modern, and user-friendly experiences with React, Node.js, and MongoDB.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <Link to="Contact" smooth={true} duration={500} className="inline-flex cursor-pointer items-center justify-center rounded-full bg-blue-600 px-6 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:bg-blue-700">
              Let&apos;s Connect
            </Link>
            <Link to="Portfolio" smooth={true} duration={500} className="inline-flex cursor-pointer items-center justify-center rounded-full border border-slate-300 px-6 py-3 font-semibold text-slate-700 transition hover:border-blue-500 hover:text-blue-600">
              View Work
            </Link>
          </div>

          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-slate-900">Available on</h2>
              <div className="mt-4 flex flex-wrap gap-4 text-2xl text-slate-600">
                <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="transition hover:scale-110 hover:text-blue-500">
                  <FaFacebook />
                </a>
                <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="transition hover:scale-110 hover:text-pink-500">
                  <FaInstagramSquare />
                </a>
                <a href="https://in.linkedin.com" target="_blank" rel="noreferrer" className="transition hover:scale-110 hover:text-blue-600">
                  <FaLinkedin />
                </a>
                <a href="https://web.telegram.org" target="_blank" rel="noreferrer" className="transition hover:scale-110 hover:text-sky-500">
                  <FaTelegram />
                </a>
              </div>
            </div>

            <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm">
              <h2 className="font-semibold text-slate-900">Skill Stack</h2>
              <div className="mt-4 flex flex-wrap gap-4 text-2xl text-slate-600">
                <SiMongodb className="transition hover:scale-110 hover:text-green-500" />
                <SiExpress className="transition hover:scale-110" />
                <FaReact className="transition hover:scale-110 hover:text-cyan-400" />
                <FaNodeJs className="transition hover:scale-110 hover:text-green-600" />
              </div>
            </div>
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2">
          <div className="w-full max-w-[460px] rounded-[2rem] border border-slate-200 bg-gradient-to-br from-blue-50 via-white to-slate-100 p-4 shadow-2xl shadow-slate-200">
            <img
              src={pic}
              alt="Gaurav Pawar"
              className="h-[360px] w-full rounded-[1.5rem] object-contain object-center sm:h-[420px] md:h-[480px] lg:h-[520px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;