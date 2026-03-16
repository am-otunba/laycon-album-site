"use client";
import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-03-25T00:00:00Z").getTime();

export default function Countdown() {
  const getTimeLeft = () => {
    const now = Date.now();
    const distance = TARGET_DATE - now;

    if (distance <= 0) {
      return { days: 0, hours: 0, minutes: 0, seconds: 0 };
    }

    return {
      days: Math.floor(distance / (1000 * 60 * 60 * 24)),
      hours: Math.floor((distance / (1000 * 60 * 60)) % 24),
      minutes: Math.floor((distance / (1000 * 60)) % 60),
      seconds: Math.floor((distance / 1000) % 60),
    };
  };

  const [timeLeft, setTimeLeft] = useState(getTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      const updated = getTimeLeft();
      setTimeLeft(updated);

      if (
        updated.days === 0 &&
        updated.hours === 0 &&
        updated.minutes === 0 &&
        updated.seconds === 0
      ) {
        clearInterval(timer);
      }
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
  <div className="flex justify-center items-center bg-[#F1CB5E40] px-4 py-10">

    <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 sm:gap-8 md:gap-10">

      <TimeBox value={timeLeft.days} label="DAYS" />
      <TimeBox value={timeLeft.hours} label="HOURS" />
      <TimeBox value={timeLeft.minutes} label="MINUTES" />
      <TimeBox value={timeLeft.seconds} label="SECONDS" />

    </div>

  </div>
);
}



function TimeBox({ value, label }) {
  return (
    <div className="flex flex-col items-center">

      {/* number box */}
      <div
        className="
        bg-black text-white
        w-14 h-14
        sm:w-16 sm:h-16
        md:w-20 md:h-20
        rounded-xl
        flex items-center justify-center
        text-2xl sm:text-3xl md:text-4xl
        font-light
        shadow-lg
        "
      >
        {String(value).padStart(2, "0")}
      </div>

      {/* label */}
      <span className="text-[11px] sm:text-xs tracking-widest mt-3 text-gray-700">
        {label}
      </span>

    </div>
  );
}


function CircleMarker() {
  return (
    <div className="relative flex items-center justify-center">

      {/* main grey circle */}
      <div className="w-3 h-3 bg-gray-300 rounded-full"></div>

      {/* top white dot */}
      <div className="absolute -top-2 w-0.5 h-0.5 bg-white rounded-full"></div>

      {/* bottom white dot */}
      <div className="absolute -bottom-2 w-0.5 h-0.5 bg-white rounded-full"></div>

    </div>
  );
}

// function Dot() {
//   return (
//     <div className="z-10 w-2 h-2 sm:w-3 sm:h-3 md:w-4 md:h-4 bg-gray-300 rounded-full"></div>
//   );
// }