import React from 'react'
import { FaFacebook, FaInstagramSquare, FaTelegram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <>
    <hr/>
    <footer className='py-12'>
        <div className='max-w-screen-2xl mx-auto container md:px-20 my-20 p-1'>
      <div className='items-center justify-cente flex flex-col' > 
         <div className='flex space-x-2'>
            <FaFacebook size={24}/>
            <FaInstagramSquare size={24}/>
            <FaTelegram size={24}/>
            <FaLinkedin size={24}/>

         </div>
         <div className='mt-8 border-t border-gray-700 pt-8 flex flex-col items-center'>
            <p className='text-white'>&copy; 2024 Your company . All rights reservrs .</p>
            <p className='text-white'> Creating a website practies website </p>
         </div>
      </div>
    </div>

    </footer>
    
    </>
  )
}

export default Footer
