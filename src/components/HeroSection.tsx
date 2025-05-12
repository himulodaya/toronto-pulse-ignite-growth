import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";

const HeroSection = () => {
  const canvasRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    import("threejs-toys").then(({ neonCursor }) => {
      const el = canvasRef.current;
      if (!el) return;

      neonCursor({
        el,
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
    <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0d0c1d]">
      <div ref={canvasRef} className="absolute inset-0 z-0" />
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-black/80 via-black/40 to-transparent pointer-events-none" />

      <div className="container mx-auto px-6 py-12 md:py-20 relative z-20 flex justify-center">
        <div className="flex flex-col items-center justify-center text-center max-w-xl space-y-6">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight drop-shadow-lg text-white">
            Tired of Marketing That{" "}
            <span className="gradient-text">Fails in Toronto</span>?
          </h1>
          <h2 className="text-lg md:text-xl text-neutral-300 drop-shadow">
            Stop burning cash. Get marketing built for Toronto small businesses
            that delivers real customers & measurable ROI.
          </h2>
          <div className="pt-6">
            <Button size="lg" className="group text-base" asChild>
              <Link to="/booking">
                Get Our Free Demo & Growth Insights
                <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
