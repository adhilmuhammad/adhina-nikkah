"use client";

import { useEffect, useState } from "react";

export default function CeremonyCard() {
  const [revealed, setRevealed] = useState(false);

  const targetDate = new Date("2026-06-22T11:00:00+05:30");

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      const diff = targetDate.getTime() - new Date().getTime();

      if (diff <= 0) return;

      setTimeLeft({
        days: Math.floor(diff / (1000 * 60 * 60 * 24)),
        hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((diff / (1000 * 60)) % 60),
        seconds: Math.floor((diff / 1000) % 60),
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="flex justify-center px-4 py-12">
      <div
        className="
        w-full
        max-w-[520px]
        bg-[#FCFBF8]
        border
        border-[#E7D7A6]
        rounded-t-[180px]
        rounded-b-[40px]
        shadow-xl
        overflow-hidden
      "
      >
        <div className="px-8 py-14 text-center">

          {/* Title */}
          <h2
            className="
            text-[82px]
            leading-[0.95]
            text-[#5C4D45]
            italic
            font-serif
          "
          >
            Nikkah
            <br />
            Ceremony
          </h2>

          {/* Divider */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-20 h-px bg-[#D7B75D]" />
            <div className="w-4 h-4 rotate-45 border border-[#D7B75D]" />
            <div className="w-20 h-px bg-[#D7B75D]" />
          </div>

         {/* Reveal Button */}
<div className="mt-10">
  {!revealed ? (
    <button
      onClick={() => setRevealed(true)}
      className="
        relative
        w-full
        h-[110px]
        rounded-2xl
        overflow-hidden
        shadow-xl
        hover:scale-[1.02]
        transition-all
        duration-500
      "
    >
      {/* Gold foil background covering entire box */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/gold-foil.png')",
          backgroundSize: "100% 100%",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />

      {/* Text */}
      <div className="relative flex items-center justify-center h-full">
        <span
          className="
            uppercase
            tracking-[10px]
            text-[22px]
            text-black
            font-medium
          "
        >
          CLICK TO REVEAL
        </span>
      </div>
    </button>
  ) : (
    <button
      onClick={() =>
        window.open(
          "https://calendar.google.com/calendar/render?action=TEMPLATE&text=Nikkah+Ceremony",
          "_blank"
        )
      }
      className="
        w-full
        h-[110px]
        rounded-2xl
        bg-white
        border
        border-[#D7B75D]
        shadow-md
        hover:bg-[#faf7ef]
        transition-all
      "
    >
      <span
        className="
          uppercase
          tracking-[8px]
          text-[22px]
          text-[#C8A03A]
        "
      >
        MARK ON CALENDAR
      </span>
    </button>
  )}
</div>

          {/* Main Content */}
          <div
            className={`
              mt-10
              transition-all
              duration-700
              min-h-[620px]
              ${
                !revealed
                  ? "blur-xl opacity-20 pointer-events-none"
                  : "opacity-100"
              }
            `}
 >
<h3
  className="
    text-[70px]
    text-[#B88912]
    font-serif
  "
>
  NIKKAH
</h3>

<div className="w-20 h-px bg-[#D7B75D] mx-auto mt-6" />

<p className="mt-8 text-3xl text-[#4A5568]">
  Monday, 22 June 2026
</p>

<p
  className="
  mt-3
  text-[#C8A03A]
  tracking-[5px]
  uppercase
"
>
  7 Muharram 1448 AH
</p>

<p
  className="
  mt-6
  text-[48px]
  font-semibold
  text-[#2D3748]
"
>
  10:30 AM IST
</p>

{/* Venue */}
<div className="mt-10 border-t border-[#E7D7A6] pt-10">

  <p
    className="
    text-[#B08932]
    tracking-[5px]
    uppercase
    text-sm
  "
  >
    Venue
  </p>

  <h4
    className="
    mt-4
    text-[48px]
    font-serif
    text-[#4A403A]
  "
  >
    Al Saj Amranta
  </h4>

  <p className="mt-2 text-2xl text-[#666]">
    Trivandrum
  </p>

  <a
    href="https://maps.app.goo.gl/c1qRbAwuXjUmJiVk6?g_st=ic"
    target="_blank"
    className="
    inline-block
    mt-8
    px-10
    py-4
    border
    border-[#C8A03A]
    rounded-full
    text-[#B88912]
    tracking-[2px]
    hover:bg-[#faf7ef]
    transition
    duration-300
  "
  >
    View Location
  </a>

</div>

{/* Countdown */}
<div className="mt-12 border-t border-[#E7D7A6] pt-10">

  <p
    className="
    text-[#B08932]
    tracking-[8px]
    uppercase
  "
  >
    Countdown
  </p>

  <div className="grid grid-cols-4 gap-3 mt-8">

    {[
      ["Days", timeLeft.days],
      ["Hours", timeLeft.hours],
      ["Minutes", timeLeft.minutes],
      ["Seconds", timeLeft.seconds],
    ].map(([label, value]) => (

      <div
        key={label}
        className="
        border
        border-[#E7D7A6]
        rounded-2xl
        py-5
        bg-[#FFFDF8]
      "
      >

        <div
          className="
          text-5xl
          text-[#B88912]
          font-semibold
        "
        >
          {String(value).padStart(2, "0")}
        </div>

        <div
          className="
          text-xs
          uppercase
          tracking-[2px]
          mt-2
          text-[#777]
        "
        >
          {label}
        </div>

      </div>

    ))}

  </div>

</div>

</div>

</div>

</div>

</section>
);
}            
            