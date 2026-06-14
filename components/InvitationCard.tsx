import { Cormorant_Garamond } from "next/font/google";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});
export default function InvitationCard() {
  return (
    <div className="bg-[#FCFBF8] border border-[#E7D7A6] rounded-t-[140px] rounded-b-[24px] shadow-xl overflow-hidden">

      <div className="px-6 py-8 text-center">

        {/* Bismillah */}
        <img
          src="/bismillah.png"
          alt="Bismillah"
          className="w-56 mx-auto mb-8"
        />

        {/* English Translation */}
        <p className="text-[#B8860B] italic text-base leading-7">
          In the Name of Allah,
          <br />
          The Most Gracious, The Most Merciful
        </p>

        <div className="w-16 h-px bg-[#D8C7A3] mx-auto my-10"></div>

       {/* Couple Names */}
<h1
  className={`${cormorant.className}
  text-[#A57C00]
  text-[44px]
  sm:text-[88px]
  leading-[0.9]
  font-semibold`}
>
  Adhina
  <br />
  Al Fathima
</h1>

<div className="text-[#D6B341] text-2xl my-3">
  ♥
</div>

<h1
  className={`${cormorant.className}
  text-[#A57C00]
  text-[44px]
  sm:text-[88px]
  leading-[0.9]
  font-semibold`}
>
  Shaz Musthak
</h1>

        <div className="w-16 h-px bg-[#D8C7A3] mx-auto my-6"></div>

        {/* Family Heading */}
        <p className="uppercase tracking-[0.3em] text-xs text-[#8B7355]">
          Together With Their Families
        </p>

        <div className="mt-12 space-y-3">

  <div>
    <p className="text-xl text-[#4B4B4B] font-medium">
      Mr. Ansar S & Mrs. Azmia N R
    </p>

    <p className="text-sm tracking-[0.25em] uppercase text-[#B8860B] mt-2">
      (Adhina's Parents)
    </p>
  </div>

  <div>
    <p className="text-xl text-[#4B4B4B] font-medium">
      Mr. Musthak & Mrs. Nafeezath
    </p>

    <p className="text-sm tracking-[0.25em] uppercase text-[#B8860B] mt-2">
      (Shaz's Parents)
    </p>
  </div>

</div>

        <div className="w-16 h-px bg-[#D8C7A3] mx-auto my-10"></div>

        {/* Invitation Text */}
        <p className="uppercase tracking-[0.25em] text-xs text-[#8B7355] leading-8">
          Request The Honor Of Your Presence
          <br />
          To Share In Our Joy
        </p>

      </div>
    </div>
  );
}
