"use client";
import React from 'react'
import Image from 'next/image'
import { localFont } from 'next/font/local'

const simpleRoutine = localFont({
  src: '../../fonts/simple-routine.otf',
  weight: '400',
  style: 'normal',
})

const handlePreOrder = () => {
  window.open("https://thelayconstore.bumpa.shop/products/ksmw-vinyl/4503876?location=313151", "_blank");
};

const Preorder = () => {
  return (
    <>
     <section className='w-full flex flex-col justify-center items-center bg-[#F1CB5E40] px-4 sm:px-6 lg:px-0'>

       {/* Vinyl Image */}
       <div className='mt-35'>
          <Image 
            width={500}
            height={500}
            src={'/Vinyl.png'}
            alt='Vinyl Mockup'
            className='w-[80vw] max-w-[500px] h-auto'
          />
       </div>   

       {/* Pre-order button */}
       <div className='flex flex-col items-center mt-5'>
          <p className='text-center text-sm sm:text-base md:text-lg'>A physical piece of the story. Limited copies available.</p>
          <button 
          onClick={handlePreOrder}
          className='bg-[#000000] p-3 rounded-md text-[#ffffff] mt-5 cursor-pointer text-sm sm:text-base md:text-lg'>
            Pre-Order Vinyl
          </button>
       </div>

       {/* Listening Party Section */}
       <div className="flex flex-col items-center justify-center w-full mt-35">

         <div className="relative w-full max-w-[500px]">

            {/* Background Image */}
            <Image
              width={500}
              height={500}
              src="/listeningParty.png"
              alt="listeningParty"
              className="object-cover w-full h-auto rounded-md"
            />

            {/* Overlay Text */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10 px-2">
              <p className="text-[24px] sm:text-[30px] md:text-[36px] text-center text-[#ffffff] font-bold">
                <span className={`${simpleRoutine.className}`}>Listening</span> PARTY
              </p>
              <p className='mt-2 sm:mt-3 text-center text-sm sm:text-base md:text-lg text-[#ffffff]'>
                A room full of people. A world inside your head.
              </p>
            </div>

            {/* Bottom Text */}
            <div className="absolute bottom-2 left-0 right-0 flex justify-center z-10 px-2">
              <p className="text-[#ffffff] text-center text-sm sm:text-base md:text-lg">
                More details coming soon!
              </p>
            </div>

         </div>

         {/* Get Invite Form */}
        <form
          action="https://formspree.io/f/xreyanyj"
          method="POST"
          className="flex flex-col items-center mt-5 gap-3"
        >

          <input
            type="email"
            name="email"
            required
            placeholder="Enter your email for the invite"
            className="border p-2 rounded-md w-[250px] text-black"
          />

          <button
            type="submit"
            className="bg-[#000000] p-3 rounded-md text-[#ffffff] cursor-pointer text-sm sm:text-base md:text-lg"
          >
            Get Invite
          </button>

        </form>
       </div>

       {/* Sponsors Section */}
       <div className='mt-35 flex flex-col justify-center items-center w-full'>
         <h3 className='text-[18px] sm:text-[20px] md:text-[22px] mb-4'>Sponsored By:</h3>
         <div className='flex justify-center w-full'>
              <Image
                width={400}
                height={400}
                src={'/sponsors.png'}
                alt='Sponsors'
                className='w-[80vw] max-w-[250px] h-auto'
              />
         </div>
       </div>

     </section> 
    </>
  )
}

export default Preorder