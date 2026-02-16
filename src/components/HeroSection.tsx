"use client";

import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      {/* Background with gradient and image */}
      <div className="relative min-h-[400px] md:min-h-[450px] lg:min-h-[500px] bg-gradient-to-r from-[#194229] via-[#1e5232] to-[#194229]">
        {/* Hero Content */}
        <div className="max-w-7xl mx-auto px-4 py-12 md:py-16 lg:py-20 flex flex-col lg:flex-row items-center justify-between">
          {/* Left Text Content */}
          <div className="text-white z-10 max-w-xl text-center lg:text-left mb-8 lg:mb-0">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-2">
              Awaken Your
            </h1>
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-[#c4d94c] mb-2">
              Inner Harmony
            </h1>
            <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
              Ayurveda!
            </h2>
            <p className="text-base md:text-lg opacity-90 leading-relaxed mb-6">
              Where Ancient Wisdom Meets Modern<br />
              Wellness for a Balanced and Vibrant Life.
            </p>
            <Link
              href="/contact"
              className="inline-block bg-white text-[#194229] px-8 py-3 rounded-full font-semibold hover:bg-[#c4d94c] hover:text-[#194229] transition-all duration-300 shadow-lg"
            >
              Get Started
            </Link>
          </div>

          {/* Right Image */}
          <div className="relative w-full lg:w-1/2 flex justify-center lg:justify-end">
            <img
              src="https://ext.same-assets.com/1201089955/2668801950.jpeg"
              alt="Ayurvedic herbs and spices"
              className="rounded-lg object-cover shadow-2xl max-w-full h-auto max-h-[350px]"
            />
          </div>
        </div>

        {/* Decorative elements */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-10 w-20 h-20 bg-[#c4d94c] opacity-10 rounded-full blur-2xl" />
          <div className="absolute bottom-10 right-10 w-32 h-32 bg-[#c4d94c] opacity-10 rounded-full blur-3xl" />
        </div>
      </div>
    </section>
  );
}
