"use client";

interface RSVPDeclinedProps {
  onBack: () => void;
}

export default function RSVPDeclined({
  onBack,
}: RSVPDeclinedProps) {
  return (
    <section className="relative">

      {/* Ticket circles */}
      <div className="absolute left-[-8px] top-[150px] sm:top-[180px] w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F8F4F1]" />
      <div className="absolute right-[-8px] top-[150px] sm:top-[180px] w-4 h-4 sm:w-5 sm:h-5 rounded-full bg-[#F8F4F1]" />

      <div
        className="
        bg-[#FBF6F0]
        rounded-[28px]
        overflow-hidden
        border border-[#ece5da]
        shadow-[0_15px_35px_rgba(0,0,0,0.08)]
      "
      >
        {/* Header */}
        <div className="py-10 sm:py-14 text-center">

          <h2
            className="
            font-serif
            text-[40px]
            sm:text-[56px]
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
        <div className="px-6 sm:px-10 py-10 sm:py-16 text-center">

          {/* Title */}
          <h3
            className="
            font-serif
            text-[30px]
            sm:text-[42px]
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
            text-[16px]
            sm:text-[20px]
            leading-8
          "
          >
            We'll miss you,
            <br />
            but thank you for letting us know!
          </p>

          {/* Back Button */}
          <button
            onClick={onBack}
            className="
              mt-10
              text-[#9AAE9C]
              uppercase
              tracking-[0.25em]
              text-[11px]
              sm:text-xs
              underline
              underline-offset-4
              hover:text-[#b88912]
              transition
            "
          >
            Back To Options
          </button>

        </div>

      </div>

    </section>
  );
}