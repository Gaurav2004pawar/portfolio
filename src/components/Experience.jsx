import React from "react";

import Html from "../assets/Html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Express from "../assets/express.png";
import Node from "../assets/nodejs.png";
import Mongodb from "../assets/mongodb.png";
import Github from "../assets/github.png";

const Experience = () => {
  const skills = [
    { id: 1, logo: Html, name: "HTML" },
    { id: 2, logo: Css, name: "CSS" },
    { id: 3, logo: Javascript, name: "JavaScript" },
    { id: 4, logo: ReactImg, name: "React" },
    { id: 5, logo: Node, name: "NodeJS" },
    { id: 6, logo: Express, name: "Express" },
    { id: 7, logo: Mongodb, name: "MongoDB" },
    { id: 8, logo: Github, name: "GitHub" }
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-12 md:py-20">

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-bold text-center text-green-600">
        Experience
      </h1>

      <p className="text-center text-gray-600 mt-2">
        Technologies I have worked with
      </p>

      {/* Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-10">

        {skills.map((item) => (
          <div
            key={item.id}
            className="bg-white shadow-lg rounded-xl p-6 text-center hover:scale-105 hover:shadow-2xl transition duration-300"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-16 h-16 mx-auto object-contain"
            />

            <h2 className="mt-3 font-semibold text-lg">
              {item.name}
            </h2>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Experience;