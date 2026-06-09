"use client";

import { useEffect, useState } from "react";

export default function CeremonyCard() {
  const [revealed, setRevealed] = useState(false);

  const targetDate = new Date("2026-06-22T10:30:00+05:30");

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
    <section className="flex justify-center py-6">
      <div className="w-full bg-[#FCFBF8] border border-[#E7D7A6] rounded-t-[100px] sm:rounded-t-[180px] rounded-b-[40px] shadow-xl overflow-hidden">

        <div className="px-6 sm:px-8 py-10 sm:py-14 text-center">

          <h2 className="text-[48px] sm:text-[82px] leading-[0.95] text-[#5C4D45] italic font-serif">
            Nikkah
            <br />
            Ceremony
          </h2>

          <div className="flex items-center justify-center gap-4 mt-8">
            <div className="w-14 sm:w-20 h-px bg-[#D7B75D]" />
            <div className="w-3 h-3 rotate-45 border border-[#D7B75D]" />
            <div className="w-14 sm:w-20 h-px bg-[#D7B75D]" />
          </div>

          {/* Reveal Button */}
          <div className="mt-10">
            {!revealed ? (
              <button
                onClick={() => setRevealed(true)}
                className="relative w-full h-[90px] sm:h-[110px] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.02] transition-all duration-500"
              >
                <div
                  className="absolute inset-0"
                  style={{
                    backgroundImage: "url('/gold-foil.png')",
                    backgroundSize: "100% 100%",
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat",
                  }}
                />

                <div className="relative flex items-center justify-center h-full">
                  <span className="uppercase tracking-[4px] sm:tracking-[10px] text-[16px] sm:text-[22px] text-black font-medium">
                    CLICK TO REVEAL
                  </span>
                </div>
              </button>
            ) : (
              <button
                className="w-full h-[90px] sm:h-[110px] rounded-2xl bg-white border border-[#D7B75D] shadow-md"
              >
                <span className="uppercase tracking-[3px] sm:tracking-[8px] text-[16px] sm:text-[22px] text-[#C8A03A]">
                  MARK ON CALENDAR
                </span>
              </button>
            )}
          </div>

          <div
            className={`mt-10 transition-all duration-700 ${
              !revealed
                ? "blur-xl opacity-20 pointer-events-none"
                : "opacity-100"
            }`}
          >
            <h3 className="text-[42px] sm:text-[70px] text-[#B88912] font-serif">
              NIKKAH
            </h3>

            <div className="w-20 h-px bg-[#D7B75D] mx-auto mt-6" />

            <p className="mt-8 text-xl sm:text-3xl text-[#4A5568]">
              Monday, 22 June 2026
            </p>

            <p className="mt-3 text-[#C8A03A] tracking-[3px] sm:tracking-[5px] uppercase text-sm">
              7 Muharram 1448 AH
            </p>

            <p className="mt-6 text-[34px] sm:text-[48px] font-semibold text-[#2D3748]">
              10:30 AM IST
            </p>

            <div className="mt-10 border-t border-[#E7D7A6] pt-10">

              <p className="text-[#B08932] tracking-[3px] sm:tracking-[5px] uppercase text-sm">
                Venue
              </p>

              <h4 className="mt-4 text-[34px] sm:text-[48px] font-serif text-[#4A403A]">
                Al Saj Amranta
              </h4>

              <p className="mt-2 text-xl sm:text-2xl text-[#666]">
                Trivandrum
              </p>

              <a
                href="https://maps.app.goo.gl/c1qRbAwuXjUmJiVk6?g_st=ic"
                target="_blank"
                className="inline-block mt-8 px-8 py-4 border border-[#C8A03A] rounded-full text-[#B88912]"
              >
                View Location
              </a>

            </div>

            <div className="mt-12 border-t border-[#E7D7A6] pt-10">

              <p className="text-[#B08932] tracking-[5px] uppercase">
                Countdown
              </p>

              <div className="grid grid-cols-4 gap-2 sm:gap-3 mt-8">

                {[
                  ["Days", timeLeft.days],
                  ["Hours", timeLeft.hours],
                  ["Minutes", timeLeft.minutes],
                  ["Seconds", timeLeft.seconds],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="border border-[#E7D7A6] rounded-2xl py-4 bg-[#FFFDF8]"
                  >
                    <div className="text-2xl sm:text-5xl text-[#B88912] font-semibold">
                      {String(value).padStart(2, "0")}
                    </div>

                    <div className="text-[10px] sm:text-xs uppercase mt-2 text-[#777]">
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
