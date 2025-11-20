import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import StructuredData from "@/components/StructuredData";

interface FAQ {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  questions: FAQ[];
  title?: string;
}

const FAQSection = ({ questions, title = "Frequently Asked Questions" }: FAQSectionProps) => {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": questions.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <section className="py-16">
      <StructuredData data={faqSchema} />
      
      <div className="text-center mb-12 space-y-4">
        <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
          <HelpCircle size={18} className="text-primary" />
          <span className="text-sm font-medium text-primary">FAQ</span>
        </div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold">
          {title}
        </h2>
      </div>

      <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
        {questions.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`}>
            <AccordionTrigger className="text-left">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default FAQSection;
