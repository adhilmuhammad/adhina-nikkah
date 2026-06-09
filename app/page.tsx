"use client";

import { useState, useRef } from "react";

import Envelope from "@/components/Envelope";
import FloatingParticles from "@/components/FloatingParticles";
import InvitationCard from "@/components/InvitationCard";
import CeremonyCard from "@/components/CeremonyCard";
import RSVPCard from "@/components/RSVPCard";
import RSVPForm from "@/components/RSVPForm";
import RSVPDeclined from "@/components/RSVPDeclined";
import FinalCard from "@/components/FinalCard";
import CelebrationEffect from "@/components/CelebrationEffect";

export default function Home() {
  const [opened, setOpened] = useState(false);

  const [rsvpState, setRsvpState] = useState<
    "options" | "form" | "declined"
  >("options");

  const audioRef = useRef<HTMLAudioElement>(null);

  const handleOpen = () => {
    audioRef.current?.play();
    setOpened(true);
  };

  // Envelope Screen
  if (!opened) {
    return (
      <>
        <audio ref={audioRef} loop>
          <source src="/music.mp3" type="audio/mpeg" />
        </audio>

        <main className="min-h-screen bg-[#F8F4F1] flex items-center justify-center px-4">
          <Envelope onOpen={handleOpen} />
        </main>
      </>
    );
  }

  return (
    <>
      <audio ref={audioRef} loop>
        <source src="/music.mp3" type="audio/mpeg" />
      </audio>

      <main className="bg-[#F8F4F1] min-h-screen px-2 sm:px-4">
        <FloatingParticles />

        {/* Confetti Effect */}
        <CelebrationEffect />

        {/* White Paper Column */}
        <div
          className="
          w-full
          max-w-[620px]
          mx-auto
          bg-[#FEFCF8]
          min-h-screen
          px-3
          sm:px-5
          py-6
          sm:py-10
          space-y-5
          shadow-[0_0_40px_rgba(0,0,0,0.04)]
        "
        >
          {/* Invitation */}
          <InvitationCard />

          {/* Ceremony */}
          <CeremonyCard />

          {/* RSVP */}
          {rsvpState === "options" && (
            <RSVPCard
              onAccept={() => setRsvpState("form")}
              onDecline={() => setRsvpState("declined")}
            />
          )}

          {/* RSVP Form */}
          {rsvpState === "form" && (
            <RSVPForm
              onBack={() => setRsvpState("options")}
            />
          )}

          {/* Declined */}
          {rsvpState === "declined" && (
            <RSVPDeclined
              onBack={() => setRsvpState("options")}
            />
          )}

          {/* Final */}
          <FinalCard />
        </div>
      </main>
    </>
  );
}