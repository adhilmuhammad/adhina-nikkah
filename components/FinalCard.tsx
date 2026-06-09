export default function FinalCard() {
  return (
    <section className="pt-6 sm:pt-8 pb-8 sm:pb-10 text-center">

      {/* Top Ornament */}
      <div className="flex items-center justify-center gap-4">
        <div className="w-8 sm:w-10 h-px bg-[#D7BE7D]" />
        <div className="w-3 h-3 rotate-45 border border-[#D7BE7D]" />
        <div className="w-8 sm:w-10 h-px bg-[#D7BE7D]" />
      </div>

      {/* Quote */}
      <h3
        className="
        mt-8
        text-[20px]
        sm:text-[23px]
        italic
        font-serif
        text-[#5D514B]
        px-4
        leading-relaxed
      "
      >
        "And We created you in pairs"
      </h3>

      {/* Quran Reference */}
      <div className="flex items-center justify-center gap-3 mt-3">
        <div className="w-8 h-px bg-[#D7BE7D]" />

        <p
          className="
          text-[11px]
          sm:text-[13px]
          uppercase
          tracking-[2px]
          sm:tracking-[3px]
          text-[#C79B32]
        "
        >
          Quran 78:8
        </p>

        <div className="w-8 h-px bg-[#D7BE7D]" />
      </div>

      {/* Divider */}
      <div className="w-14 h-px bg-[#DADADA] mx-auto mt-7"></div>

      {/* Message */}
      <div className="mt-8 sm:mt-10 space-y-7">

        <p
          className="
          text-[12px]
          sm:text-[14px]
          leading-[2]
          tracking-[2px]
          sm:tracking-[3px]
          uppercase
          text-[#777]
        "
        >
          IN SHA ALLAH, YOUR ESTEEMED PRESENCE
          <br />
          AND HEARTFELT PRAYERS ARE THE MOST
          <br />
          BEAUTIFUL GIFTS WE COULD ASK FOR ON
          <br />
          THIS BLESSED OCCASION.
        </p>

        <p
          className="
          text-[12px]
          sm:text-[14px]
          leading-[2]
          tracking-[2px]
          sm:tracking-[3px]
          uppercase
          text-[#777]
        "
        >
          WE, ALONG WITH OUR FAMILIES,
          <br />
          WARMLY INVITE YOU TO SHARE OUR JOY.
        </p>

      </div>

      {/* Divider */}
      <div className="w-14 h-px bg-[#DADADA] mx-auto mt-10"></div>

      {/* With Love */}
      <h2
        className="
        mt-10
        text-[32px]
        sm:text-[44px]
        italic
        font-serif
        text-[#C79B32]
        leading-tight
      "
      >
        With Love & Duas
      </h2>

      {/* Families */}
      <div className="mt-7 px-4">
        <p
          className="
          text-[12px]
          sm:text-[14px]
          uppercase
          tracking-[2px]
          sm:tracking-[4px]
          leading-[2]
          text-[#777]
        "
        >
          Anas, Shameera, Saiju Khan,
          <br />
          Al Ameen, Shakir, Alfiya
          <br />
          Adhil & Families
        </p>
      </div>

    </section>
  );
}