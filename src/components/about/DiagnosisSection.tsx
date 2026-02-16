import React from "react";
import { ThumbsUp } from "lucide-react";

const diagnoses = [
  {
    id: 1,
    title: "Pulse diagnose (Naadi pariksha)",
    description: "To an ayurvedic doctor taking your pulse is more than counting the beats. The functioning and health of the entire mind body constitution can be determined from the pulse, including the balance of the doshas, the health of the various organs, advance warning signs of potential problems that may crop up later etc."
  },
  {
    id: 2,
    title: "Visual diagnose (pratyaksh pariksha)",
    description: "Pratyaksh parikhsha means checking the organs and the body parts which are directly visible to the eye. It includes eight fold tests- netra (eye), mukh (face), tvak (skin), jihva (tounge), malam (feces), moothra (urine), nakh (nails), akriti (body built or physique)."
  },
  {
    id: 3,
    title: "Trividh nidaan (three fold testing)",
    description: "The three fold testing is an primary tool to determine the feelings,psychological status, and general information about the patient and the disease."
  },
  {
    id: 4,
    title: "Strotas pariksha (circulatory channel testing)",
    description: "There are 13 channel responsible to circulate blood,gases,feces,etc. these channel felicitate toxins to promote diseases thus the importance of these channels proved in diagnosing the disease."
  },
  {
    id: 5,
    title: "Samsthanik pariksha (systemic examination)",
    description: "There are nine systems including Respiratory,Digestive,Excretory systems. they are very useful in making correct diagnose."
  },
  {
    id: 6,
    title: "Tail-bindu pariksha (an curability test for diseases)",
    description: "By this test we may confirm that either the disease curable or not. if curable then which type of treatment would help alleviating the diseases.the tail-bindu pariksha is like the test to confirm that may we treat the disease or not. if we may then what should be administered. this is very ancient technique which is followed by every great ayurvedic doctor in history."
  }
];

export default function DiagnosisSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Six Types of Ayurvedic Diagnosis</h2>
        <p className="text-gray-600 mb-8 max-w-5xl">
          At Care Ayurveda Clinic we use several techniques to determine your current condition as well as any imbalances in your doshas. These are used to augment the questions he or she asks during consultation to determine your dosha type. The auxiliary diagnostic techniques employed in Ayurveda are :-
        </p>

        <div className="space-y-6">
          {diagnoses.map((item) => (
            <div key={item.id} className="flex items-start gap-3">
              <ThumbsUp className="w-5 h-5 text-[#228B22] mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                <span className="font-bold text-gray-900">{item.id}. {item.title}- </span>
                {item.description}
              </p>
            </div>
          ))}
          
          <div className="flex items-start gap-3 mt-8">
            <ThumbsUp className="w-5 h-5 text-[#228B22] mt-1 flex-shrink-0" />
            <p className="text-gray-700 font-medium">
              If we made a correct diagnose, we could confirm treat the disease. Making an correct diagnose is by excellence of experience
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
