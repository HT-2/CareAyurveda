import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import WhyCareSection from "@/components/WhyCareSection";
import DoctorsSection from "@/components/DoctorsSection";
import SpecialitySection from "@/components/SpecialitySection";
import MottoSection from "@/components/MottoSection";
import ReviewsSection from "@/components/ReviewsSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <HeroSection />
      <StatsSection />
      <WhyCareSection />
      <DoctorsSection />
      <SpecialitySection />
      <MottoSection />
      <ReviewsSection />
      <Footer />
    </main>
  );
}

