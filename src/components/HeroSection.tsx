
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect } from "react";

const HeroSection = () => {
  useEffect(() => {
    // @ts-ignore - threejs-toys doesn't have TypeScript definitions
    import("threejs-toys").then(({ neonCursor }) => {
      neonCursor({
        el: document.getElementById("hero"),
        shaderPoints: 16,
        curvePoints: 80,
        curveLerp: 0.5,
        radius1: 5,
        radius2: 30,
        velocityTreshold: 10,
        sleepRadiusX: 100,
        sleepRadiusY: 100,
        sleepTimeCoefX: 0.0025,
        sleepTimeCoefY: 0.0025
      });
    });
  }, []);

  return (
    <section id="hero" className="relative min-h-[90vh] flex items-center overflow-hidden bg-darkbg pt-16">
      {/* Background effect */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-20 right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl animate-pulse-slow"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl animate-pulse-slow delay-1000"></div>
        <div className="absolute top-1/3 left-1/3 w-64 h-64 bg-accent/30 rounded-full blur-3xl animate-pulse-slow delay-2000"></div>
      </div>

      <div className="container mx-auto px-6 py-12 md:py-20 relative z-10">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="max-w-3xl space-y-6">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              Tired of Marketing That <span className="gradient-text">Fails in Toronto</span>?
            </h1>
            
            <h2 className="text-lg md:text-xl text-neutral-300">
              Stop burning cash. Get marketing built for Toronto small businesses that delivers real customers & measurable ROI.
            </h2>
            
            <div className="pt-6">
              <Button size="lg" className="group text-base">
                Get My Free Demo & Growth Insights
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
