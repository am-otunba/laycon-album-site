import React from 'react'
import { localFont } from 'next/font/local'
import { FaInstagram, FaSpotify, FaYoutube, FaXTwitter } from "react-icons/fa6";

const simpleRoutine = localFont({
  src: '../../fonts/simple-routine.otf',
  weight: '400',
  style: 'normal',
})

const Icon = () => {
  return (
    <>
     <section className='bg-[#F1CB5E40] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-0'>

          {/* Heading */}
          <div className='font-bold mt-10 text-center'>
               <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-[36px]'>
                 <span className={`${simpleRoutine.className}`}>Become an</span> ICON
               </h3>
               <p className='mt-2 text-sm sm:text-base md:text-lg'>For those who feel it deeply.</p>
          </div>     

          {/* Form */}
                <form action="https://formspree.io/f/mykndrry"
                method="POST"
                className='mb-10 flex w-full justify-center mt-5'>
               <input 
                 type="email" 
                 name='email'
                 required
                 placeholder='Enter email' 
                 className='border-b-2 w-[80%] sm:w-[60%] md:w-[40%] mt-3 outline-0 text-sm sm:text-base md:text-lg p-1'
               />

               <button
                type="submit"
                className="flex items-center justify-center w-10 h-10 rounded-full bg-black text-white hover:scale-105 transition"
              >
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    width="18"
                    height="18"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                </svg>
              </button>
          </form>

          <div className="flex gap-6 mb-10 text-2xl">

          <a
            href="https://www.instagram.com/itslaycon/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaInstagram />
          </a>

          <a
            href="https://x.com/itsLaycon"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://onerpm.link/laycon-kashimaawoo"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaSpotify />
          </a>

          <a
            href="https://youtu.be/WTRyUxyU9GU?si=DTjeXiEm-69mpOQk"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-110 transition"
          >
            <FaYoutube />
          </a>

        </div>
     </section> 
    </>
  )
}

export default Icon