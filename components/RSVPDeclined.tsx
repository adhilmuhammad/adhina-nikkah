"use client";

interface RSVPDeclinedProps {
  onBack: () => void;
}

export default function RSVPDeclined({
  onBack,
}: RSVPDeclinedProps) {
  return (
    <section className="relative">

      {/* ticket circles */}
      <div className="absolute left-[-10px] top-[180px] w-5 h-5 rounded-full bg-[#F8F4F1]" />
      <div className="absolute right-[-10px] top-[180px] w-5 h-5 rounded-full bg-[#F8F4F1]" />

      <div
        className="
        bg-[#FEFCF8]
        rounded-[28px]
        overflow-hidden
        border border-[#ece5da]
        shadow-[0_15px_35px_rgba(0,0,0,0.08)]
      "
      >
        {/* Header */}
        <div className="py-14 text-center">
          <h2
            className="
            font-serif
            text-[56px]
            leading-none
            text-[#2f2c2c]
          "
          >
            Will You
            <br />
            Attend?
          </h2>

          <div className="w-16 h-px bg-[#d4c091] mx-auto mt-8" />
        </div>

        {/* Dotted divider */}
        <div className="border-t border-dashed border-[#e3c995]" />

        {/* Content */}
        <div className="px-10 py-16 text-center">

          {/* Red title */}
          <h3
            className="
            font-serif
            text-[42px]
            text-[#ff8c8c]
          "
          >
            Thank You!
          </h3>

          {/* Message */}
          <p
            className="
            mt-8
            text-[#9AAE9C]
            text-[20px]
            leading-9
          "
          >
            We'll miss you, but thank you
            <br />
            for letting us know!
          </p>

          {/* Back button */}
          <button
            onClick={onBack}
            className="
              mt-10
              text-[#9AAE9C]
              uppercase
              tracking-[0.25em]
              text-xs
              underline
            "
          >
            Back to Options
          </button>

        </div>
      </div>

    </section>
  );
}