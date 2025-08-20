import { useRef } from "react";
import { HeroSection } from "@/components/HeroSection";
import { BenefitsSection } from "@/components/BenefitsSection";
import { SignupSection } from "@/components/SignupSection";

const Index = () => {
  const signupRef = useRef<HTMLElement>(null);

  const scrollToForm = () => {
    signupRef.current?.scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <main className="min-h-screen">
      <HeroSection onScrollToForm={scrollToForm} />
      <BenefitsSection />
      <SignupSection ref={signupRef} />
    </main>
  );
};

export default Index;
