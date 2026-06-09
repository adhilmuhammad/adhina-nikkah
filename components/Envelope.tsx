"use client";

import { motion } from "framer-motion";

interface EnvelopeProps {
  onOpen: () => void;
}

export default function Envelope({ onOpen }: EnvelopeProps) {
  return (
    <motion.div
      className="relative flex flex-col items-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      {/* Heading */}
      <div className="text-center mb-12">
        <h1 className="font-serif italic text-[56px] text-[#6F5B53]">
          Nikkah Invitation
        </h1>

        <p className="text-[#B8860B] italic mt-3 text-[20px] font-medium tracking-wide">
  Adhina Al Fathima & Shaz Musthak
        </p>

        <div className="w-20 h-px bg-[#D8C7A3] mx-auto mt-5"></div>
      </div>

      {/* Envelope */}
      <div className="w-[300px] sm:w-[380px] h-[210px] sm:h-[260px] bg-[#F7F1E8] shadow-2xl relative overflow-hidden rounded-2xl">

        {/* Back */}
        <div className="absolute inset-0 bg-[#F3EDE3]" />

        {/* Left flap */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#EFE7DB]"
          style={{
            clipPath: "polygon(0 0,0 100%,50% 55%)",
          }}
        />

        {/* Right flap */}
        <div
          className="absolute top-0 right-0 w-full h-full bg-[#EFE7DB]"
          style={{
            clipPath: "polygon(100% 0,100% 100%,50% 55%)",
          }}
        />

        {/* Top flap */}
        <div
          className="absolute top-0 left-0 w-full h-full bg-[#E8E0D3]"
          style={{
            clipPath: "polygon(0 0,100% 0,50% 55%)",
          }}
        />

        {/* Seal */}
        <motion.div
          whileHover={{ scale: 1.08 }}
          whileTap={{ scale: 0.9 }}
          onClick={onOpen}
          className="
            absolute
            left-1/2
            top-[54%]
            -translate-x-1/2
            -translate-y-1/2
            z-10
            cursor-pointer
          "
        >
          <div className="w-20 h-20 rounded-full bg-[#D4AF37] border-4 border-[#E5C75B] flex items-center justify-center shadow-xl">
            <span className="font-serif text-white text-2xl">
              A&S
            </span>
          </div>
        </motion.div>
      </div>

      {/* Bottom Text */}
      <p className="mt-8 text-[#6B7280] tracking-[0.35em] uppercase text-xs sm:text-sm">
        Tap The Seal To Open
      </p>
    </motion.div>
  );
}