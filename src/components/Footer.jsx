import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="border-t border-slate-200 bg-slate-900 py-10 text-slate-300">
      <div className="mx-auto flex max-w-7xl flex-col items-center px-4 text-center sm:px-6 lg:px-8">
        <div className="flex gap-4 text-xl">
          <a href="https://www.facebook.com" target="_blank" rel="noreferrer" className="transition hover:text-blue-400">
            <FaFacebook />
          </a>
          <a href="https://www.instagram.com" target="_blank" rel="noreferrer" className="transition hover:text-pink-400">
            <FaInstagramSquare />
          </a>
          <a href="https://web.telegram.org" target="_blank" rel="noreferrer" className="transition hover:text-sky-400">
            <FaTelegram />
          </a>
          <a href="https://in.linkedin.com" target="_blank" rel="noreferrer" className="transition hover:text-blue-500">
            <FaLinkedin />
          </a>
        </div>

        <div className="mt-6 border-t border-slate-700 pt-6">
          <p className="text-sm">© 2026 Gaurav Pawar. All rights reserved.</p>
          <p className="mt-2 text-sm text-slate-400">Crafted with React, Tailwind CSS, and care for responsive design.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
