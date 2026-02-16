import React from "react";

const branches = [
  {
    id: 1,
    title: "Kayachikitsa (General Medicine)",
    description: "Describes ailments of adults not treated by other branches of Ayurveda. Hence known as General Medicine."
  },
  {
    id: 2,
    title: "Balachikitsa (Paediatrics)",
    description: "This branch deals with the prenatal and postnatal baby care as well as the care of a woman before and during pregnancy. It also elaborates various diseases of children and their treatments."
  },
  {
    id: 3,
    title: "Graha Chikitsa (Psychiatry)",
    description: "The study of mental diseases and their treatments. Treatment methods include medicines, diet regulation and yogic methods for treatment of mental diseases and improving psychic power."
  },
  {
    id: 4,
    title: "Shalakya Chikitsa (ENT and Cephalic Diseases)",
    description: "This branch deals with the diseases of ear, nose, throat and head and their treatments including special techniques for curing these diseases."
  },
  {
    id: 5,
    title: "Shalya Chikitsa (Surgery)",
    description: "Maharishi 'Sushrutha' is the first surgeon who is also the author of Shalya Chikitsa, the foremost specialty of Ayurveda. He describes various surgical operations using different surgical instruments and devices."
  },
  {
    id: 6,
    title: "Visha Chikitsa (Toxicology)",
    description: "This branch deals with the toxins from vegetables, minerals, and toxins from animal origins. The concept of pollution of air and water in certain places and seasons has been given special consideration. Such pollution is also said to be the cause of various epidemics."
  },
  {
    id: 7,
    title: "Rasayana (Rejuvenation Therapy)",
    description: "This branch which is unique to Ayurveda, deals with prevention of diseases and promotion of a long and healthy life. It also advises how to increase our health, intellect, and beauty."
  },
  {
    id: 8,
    title: "Vajeekarana (Aphrodisiac treatment)",
    description: "This branch deals with the means of increasing sexual vitality and efficiency."
  }
];

export default function AyurvedaBranches() {
  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-gray-900">Ahsthang Ayurveda</h2>
        <p className="text-gray-600 mb-12 max-w-4xl">
          The term Ahsthang Ayurveda is used for the common noun for eight branches of Ayurveda. due to the vastness and varieties of diseases Ayurvedic scientists divided the whole Ayurvedic system of medicine into eight branches for efficient and error-free treatment
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
          {branches.map((branch) => (
            <div key={branch.id} className="flex flex-col">
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {branch.id}. {branch.title}
              </h3>
              <p className="text-gray-600 leading-relaxed">
                {branch.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
