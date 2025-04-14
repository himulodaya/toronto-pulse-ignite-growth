
import { useEffect } from "react";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import BenefitsSection from "@/components/BenefitsSection";
import TestimonialsSection from "@/components/TestimonialsSection";
import DifferentiationSection from "@/components/DifferentiationSection";
import FAQSection from "@/components/FAQSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  // Set dark mode by default for the landing page
  useEffect(() => {
    document.documentElement.classList.add("dark");
    document.body.style.backgroundColor = "#121212";
    
    return () => {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "";
    };
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-darkbg text-white">
      <Header />
      <main>
        <HeroSection />
        <ProblemSection />
        <BenefitsSection />
        <TestimonialsSection />
        <DifferentiationSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
