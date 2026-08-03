import React, { useState } from "react";
import pc from "../assets/gaurav.png";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from "react-scroll";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItem = [
    { id: 1, text: "Home" },
    { id: 2, text: "About" },
    { id: 3, text: "Portfolio" },
    { id: 4, text: "Experience" },
    { id: 5, text: "Contact" }
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-slate-200/80 bg-white/80 backdrop-blur">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex items-center gap-3">
          <img src={pc} className="h-12 w-12 rounded-full border border-slate-200 object-cover" alt="logo" />
          <div>
            <h1 className="text-lg font-semibold tracking-tight text-slate-900">
              Gaurav <span className="text-blue-600">Pawar</span>
            </h1>
            <p className="text-sm text-slate-500">Full-Stack Developer</p>
          </div>
        </div>

        <ul className="hidden items-center gap-8 md:flex">
          {navItem.map(({ id, text }) => (
            <li key={id} className="cursor-pointer text-sm font-medium text-slate-600 transition hover:text-blue-600">
              <Link to={text} spy={true} smooth={true} offset={-80} duration={500}>
                {text}
              </Link>
            </li>
          ))}
        </ul>

        <button
          className="rounded-full border border-slate-300 p-2 text-slate-700 md:hidden"
          onClick={() => setMenu(!menu)}
          aria-label="toggle menu"
        >
          {menu ? <RxCross2 size={22} /> : <IoMenu size={22} />}
        </button>
      </div>

      {menu && (
        <div className="border-t border-slate-200 bg-white px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-3">
            {navItem.map(({ id, text }) => (
              <li key={id} className="cursor-pointer text-sm font-medium text-slate-700 transition hover:text-blue-600">
                <Link onClick={() => setMenu(false)} to={text} spy={true} smooth={true} offset={-80} duration={500}>
                  {text}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Navbar;
