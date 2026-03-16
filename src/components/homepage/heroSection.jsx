import { localFont } from 'next/font/local'
import React from 'react'
import Album from './album'
import Countdown from './countdown'
import Playlist from './playlist'
import Preorder from './preorder'
import Shop from './shop'
import Icon from './icon'

const simpleRoutine = localFont({
  src: '../../fonts/simple-routine.otf',
  weight: '400',
  style: 'normal',
})

const HeroSection = () => {
  return (
    <>
      <section className="relative h-screen w-full overflow-hidden flex flex-col items-center justify-center">

        {/* NAVBAR */}
        <nav className="absolute top-0 left-0 w-full z-20 flex justify-center items-center px-6 md:px-12 py-6 text-sm md:text-[18px] font-bold gap-4 md:gap-8">

          <a href="#album" className="cursor-pointer hover:text-black hover:scale-110 transition-transform duration-200">
               Album
          </a>
          <a href="#tracklist" className="cursor-pointer hover:text-black hover:scale-110 transition-transform duration-200">
            Tracklist
          </a>

          <a href="#listening" className="cursor-pointer hover:text-black hover:scale-110 transition-transform duration-200">
            Listening Experience
          </a>

          <a href="#merch" className="cursor-pointer hover:text-black hover:scale-110 transition-transform duration-200">
            Merch
          </a>

        </nav>

        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover blur-sm"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>

        {/* Overlay */}
        <div className="absolute inset-0 bg-[#9ecfeb40]"></div>

        {/* Content */}
        <div className="relative z-10 text-center px-6">

          <h1 className="text-[#000000] text-5xl sm:text-7xl md:text-[96px] leading-tight">
            <span className={simpleRoutine.className}>Káshimáawòó</span>
          </h1>

          <a
            href="https://onerpm.link/laycon-kashimaawoo"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-block px-6 py-4 md:p-6 rounded-md cursor-pointer text-base md:text-lg bg-black text-white hover:scale-105 transition"
          >
            Pre-Save Album
          </a>

        </div>

      </section>

      <div className='relative bg-cover bg-center bg-no-repeat'
          style={{ backgroundImage: "url('/bg-sky.jpg')" }}
      >


      <div className="absolute inset-0 bg-[#9ecfeb40]"></div>

      <div className='relative'>
        <div id="album">
          <Album />
        </div>
          <Countdown />
        <div id="tracklist">
          <Playlist />
        </div>

        <div id="listening">
          <Preorder />
        </div>

        <div id="merch">
          <Shop />
        </div>

        
        <Icon />
        </div>
      </div>
    </>
  )
}

export default HeroSection