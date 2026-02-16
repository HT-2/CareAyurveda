"use client";

import Link from "next/link";
import { ArrowRight, Youtube } from "lucide-react";

export default function MottoSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-5xl mx-auto px-4">
        {/* Motto Text */}
        <div className="text-center mb-10">
          <p className="text-lg md:text-xl text-gray-600 mb-4">
            At Care the Main Motto of Ayurveda is
          </p>
          <h2 className="text-2xl md:text-4xl font-bold mb-2">
            <span className="text-[#228B22]">"To promote the</span>
          </h2>
          <h2 className="text-2xl md:text-4xl font-bold text-[#228B22] mb-6">
            health and to treat the disease"
          </h2>
        </div>

        {/* Video Embed */}
        <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl mb-8">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/HwUXXY-19y0"
            title="How to prevent chronic kidney disease - Dr. Care Tyagi"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="absolute inset-0"
          />
        </div>

        {/* Bottom Text */}
        <p className="text-center text-lg md:text-xl text-gray-700 font-medium mb-8">
          Beside Other Medicinal Sciences Are Only Tend to Treat the Disease.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/contact"
            className="inline-flex items-center justify-center bg-[#194229] text-white px-8 py-3 rounded-full font-semibold hover:bg-[#0f2a1a] transition-all duration-300"
          >
            Contact Us
            <ArrowRight className="w-4 h-4 ml-2" />
          </Link>
          <a
            href="https://www.youtube.com/user/Caretyagi"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center border-2 border-[#194229] text-[#194229] px-8 py-3 rounded-full font-semibold hover:bg-[#194229] hover:text-white transition-all duration-300"
          >
            On Youtube
            <Youtube className="w-4 h-4 ml-2" />
          </a>
        </div>
      </div>
    </section>
  );
}
