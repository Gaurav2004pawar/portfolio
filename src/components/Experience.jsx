import React from "react";

import Html from "../assets/Html.png";
import Css from "../assets/css.png";
import Javascript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Express from "../assets/express.png";
import Node from "../assets/nodejs.png";
import Mongodb from "../assets/mongodb.png";
import Github from "../assets/github.png";
import Figma from "../assets/figma.png";

const Experience = () => {
  const skills = [
    { id: 1, logo: Html, name: "HTML" },
    { id: 2, logo: Css, name: "CSS" },
    { id: 3, logo: Javascript, name: "JavaScript" },
    { id: 4, logo: ReactImg, name: "React" },
    { id: 5, logo: Node, name: "NodeJS" },
    { id: 6, logo: Express, name: "Express" },
    { id: 7, logo: Mongodb, name: "MongoDB" },
    { id: 8, logo: Github, name: "GitHub" },
    { id: 9, logo: Figma, name: "Figma" }
  ];

  return (
    <section name="Experience" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">Experience</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            A practical toolkit for building polished web applications.
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-slate-600">
            I enjoy creating responsive interfaces, developing API-based features, and turning concepts into reliable solutions.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">What I bring</h3>
            <ul className="mt-4 space-y-3 text-slate-600">
              <li>• Strong understanding of front-end and back-end fundamentals.</li>
              <li>• Comfortable working with modern JavaScript libraries and frameworks.</li>
              <li>• Focused on reusable components and user-friendly design.</li>
            </ul>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {skills.map((item) => (
              <div key={item.id} className="rounded-2xl border border-slate-200 bg-white p-5 text-center shadow-sm transition hover:-translate-y-1 hover:shadow-md">
                <img src={item.logo} alt={item.name} className="mx-auto h-14 w-14 object-contain" />
                <h3 className="mt-3 font-semibold text-slate-900">{item.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;