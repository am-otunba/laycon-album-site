"use client";
import { localFont } from "next/font/local";
import Image from "next/image";

const simpleRoutine = localFont({
src: "../../fonts/simple-routine.otf",
weight: "400",
style: "normal",
});

export default function Playlist() {
const songs = [
{ title: "PRELUDE (with Agbalnaki)", link: "https://onerpm.link/laycon-kashimaawoo" },
{ title: "REASON", link: "https://onerpm.link/laycon-reason" },
{ title: "OYOYO", link: "https://onerpm.link/laycon-kashimaawoo" },
{ title: "NIGHT AND DAY (with Joeboy)", link: "https://onerpm.link/laycon-kashimaawoo" },
{ title: "FULL CIRCLE", link: "https://onerpm.link/laycon-kashimaawoo" },
{ title: "LIKE FATHER LIKE SON", link: "https://onerpm.link/laycon-kashimaawoo" },
{ title: "HIS AND HERS (with Fimi)", link: "https://onerpm.link/laycon-kashimaawoo" },
{ title: "ACCEPTANCE", link: "https://onerpm.link/laycon-kashimaawoo" },
{ title: "EVERYDAY ANTHEM", link: "https://onerpm.link/laycon-everyday-anthem" },
{ title: "ASEE", link: "https://onerpm.link/laycon-kashimaawoo" },
];

const openSong = (link) => {
window.open(link, "_blank");
};

return ( <section className="bg-[#F1CB5E40] py-12 px-4">

  {/* Title */}
  <div className="flex justify-center mb-10">
    <h3 className="font-bold text-3xl sm:text-4xl md:text-5xl">
      <span className={simpleRoutine.className}>The</span> Tracklist
    </h3>
  </div>

  {/* Container */}
  <div className="max-w-3xl mx-auto bg-white/70 backdrop-blur-md rounded-xl shadow-lg overflow-hidden">

    {/* Album Header */}
    <div className="flex flex-col sm:flex-row items-center sm:items-start gap-6 p-6 border-b">

      <Image
        src="/albumArt.jpg"
        alt="Album cover"
        width={130}
        height={130}
        className="rounded-xl shadow-md"
      />

      <div className="text-center sm:text-left">
        <h3 className={`${simpleRoutine.className} text-2xl sm:text-3xl font-bold`}>
          Káshìmáawòó
        </h3>
        <p className="text-lg sm:text-xl font-semibold text-gray-700">
          LAYCON
        </p>
      </div>

    </div>

    {/* Songs */}
    <div>

      {songs.map((song, index) => (
        <div
          key={index}
          onClick={() => openSong(song.link)}
          className="group flex items-center justify-between gap-4 px-4 sm:px-6 py-4 border-b last:border-none hover:bg-[#F1CB5E30] transition cursor-pointer"
        >

          {/* Left Side */}
          <div className="flex items-start sm:items-center gap-4 flex-1">

            {/* Track Number */}
            <span className="text-gray-500 text-sm sm:text-base w-6">
              {index + 1}
            </span>

            {/* Song Title */}
            <span className={`${simpleRoutine.className} text-base sm:text-lg md:text-xl text-gray-800 leading-snug`}>
              {song.title}
            </span>

          </div>

          {/* Play Button */}
          <button
            onClick={(e) => {
              e.stopPropagation();
              openSong(song.link);
            }}
            className="flex-shrink-0 w-10 h-10 flex items-center justify-center rounded-full bg-black text-white hover:scale-110 transition"
          >
            ▶
          </button>

        </div>
      ))}

    </div>

  </div>

</section>

);
}
