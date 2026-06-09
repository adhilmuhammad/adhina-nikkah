"use client";

import { useState } from "react";

interface RSVPFormProps {
  onBack: () => void;
}

export default function RSVPForm({ onBack }: RSVPFormProps) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [guests, setGuests] = useState("");

  const [loading, setLoading] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();

    setLoading(true);

    try {
      await fetch(
        "https://script.google.com/macros/s/AKfycbzvIPYh2sKRGhAIP_0IuFNwQyPOG2QzKgyIp0ElgYCtMx4LBIfMqj-9qB_Z7cS5j5nW/exec",
        {
          method: "POST",
          body: JSON.stringify({
            name,
            phone,
            guests,
          }),
        }
      );

      setSubmitted(true);
    } catch {
      alert("Failed to submit.");
    }

    setLoading(false);
  }

  if (submitted) {
    return (
      <section className="relative">
        <div className="absolute left-[-10px] top-[185px] w-5 h-5 rounded-full bg-[#F8F4F1]" />
        <div className="absolute right-[-10px] top-[185px] w-5 h-5 rounded-full bg-[#F8F4F1]" />

        <div className="bg-[#FEFCF8] rounded-[28px] overflow-hidden border border-[#ece5da] shadow-[0_15px_35px_rgba(0,0,0,0.08)]">

          <div className="py-14 text-center">
            <h2 className="font-serif text-[56px] leading-none text-[#2f2c2c]">
              Thank
              <br />
              You!
            </h2>

            <div className="w-14 h-px bg-[#d4c091] mx-auto mt-8" />
          </div>

          <div className="border-t border-dashed border-[#e3c995]" />

          <div className="px-10 py-14 text-center">
            <h3 className="font-serif text-[36px] text-[#b88912]">
              See You Soon ❤️
            </h3>

            <p className="mt-8 text-[#7d7d7d] leading-8">
              Thank you for confirming your presence.
              <br />
              We look forward to celebrating this beautiful occasion together.
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative">

      <div className="absolute left-[-10px] top-[185px] w-5 h-5 rounded-full bg-[#F8F4F1]" />
      <div className="absolute right-[-10px] top-[185px] w-5 h-5 rounded-full bg-[#F8F4F1]" />

      <div className="bg-[#FEFCF8] rounded-[28px] overflow-hidden border border-[#ece5da] shadow-[0_15px_35px_rgba(0,0,0,0.08)]">

        {/* Header */}
        <div className="py-14 text-center">

          <h2 className="font-serif text-[56px] leading-none text-[#2f2c2c]">
            Will You
            <br />
            Attend?
          </h2>

          <div className="w-14 h-px bg-[#d4c091] mx-auto mt-8" />
        </div>

        <div className="border-t border-dashed border-[#e3c995]" />

        <form
          onSubmit={handleSubmit}
          className="px-8 py-12 min-h-[500px] flex flex-col"
        >
          <h3 className="text-center font-serif italic text-[30px] text-[#C79B2D]">
            Kindly Fill Your
            <br />
            Details
          </h3>

          <div className="mt-12 space-y-10">

            {/* Name */}
            <input
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="Name"
              required
              className="
              w-full
              bg-transparent
              border-b
              border-[#E7D7A6]
              py-4
              outline-none
              font-serif
              text-[18px]
              text-[#555]
              placeholder:text-[#B8B8B8]
              placeholder:italic
              placeholder:font-serif
              "
            />

            {/* Phone */}
            <input
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="Mobile Number"
              required
              className="
              w-full
              bg-transparent
              border-b
              border-[#E7D7A6]
              py-4
              outline-none
              font-serif
              text-[18px]
              text-[#555]
              placeholder:text-[#B8B8B8]
              placeholder:italic
              placeholder:font-serif
              "
            />

            {/* Guests */}
            <input
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              placeholder="Number of Guests"
              required
              className="
              w-full
              bg-transparent
              border-b
              border-[#E7D7A6]
              py-4
              outline-none
              font-serif
              text-[18px]
              text-[#555]
              placeholder:text-[#B8B8B8]
              placeholder:italic
              placeholder:font-serif
              "
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            disabled={loading}
            className="
              mt-14
              h-[72px]
              rounded-[18px]
              tracking-[8px]
              font-semibold
              text-black
              shadow-xl
              bg-gradient-to-r
              from-[#c99814]
              via-[#f4d14d]
              to-[#e7b51d]
            "
          >
            {loading ? "SUBMITTING..." : "SUBMIT"}
          </button>

          {/* Back Link */}
          <div className="mt-8 text-center">
            <button
              type="button"
              onClick={onBack}
              className="
                text-[#9AAE9C]
                text-xs
                uppercase
                tracking-[2px]
                underline
                underline-offset-4
                hover:text-[#b88912]
                transition
              "
            >
              Back To Options
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}