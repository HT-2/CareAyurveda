"use client";

import Link from "next/link";

const specialities = [
  {
    name: "Ano-Rectal Disorders",
    icon: "https://ext.same-assets.com/1201089955/1535230093.png",
    href: "/anorectal-disorders",
  },
  {
    name: "Spine Problems",
    icon: "https://ext.same-assets.com/1201089955/790913611.png",
    href: "/spine-and-joint-disease",
  },
  {
    name: "Infertility",
    icon: "https://ext.same-assets.com/1201089955/3356026311.png",
    href: "/infertility",
  },
  {
    name: "Metabolic Disorders",
    icon: "https://ext.same-assets.com/1201089955/3980514139.png",
    href: "/metabolic-disorders",
  },
  {
    name: "Chronic Skin Diseases",
    icon: "https://ext.same-assets.com/1201089955/3595633902.png",
    href: "/chronic-skin-disorders",
  },
];

export default function SpecialitySection() {
  return (
    <section className="py-12 md:py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          <span className="text-gray-800">Our </span>
          <span className="text-[#228B22]">Speciality</span>
        </h2>

        {/* Speciality Cards */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 md:gap-8">
          {specialities.map((speciality) => (
            <Link
              key={speciality.name}
              href={speciality.href}
              className="group flex flex-col items-center"
            >
              <div className="relative w-24 h-24 md:w-28 md:h-28 mb-4">
                {/* Corner decorations */}
                <div className="absolute -top-2 -left-2 w-4 h-4 border-t-2 border-l-2 border-[#228B22] opacity-60" />
                <div className="absolute -top-2 -right-2 w-4 h-4 border-t-2 border-r-2 border-[#228B22] opacity-60" />
                <div className="absolute -bottom-2 -left-2 w-4 h-4 border-b-2 border-l-2 border-[#228B22] opacity-60" />
                <div className="absolute -bottom-2 -right-2 w-4 h-4 border-b-2 border-r-2 border-[#228B22] opacity-60" />

                {/* Icon */}
                <div className="w-full h-full rounded-full bg-white flex items-center justify-center shadow-md group-hover:shadow-lg transition-shadow">
                  <img
                    src={speciality.icon}
                    alt={speciality.name}
                    className="w-14 h-14 object-contain"
                  />
                </div>
              </div>
              <h3 className="text-sm md:text-base font-semibold text-gray-700 text-center group-hover:text-[#228B22] transition-colors">
                {speciality.name}
              </h3>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
