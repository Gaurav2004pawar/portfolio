import React from "react";

import Html from "../assets/Html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Express from "../assets/express.png";
import Node from "../assets/nodejs.png";
import Mongodb from "../assets/mongodb.png";
import Github from "../assets/github.png";

const Portfolio = () => {

  const projects = [
   
       { id: 1, logo: Html, name: "Html" },
       { id: 2, logo: Css, name: "Css" },
       { id: 3, logo: Javascript, name: "Javascript" },
       { id: 4, logo: ReactImg, name: "React" },
       { id: 5, logo: Node, name: "NodeJS" },
       { id: 6, logo: Express, name: "Express" },
       { id: 7, logo: Mongodb, name: "Mongodb" },
       { id: 8, logo: Github, name: "Github" }
     
  ];

  return (
    <div className="max-w-screen-xl mx-auto px-6 md:px-16 py-10 md:py-20">

      {/* Heading */}
      <h1 className="text-3xl font-bold text-center text-green-600">
        Portfolio
      </h1>
      <p className="text-center mt-2 text-gray-500">
        Featured Projects
      </p>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-10">

        {projects.map((item) => (
          <div
            key={item.id}
            className="bg-white p-6 rounded-xl shadow-lg hover:scale-105 transition duration-300"
          >
            <img
              src={item.logo}
              alt={item.name}
              className="w-20 h-20 mx-auto"
            />

            <div className="mt-4 text-center">
              <h2 className="font-bold text-lg">{item.name}</h2>
              <p className="text-sm text-gray-600 mt-2">
                MERN stack based project built for learning.
              </p>
            </div>

            {/* Buttons */}
            <div className="flex justify-between mt-5">
              <button className="px-3 py-1 bg-blue-500 text-white rounded hover:bg-blue-600 text-sm">
                Live Demo
              </button>

              <button className="px-3 py-1 bg-green-500 text-white rounded hover:bg-green-600 text-sm">
                Source Code
              </button>
            </div>
          </div>
        ))}

      </div>
    </div>
  );
};

export default Portfolio;