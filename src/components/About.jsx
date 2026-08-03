import React from "react";

const About = () => {
  const strengths = [
    "Responsive web design",
    "Modern React interfaces",
    "REST API development",
    "Clean and maintainable code"
  ];

  return (
    <section name="About" className="bg-white py-16 sm:py-20">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.3em] text-blue-600">About Me</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Building thoughtful digital experiences with modern web technologies.
          </h2>
          <p className="mt-5 text-lg leading-8 text-slate-600">
            I am Gaurav Pawar, a BCA graduate with strong interest in web development and a practical understanding of the MERN stack. I enjoy turning ideas into responsive, elegant, and high-performing applications.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-3xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
            <h3 className="text-xl font-semibold text-slate-900">Education & Training</h3>
            <p className="mt-4 text-slate-600">
              Bachelor of Business Administration (Computer Application) — Maharaja Sayajirao Gaikwad College, Pune University, 2025.
            </p>
            <p className="mt-4 text-slate-600">
              I have also worked on multiple hands-on projects including chatbot and weather applications, which helped me strengthen my front-end and back-end development skills.
            </p>
          </div>

          <div className="rounded-3xl border border-slate-200 bg-slate-900 p-8 text-white shadow-sm">
            <h3 className="text-xl font-semibold">Core Strengths</h3>
            <ul className="mt-4 space-y-3 text-slate-300">
              {strengths.map((item) => (
                <li key={item} className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-blue-400" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
