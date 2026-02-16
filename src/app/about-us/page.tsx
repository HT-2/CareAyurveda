import React from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AboutHero from "@/components/about/AboutHero";
import HistoryQuote from "@/components/about/HistoryQuote";
import WelcomeSection from "@/components/about/WelcomeSection";
import AyurvedaBranches from "@/components/about/AyurvedaBranches";
import CoreTeamSection from "@/components/about/CoreTeamSection";
import DiagnosisSection from "@/components/about/DiagnosisSection";
import RulesSection from "@/components/about/RulesSection";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      <Header />
      <AboutHero />
      <HistoryQuote />
      <WelcomeSection />
      <AyurvedaBranches />
      <CoreTeamSection />
      <DiagnosisSection />
      <RulesSection />
      <Footer />
    </main>
  );
}
