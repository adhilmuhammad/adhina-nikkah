"use client";

export default function FloatingParticles() {
  return (
    <>
      {[...Array(20)].map((_, i) => (
        <div
          key={i}
          className="fixed -z-10"
          style={{ zIndex: -1 }}
        />
      ))}
    </>
  );
}