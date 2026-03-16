"use client";
import { useEffect, useState } from "react";

const TARGET_DATE = new Date("2026-01-01T00:00:00").getTime();

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
    <div className="relative flex flex-wrap items-center justify-center gap-3 sm:gap-4 md:gap-6 bg-[#F1CB5E40] px-4 py-6">

      {/* center connector line */}

      <TimeBox value={timeLeft.days} label="DAYS" />
      {/* <Dot /> */}
      <TimeBox value={timeLeft.hours} label="HOURS" />
      {/* <Dot /> */}
      <TimeBox value={timeLeft.minutes} label="MINUTES" />
      {/* <Dot /> */}
      <TimeBox value={timeLeft.seconds} label="SECONDS" />

    </div>
  );
}



function TimeBox({ value, label }) {
  return (
    <div className="relative flex flex-col items-center mt-10">

      {/* timeline line */}
      <div className="absolute top-[40px] left-0 right-0 h-[2px] bg-gray-300 z-20"></div>

      {/* circle markers */}
      <div className="absolute top-[36px] left-0 z-30">
        <CircleMarker />
      </div>

      <div className="absolute top-[36px] right-0 z-30">
        <CircleMarker />
      </div>

      {/* black box */}
      <div
        className="bg-black text-white
        w-14 h-14
        sm:w-16 sm:h-16
        md:w-20 md:h-20
        lg:w-24 lg:h-20
        rounded-xl flex items-center justify-center
        text-2xl sm:text-3xl md:text-4xl lg:text-5xl
        font-light shadow-lg
        relative z-10"
      >
        {String(value).padStart(2, "0")}
      </div>

      {/* label */}
      <span className="text-[10px] sm:text-xs tracking-widest mt-3 text-gray-700">
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