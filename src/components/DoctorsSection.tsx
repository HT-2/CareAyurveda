"use client";

import Link from "next/link";

const doctors = [
  {
    name: "Dr N.S Tyagi",
    role: "Founder",
    image: "https://ext.same-assets.com/1201089955/195257799.jpeg",
  },
  {
    name: "Dr. Sakshi Tyagi",
    role: "Hospital In-Charge",
    image: "https://ext.same-assets.com/1201089955/2112653296.jpeg",
  },
  {
    name: "Dr. Care Tyagi",
    role: "Managing Director",
    image: "https://ext.same-assets.com/1201089955/2091219487.jpeg",
  },
];

export default function DoctorsSection() {
  return (
    <section className="py-12 md:py-16">
      {/* Title Section */}
      <div className="bg-[#cde8da] py-8 mb-8">
        <h2 className="text-3xl md:text-4xl font-bold text-center">
          <span className="text-gray-800">Meet </span>
          <span className="text-[#228B22]">Our Doctors</span>
        </h2>
      </div>

      {/* Doctor Cards */}
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {doctors.map((doctor) => (
            <div
              key={doctor.name}
              className="bg-white rounded-lg shadow-lg p-6 text-center hover:shadow-xl transition-shadow duration-300 border border-gray-100"
            >
              <div className="relative w-40 h-40 mx-auto mb-4">
                <img
                  src={doctor.image}
                  alt={doctor.name}
                  className="w-full h-full rounded-full object-cover border-4 border-[#cde8da]"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-800 mb-1">{doctor.name}</h3>
              <p className="text-[#228B22] font-medium mb-4">{doctor.role}</p>
              <Link
                href="/about-us"
                className="inline-block border-2 border-gray-800 text-gray-800 px-6 py-2 rounded-full font-medium hover:bg-gray-800 hover:text-white transition-all duration-300"
              >
                Know More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
