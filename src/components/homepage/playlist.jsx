"use client";
import { localFont } from 'next/font/local'
import Image from "next/image";

const simpleRoutine = localFont({
  src: '../../fonts/simple-routine.otf',
  weight: '400',
  style: 'normal',
})

export default function Playlist() {

  const songs = [
    { title: "1. PRELUDE (with Agbalnaki)", link: 'https://onerpm.link/laycon-kashimaawoo' },
    { title: "2. REASON", link:'https://onerpm.link/laycon-reason' },
    { title: "3. OYOYO", link: 'https://onerpm.link/laycon-kashimaawoo' },
    { title: "4. NIGHT AND DAY (with Joeboy)", link: 'https://onerpm.link/laycon-kashimaawoo' },
    { title: "5. FULL CIRCLE", link: 'https://onerpm.link/laycon-kashimaawoo' },
    { title: "6. LIKE FATHER LIKE SON", link: 'https://onerpm.link/laycon-kashimaawoo' },
    { title: "7. HIS AND HERS (with Fimi)", link: 'https://onerpm.link/laycon-kashimaawoo' },
    { title: "8. ACCEPTANCE", link: 'https://onerpm.link/laycon-kashimaawoo' },
    { title: "9. EVERYDAY ANTHEM", link:'https://onerpm.link/laycon-everyday-anthem' },
    { title: "10. ASEE", link: 'https://onerpm.link/laycon-kashimaawoo' },
  ];

  const openSong = (link) => {
    window.open(link, "_blank");
  };

  return (
    <>
      <div className="bg-[#F1CB5E40]">
        <div className="flex flex-col justify-center items-center mb-2">
          <h3 className="font-bold text-2xl sm:text-3xl md:text-4xl lg:text-5xl">
            <span className={simpleRoutine.className}>The</span> Tracklist
          </h3>
        </div>

        <div className="w-full sm:w-[90%] md:w-[80%] lg:w-[60%] mx-auto border rounded-md p-2">
          
          <div className="flex flex-col sm:flex-row p-3 mb-6 gap-y-4 sm:gap-x-8 items-center sm:items-start">
            <Image
              src="/albumArt.jpg"
              alt="Album cover"
              width={100}
              height={100}
              className="rounded-xl shadow-lg"
            />
            <div className="text-center sm:text-left">
              <h3 className={`${simpleRoutine.className} text-xl sm:text-2xl md:text-3xl font-bold`}>
                Káshìmáawòó
              </h3>
              <p className="font-bold text-lg sm:text-xl md:text-2xl">LAYCON</p>
            </div>
          </div>

          {songs.map((song, index) => (
            <div
              key={index}
              onClick={() => openSong(song.link)}
              className="flex flex-col sm:flex-row items-center justify-between border-b py-4 px-2 transition hover:bg-[#F1CB5E49] cursor-pointer"
            >
              
              {/* Song Title */}
              <span className={`${simpleRoutine.className} text-lg sm:text-xl md:text-2xl lg:text-[28px] font-medium text-gray-800 mb-2 sm:mb-0`}>
                {song.title}
              </span>

              {/* Play Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  openSong(song.link);
                }}
                className="w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition"
              >
                ▶
              </button>

            </div>
          ))}

        </div>
      </div>
    </>
  );
}