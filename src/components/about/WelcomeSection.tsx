import React from "react";
import { ThumbsUp } from "lucide-react";

export default function WelcomeSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <div className="relative h-[400px] w-full rounded-full overflow-hidden border-8 border-[#228B22]/20">
          {/* Placeholder for Mortar Pestle Image */}
          <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
             <span className="text-gray-400">Mortar & Pestle Image</span>
          </div>
          {/* If you have the image, uncomment below and add the path */}
          {/* <img src="/images/about/mortar-pestle.png" alt="Ayurveda Mortar and Pestle" className="w-full h-full object-cover" /> */}
        </div>

        {/* Content Side */}
        <div>
          <p className="text-gray-600 mb-2">Welcome to</p>
          <h2 className="text-4xl font-bold mb-6">
            <span className="text-gray-900">Care </span>
            <span className="text-[#228B22]">Ayurveda</span>
          </h2>
          
          <p className="text-gray-600 mb-6 leading-relaxed">
            Where we treat a patient with standards set by the Ayurveda. The Diet, The Lifestyle, The Medicine- all are fully based on ancient healing science.
          </p>

          <div className="flex items-start gap-3 mb-6">
            <ThumbsUp className="w-6 h-6 text-[#228B22] mt-1 flex-shrink-0" />
            <p className="text-gray-700 font-medium">
              In simple- we just do not give medicines, we deliver health
            </p>
          </div>

          <div className="mt-8">
            <h3 className="text-xl font-bold mb-4">The Recognition :-</h3>
            <p className="text-gray-600">
              All the doctors are well educated, trained, registered with authorities, as per norms of MINISTRY OF AYUSH, GOVT. OF INDIA & state government of Uttar Pradesh.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
