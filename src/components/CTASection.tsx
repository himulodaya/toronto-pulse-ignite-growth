
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  return (
    <section id="cta" className="bg-gradient-to-r from-primary/20 via-secondary/20 to-accent/20 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-6">
            Stop Waiting. Start Growing Your Toronto Business Today.
          </h2>
          
          <p className="text-lg mb-8 text-neutral-200">
            Tired of marketing that doesn't deliver? Get a custom strategy built for real success 
            in Toronto. Book your free demo now – discover how we get you more customers.
          </p>
          
          <Button size="lg" className="group text-base mb-4">
            Get My Free Demo & Toronto Growth Plan
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </Button>
          
          <p className="text-sm text-neutral-300">
            30 Mins • Free Custom Insights • Zero Obligation
          </p>
          
          <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-primary/20 flex items-center justify-center mr-3">
                <span className="text-lg font-bold">1</span>
              </div>
              <span>Book Your Demo</span>
            </div>
            
            <div className="hidden md:block text-neutral">→</div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-secondary/20 flex items-center justify-center mr-3">
                <span className="text-lg font-bold">2</span>
              </div>
              <span>Get Custom Growth Plan</span>
            </div>
            
            <div className="hidden md:block text-neutral">→</div>
            
            <div className="flex items-center">
              <div className="h-10 w-10 rounded-full bg-accent/20 flex items-center justify-center mr-3">
                <span className="text-lg font-bold">3</span>
              </div>
              <span>Grow Your Business</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
