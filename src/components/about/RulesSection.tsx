import React from "react";
import { ThumbsUp } from "lucide-react";

const rules = [
  "The nearest railway station is Hapur. hospital is just walking distance from railway station. Nearest airport is INDIRA GANDHI NATIONAL AND DOMESTIC AIRPORT, NEW DELHI, which is 64 kms from hospital. Hapur is a district in Uttar Pradesh which lies in National Capital Region (NCR).",
  "Hapur is situated 55 kms away from New Delhi on National Highway 9 which leads from Delhi to Lucknow. Well-connected from Delhi, Ghaziabad, Noida, Meerut, Bulandshahar via bus, train route.",
  "A private hospital having specialty services in all eight branches of ayurveda. viz- medicine, surgery, gynaecology paediatrics, E.N.T, psychiatry, conservation of health, tonics etc.",
  "First Ayurvedic hospital in north India, to introduce Ayurvedic immunization, Ayurvedic genetics and genetic engineering.",
  "First Ayurvedic hospital in Hapur, India where doctor believes in changing the life and diet style is the best remedy rather than medicines.",
  "First Ayurvedic hospital in India where classical history taking is based upon aatur vyavastha patrak, which best for diagnosing the disease without the blood/radiological tests etc.",
  "First Ayurvedic hospital in India where doctors believe in educating patients about their disease is very must.",
  "First Ayurvedic hospital in India, introduced Ayurvedic diagnostic procedure e.g., Taila Bindu Pariksha, digital Nadi Pariksha, toung examination etc.",
  "Own Ayurvedic hospital and research centre.",
  "We also have rural clinics to promote the health of rural society."
];

export default function RulesSection() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-2xl md:text-3xl font-bold mb-6 text-gray-900">Through rules of Ayurveda</h2>
        <p className="text-gray-600 mb-8 max-w-5xl">
          When we talk about Ayurveda or an Ayurvedic Doctor, the image of a doctor who looks on patient, reads Nadi (pulse) and gives medication only. but that is not complete Ayurveda. complete Ayurveda is medication with change of diet, lifestyle, daily regimen, seasonal regimen. medication comes third at priority of treatment techniques.
        </p>

        <div className="space-y-4">
          {rules.map((rule, index) => (
            <div key={index} className="flex items-start gap-3">
              <ThumbsUp className="w-5 h-5 text-[#228B22] mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                {rule}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
