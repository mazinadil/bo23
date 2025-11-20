import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Camera, Lightbulb, PartyPopper, Sparkles, 
  Users, Headphones, Grid3x3, Film, 
  Mic2, Type, Check, Star, ArrowRight
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";
import { useImageLoader } from "@/hooks/useImageLoader";

const Corporate = () => {
  const { ref: statsRef, isVisible: statsVisible } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true,
  });

  const eventsCount = useCounterAnimation({
    target: 1000,
    duration: 2000,
    start: statsVisible,
    suffix: "+",
  });

  const clientsCount = useCounterAnimation({
    target: 500,
    duration: 2000,
    start: statsVisible,
    suffix: "+",
  });

  const artistsCount = useCounterAnimation({
    target: 50,
    duration: 2000,
    start: statsVisible,
    suffix: "+",
  });

  const eventSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Corporate Event Entertainment Services Dubai",
    "description": "Professional entertainment and production services for corporate events including product launches, conferences, award ceremonies, team building, and gala dinners across Dubai.",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Box Entertainment",
      "telephone": "+971501234567",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    },
    "serviceType": "Corporate Event Entertainment",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "geoRadius": "50000"
    }
  };

  const faqQuestions = [
    {
      question: "What corporate event services do you offer in Dubai?",
      answer: "We provide comprehensive entertainment and production services for all corporate events including product launches, team building activities, conferences and seminars, award ceremonies, gala dinners, company anniversaries, holiday parties, and networking events. Our services include professional entertainment (DJs, live bands, magicians, comedians), photo booths (360°, mirror, original), sound and lighting systems, silent headsets for conferences, dance floors, outdoor cinema, karaoke, and LED letters for branding."
    },
    {
      question: "Can you customize packages for corporate branding?",
      answer: "Absolutely! All our services can be fully customized with your corporate branding. We offer branded photo booth templates with company logos, custom LED letter messages with brand names or slogans, branded stage lighting in company colors, custom event hashtags and social media integration, branded backdrop designs, and personalized entertainment playlists. Our team works closely with your marketing department to ensure consistent brand representation throughout your event."
    },
    {
      question: "How far in advance should we book for corporate events?",
      answer: "We recommend booking 4-6 weeks in advance for standard corporate events, especially during peak business season (October-April). For large-scale conferences, product launches, or events requiring extensive customization, we suggest 8-12 weeks advance notice. However, we maintain excellent inventory and can often accommodate last-minute bookings within 1-2 weeks based on availability. Early booking ensures you get your preferred date and allows time for custom branding and detailed planning."
    },
    {
      question: "Do you provide technical support during the event?",
      answer: "Yes! Every corporate event includes dedicated on-site technical support throughout the entire duration. Our experienced technicians handle all setup before your event, provide live technical assistance during the event, troubleshoot any issues immediately, manage all equipment operation, and handle complete breakdown and removal after your event. We also bring backup equipment for critical components to ensure zero downtime and flawless execution of your corporate event."
    },
    {
      question: "What venues do you service in Dubai?",
      answer: "We service all venues across Dubai and the UAE including luxury hotels and ballrooms, conference centers and exhibition halls, outdoor venues and gardens, beachfront locations, desert camps, rooftop terraces, private villas and compounds, office buildings and corporate headquarters, and custom event spaces. Our team conducts site visits to understand venue requirements, coordinates with venue management, ensures all technical specifications are met, and adapts our setup to any space or configuration."
    },
    {
      question: "Can you handle multilingual conferences?",
      answer: "Yes! Our silent headset system is perfect for multilingual conferences and international events. We provide wireless headphones with multiple channels (up to 3 simultaneous translations), professional interpretation equipment, soundproof interpretation booths if needed, experienced technical support for language switching, and clear audio quality for all participants. This system is ideal for international conferences, multilingual seminars, training sessions with diverse audiences, and global corporate meetings in Dubai."
    },
    {
      question: "What entertainment options work best for corporate events?",
      answer: "The best entertainment depends on your event type and audience. For networking events and cocktail receptions, we recommend professional DJs or live bands creating ambient atmosphere. For gala dinners and award ceremonies, live entertainment like magicians, comedians, or performers works excellently. For team building, interactive options like karaoke, photo booths, and outdoor cinema are very popular. For product launches, branded LED displays and engaging entertainment that doesn't overshadow presentations work best. We'll help you choose the perfect entertainment mix for your specific corporate event."
    },
    {
      question: "Do you provide event planning and coordination services?",
      answer: "Yes! Every corporate booking includes a dedicated account manager who serves as your single point of contact. They handle detailed planning consultations, timeline and logistics coordination, vendor coordination if needed, technical planning and setup schedules, on-site event management, and post-event follow-up. Our team has extensive experience with corporate events and ensures seamless execution from initial planning through final breakdown. We work closely with your internal team or external event planners to deliver a flawless experience."
    },
    {
      question: "What makes your services reliable for important corporate events?",
      answer: "Reliability is our top priority for corporate clients. We ensure this through professional-grade equipment from leading brands, complete backup systems for all critical components, experienced technical teams with 1000+ corporate events delivered, dedicated account managers for personalized service, detailed planning and site visits before every event, comprehensive liability insurance, 24/7 customer support before and during your event, and proven track record with leading Dubai companies and hotels. We understand corporate events cannot have technical failures, and we deliver accordingly."
    },
    {
      question: "Can you provide references from other corporate clients?",
      answer: "Absolutely! We've successfully delivered entertainment and production services for hundreds of corporate clients across Dubai including international hotels, Fortune 500 companies, government entities, financial institutions, technology companies, and healthcare organizations. While we respect client confidentiality, we're happy to provide relevant case studies and references upon request. Our portfolio includes product launches for major brands, large-scale conferences with 500+ attendees, exclusive gala dinners, and regular corporate events for repeat clients who trust our reliability and professionalism."
    }
  ];

  const services = [
    {
      icon: PartyPopper,
      title: "Entertainment",
      description: "Professional DJs, live bands, magicians, comedians, dancers, and performers to engage your guests",
      link: "/services/entertainment",
      backgroundImage: "/images/services/dj-bg.webp",
      alt: "Professional entertainment at Dubai corporate event with DJ and sound system"
    },
    {
      icon: Camera,
      title: "Photo Booth",
      description: "360° booths, mirror booths, and original photo booths with instant branding and sharing",
      link: "/services/photobooth",
      backgroundImage: "/images/services/photobooth-bg.webp",
      alt: "Branded photo booth at corporate event with custom templates"
    },
    {
      icon: Lightbulb,
      title: "Sound & Lighting",
      description: "Professional AV equipment, stage lighting, and sound systems for presentations and entertainment",
      link: "/services/sound-lighting",
      backgroundImage: "/images/services/sound-lighting-bg.webp",
      alt: "Professional sound and lighting setup at corporate conference"
    },
    {
      icon: Headphones,
      title: "Silent Headsets",
      description: "Perfect for conferences, multilingual events, and simultaneous sessions without noise interference",
      link: "/services/silent-headsets",
      backgroundImage: "/images/services/silent-headsets-bg.webp",
      alt: "Silent headsets at corporate conference for multilingual translation"
    },
    {
      icon: Grid3x3,
      title: "Dance Floors",
      description: "LED and traditional dance floors to create a stunning centerpiece for your gala or celebration",
      link: "/services/dance-floors",
      backgroundImage: "/images/services/dance-floors-bg.webp",
      alt: "LED dance floor at corporate gala dinner"
    },
    {
      icon: Film,
      title: "Outdoor Cinema",
      description: "Big screen movie experiences perfect for team building, outdoor events, and product showcases",
      link: "/services/outdoor-cinema",
      backgroundImage: "/images/services/outdoor-cinema-bg.webp",
      alt: "Outdoor cinema at corporate team building event"
    },
    {
      icon: Mic2,
      title: "Karaoke",
      description: "Professional karaoke systems for team bonding, holiday parties, and fun networking activities",
      link: "/services/karaoke",
      backgroundImage: "/images/services/karaoke-bg.webp",
      alt: "Karaoke setup at corporate party"
    },
    {
      icon: Type,
      title: "LED Light Up Letters",
      description: "Illuminate your brand name, company logo, or event theme with stunning LED letter displays",
      link: "/services/led-letters",
      backgroundImage: "/images/services/led-letters-bg.webp",
      alt: "Branded LED letters at corporate product launch"
    }
  ];

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Corporate Event Entertainment Dubai | Trusted by Top Brands</title>
        <meta name="description" content="Professional corporate entertainment in Dubai: photo booths, DJs, sound systems, silent headsets. Trusted for launches, conferences, galas." />
        <meta name="keywords" content="corporate events Dubai, corporate entertainment Dubai, product launch Dubai, conference services, team building Dubai, corporate gala entertainment" />
        <link rel="canonical" href="https://boxentertainment.ae/events/corporate" />
      </Helmet>
      
      <StructuredData data={eventSchema} />

      {/* Hero Section with Image */}
      <section className="relative min-h-[70vh] flex items-center justify-center overflow-hidden pt-24">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/events/corporate-hero.webp"
            alt="Corporate celebration with team celebrating success with champagne and gold confetti at Dubai event"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
          <div className="mb-8">
            <Breadcrumbs 
              items={[
                { label: "Events", href: "/events" },
                { label: "Corporate Events" }
              ]}
            />
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Corporate Event <span className="gradient-text">Entertainment</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
            Professional entertainment and production services for product launches, conferences, galas, and team building events across Dubai
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book Now</Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#why-choose-us">Why Choose Us</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section with Stats */}
      <section id="why-choose-us" className="container mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Choose Us for Corporate Events
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Trusted by leading companies and hotels across Dubai for exceptional corporate entertainment
          </p>
        </div>

        {/* Stats Grid */}
        <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto mb-16">
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary">{eventsCount}</div>
            <div className="text-sm text-muted-foreground">Events Completed</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-secondary">{clientsCount}</div>
            <div className="text-sm text-muted-foreground">Happy Clients</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-primary">{artistsCount}</div>
            <div className="text-sm text-muted-foreground">Professional Artists</div>
          </div>
          <div className="text-center space-y-2">
            <div className="text-4xl md:text-5xl font-bold text-secondary">24/7</div>
            <div className="text-sm text-muted-foreground">Customer Support</div>
          </div>
        </div>

        {/* Additional Benefits */}
        <div className="grid md:grid-cols-3 gap-6">
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <Check className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">Professional Reliability</h3>
              <p className="text-muted-foreground">Backup equipment and dedicated technical support for flawless execution</p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <Star className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">Custom Branding</h3>
              <p className="text-muted-foreground">All services customizable with your corporate brand and colors</p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">Dedicated Account Manager</h3>
              <p className="text-muted-foreground">Single point of contact for seamless event coordination</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Our Services Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Corporate Event Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Comprehensive entertainment and production solutions for every corporate occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              const { isLoaded } = useImageLoader(service.backgroundImage);
              
              return (
                <Link key={index} to={service.link}>
                  <Card className="h-full hover-lift transition-all duration-300 hover:shadow-lg overflow-hidden group">
                    {/* Background Image */}
                    <div className="relative h-48 overflow-hidden">
                      {isLoaded && (
                        <img
                          src={service.backgroundImage}
                          alt={service.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-background via-background/60 to-transparent" />
                    </div>

                    {/* Content */}
                    <CardContent className="p-6 space-y-3">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#D25C84]" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold group-hover:text-[#D25C84] transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {service.description}
                      </p>
                      <div className="flex items-center text-[#D25C84] text-sm font-medium pt-2">
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <FAQSection questions={faqQuestions} title="Corporate Events FAQ" />
      </section>

      {/* You Might Also Like */}
      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <RelatedServices currentService="corporate-events" />
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <CardContent className="p-12 text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Plan Your <span className="gradient-text">Corporate Event?</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Contact us today for a customized quote and consultation with our corporate events team
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started</Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Corporate;
