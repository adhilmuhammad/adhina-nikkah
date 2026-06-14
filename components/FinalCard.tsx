"use client";

export default function FinalCard() {
  return (
    <section className="relative py-20 text-center">

      {/* Ornament */}
      <div className="flex items-center justify-center gap-5">
        <div className="w-10 h-px bg-[#d6b25e]" />
        <div className="w-3 h-3 rotate-45 border border-[#d6b25e]" />
        <div className="w-10 h-px bg-[#d6b25e]" />
      </div>

      {/* Quote */}
      <h3
        className="
          mt-12
          font-serif
          italic
          text-[34px]
          text-[#6d5f5f]
        "
      >
        "And we created you in pairs"
      </h3>

      {/* Quran verse */}
      <div className="mt-5 flex items-center justify-center gap-4">
        <div className="w-8 h-px bg-[#d6b25e]" />

        <span
          className="
            uppercase
            tracking-[0.3em]
            text-[18px]
            text-[#d6b25e]
          "
        >
          Quran 78:8
        </span>

        <div className="w-8 h-px bg-[#d6b25e]" />
      </div>

      <div className="w-16 h-px bg-[#e6dfd5] mx-auto mt-10" />

      {/* Main Message */}
      <div
        className="
          mt-12
          text-[#8f8b86]
          uppercase
          tracking-[0.18em]
          text-[17px]
          leading-[2.2]
        "
      >
        <p>
          INSHA ALLAH, YOUR ESTEEMED PRESENCE
          <br />
          AND HEARTFELT PRAYERS ARE THE MOST
          <br />
          BEAUTIFUL GIFTS WE COULD ASK FOR ON
          <br />
          THIS BLESSED OCCASION.
        </p>

        <p className="mt-10">
          WE, ALONG WITH OUR FAMILIES,
          <br />
          WARMLY INVITE YOU TO SHARE OUR JOY.
        </p>
      </div>

      <div className="w-16 h-px bg-[#e6dfd5] mx-auto mt-12" />

      {/* With Love */}
      <h2
        className="
          mt-12
          font-serif
          italic
          text-[56px]
          text-[#c79628]
        "
      >
        With Love & Duas
      </h2>

      {/* Family names */}
      <div
        className="
          mt-10
          text-[#8f8b86]
          uppercase
          tracking-[0.22em]
          text-[16px]
          leading-[2.2]
        "
      >
        <p>
          Anas, Shameera, Saiju Khan,
          <br />
          Al Ameen, Shakir, Alfiya,
          <br />
          Adhil & Families
        </p>
      </div>

    </section>
  );
}