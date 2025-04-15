
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { Interactive3D } from "./Interactive3D";

const HeroSection = () => {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center items-center overflow-hidden bg-darkbg pt-16">
      {/* Background effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-20 relative z-10 flex flex-col items-center">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <h1 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold leading-tight">
            Tired of Marketing That <span className="gradient-text">Fails in Toronto</span>?
          </h1>
          
          <h2 className="text-lg md:text-xl text-neutral-300 mt-6">
            Stop burning cash. Get marketing built for Toronto small businesses that delivers real customers & measurable ROI.
          </h2>
          
          <div className="mt-8">
            <Button size="lg" className="group text-base">
              Get My Free Demo & Growth Insights
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
        
        <div className="w-full max-w-2xl mx-auto mt-8">
          <Interactive3D />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
