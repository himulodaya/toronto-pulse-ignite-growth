
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is this affordable for my small business?",
      answer: "Yes. We build high-ROI plans specifically for Toronto SMB budgets. Flexible, transparent pricing focused on results. Get your custom quote in a free demo."
    },
    {
      question: "How much of my time does this take?",
      answer: "Minimal time from you. After initial strategy, we handle the execution and reporting. We save you time, not add to your workload."
    },
    {
      question: "When will I see results?",
      answer: "Expect positive signals quickly (more traffic, engagement). Our focus is driving tangible leads and sales impact within the first few months for long-term growth."
    },
    {
      question: "What makes you different from other Toronto agencies?",
      answer: "Our hyper-local Toronto DNA, 100% custom strategies (no templates!), and dedicated focus on small business results. We're your growth partner, not just another vendor."
    },
    {
      question: "How do I know it's working (ROI)?",
      answer: "Through clear, simple reports focused on what matters: leads, sales, cost per acquisition, and local visibility. Full transparency, always."
    }
  ];

  return (
    <section id="faq" className="bg-darkbg py-16 md:py-24">
      <div className="container mx-auto px-6">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-center mb-16">
          Your Questions Answered
        </h2>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-lg font-medium">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-neutral-300">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
