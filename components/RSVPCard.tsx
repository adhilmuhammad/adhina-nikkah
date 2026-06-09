"use client";

interface RSVPCardProps {
  onAccept: () => void;
  onDecline: () => void;
}

export default function RSVPCard({
  onAccept,
  onDecline,
}: RSVPCardProps) {
  return (
    <section className="relative">

      {/* side circles */}
      <div className="absolute left-[-10px] top-[180px] w-5 h-5 rounded-full bg-[#F8F4F1]" />
      <div className="absolute right-[-10px] top-[180px] w-5 h-5 rounded-full bg-[#F8F4F1]" />

      <div
        className="
        bg-[#FEFCF8]
        rounded-[28px]
        overflow-hidden
        shadow-[0_15px_35px_rgba(0,0,0,0.08)]
        border border-[#ece5da]
      "
      >
        {/* header */}
        <div className="py-14 text-center">

          <h2
            className="
            text-[56px]
            leading-none
            text-[#2e2b2b]
            font-serif
          "
          >
            Will You
            <br />
            Attend?
          </h2>

          <div className="w-16 h-px bg-[#d4c091] mx-auto mt-8" />
        </div>

        {/* dotted line */}
        <div className="border-t border-dashed border-[#e3c995]" />

        {/* body */}
        <div className="px-8 py-10 space-y-6">

          {/* YES */}
          <button
            onClick={onAccept}
            className="
            w-full
            rounded-[22px]
            border
            border-[#b7ebc2]
            bg-[#f6fffa]
            p-6
            flex
            items-center
            gap-5
          "
          >
            <div
              className="
              w-12
              h-12
              rounded-full
              border
              border-[#86d69b]
              flex
              items-center
              justify-center
              text-[#28a745]
              text-2xl
            "
            >
              ✓
            </div>

            <div className="text-left">
              <div
                className="
                font-serif
                text-2xl
                text-[#303030]
              "
              >
                Yes, In Sha Allah! ❤️
              </div>
            </div>
          </button>

          {/* NO */}
          <button
            onClick={onDecline}
            className="
            w-full
            rounded-[22px]
            border
            border-[#ffd2d2]
            bg-[#fff9f9]
            p-6
            flex
            items-center
            gap-5
          "
          >
            <div
              className="
              w-12
              h-12
              rounded-full
              border
              border-[#ffb0b0]
              flex
              items-center
              justify-center
              text-red-500
              text-2xl
            "
            >
              ✕
            </div>

            <div
              className="
              text-left
              italic
              text-gray-500
              font-serif
              text-2xl
            "
            >
              Unfortunately,
              <br />
              I can't make it
            </div>
          </button>
        </div>
      </div>
    </section>
  );
}