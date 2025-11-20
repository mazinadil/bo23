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

const Singers = () => {
  const heroImage = useImageLoader("/images/services/singers-bg.webp");

  const singers = [
    {
      name: "Alina",
      role: "Romanian-Lebanese Recording Artist",
      image: "/images/singers/alina.webp",
      description: "International recording artist and performer based in Dubai. With Romanian-Lebanese heritage, Alina brings multicultural flair to corporate events, luxury weddings, and high-profile celebrations. Versatile repertoire spanning pop, contemporary hits, and international favorites with stunning stage presence.",
      tags: ["Pop", "International", "Multilingual", "Corporate Events"]
    },
    {
      name: "Clea",
      role: "Contemporary Pop & Soul Vocalist",
      image: "/images/singers/clea.webp",
      description: "Dynamic female vocalist specializing in contemporary pop and soul performances. Known for powerful vocals and engaging stage presence at Dubai's premier venues. Perfect for weddings, private parties, and corporate entertainment with diverse repertoire from classic hits to modern chart-toppers.",
      tags: ["Pop", "Soul", "Weddings", "Versatile"]
    },
    {
      name: "Lisette",
      role: "International Performer & Vocalist",
      image: "/images/singers/lisette.webp",
      description: "Captivating international performer bringing energy and elegance to events across Dubai and the UAE. Specializes in pop, contemporary, and classic hits with exceptional vocal range. Experienced in large-scale productions, galas, and intimate celebrations requiring world-class entertainment.",
      tags: ["International", "Pop", "High Energy", "Galas"]
    },
    {
      name: "Lina",
      role: "German-Born Multilingual Vocalist",
      image: "/images/singers/lina.webp",
      description: "Born in Hanover, Germany, from a musical family, Lina knew music would be her profession from age five. Multilingual vocalist with powerful voice spanning pop, soul, and contemporary hits. Known for captivating performances at luxury Dubai venues, corporate events, and weddings with diverse international repertoire.",
      tags: ["Pop", "Soul", "Multilingual", "Luxury Events"]
    },
    {
      name: "Janelle",
      role: "Jazz & Contemporary Vocalist",
      image: "/images/singers/janelle.webp",
      description: "Sophisticated vocalist bringing timeless elegance with expertise in jazz standards, contemporary pop, and soul classics. Perfect for upscale corporate events, cocktail hours, and luxury celebrations. Delivers smooth, professional performances with backing tracks or live band integration.",
      tags: ["Jazz", "Contemporary", "Sophisticated", "Corporate"]
    },
    {
      name: "Ryan",
      role: "Acoustic Singer-Songwriter",
      image: "/images/singers/ryan.webp",
      description: "Soulful acoustic performer specializing in intimate wedding ceremonies, lounge settings, and beach celebrations. Guitar and vocals creating warm, personal atmospheres with stripped-back arrangements of classics and contemporary favorites. Perfect for ceremonies and cocktail hours.",
      tags: ["Acoustic", "Weddings", "Singer-Songwriter", "Intimate"]
    }
  ];

  const faqs = [
    {
      question: "How much does it cost to hire a professional singer in Dubai?",
      answer: "Professional singer pricing ranges from AED 2,000 for solo acoustic performances at intimate events to AED 10,000+ for internationally recognized vocalists at large corporate galas. Pricing depends on performance duration, singer experience, backing track requirements, and event complexity. Duos and vocal groups are priced accordingly. Contact us for a customized quote."
    },
    {
      question: "What music genres do your singers specialize in?",
      answer: "Our singers cover diverse genres including pop, contemporary hits, jazz, soul, acoustic/singer-songwriter, international music, and wedding classics. With multilingual capabilities and diverse cultural backgrounds, we match vocalists to your event's style and audience preferences."
    },
    {
      question: "Can singers perform with live bands or backing tracks?",
      answer: "Yes! Our singers are versatile and can perform with live bands, acoustic accompaniment, or professional backing tracks. For events featuring our live bands, singers can be seamlessly integrated. We also coordinate with DJs for specific song requests and transitions."
    },
    {
      question: "How far in advance should I book a singer?",
      answer: "We recommend booking 4-6 weeks in advance for standard events and 8-10 weeks for weddings, large corporate galas, and peak season (October-April). Popular singers during weekend prime slots require earlier booking. Custom song requests need at least 3-4 weeks' notice for rehearsal."
    },
    {
      question: "Can singers learn specific songs for our event?",
      answer: "Absolutely! With at least 3-4 weeks' notice, our singers can learn 2-4 special song requests. This is especially popular for wedding first dances, company anthems at corporate events, or culturally significant songs. We provide rehearsal recordings for approval before your event."
    },
    {
      question: "Do singers provide their own sound equipment?",
      answer: "For small to medium venues (up to 150 guests), singers come with microphones and basic PA systems. For larger events, outdoor venues, or events requiring comprehensive audio production, we coordinate with our Sound & Lighting division to provide professional-grade equipment and sound engineers."
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
        <title>Professional Singers Dubai | Weddings & Corporate Events</title>
        <meta name="description" content="Book professional singers in Dubai for weddings, corporate events, and parties. Solo vocalists, duets, and vocal groups. Pop, jazz, classical, R&B. Custom song requests available." />
        <link rel="canonical" href="https://boxentertainment.ae/services/entertainment/singers" />
      </Helmet>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Professional Singers in Dubai",
          description: "Professional vocal performances for events in Dubai including solo singers, duets, and vocal groups across all genres",
          serviceType: ["Wedding Singer", "Corporate Entertainment", "Solo Vocalist", "Jazz Singer", "Pop Singer", "Acoustic Singer", "International Vocalist", "Multilingual Singer"],
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
              { label: "Singers" }
            ]} 
          />

          {/* Hero Section */}
          <div className="lg:grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl mb-8 lg:mb-0">
              {heroImage.isLoaded && !heroImage.error ? (
                <img 
                  src="/images/services/singers-bg.webp" 
                  alt="Professional singer performing at luxury Dubai event"
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full bg-muted animate-pulse" />
              )}
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
              
              {/* H1 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  Professional <span className="gradient-text">Singers</span>
                </h1>
              </div>
            </div>

            <div className="space-y-6">
              <h1 className="hidden lg:block text-5xl md:text-6xl font-heading font-bold leading-tight">
                Professional <span className="gradient-text">Singers</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Captivating vocal performances for unforgettable Dubai events
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                From soulful ballads to upbeat pop hits, our professional singers deliver stunning vocal performances that resonate with audiences. Specializing in weddings, corporate galas, and luxury celebrations across Dubai with versatile repertoires spanning pop, jazz, classical, R&B, and contemporary hits tailored to your event's atmosphere.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book a Singer Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#meet-our-singers">
                    Meet Our Singers
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Meet Our Singers Section */}
          <section id="meet-our-singers" className="py-20 -mx-4 lg:-mx-8 px-4 lg:px-8 bg-muted/30">
            <div className="text-center mb-12">
              <h2 className="font-heading text-4xl md:text-5xl font-bold mb-4">
                Meet Our <span className="gradient-text">Singers</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Talented vocalists bringing diverse musical styles and captivating performances to your Dubai events
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {singers.map((singer, index) => {
                const singerImage = useImageLoader(singer.image);
                
                return (
                  <Card key={index} className="overflow-hidden hover-lift group">
                    <div className="relative aspect-[3/4] overflow-hidden">
                      {singerImage.isLoaded && !singerImage.error ? (
                        <img 
                          src={singer.image} 
                          alt={`${singer.name} - ${singer.role}`}
                          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                        />
                      ) : (
                        <div className="w-full h-full bg-muted animate-pulse" />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent" />
                      <div className="absolute bottom-0 left-0 right-0 p-6">
                        <h3 className="font-heading text-2xl font-bold mb-1">{singer.name}</h3>
                        <p className="text-primary font-medium">{singer.role}</p>
                      </div>
                    </div>
                    <CardContent className="p-6">
                      <p className="text-muted-foreground mb-4">{singer.description}</p>
                      <div className="flex flex-wrap gap-2">
                        {singer.tags.map((tag, tagIndex) => (
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
                  Book Your Singer Today
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
          <RelatedServices currentService="singers" />

          {/* Bottom CTA */}
          <div className="text-center py-12">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Get Started Today
              </Link>
            </Button>
          </div>
        </div>
      </main>
    </>
  );
};

export default Singers;
