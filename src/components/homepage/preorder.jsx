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

       {/* Listening Experience Section */}
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
        <span className={`${simpleRoutine.className}`}>Listening</span> Experience
      </p>
      <p className="mt-2 sm:mt-3 text-center text-sm sm:text-base md:text-lg text-[#ffffff]">
        A room full of people. A world inside your head.
      </p>
    </div>

    {/* Sponsors Logo */}
    <div className="absolute bottom-7 left-5 right-0 flex justify-center z-10">
      <Image
        width={400}
        height={400}
        src="/sponsors.png"
        alt="Sponsors"
        className="w-[120px] sm:w-[150px] h-auto"
      />
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
      className="border-b-2 p-2 border-black text-center outline-none bg-transparent pb-2 text-sm sm:text-base md:text-md w-125 focus:border-[#F1CB5E] transition"
    />

    <button
      type="submit"
      className="bg-[#000000] p-4 rounded-md text-[#ffffff] cursor-pointer text-sm sm:text-base md:text-lg"
    >
      Get Invite
    </button>

  </form>

</div>

     </section> 
    </>
  )
}

export default Preorder