import React, { useState } from "react";
import pc from "../../public/software.png";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";
import { Link } from 'react-scroll';


const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navItem = [
    {
      id:1,
      text:"Home",
    },
    {
      id:2,
      text:"About",
    },
    {
      id:3,
      text:"Portfolio",
    },
    {
      id:4,
      text:"Experience",
    },
    {
      id:5,
      text:"Contact"
    },
    
  ];

  

  return (
    <>
      <div className=" max-w-screen-2xl mx-auto px-4 md:px-20 h-16 shadow-md flex justify-between items-center relative z-50 top-0 bottom-0 ">

        {/* Left Side */}
        <div className="flex items-center space-x-3">
          <img src={pc} className="h-12 w-12 rounded-full" alt="logo" />
          <div>
            <h1 className="text-xl font-bold">
              Gaura<span className="text-blue-500">v</span>
            </h1>
            <p className="text-sm text-gray-500">React Developer</p>
          </div>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6">
          {
            navItem.map(({id,text})=>(
              <li className="hover:scale-90 duration-150 cursor-pointer" key={id}>
                <Link to={text} smooth={true} duration={500}>{text} </Link></li>
            ))
          }
        </ul>

        {/* Mobile Icon */}
        <div
          className="md:hidden text-2xl cursor-pointer"
          onClick={() => setMenu(!menu)}
        >
          {menu ? <IoMenu size={24} /> :  <RxCross2 size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {menu && (
        
        <ul className="md:hidden flex flex-col items-center space-y-4 mt-4 bg-gray-100 py-4 shadow-md">
          {
            navItem.map(({id,text})=>(
              <li  className="hover:scale-90 duration-150 cursor-pointer" key={id}> <Link  onClick={() => setMenu(!menu)}to={text} smooth={true} duration={500}>{text}</Link></li>
            ))
          }
        </ul>
)}
    </>
  );
};

export default Navbar;
