import React from "react";
import { Quote } from "lucide-react";

export default function HistoryQuote() {
  return (
    <section className="bg-[#f0fdf4] py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <div className="flex justify-center mb-6">
          <Quote className="w-12 h-12 text-[#194229] rotate-180" />
        </div>
        
        <p className="text-xl md:text-2xl font-serif italic text-gray-800 mb-8 leading-relaxed">
          Founded in 1992 by Dr. N.S Tyagi as a clinic which was developed as Ayurveda specialty hospital by Dr. Care Tyagi in 2011
        </p>

        <div className="flex justify-center mb-8">
          <Quote className="w-12 h-12 text-[#194229]" />
        </div>

        <p className="text-gray-600 leading-relaxed text-lg">
          Care Ayurveda Clinic is Ayurveda specialty hospital engaged in the practice and propagation of Ayurveda, the ancient health care system across the globe. Care AYURVEDA offers classical Ayurvedic medicines and authentic Ayurveda treatments & therapies to patients. We manage an Ayurvedic hospital in HAPUR. All classical Ayurvedic medicines, therapies, expert medical advice, Ayurvedic surgeries are available here. We have operations in different areas of Ayurvedic practice.
        </p>
      </div>
    </section>
  );
}
