import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle, ArrowDown } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { useImageLoader } from "@/hooks/useImageLoader";

const Bands = () => {
  const bands = [
    {
      name: "The Boxtones",
      role: "Award-Winning Rock Band",
      image: "/images/bands/boxtones.webp",
      description: "Multi-award winning Scottish-Canadian rock band signed to Universal Music. Having opened for global superstars including Bryan Adams, Pharrell Williams, and Liam Gallagher, The Boxtones deliver electrifying performances combining original music with crowd-pleasing covers. Perfect for high-energy events, corporate galas, and premium celebrations.",
      tags: ["Universal Music", "Rock Band", "International Acts", "Corporate Events"]
    },
    {
      name: "Elite Collective",
      role: "Versatile Music Ensemble",
      image: "/images/bands/elite-collective.webp",
      description: "Dubai's premier community of top musicians providing best-in-class live entertainment. Scalable from intimate soulful trios to grand orchestras, Elite Collective features two groups: The Collective for popular genres and The Elite Chamber Orchestra for elevated classical experiences. Includes full sound setup for seamless luxury events.",
      tags: ["Versatile", "Scalable", "Classical & Pop", "Luxury Events"]
    },
    {
      name: "Dollhouse",
      role: "All-Female Performance Group",
      image: "/images/bands/dollhouse.webp",
      description: "High-energy all-female entertainment collective bringing theatrical flair and dynamic performances to Dubai events. Specializing in themed shows with spectacular costumes and choreography, Dollhouse creates unforgettable visual experiences perfect for parties, launches, and celebrations seeking unique entertainment.",
      tags: ["All-Female", "Themed Shows", "Theatrical", "High Energy"]
    }
  ];

  const faqs = [
    {
      question: "How much does it cost to hire a live band in Dubai?",
      answer: "Professional live band pricing ranges from AED 3,500 for acoustic trios at intimate events to AED 15,000+ for full 7-piece bands with horn sections at large corporate galas. Pricing depends on band size, performance duration, equipment requirements, and event complexity. Contact us for a customized quote based on your specific needs."
    },
    {
      question: "What types of bands do you offer for events?",
      answer: "We represent diverse professional bands including The Boxtones (award-winning rock band signed to Universal Music), Elite Collective (scalable from intimate trios to full orchestras), and Dollhouse (all-female themed performance group). Each act can be customized with additional musicians and setlists tailored to match your event's atmosphere and audience preferences."
    },
    {
      question: "How far in advance should I book a live band?",
      answer: "We recommend booking 6-8 weeks in advance for standard events and 10-12 weeks for large weddings, corporate galas, and peak season events (October-April). Popular bands during weekend prime slots require earlier booking to ensure availability and allow time for custom setlist preparation."
    },
    {
      question: "Can bands learn specific songs for our event?",
      answer: "Absolutely! Our professional bands can learn 3-5 special song requests with at least 4 weeks' notice. This is popular for first dances at weddings, company anthems at corporate events, or culturally significant songs for international celebrations. Additional rehearsal time may apply for complex arrangements."
    },
    {
      question: "Do bands provide their own sound equipment?",
      answer: "Yes, all our bands come with professional PA systems, microphones, and basic lighting suitable for venues up to 200 guests. For larger events or venues requiring advanced audio systems, we can coordinate with our Sound & Lighting division to provide comprehensive production packages."
    },
    {
      question: "Can bands perform at outdoor venues in Dubai?",
      answer: "Yes, our bands regularly perform at outdoor venues including beach clubs, rooftop terraces, gardens, and desert locations. We ensure appropriate equipment protection and can adapt performances for outdoor acoustics. Weather contingency plans and backup power sources are arranged for outdoor events."
    }
  ];

  const heroImage = "/images/services/bands-bg.webp";
  const { isLoaded: heroLoaded } = useImageLoader(heroImage);

  const scrollToMeetBands = () => {
    const element = document.getElementById('meet-our-bands');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <Helmet>
        <title>Live Bands Dubai | The Boxtones, Elite Collective & More</title>
        <meta name="description" content="Book Dubai's top live bands: The Boxtones (Universal Music artists), Elite Collective ensembles, and Dollhouse performers. Professional bands for weddings, corporate events & parties." />
        <link rel="canonical" href="https://boxentertainment.ae/services/entertainment/bands" />
      </Helmet>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Professional Live Bands in Dubai",
          description: "Professional live music bands for events in Dubai including cover bands, jazz, acoustic, and specialty ensembles",
          serviceType: ["Rock Band", "Cover Band", "Corporate Entertainment", "Wedding Band", "Classical Orchestra", "Themed Entertainment", "Live Music Performances"],
          areaServed: {
            "@type": "City",
            name: "Dubai",
            containedInPlace: "UAE"
          },
          provider: {
            "@type": "Organization",
            name: "Box Entertainment",
          },
        }}
      />

      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/services" },
              { label: "Entertainment", href: "/services/entertainment" },
              { label: "Bands" }
            ]} 
          />

          {/* Hero Section */}
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl order-2 lg:order-1 mb-8 lg:mb-0">
              {!heroLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
              <img
                src={heroImage}
                alt="Professional live band performing at luxury Dubai event"
                className={`w-full h-full object-cover transition-opacity duration-500 ${
                  heroLoaded ? 'opacity-100' : 'opacity-0'
                }`}
              />
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
              
              {/* H1 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  Professional Live <span className="gradient-text">Bands</span>
                </h1>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h1 className="hidden lg:block text-5xl md:text-6xl font-heading leading-tight">
                Professional Live <span className="gradient-text">Bands</span>
              </h1>
              <p className="text-2xl text-muted-foreground">
                Elevate your Dubai event with captivating live music performances
              </p>
              <p className="text-lg text-muted-foreground">
                From classic cover bands to jazz ensembles and acoustic sets, our professional live bands deliver unforgettable performances that energize and entertain. Specializing in weddings, corporate events, and luxury celebrations across Dubai with versatile musicians and custom setlists tailored to your vision.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book a Band Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" onClick={scrollToMeetBands}>
                  Meet Our Bands
                  <ArrowDown className="ml-2 h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          {/* Meet Our Bands Section */}
          <section id="meet-our-bands" className="py-20 -mx-4 lg:-mx-8 px-4 lg:px-8 bg-muted/30">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-4xl md:text-5xl mb-4">
                  Meet Our <span className="gradient-text">Bands</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  Professional musicians delivering unforgettable live performances
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {bands.map((band, index) => (
                  <BandCard key={index} band={band} />
                ))}
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
            <StructuredData
              data={{
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: faqs.map((faq) => ({
                  "@type": "Question",
                  name: faq.question,
                  acceptedAnswer: {
                    "@type": "Answer",
                    text: faq.answer
                  }
                }))
              }}
            />
            
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
                <HelpCircle size={18} className="text-primary" />
                <span className="text-sm font-medium text-primary">FAQ</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
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

          {/* Related Services */}
          <RelatedServices currentService="bands" />

          {/* Bottom CTA */}
          <div className="text-center py-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book a Band Now
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

interface BandType {
  name: string;
  role: string;
  image: string;
  description: string;
  tags: string[];
}

const BandCard = ({ band }: { band: BandType }) => {
  const { isLoaded } = useImageLoader(band.image);

  return (
    <Card className="group hover-lift overflow-hidden">
      <div className="relative aspect-[3/4] overflow-hidden">
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
        <img
          src={band.image}
          alt={`${band.name} - ${band.role}`}
          className={`w-full h-full object-cover transition-all duration-500 group-hover:scale-110 ${
            isLoaded ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-6">
          <h3 className="font-heading text-2xl mb-1 text-white">{band.name}</h3>
          <p className="text-primary font-medium">{band.role}</p>
        </div>
      </div>
      <CardContent className="p-6 space-y-4">
        <p className="text-muted-foreground">{band.description}</p>
        <div className="flex flex-wrap gap-2">
          {band.tags.map((tag, idx) => (
            <span 
              key={idx}
              className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default Bands;
