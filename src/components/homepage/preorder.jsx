"use client";
import React from "react";
import Image from "next/image";
import { localFont } from "next/font/local";

const simpleRoutine = localFont({
src: "../../fonts/simple-routine.otf",
weight: "400",
style: "normal",
});

const handlePreOrder = () => {
window.open(
"https://thelayconstore.bumpa.shop/products/ksmw-vinyl/4503876?location=313151",
"_blank"
);
};

const Preorder = () => {
return ( <section className="w-full flex flex-col items-center bg-[#F1CB5E40] px-4 sm:px-6 py-16">

  {/* VINYL SECTION */}
  <div className="flex flex-col items-center max-w-4xl w-full">

    <Image
      width={500}
      height={500}
      src="/Vinyl.png"
      alt="Vinyl Mockup"
      className="w-[85vw] max-w-[420px] h-auto"
    />

    <p className="text-center mt-6 text-sm sm:text-base md:text-lg max-w-md">
      A physical piece of the story. Limited copies available.
    </p>

    <button
      onClick={handlePreOrder}
      className="mt-5 bg-black text-white px-6 py-3 rounded-md text-sm sm:text-base md:text-lg hover:scale-105 transition"
    >
      Pre-Order Vinyl
    </button>

  </div>


  {/* LISTENING EXPERIENCE */}
  <div className="flex flex-col items-center w-full mt-20">

    <div className="relative w-full max-w-[520px] rounded-lg overflow-hidden shadow-lg">

      {/* Background Image */}
      <Image
        width={520}
        height={520}
        src="/listeningParty.png"
        alt="Listening Party"
        className="w-full h-auto object-cover"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/20"></div>

      {/* Text */}
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-10">

        <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
          <span className={simpleRoutine.className}>
            Listening Experience
          </span>
        </p>

        <p className="mt-3 text-white text-sm sm:text-base md:text-lg max-w-xs">
          A room full of people. A world inside your head.
        </p>

      </div>

      {/* Sponsors */}
      <div className="absolute bottom-6 left-0 right-0 flex justify-center items-center gap-6 z-10">

        <a
          href="https://www.port.ac.uk/study/international-students/how-to-apply"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/portsmouth 1.svg"
            alt="University of Portsmouth"
            width={120}
            height={60}
            className="w-[55px] sm:w-[65px] hover:scale-105 transition"
          />
        </a>

        <a
          href="https://theunforsaken.org/"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            src="/Unforsaken.png"
            alt="The Unforsaken House of Hephzibah"
            width={120}
            height={60}
            className="w-[95px] sm:w-[110px] hover:scale-105 transition"
          />
        </a>

      </div>

      {/* Bottom Text */}
      <div className="absolute bottom-3 left-0 right-0 flex justify-center z-10">
        <p className="text-white text-xs sm:text-sm md:text-base text-center">
          More details coming soon!
        </p>
      </div>

    </div>


    {/* INVITE FORM */}
    <form
      action="https://formspree.io/f/xreyanyj"
      method="POST"
      className="flex flex-col items-center mt-8 w-full max-w-md"
    >

      <input
        type="email"
        name="email"
        required
        placeholder="Enter your email for the invite"
        className="w-full border-b-2 border-black bg-transparent text-center outline-none pb-2 text-sm sm:text-base focus:border-[#F1CB5E] transition"
      />

      <button
        type="submit"
        className="mt-5 bg-black text-white px-6 py-3 rounded-md text-sm sm:text-base md:text-lg hover:scale-105 transition"
      >
        Get Invite
      </button>

    </form>

  </div>
</section>

);
};

export default Preorder;
