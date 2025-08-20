import { Button } from "@/components/ui/button";

interface HeroSectionProps {
  onScrollToForm: () => void;
}

export function HeroSection({ onScrollToForm }: HeroSectionProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-primary overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-32 h-32 bg-white rounded-full blur-xl animate-pulse"></div>
        <div className="absolute bottom-32 right-20 w-48 h-48 bg-white rounded-full blur-2xl animate-pulse"></div>
        <div className="absolute top-1/2 left-1/4 w-24 h-24 bg-white rounded-full blur-lg animate-pulse"></div>
      </div>
      
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          <span className="block">Nine Minute</span>
          <span className="block text-white/90">Transformations</span>
        </h1>
        
        <p className="text-xl md:text-2xl mb-8 text-white/90 max-w-3xl mx-auto leading-relaxed">
          Get thoughtful insights to support the changes you're already making
        </p>
        
        <div className="mb-12">
          <p className="text-lg md:text-xl text-white/80 mb-4">
            Short reads. Big impact. Right when you need them.
          </p>
        </div>
        
        <Button
          onClick={onScrollToForm}
          size="lg"
          variant="secondary"
          className="text-lg px-8 py-6 bg-white/20 hover:bg-white/30 backdrop-blur-sm border-white/30 text-white transition-all duration-300 hover:scale-105 shadow-glow"
        >
          Get Your Insights
        </Button>
      </div>
    </section>
  );
}