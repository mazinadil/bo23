import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Building2, Heart, PartyPopper, Sparkles,
  CheckCircle, Star, Users, ArrowRight
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { useImageLoader } from "@/hooks/useImageLoader";

const Events = () => {
  const heroImageLoaded = useImageLoader("/images/events/parties-hero.webp");

  const eventServiceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Event Entertainment Services Dubai",
    "description": "Professional entertainment services for weddings, parties, corporate events, and proposals across Dubai",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Box Entertainment",
      "url": "https://boxentertainment.ae",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    }
  };

  const eventServices = [
    {
      icon: Heart,
      title: "Wedding Entertainment",
      description: "Create magical wedding memories with Dubai's finest entertainment, from live bands to photo booths and complete wedding packages",
      image: "/images/events/weddings-hero.webp",
      link: "/events/wedding-package",
      alt: "Wedding entertainment setup in Dubai with elegant lighting and decorations"
    },
    {
      icon: PartyPopper,
      title: "Birthday Parties",
      description: "Unforgettable birthday celebrations for all ages with bouncy castles, magicians, DJs, and complete party entertainment services",
      image: "/images/events/parties-hero.webp",
      link: "/events/parties",
      alt: "Birthday party entertainment in Dubai with colorful decorations and fun activities"
    },
    {
      icon: Building2,
      title: "Corporate Events",
      description: "Professional entertainment for product launches, conferences, galas, and team building with custom branding and AV production",
      image: "/images/events/corporate-hero.webp",
      link: "/events/corporate",
      alt: "Corporate event in Dubai with professional sound and lighting setup"
    },
    {
      icon: Sparkles,
      title: "Marriage Proposals",
      description: "Plan the perfect proposal at Dubai's most romantic locations with customized setups, photography, and entertainment",
      image: "/images/events/proposals-hero.webp",
      link: "/events/proposals",
      alt: "Romantic marriage proposal setup in Dubai with elegant decorations"
    }
  ];

  const benefits = [
    {
      icon: CheckCircle,
      title: "1000+ Events Completed",
      description: "Successfully delivered entertainment for over 1000 events across Dubai with consistent 5-star reviews"
    },
    {
      icon: Star,
      title: "Professional Reliability",
      description: "Backup equipment, experienced technicians, and 24/7 support ensure flawless execution every time"
    },
    {
      icon: Users,
      title: "Dedicated Event Planners",
      description: "Personal account managers guide you through every step from initial planning to event completion"
    }
  ];

  const faqQuestions = [
    {
      question: "What types of events do you cover in Dubai?",
      answer: "We provide complete entertainment services for all event types including weddings, birthday parties (kids and adults), corporate events (product launches, conferences, galas, team building), marriage proposals, anniversaries, baby showers, and private celebrations. Each event receives customized entertainment packages tailored to your specific needs."
    },
    {
      question: "How far in advance should I book event entertainment?",
      answer: "We recommend booking 4-6 weeks in advance for most events, especially during peak season (October to May) and weekends. For large corporate events or weddings requiring extensive customization, 8-12 weeks advance notice is ideal. However, we maintain excellent availability and often accommodate last-minute bookings within 1-2 weeks based on inventory."
    },
    {
      question: "Do you provide services for both indoor and outdoor events?",
      answer: "Yes! All our services work for both indoor and outdoor venues. Our equipment is weather-resistant for outdoor use, and we can provide tents or covered setups when needed. We service all venue types including hotels, private villas, beaches, parks, desert locations, rooftops, and custom event spaces across Dubai."
    },
    {
      question: "Can you customize packages for specific themes?",
      answer: "Absolutely! We specialize in themed events. Whether it's a princess wedding, retro corporate party, tropical birthday, or romantic proposal, we customize entertainment, lighting colors, decorations, music playlists, and photo booth templates to match your theme perfectly. Our team works closely with you to bring your vision to life."
    },
    {
      question: "What venues do you service across Dubai?",
      answer: "We service all areas of Dubai and the wider UAE including Palm Jumeirah, Downtown Dubai, Dubai Marina, JBR, Arabian Ranches, Dubai Hills, Business Bay, DIFC, desert venues, beach clubs, luxury hotels, and private residences. Our team conducts site visits to understand venue requirements and coordinates setup logistics."
    },
    {
      question: "Do you provide complete event planning services?",
      answer: "Yes! Every booking includes a dedicated account manager who serves as your single point of contact for complete event coordination. We handle entertainment planning, equipment setup, timeline coordination, vendor coordination (if needed), on-site event management, and post-event breakdown. We work seamlessly with your internal team or external event planners."
    },
    {
      question: "What's included in your event packages?",
      answer: "Package inclusions vary based on your selections but typically include all equipment rental, professional staff and operators, complete setup before your event, on-site technical support throughout, and full breakdown after. Specific services include items like photo booth props, DJ music libraries, lighting effects, and backup equipment for reliability."
    },
    {
      question: "Do you offer multilingual services for international events?",
      answer: "Yes! Our silent headset system supports multilingual conferences with up to 3 simultaneous translation channels. We also have multilingual staff members, international music libraries for diverse audiences, and experience hosting events for international clients from across the globe. Dubai's multicultural environment is our specialty."
    },
    {
      question: "Can you coordinate with other vendors?",
      answer: "Definitely! We regularly coordinate with caterers, decorators, florists, venues, photographers, and other vendors to ensure seamless event execution. Our experienced team knows how to work collaboratively, respect setup timelines, and integrate our services smoothly with other event elements. We're team players committed to your event's success."
    },
    {
      question: "What makes Box Entertainment different from other providers?",
      answer: "Our difference lies in professional reliability with backup equipment and experienced technicians, comprehensive service range (entertainment, production, activities all in one place), custom branding and theming capabilities, dedicated account managers for personalized service, proven track record with 1000+ successful events, competitive pricing with transparent quotes, and 24/7 customer support. We don't just provide equipment - we deliver complete entertainment experiences."
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Event Entertainment Dubai | Weddings, Parties, Corporate</title>
        <meta name="description" content="Professional entertainment for Dubai weddings, parties, corporate events, and proposals. Complete planning and production services." />
        <meta name="keywords" content="event entertainment Dubai, wedding entertainment, birthday parties Dubai, corporate events, proposal planning, event services Dubai" />
        <link rel="canonical" href="https://boxentertainment.ae/events" />
        <meta property="og:title" content="Event Entertainment Dubai | Box Entertainment" />
        <meta property="og:description" content="Professional entertainment services for weddings, parties, corporate events, and proposals across Dubai" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://boxentertainment.ae/events" />
        <meta property="og:image" content="https://boxentertainment.ae/images/events/parties-hero.webp" />
      </Helmet>
      
      <StructuredData data={eventServiceSchema} />

      {/* Hero Section */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden">
        {heroImageLoaded && (
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
            style={{ backgroundImage: "url('/images/events/parties-hero.webp')" }}
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20">
          <div className="text-center text-white space-y-6 animate-fade-in">
            <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              Event <span className="gradient-text">Entertainment</span> Dubai
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto">
              Professional entertainment services for weddings, parties, corporate events, and proposals across Dubai
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Enquire Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#our-services">View Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <div className="container mx-auto px-4 lg:px-8 py-20">
        {/* Our Event Services Section */}
        <section id="our-services" className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Our <span className="gradient-text">Event Services</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover our specialized entertainment services for every type of celebration
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {eventServices.map((service, index) => {
              const ServiceIcon = service.icon;
              const { isLoaded } = useImageLoader(service.image);
              
              return (
                <Link key={index} to={service.link}>
                  <Card className="group overflow-hidden hover-lift h-full transition-all duration-300 hover:shadow-xl">
                    {/* Background Image with Overlay */}
                    <div className="relative h-64 overflow-hidden">
                      {isLoaded && (
                        <img 
                          src={service.image} 
                          alt={service.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
                      
                      {/* Content Overlay */}
                      <div className="absolute inset-0 flex flex-col justify-end p-6 text-white">
                        <ServiceIcon className="h-10 w-10 mb-3 text-[#D25C84]" />
                        <h3 className="text-2xl font-heading font-bold mb-2">
                          {service.title}
                        </h3>
                        <p className="text-sm text-gray-200 mb-4">
                          {service.description}
                        </p>
                        <div className="flex items-center text-sm font-medium text-[#D25C84] group-hover:translate-x-2 transition-transform">
                          Learn More <ArrowRight className="ml-2 h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="mb-20">
          <div className="text-center mb-12 space-y-4">
            <h2 className="font-heading text-4xl md:text-5xl font-bold">
              Why Choose <span className="gradient-text">Box Entertainment</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Dubai's trusted partner for unforgettable event experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const BenefitIcon = benefit.icon;
              return (
                <Card key={index} className="hover-lift border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5">
                  <CardHeader>
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      <BenefitIcon className="w-6 h-6 text-[#D25C84]" />
                    </div>
                    <CardTitle className="font-heading text-2xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base leading-relaxed">{benefit.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </section>

        {/* FAQs Section */}
        <FAQSection questions={faqQuestions} title="Event Planning FAQs" />

        {/* Related Services Section */}
        <section className="mt-20">
          <RelatedServices currentService="events" />
        </section>

        {/* Final CTA Section */}
        <section className="mt-20 text-center bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Ready to Plan Your <span className="gradient-text">Perfect Event?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create an unforgettable celebration your guests will be talking about for years to come
          </p>
          <Link to="/contact">
            <Button variant="hero" size="lg">
              Get Started Today
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </Link>
        </section>
      </div>
    </div>
  );
};

export default Events;
