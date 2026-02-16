"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";

export default function WhyCareSection() {
  return (
    <section className="py-12 md:py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Image */}
          <div className="flex justify-center">
            <img
              src="https://ext.same-assets.com/1201089955/1109959588.jpeg"
              alt="Ayurvedic products and herbs"
              className="rounded-lg shadow-xl object-cover max-w-full h-auto max-h-[500px]"
            />
          </div>

          {/* Content */}
          <div className="text-center lg:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              Why Care
            </h2>
            <h2 className="text-3xl md:text-4xl font-bold text-[#228B22] mb-6 underline decoration-2 underline-offset-4">
              Ayurveda Clinic?
            </h2>
            <p className="text-gray-600 leading-relaxed mb-4">
              We at Care Ayurveda Clinic follow a holistic approach to ascertain the root cause of the disease so that the effects are long-lasting and not short lived. To ensure the high quality and effectiveness of medicines, we manufacture our own range of pure herbal medicines. As per the objective of Ayurveda
            </p>
            <p className="text-gray-800 font-semibold italic mb-4">
              "To promote the health and to treat the disease"
            </p>
            <p className="text-gray-600 leading-relaxed mb-6">
              beside other medical sciences are only tend to treat the disease, we delivers Health with evidence.
            </p>
            <Link
              href="/about-us"
              className="inline-flex items-center border-2 border-[#194229] text-[#194229] px-6 py-3 rounded-full font-semibold hover:bg-[#194229] hover:text-white transition-all duration-300 group"
            >
              Read More
              <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
