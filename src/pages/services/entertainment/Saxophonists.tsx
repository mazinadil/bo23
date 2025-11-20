import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { useImageLoader } from "@/hooks/useImageLoader";
import vitaliImg from "@/assets/saxophonists/vitali-20251110.webp";

const saxophonists = [
  {
    name: "Tima",
    role: "DJ & Electronic Sax Specialist",
    image: "/images/saxophonists/tima.webp",
    description: "Universal musician, saxophonist, and DJ with over 15 years of active concert and club experience. Based in Dubai, Tima masterfully blends live saxophone with electronic music across Smooth Jazz, Funk, Deep House, Disco, and Tech-House. Extensive collaborative releases with international pop stars and DJs including performances with Hed Kandi, Buddha Bar Paris, and Blue Marlin Ibiza artists.",
    tags: ["DJ Collab", "Deep House", "Electronic", "Jazz Fusion"]
  },
  {
    name: "Vitali",
    role: "Professional Saxophonist & Educator",
    image: vitaliImg,
    description: "Professional musician and music teacher bringing technical excellence and emotional depth to Dubai events. Specializes in contemporary and classical saxophone performances with VSH Studio projects. Perfect for corporate events, weddings, and luxury celebrations requiring sophisticated live entertainment with masterful artistry.",
    tags: ["Professional", "Classical", "Contemporary", "Corporate Events"]
  },
  {
    name: "Paul",
    role: "Italian Australian Sax & DJ Performer",
    image: "/images/saxophonists/paul.webp",
    description: "Dynamic Italian Australian musician renowned for engaging performances as both Saxophone Player and DJ across Dubai and internationally. Regularly partners with notable brands, prestigious venues, and esteemed private clientele. Versatile multifaceted performer playing Jazz, Pop, Dance, and House from solo roaming to duos, trios, and full big band formations.",
    tags: ["DJ Collab", "Jazz", "Pop", "Big Band"]
  },
  {
    name: "Maby",
    role: "Cuban Saxophonist & Orchestral Artist",
    image: "/images/saxophonists/maby.webp",
    description: "Professionally trained Cuban saxophonist based in Abu Dhabi. Graduate of Vocational Art School 'Manuel Muñóz Cedeño' with specialized training in Choral Chant and certified Musical Instrumentalist for Orchestra and Band. Brings authentic Latin flair and classical training to contemporary performances across corporate events and celebrations throughout the UAE.",
    tags: ["Latin", "Classical Training", "Orchestra", "Corporate"]
  },
  {
    name: "Kristina",
    role: "Soulful Jazz & Funk Saxophonist",
    image: "/images/saxophonists/kristina.webp",
    description: "One of Dubai's most soulful saxophonists mixing jazz improvisation with funky rhythms, expressive playing, and catchy tunes. Based in Dubai for over 6 years with extensive experience performing at corporate events, presentations, exhibitions, fashion shows, wedding venues, and private parties alongside various artists and DJs. Professional, engaging, and versatile.",
    tags: ["Jazz", "Funk", "Fashion Shows", "DJ Collab"]
  },
  {
    name: "Clau",
    role: "Cuban-Trained Multi-Genre Virtuoso",
    image: "/images/saxophonists/clau.webp",
    description: "Dynamic Dubai-based saxophonist Claudia L. Saxo brings magnetic stage presence and musical finesse to every event. Cuban-trained with multiple music degrees including flute and arts credentials, she's performed across Turkey, Switzerland, Egypt, Maldives, and UAE. Delivers smooth jazz, pop covers, Latin rhythms, and sultry saxophone lines over DJ sets tailored for weddings, corporate events, nightlife venues, and yacht parties.",
    tags: ["Latin", "Pop", "Jazz", "Yacht Parties"]
  }
];

const faqs = [
  {
    question: "How much does it cost to hire a saxophonist in Dubai?",
    answer: "Professional saxophonist pricing ranges from AED 1,800 for solo performances at intimate events to AED 6,000+ for extended performances with DJ collaboration at large corporate galas. Pricing depends on performance duration, collaboration requirements (DJ, backing tracks, band), and event complexity. Contact us for a customized quote."
  },
  {
    question: "What music styles can saxophonists perform?",
    answer: "Our saxophonists are versatile across genres including jazz (smooth jazz, bebop, funk), electronic music (Deep House, Tech-House, Nu Disco), Latin rhythms, pop covers, classical pieces, and contemporary hits. Featuring DJ collaboration specialists, Cuban-trained artists, and multi-genre performers with international experience across weddings, corporate events, fashion shows, and yacht parties."
  },
  {
    question: "Can saxophonists perform with DJs?",
    answer: "Absolutely! Saxophone and DJ collaborations are extremely popular for modern events. Our saxophonists seamlessly integrate with DJ sets, adding live instrumentation over electronic beats for weddings, corporate parties, and nightlife events. This creates an energetic, contemporary atmosphere guests love."
  },
  {
    question: "How far in advance should I book a saxophonist?",
    answer: "We recommend booking 3-4 weeks in advance for standard performances and 6-8 weeks for weddings, large corporate events, and peak season (October-April). Popular saxophonists during weekend prime slots require earlier booking to ensure availability."
  },
  {
    question: "Do saxophonists provide their own equipment?",
    answer: "Yes, all our saxophonists come with professional-grade saxophones (alto, tenor, or soprano depending on the performance), microphones, and small amplification suitable for venues up to 150 guests. For larger events or outdoor venues, we coordinate with our Sound & Lighting division for comprehensive audio solutions."
  },
  {
    question: "Can saxophonists perform at outdoor venues?",
    answer: "Yes, our saxophonists regularly perform at outdoor venues including beaches, rooftop terraces, gardens, and poolside locations across Dubai. We ensure appropriate amplification and equipment protection for outdoor conditions. Wireless systems available for roaming performances."
  }
];

const Saxophonists = () => {
  const heroImage = "/images/services/saxophonists-bg.webp";
  const { isLoaded: heroLoaded } = useImageLoader(heroImage);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map((faq) => ({
      "@type": "Question",
      "name": faq.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": faq.answer
      }
    }))
  };

  return (
    <>
      <Helmet>
        <title>Saxophonists Dubai | Wedding & Corporate Performances</title>
        <meta name="description" content="Book professional saxophonists in Dubai. Featuring Tima, Vitali, Paul, Maby, Kristina & Clau. DJ collaborations, jazz, Latin, funk, electronic & classical. Weddings, corporate events & yacht parties." />
        <link rel="canonical" href="https://boxentertainment.ae/services/entertainment/saxophonists" />
      </Helmet>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Professional Saxophonists in Dubai",
          description: "Professional saxophone performances for events in Dubai including jazz, pop, classical, and electronic music with DJ collaborations",
          serviceType: ["Wedding Saxophonist", "Corporate Entertainment", "Jazz Saxophone", "DJ Collaboration", "Electronic Sax", "Deep House Performance", "Latin Saxophone", "Classical Saxophone", "Funk Saxophone", "Yacht Party Entertainment"],
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

      <StructuredData data={faqSchema} />

      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/services" },
              { label: "Entertainment", href: "/services" },
              { label: "Saxophonists" }
            ]} 
          />

          {/* Hero Section */}
          <section className="lg:grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl order-2 lg:order-1 mb-8 lg:mb-0">
              {!heroLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
              <img
                src={heroImage}
                alt="Professional saxophonist performing at luxury Dubai event"
                className="w-full h-full object-cover"
                loading="eager"
              />
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
              
              {/* H1 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  Professional <span className="gradient-text">Saxophonists</span>
                </h1>
              </div>
            </div>

            <div className="space-y-6 order-1 lg:order-2">
              <h1 className="hidden lg:block text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Professional <span className="gradient-text">Saxophonists</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground font-medium">
                Add sophistication and soul to your Dubai events with live saxophone
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Experience the rich, smooth tones of professional saxophone performances that elevate any celebration. From jazz improvisation to contemporary hits, our saxophonists blend technical mastery with soulful expression. Perfect for weddings, corporate events, and luxury celebrations across Dubai with versatile performances spanning jazz, pop, electronic, and classical genres.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book a Saxophonist Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#meet-our-saxophonists">
                    Meet Our Saxophonists
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Meet Our Saxophonists Section */}
          <section id="meet-our-saxophonists" className="py-20 -mx-4 lg:-mx-8 px-4 lg:px-8 bg-muted/30">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Meet Our <span className="gradient-text">Saxophonists</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From jazz masters to electronic fusion artists, discover our talented saxophonists
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {saxophonists.map((saxophonist, index) => {
                const { isLoaded } = useImageLoader(saxophonist.image);
                
                return (
                  <Card key={index} className="overflow-hidden group hover-lift">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      {!isLoaded && (
                        <div className="absolute inset-0 bg-muted animate-pulse" />
                      )}
                      <img
                        src={saxophonist.image}
                        alt={`${saxophonist.name} - ${saxophonist.role}`}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        loading="lazy"
                        onError={(e) => {
                          const t = e.currentTarget as HTMLImageElement;
                          if ((t as any).dataset.fallbackApplied) return;
                          t.src = "/images/services/saxophonists-bg.webp";
                          (t as any).dataset.fallbackApplied = "true";
                        }}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-heading text-2xl font-bold text-white mb-1">
                          {saxophonist.name}
                        </h3>
                        <p className="text-white/90 font-medium">{saxophonist.role}</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4 leading-relaxed">
                        {saxophonist.description}
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {saxophonist.tags.map((tag, tagIndex) => (
                          <span
                            key={tagIndex}
                            className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                );
              })}
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Book Your Saxophonist Today
                </Link>
              </Button>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16">
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
          <RelatedServices currentService="saxophonists" />

          {/* Bottom CTA */}
          <section className="text-center py-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-6">
              Ready to Elevate Your Event?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book a professional saxophonist today and add soulful sophistication to your celebration
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Started Now
              </Link>
            </Button>
          </section>
        </div>
      </main>
    </>
  );
};

export default Saxophonists;
