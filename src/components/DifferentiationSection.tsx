
import { Check, MapPin, Settings, Tag, BarChart } from "lucide-react";

const DifferentiationSection = () => {
  return (
    <section id="difference" className="bg-darkbg py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-8">
          Stop Hiring Generic. Get <span className="gradient-text">True Toronto Marketing Experts</span>.
        </h2>
        
        <p className="text-center text-lg mb-16 max-w-3xl mx-auto">
          Generic plans fail here. DIY drains you. Toronto Pulse is built differently:
        </p>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Differentiator 1 */}
          <div className="flex space-x-4 items-start">
            <div className="p-2 bg-primary/10 rounded-full">
              <Check className="h-6 w-6 text-primary" />
            </div>
            <div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-primary" />
                <h3 className="text-xl font-semibold">Toronto Natives, Not Tourists</h3>
              </div>
              <p className="mt-3 text-neutral-200">
                We know this city's pulse – from local search quirks to neighbourhood nuances. 
                Generic agencies don't stand a chance.
              </p>
            </div>
          </div>
          
          {/* Differentiator 2 */}
          <div className="flex space-x-4 items-start">
            <div className="p-2 bg-secondary/10 rounded-full">
              <Check className="h-6 w-6 text-secondary" />
            </div>
            <div>
              <div className="flex items-center">
                <Settings className="h-4 w-4 mr-2 text-secondary" />
                <h3 className="text-xl font-semibold">100% Custom Plans (No Templates!)</h3>
              </div>
              <p className="mt-3 text-neutral-200">
                Strategies crafted only for your business, your customers, your goals. 
                Maximum impact guaranteed.
              </p>
            </div>
          </div>
          
          {/* Differentiator 3 */}
          <div className="flex space-x-4 items-start">
            <div className="p-2 bg-accent/10 rounded-full">
              <Check className="h-6 w-6 text-accent" />
            </div>
            <div>
              <div className="flex items-center">
                <Tag className="h-4 w-4 mr-2 text-accent" />
                <h3 className="text-xl font-semibold">Small Biz Champions</h3>
              </div>
              <p className="mt-3 text-neutral-200">
                Practical, affordable plans designed for your budget reality. 
                We deliver results, not just reports.
              </p>
            </div>
          </div>
          
          {/* Differentiator 4 */}
          <div className="flex space-x-4 items-start">
            <div className="p-2 bg-white/10 rounded-full">
              <Check className="h-6 w-6 text-white" />
            </div>
            <div>
              <div className="flex items-center">
                <BarChart className="h-4 w-4 mr-2 text-white" />
                <h3 className="text-xl font-semibold">Clear Results, Zero Excuses</h3>
              </div>
              <p className="mt-3 text-neutral-200">
                We track the metrics that matter to your bottom line and show you the proof. 
                Total transparency.
              </p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 relative">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/30 via-secondary/30 to-accent/30 blur-3xl rounded-3xl"></div>
          <div className="rounded-xl overflow-hidden border border-white/10 relative">
            <img 
              src="https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&q=80&w=1200&h=400"
              alt="Toronto skyline at night with colorful data visualizations overlaid"
              className="w-full h-64 object-cover object-center"
            />
            <div className="absolute inset-0 bg-darkbg/60 flex items-center justify-center">
              <div className="text-center p-6">
                <h3 className="text-2xl font-bold mb-3">Ready to see the Toronto Pulse difference?</h3>
                <p className="mb-5">Let's talk about your business goals and how we can help you achieve them.</p>
                <a 
                  href="#cta"
                  className="inline-block bg-white/10 hover:bg-white/20 transition-colors border border-white/20 rounded-full px-6 py-3 font-medium"
                >
                  Book Your Free Demo
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default DifferentiationSection;
