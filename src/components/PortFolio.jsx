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
    { id: 1, logo: Html, name: "HTML", description: "Structured and semantic web layouts." },
    { id: 2, logo: Css, name: "CSS", description: "Modern styling and responsive layouts." },
    { id: 3, logo: Javascript, name: "JavaScript", description: "Interactive UI logic and behavior." },
    { id: 4, logo: ReactImg, name: "React", description: "Reusable component-driven interfaces." },
    { id: 5, logo: Node, name: "Node.js", description: "Server-side application logic." },
    { id: 6, logo: Express, name: "Express", description: "Streamlined backend routing and APIs." },
    { id: 7, logo: Mongodb, name: "MongoDB", description: "Scalable data storage for applications." },
    { id: 8, logo: Github, name: "GitHub", description: "Version control and collaboration." }
  ];

  return (
    <section name="Portfolio" className="bg-slate-50 py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Portfolio</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Skills and projects shaped for modern web development.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            I focus on clean design, thoughtful user experience, and practical implementation using the latest tools.
          </p>
        </div>

        <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {projects.map((item) => (
            <div key={item.id} className="rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-lg">
              <img src={item.logo} alt={item.name} className="mx-auto h-16 w-16 object-contain" />
              <div className="mt-5 text-center">
                <h3 className="text-lg font-semibold text-slate-900">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-600">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;