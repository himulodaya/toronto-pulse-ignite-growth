
import { Target, DollarSign, TrendingUp, Clock } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const BenefitsSection = () => {
  return (
    <section id="benefits" className="bg-darkbg py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-6">
          The Solution: Marketing That <span className="gradient-text">Actually Works</span> in Toronto.
        </h2>
        
        <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
          Stop guessing. Start growing. Toronto Pulse delivers laser-focused strategies 
          built for your business and this city. Here's how you win:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Benefit 1 */}
          <Card className="bg-darkbg border border-primary/20 hover:border-primary/50 transition-all duration-300 overflow-hidden group">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 h-24 w-24 bg-primary/10 rounded-bl-3xl -mr-8 -mt-8 group-hover:bg-primary/20 transition-colors duration-300"></div>
              <div className="mb-6">
                <div className="p-3 bg-primary/10 rounded-full w-fit">
                  <Target className="h-6 w-6 text-primary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Get More Local Customers</h3>
              <p className="text-neutral-200">
                We connect you with Torontonians actively looking to buy what you sell. 
                <span className="block mt-2 text-sm text-neutral-300">
                  Benefit: Real leads, higher sales conversion.
                </span>
              </p>
            </CardContent>
          </Card>
          
          {/* Benefit 2 */}
          <Card className="bg-darkbg border border-secondary/20 hover:border-secondary/50 transition-all duration-300 overflow-hidden group">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 h-24 w-24 bg-secondary/10 rounded-bl-3xl -mr-8 -mt-8 group-hover:bg-secondary/20 transition-colors duration-300"></div>
              <div className="mb-6">
                <div className="p-3 bg-secondary/10 rounded-full w-fit">
                  <DollarSign className="h-6 w-6 text-secondary" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Stop Wasting Your Budget</h3>
              <p className="text-neutral-200">
                Our hyper-local strategies maximize every marketing dollar for provable ROI.
                <span className="block mt-2 text-sm text-neutral-300">
                  Benefit: Higher profitability, less financial waste.
                </span>
              </p>
            </CardContent>
          </Card>
          
          {/* Benefit 3 */}
          <Card className="bg-darkbg border border-accent/20 hover:border-accent/50 transition-all duration-300 overflow-hidden group">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 h-24 w-24 bg-accent/10 rounded-bl-3xl -mr-8 -mt-8 group-hover:bg-accent/20 transition-colors duration-300"></div>
              <div className="mb-6">
                <div className="p-3 bg-accent/10 rounded-full w-fit">
                  <TrendingUp className="h-6 w-6 text-accent" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Grow Month After Month</h3>
              <p className="text-neutral-200">
                Build a powerful local brand that drives reliable, predictable business growth.
                <span className="block mt-2 text-sm text-neutral-300">
                  Benefit: Sustainable success, less revenue fluctuation.
                </span>
              </p>
            </CardContent>
          </Card>
          
          {/* Benefit 4 */}
          <Card className="bg-darkbg border border-neutral/20 hover:border-neutral/50 transition-all duration-300 overflow-hidden group">
            <CardContent className="p-8 relative">
              <div className="absolute top-0 right-0 h-24 w-24 bg-neutral/10 rounded-bl-3xl -mr-8 -mt-8 group-hover:bg-neutral/20 transition-colors duration-300"></div>
              <div className="mb-6">
                <div className="p-3 bg-neutral/10 rounded-full w-fit">
                  <Clock className="h-6 w-6 text-white" />
                </div>
              </div>
              <h3 className="text-xl font-semibold mb-3">Reclaim Your Time & Focus</h3>
              <p className="text-neutral-200">
                Let our Toronto experts manage the marketing maze. You run your business, stress-free.
                <span className="block mt-2 text-sm text-neutral-300">
                  Benefit: Increased efficiency, expert support, peace of mind.
                </span>
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BenefitsSection;
