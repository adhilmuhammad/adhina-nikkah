npm install canvas-confetti"use client";

import { useEffect } from "react";
import confetti from "canvas-confetti";

export default function CelebrationEffect() {
  useEffect(() => {
    // Left side
    confetti({
      particleCount: 120,
      angle: 60,
      spread: 80,
      origin: { x: 0, y: 0.5 },
      colors: [
        "#D4AF37",
        "#F4E2B8",
        "#FFF8E8",
        "#C79B32",
      ],
    });

    // Right side
    confetti({
      particleCount: 120,
      angle: 120,
      spread: 80,
      origin: { x: 1, y: 0.5 },
      colors: [
        "#D4AF37",
        "#F4E2B8",
        "#FFF8E8",
        "#C79B32",
      ],
    });

    // Center sparkles
    confetti({
      particleCount: 60,
      spread: 100,
      startVelocity: 20,
      gravity: 0.6,
      origin: {
        x: 0.5,
        y: 0.3,
      },
      shapes: ["circle"],
      scalar: 0.8,
      colors: [
        "#ffffff",
        "#D4AF37",
        "#FFF4D0",
      ],
    });
  }, []);

  return null;
}