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

const openExternalLink = (url) => {
  window.open(url, "_blank", "noopener,noreferrer");
};

const Preorder = () => {
  return (
    <section className="w-full flex flex-col items-center bg-[#F1CB5E40] px-4 sm:px-6 py-16">
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
        <button
          type="button"
          onClick={() => openExternalLink("https://forms.gle/MXymjFro9K8NE35SA")}
          className="relative w-full max-w-[520px] rounded-lg overflow-hidden shadow-lg cursor-pointer"
        >
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
          <div className="absolute inset-0 flex flex-col items-center justify-center text-center z-10">
            <p className="text-white text-2xl sm:text-3xl md:text-4xl font-bold">
              <span className={simpleRoutine.className}>
                Listening Experience
              </span>
            </p>

            <p className="mt-3 text-white text-sm sm:text-base md:text-lg max-w-xs">
              A room full of people. A world inside your head.
            </p>
          </div>

          {/* SPONSORS */}
          <div className="absolute bottom-0 left-0 right-0 flex justify-between items-center gap-4 sm:gap-6 z-10 px-3 sm:px-5 pb-2">
            <Image
              src="/drink responsibly.png"
              alt="Drink Responsibly"
              width={100}
              height={40}
              className="w-[60px] sm:w-[70px] h-auto object-contain"
            />

            <div
              onClick={(e) => {
                e.stopPropagation();
                openExternalLink(
                  "https://www.port.ac.uk/study/international-students/how-to-apply"
                );
              }}
              className="cursor-pointer hover:scale-105 transition"
            >
              <Image
                src="/portsmouth 1.svg"
                alt="University of Portsmouth"
                width={120}
                height={60}
                className="w-[55px] sm:w-[65px] h-auto object-contain"
              />
            </div>

            <div
              onClick={(e) => {
                e.stopPropagation();
                openExternalLink("https://theunforsaken.org/");
              }}
              className="cursor-pointer hover:scale-105 transition"
            >
              <Image
                src="/Unforsaken.png"
                alt="The Unforsaken House of Hephzibah"
                width={120}
                height={60}
                className="w-[95px] sm:w-[110px] h-auto object-contain"
              />
            </div>

            <div
              onClick={(e) => {
                e.stopPropagation();
                openExternalLink("https://jameson.com");
              }}
              className="cursor-pointer hover:scale-105 transition"
            >
              <Image
                src="/must be a jameson logo.png"
                alt="Jameson"
                width={100}
                height={40}
                className="w-[70px] sm:w-[85px] h-auto object-contain"
              />
            </div>
          </div>
        </button>

        {/* INVITE */}
        <button
          type="button"
          onClick={() => openExternalLink("https://forms.gle/MXymjFro9K8NE35SA")}
          className="mt-8 bg-black text-white px-6 py-3 rounded-md text-sm sm:text-base md:text-lg hover:scale-105 transition"
        >
          Get Invite
        </button>
      </div>
    </section>
  );
};

export default Preorder;