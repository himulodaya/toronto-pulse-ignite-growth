
import { TrendingDown, AlertTriangle, Clock } from "lucide-react";

const ProblemSection = () => {
  return (
    <section className="bg-darkbg py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-12">
          Your Marketing Budget: <span className="text-destructive">Bleeding Cash</span> in Toronto?
        </h2>
        
        <div className="flex flex-col md:flex-row gap-10 md:gap-16 items-center">
          <div className="w-full md:w-1/2 order-2 md:order-1 space-y-6">
            <p className="text-lg text-neutral-200">
              Are you pouring money into ads that vanish? Invisible to local customers searching right now? 
              Stuck with generic strategies doomed to fail in this city?
            </p>
            
            <div className="flex items-start space-x-4 p-4 bg-neutral/5 rounded-lg border border-neutral/10">
              <TrendingDown className="text-destructive mt-1 h-5 w-5" />
              <p>
                <span className="font-semibold">You're not alone.</span> But every wasted dollar, every missed local lead, every moment you feel overwhelmed – it's costing your business dearly.
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-neutral/5 rounded-lg border border-neutral/10">
              <AlertTriangle className="text-secondary mt-1 h-5 w-5" />
              <p>
                Meanwhile, your competitors connect with your potential customers. How much longer can you afford marketing that delivers frustration instead of results?
              </p>
            </div>
            
            <div className="flex items-start space-x-4 p-4 bg-neutral/5 rounded-lg border border-neutral/10">
              <Clock className="text-accent mt-1 h-5 w-5" />
              <p>
                <span className="font-semibold">The cost of inaction is growing daily.</span> Each day without effective local marketing is another day of lost opportunities.
              </p>
            </div>
          </div>
          
          <div className="w-full md:w-1/2 order-1 md:order-2 flex justify-center">
            <div className="relative w-full max-w-md">
              <div className="absolute inset-0 bg-gradient-to-tr from-destructive/20 via-primary/20 to-secondary/20 blur-3xl rounded-full"></div>
              <img 
                src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?auto=format&fit=crop&q=80&w=700&h=500" 
                alt="Frustrated business owner looking at poor marketing results"
                className="rounded-lg shadow-2xl relative z-10 w-full h-auto border border-neutral/20"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
