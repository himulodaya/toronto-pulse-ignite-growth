
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const TestimonialsSection = () => {
  const testimonials = [
    {
      name: "Sarah Thompson",
      business: "Riverdale Bakery",
      image: "ST",
      quote: "Toronto Pulse increased our local search traffic by 40% in just two months. We're seeing new customers every day who found us through Google.",
      result: "40% more local search traffic"
    },
    {
      name: "Michael Chen",
      business: "Liberty Tech Solutions",
      image: "MC",
      quote: "Their marketing strategy cut our ad waste by 25% while bringing in more qualified leads. Finally, we're not throwing money away on clicks that don't convert.",
      result: "25% reduction in ad waste"
    },
    {
      name: "Priya Patel",
      business: "Kensington Market Boutique",
      image: "PP",
      quote: "The team at Toronto Pulse understands our neighborhood and our customers. They saved me 10 hours a week I used to spend trying to figure out marketing.",
      result: "10 hours saved per week"
    }
  ];
  
  return (
    <section id="testimonials" className="bg-gradient-to-b from-darkbg to-darkbg/95 py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-16">
          See How Toronto Businesses Like Yours Are <span className="gradient-text">Winning</span>
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-darkbg border border-neutral/10">
              <CardContent className="p-6 space-y-4">
                <div className="flex">
                  {Array(5).fill(0).map((_, i) => (
                    <Star key={i} size={16} className="fill-primary text-primary mr-1" />
                  ))}
                </div>
                <p className="text-neutral-100 italic">&ldquo;{testimonial.quote}&rdquo;</p>
                <div className="flex items-center space-x-3 pt-2">
                  <Avatar>
                    <AvatarFallback className="bg-primary/20 text-primary">{testimonial.image}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold">{testimonial.name}</p>
                    <p className="text-sm text-neutral-300">{testimonial.business}</p>
                  </div>
                </div>
                <div className="bg-primary/10 p-3 rounded-md mt-2">
                  <p className="text-sm font-medium text-primary">Result: {testimonial.result}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {/* Client logos */}
        <div className="mt-20">
          <p className="text-center text-sm uppercase tracking-wider text-neutral mb-8">Trusted by local businesses across Toronto</p>
          <div className="flex flex-wrap justify-center items-center gap-8 md:gap-12">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="h-12 w-32 bg-white/5 flex items-center justify-center rounded-md px-4">
                <div className="text-neutral-300 text-sm font-bold">Client Logo {i}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Trust badges */}
        <div className="mt-16 flex flex-wrap justify-center items-center gap-6">
          <div className="bg-white/5 px-4 py-2 rounded-full flex items-center">
            <span className="text-sm">Google Partner</span>
          </div>
          <div className="bg-white/5 px-4 py-2 rounded-full flex items-center">
            <span className="text-sm">Meta Certified</span>
          </div>
          <div className="bg-white/5 px-4 py-2 rounded-full flex items-center">
            <span className="text-sm">BBB A+ Rating</span>
          </div>
          <div className="bg-white/5 px-4 py-2 rounded-full flex items-center">
            <span className="text-sm">Toronto Chamber of Commerce</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
