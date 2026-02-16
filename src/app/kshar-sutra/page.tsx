import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ThumbsUp } from "lucide-react";

export default function KsharSutraPage() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      
      {/* Hero Section */}
      <section className="relative w-full bg-gray-50 py-20 lg:py-28">
        <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center">
          <div className="w-full md:w-1/2">
             <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-2">
               <span className="text-[#194229]">KSHAR</span> <span className="text-[#194229] font-light">SUTRA</span>
             </h1>
             <p className="text-xl tracking-[0.2em] text-gray-800 uppercase font-medium">
               TREATMENT
             </p>
          </div>
          <div className="w-full md:w-1/2 mt-8 md:mt-0 relative">
             {/* Placeholder for Hero Image */}
             <div className="hidden md:block absolute right-0 top-0 h-full w-full bg-gradient-to-l from-gray-200 to-transparent opacity-20"></div>
          </div>
        </div>
      </section>

      {/* Kshar Sutra Treatments Section */}
      <section className="py-16 px-4 max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-8 text-gray-900">
          Kshar Sutra <span className="text-[#194229]">Treatments</span>
        </h2>
        <div className="space-y-6 text-gray-700 text-lg leading-relaxed text-justify">
          <p>
            Kshar sutra is the specialized, most famous, and most reliable, minimal invasive surgical procedure for Piles, Fissure in Ano, fistula in Ano, Sentinel tags, anal warts, pilonidal sinus etc. It has about to null recurrence rate after procedure (about 1-2 % in 1000 cases). the best part is that this could be done in O.P.D in most cases and there is no need to be at hospital after procedure. in maximum cases anaesthesia also not needed or the procedure may be done under local anaesthesia.
          </p>
          <p>
            The Kshar means alkaline medicines (tends to be chemical cauterizing media) and the Sutra means thread. The thread smeared in Kshar is called Kshar sutra.
          </p>
          <p>
            The Kshar (cauterizing media) has alkaline pH and possesses cauterizing (cutting), disinfection, wound healing properties so it cuts, cleans, heals in same time, making it best option. The Kshar can also be used as internal medicine (Paneey Kshar) for some ailments but that Kshar is different from the Kshar of Kshar sutra.
          </p>
        </div>
      </section>

      {/* Indications Section */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Indications of Kshar Sutra :-</h3>
        <ul className="space-y-4">
          {[
            "Anal Fistula (repeating abscess in peri-anal region with pain and discharging Pus)",
            "Peri Anal Sinus (abscess in peri-anal region with pain and discharging Pus)",
            "Pilo-Nidal Sinus (abscess in Low Back region with pain and discharging Pus)",
            "Chronic Non healing Anal fissure (Crack or wound in anal region causing great pain, burning, itching)",
            "Anal Sentinel Tag (extruding growth in anal region)",
            "External haemorrhoids (enlargement of anal veins)",
            "HPV Anal Warts (Multiple hard growths in peri anal region caused by HP Virus)"
          ].map((item, index) => (
            <li key={index} className="flex items-start">
              <ThumbsUp className="w-5 h-5 text-[#194229] mt-1 mr-3 flex-shrink-0" />
              <span className="text-gray-700">{item}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* How it works: Anal Fistula */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">How Kshar sutra works in Anal Fistula-</h3>
        <div className="space-y-6 text-gray-700 leading-relaxed text-justify">
          <p>
            In anal fistula, the Ayurvedic surgeon searches for internal and external openings of Fistulous track. And then inserts the Kshar sutra within the track and ties it outside. This process takes 5 to 25 minutes depending upon the nature of track and skills of surgeon.
          </p>
          <p>
            The first 8 layers of medicine on thread slowly dissolves the infected material and expels the debridement through the external opening of the track. other layers of medicine on the thread promotes the healing of the track. Within 7-10 days, all layers of the thread are dissolves and there shall be plain thread in situ. After 7-10 days, the surgeon replaces old thread with new one which takes 1-3 minutes. The medicine on thread cuts and heals and every next visit the length of thread reduces which means the reduction in length of Track.
          </p>
          <p>
            At last point, the thread comes out itself with 89% healed wound. The rest of wound shall heal with 7-10 days. Similarly, Kshar sutra works same in conditions of Pilonidal Sinus.
          </p>
        </div>
      </section>

      {/* How it works: Haemorrhoids */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">How Kshar sutra works in haemorrhoids?</h3>
        <div className="text-gray-700 leading-relaxed text-justify">
          <p>
            In cases of haemorrhoids, the surgeon marks the base of haemorrhoids and transfixes the haemorrhoids with Kshar sutra. The surgeon may or may not excise (cut) the foremost part of haemorrhoids. The Kshar sutra cuts the whole tissue and heals simultaneously and the thread comes out itself.
          </p>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-12 px-4 max-w-7xl mx-auto">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">Timeline of Kshar sutra technology.</h3>
        <div className="text-gray-700 leading-relaxed text-justify">
          <p>
            Kshar sutra is the para surgical procedure of ayurveda. It was first described in <i>Bhaishajya Ratnavali</i> approx. 1800 years ago. The anorectal disorders are the enemy of human health since the beginning of humanity. Adoption of waste western lifestyle, these disorders are impacting on larger population of India. post-independence era, the western medicine science (allopathy) emerged on large scale but most of the treatment approaches in cases of anorectal disorders, failed and caused reoccurrence. In 19s, Dr P. J Deshpande (surgeon at Banaras Hindu university) indulged in quest of right option and after decade of hard work, he re-established the Kshar sutra technology. He made the standards, protocols for preparation of thread to pre-peri-post operative management. After wards, its uniqueness, being cost economic, about to nil recurrence made this technology popular. Now days it is a milestone not only for ayurvedic surgery even in history of modern surgery.
          </p>
        </div>
      </section>

      {/* Recognition */}
      <section className="py-12 px-4 max-w-7xl mx-auto mb-16">
        <h3 className="text-2xl font-bold mb-6 text-gray-900">The Recognition of Kshar sutra</h3>
        <div className="space-y-4 text-gray-700 leading-relaxed text-justify">
          <p>
            In Ayurveda, one can study and get trained in Kshar sutra at post graduate level. After BAMS, one can pursue M.S General surgery Ayurveda or Post Graduate diploma in Kshar sutra. No one below the BAMS, is eligible to practice Kshar sutra not even MBBS-M.S.
          </p>
          <p>
            All India Institute of medical sciences new Delhi (AIIMS) also promotes the Kshar sutra by referring their patients to Kshar sutra in cases of anal fistula and other anorectal disorders.
          </p>
          <p>
            The world health organisation also promotes Kshar sutra which can be seen on its website.
          </p>
          <p>
            The All-India Institute of Ayurveda Delhi, National Institute of Ayurveda Jaipur, Institute of post graduate research and training Jamnagar are the apex government institutes offering Kshar sutra technology to masses.
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
}
