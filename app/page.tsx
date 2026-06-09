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

        <main className="min-h-screen bg-[#F8F4F1] flex items-center justify-center">
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

      <main className="bg-[#F8F4F1] min-h-screen px-4">
        <FloatingParticles />

        {/* Confetti Effect */}
        <CelebrationEffect />

        {/* White Paper Column */}
        <div
          className="
            max-w-[540px]
            mx-auto
            bg-[#FEFCF8]
            min-h-screen
            py-10
            px-5
            space-y-4
            shadow-[0_0_40px_rgba(0,0,0,0.04)]
          "
        >
          <InvitationCard />

          <CeremonyCard />

          {rsvpState === "options" && (
            <RSVPCard
              onAccept={() => setRsvpState("form")}
              onDecline={() => setRsvpState("declined")}
            />
          )}

          {rsvpState === "form" && (
            <RSVPForm
              onBack={() => setRsvpState("options")}
            />
          )}

          {rsvpState === "declined" && (
            <RSVPDeclined
              onBack={() => setRsvpState("options")}
            />
          )}

          <FinalCard />
        </div>
      </main>
    </>
  );
}