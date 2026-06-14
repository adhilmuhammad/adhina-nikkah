export default function InvitationCard() {
  return (
    <div
      className="
      bg-[#FCFBF8]
      border border-[#E7D7A6]
      rounded-t-[100px]
      sm:rounded-t-[140px]
      rounded-b-[24px]
      shadow-xl
      overflow-hidden
    "
    >
      <div className="px-6 sm:px-8 py-8 text-center">

        {/* Bismillah */}
        <img
          src="/bismillah.png"
          alt="Bismillah"
          className="w-44 sm:w-56 mx-auto mb-8"
        />

        {/* Translation */}
        <p className="text-[#B8860B] italic text-sm sm:text-base leading-7">
          In the Name of Allah,
          <br />
          The Most Gracious, The Most Merciful
        </p>

        <div className="w-16 h-px bg-[#D8C7A3] mx-auto my-8 sm:my-10"></div>

        {/* Bride */}
        <h1 className="text-[42px] sm:text-5xl font-serif text-[#9B7300] leading-tight">
          Adhina
        </h1>

        <h1 className="text-[42px] sm:text-5xl font-serif text-[#9B7300] leading-tight">
          Al Fathima
        </h1>

        {/* Heart */}
        <div className="text-2xl sm:text-3xl text-[#D4AF37] my-5 sm:my-6">
          ♥
        </div>

        {/* Groom */}
        <h1 className="text-[42px] sm:text-5xl font-serif text-[#9B7300] leading-tight">
          Shaz Musthak
        </h1>

        <div className="w-16 h-px bg-[#D8C7A3] mx-auto my-8 sm:my-10"></div>

        {/* Families */}
        <p className="uppercase tracking-[0.25em] text-[11px] sm:text-xs text-[#8B7355]">
          Together With Their Families
        </p>

        <div className="mt-10 sm:mt-12 space-y-8">

          <div>
            <p className="text-lg sm:text-xl text-[#4B4B4B] font-medium leading-relaxed">
              Mr. Ansar S & Mrs. Azmia N R
            </p>

            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#B8860B] mt-2">
              (Adhina's Parents)
            </p>
          </div>

          <div>
            <p className="text-lg sm:text-xl text-[#4B4B4B] font-medium leading-relaxed">
              Mr. P K Musthak & Mrs. Nafeesath O T
            </p>

            <p className="text-xs sm:text-sm tracking-[0.2em] uppercase text-[#B8860B] mt-2">
              (Shaz's Parents)
            </p>
          </div>

        </div>

        <div className="w-16 h-px bg-[#D8C7A3] mx-auto my-8 sm:my-10"></div>

        {/* Invitation text */}
        <p
          className="
          uppercase
          tracking-[0.2em]
          text-[11px]
          sm:text-xs
          text-[#8B7355]
          leading-7
          sm:leading-8
        "
        >
          Request The Honor Of Your Presence
          <br />
          To Share In Our Joy
        </p>

      </div>
    </div>
  );
}