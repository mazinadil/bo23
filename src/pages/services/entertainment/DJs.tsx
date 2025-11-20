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

const DJs = () => {
  const heroImageLoaded = useImageLoader("/images/services/dj-bg.webp");

  const djs = [
    {
      name: "DJ Andy",
      role: "International DJ & Producer",
      image: "/images/djs/dj-andy.webp",
      description: "Versatile international DJ with over 10 years of experience performing at luxury venues across Dubai. Known for seamless mixing and reading the crowd perfectly.",
      tags: ["House Music", "Wedding DJ", "Corporate Events", "Open Format"]
    },
    {
      name: "DJ Darryl Rees",
      role: "Premium Event DJ",
      image: "/images/djs/dj-darryl-rees.webp",
      description: "Specializing in high-end corporate events and luxury weddings. Expert in creating the perfect atmosphere with sophisticated music selection and professional presence.",
      tags: ["Corporate", "Weddings", "Gala Dinners", "Award Nights"]
    },
    {
      name: "DJ Rogerio",
      role: "Multi-Genre Specialist",
      image: "/images/djs/dj-rogerio.webp",
      description: "Dynamic DJ bringing energy to every performance with expertise in Latin, house, and commercial music. Perfect for diverse international audiences.",
      tags: ["Latin Music", "House", "Party DJ", "Multi-Cultural Events"]
    },
    {
      name: "DJ Joel",
      role: "High-Energy Performer",
      image: "/images/djs/dj-joel.webp",
      description: "Known for creating unforgettable party atmospheres with high-energy sets and crowd engagement. Specializes in EDM, hip-hop, and open format mixing.",
      tags: ["EDM", "Hip-Hop", "Club Nights", "Private Parties"]
    },
    {
      name: "DJ Ems",
      role: "Wedding & Event Specialist",
      image: "/images/djs/dj-ems.webp",
      description: "Expert in creating the perfect soundtrack for your special day. Skilled in reading the room and keeping dance floors packed all night long.",
      tags: ["Weddings", "RnB", "Pop Music", "Crowd Pleaser"]
    },
    {
      name: "DJ Mary",
      role: "Versatile Mix Master",
      image: "/images/djs/dj-mary.webp",
      description: "Bringing fresh energy with expert mixing across multiple genres. Popular choice for fashion events, product launches, and stylish celebrations.",
      tags: ["Fashion Events", "Commercial House", "Product Launches", "Chic Vibes"]
    },
    {
      name: "DJ Adam",
      role: "Technical Excellence",
      image: "/images/djs/dj-adam.webp",
      description: "Technical perfectionist with a passion for seamless transitions and flawless sound. Trusted by major brands for corporate and promotional events.",
      tags: ["Tech House", "Corporate", "Brand Events", "Professional"]
    },
    {
      name: "DJ Katt",
      role: "Contemporary Hits Specialist",
      image: "/images/djs/dj-katt.webp",
      description: "Master of contemporary hits and crowd favorites. Creates infectious energy perfect for celebrations, bringing the latest tracks and timeless classics together.",
      tags: ["Top 40", "Party DJ", "Celebrations", "Current Hits"]
    }
  ];

  const faqs = [
    {
      question: "How much does it cost to hire a DJ in Dubai?",
      answer: "DJ pricing ranges from AED 1,500 for small private parties to AED 6,000+ for large corporate events and weddings. Pricing depends on event duration, equipment needs, and DJ experience level. Contact us for a customized quote tailored to your event."
    },
    {
      question: "What equipment do your DJs provide?",
      answer: "All our DJs come with professional-grade equipment including DJ controllers, sound systems, and lighting. For larger events, we offer premium sound packages and stage lighting upgrades. Equipment is included in standard bookings."
    },
    {
      question: "How far in advance should I book a DJ?",
      answer: "We recommend booking at least 2-3 weeks in advance for private parties and 6-8 weeks for weddings and corporate events. Peak season (October-April) and weekends may require earlier booking to ensure availability."
    },
    {
      question: "Can DJs play specific music genres or playlists?",
      answer: "Absolutely! Our DJs specialize in various genres including house, EDM, hip-hop, Arabic music, Bollywood, and open format. Share your playlist preferences and we'll match you with the perfect DJ for your event's vibe."
    },
    {
      question: "Do you provide DJs for outdoor events?",
      answer: "Yes, our DJs perform at both indoor and outdoor venues across Dubai. We provide weather-protected equipment for outdoor events including beaches, rooftop venues, and garden parties."
    },
    {
      question: "Can the DJ also act as an MC/host?",
      answer: "Many of our DJs offer MC services to keep your event flowing smoothly, make announcements, and engage with guests. This is especially popular for weddings and corporate events. Let us know if you need combined DJ + MC services."
    }
  ];

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
        <title>Professional DJs Dubai | Wedding & Corporate Event DJs</title>
        <meta name="description" content="Book professional DJs in Dubai for weddings and corporate events. Experienced with top equipment. House, EDM, Arabic, Bollywood & open format." />
        <link rel="canonical" href="https://boxentertainment.ae/services/entertainment/djs" />
      </Helmet>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Professional DJs in Dubai",
          description: "Professional DJ services for weddings, corporate events, and parties in Dubai",
          serviceType: ["Wedding DJ", "Corporate Event DJ", "Party DJ", "Club DJ"],
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
              { label: "Entertainment", href: "/services/entertainment" },
              { label: "DJs" }
            ]} 
          />

          {/* Hero Section */}
          <section className="lg:grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl mb-8 lg:mb-0">
              {heroImageLoaded && (
                <img
                  src="/images/services/dj-bg-20251110.webp"
                  alt="Professional DJ performing at luxury Dubai event"
                  className="w-full h-full object-cover"
                  loading="eager"
                />
              )}
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
              
              {/* H1 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  Professional <span className="gradient-text">DJs</span>
                </h1>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="hidden lg:block text-5xl md:text-6xl font-heading font-bold leading-tight">
                Professional <span className="gradient-text">DJs</span>
              </h1>
              <p className="text-2xl text-muted-foreground">
                Elevate your Dubai event with world-class DJ entertainment
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From high-energy club nights to sophisticated corporate events, our professional DJs deliver exceptional music experiences tailored to your celebration. Specializing in weddings, corporate galas, and private parties across Dubai.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book a DJ Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#meet-our-djs">Meet Our DJs</a>
                </Button>
              </div>
            </div>
          </section>

          {/* Meet Our DJs Section */}
          <section id="meet-our-djs" className="py-20 -mx-4 lg:-mx-8 px-4 lg:px-8 bg-muted/30">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6">
                Meet Our <span className="gradient-text">DJs</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Our roster of professional DJs brings years of experience and diverse musical expertise to create unforgettable moments at your event
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {djs.map((dj, index) => (
                <Card key={index} className="overflow-hidden hover-lift group backdrop-blur-sm bg-card/50">
                  <div className="relative aspect-[3/4] overflow-hidden">
                    <img
                      src={dj.image}
                      alt={`${dj.name} - ${dj.role}`}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      loading="lazy"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <h3 className="font-heading text-2xl font-bold mb-1">{dj.name}</h3>
                      <p className="text-primary font-medium">{dj.role}</p>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {dj.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {dj.tags.map((tag, tagIndex) => (
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
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Book Your DJ Now
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
          <RelatedServices currentService="dj" />

          {/* Bottom CTA */}
          <div className="text-center mt-16">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book Your DJ Today
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default DJs;
