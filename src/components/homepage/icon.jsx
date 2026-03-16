import React from 'react'
import { Allura } from 'next/font/google'

const allura = Allura ({
     subsets: ["latin"],
     weight: ['400'],
})

const Icon = () => {
  return (
    <>
     <section className='bg-[#F1CB5E40] flex flex-col justify-center items-center px-4 sm:px-6 lg:px-0'>

          {/* Heading */}
          <div className='font-bold mt-10 text-center'>
               <h3 className='text-2xl sm:text-3xl md:text-4xl lg:text-[36px]'>
                 <span className={`${allura.className}`}>Become an</span> ICON
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

     </section> 
    </>
  )
}

export default Icon