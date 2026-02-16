import React from "react";

export default function AboutHero() {
  return (
    <section className="relative h-[300px] md:h-[400px] w-full bg-[#194229] flex items-center justify-center overflow-hidden">
      {/* Background Image Overlay - Placeholder for now */}
      <div className="absolute inset-0 bg-black/40 z-10"></div>
      
      {/* Content */}
      <div className="relative z-20 text-center text-white px-4">
        <h1 className="text-4xl md:text-6xl font-bold tracking-wider uppercase">
          About Care
        </h1>
      </div>
    </section>
  );
}
