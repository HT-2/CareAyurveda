import React from "react";
import Link from "next/link";
import { Plus } from "lucide-react";

const team = [
  {
    name: "Dr N.S Tyagi",
    role: "Ayurvedic Practitioner",
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

export default function CoreTeamSection() {
  return (
    <section className="py-16 bg-[#f9fafb]">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-serif">
          <span className="text-gray-800">Meet our </span>
          <span className="text-[#228B22]">Core Team</span>
        </h2>
      </div>

      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member) => (
            <div
              key={member.name}
              className="bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow duration-300 p-6 flex flex-col items-center"
            >
              <div className="w-48 h-48 rounded-full overflow-hidden mb-6 border-4 border-white shadow-lg">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-[#228B22] font-medium text-sm mb-6">{member.role}</p>
              
              <button className="flex items-center text-gray-800 font-semibold hover:text-[#228B22] transition-colors">
                View more <Plus className="w-4 h-4 ml-1" />
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
