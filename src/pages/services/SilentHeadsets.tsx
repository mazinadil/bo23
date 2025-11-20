import { Helmet } from "react-helmet-async";
import { Headphones, Radio, Sparkles, Users, Star, Check, PartyPopper, Briefcase } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useImageLoader } from "@/hooks/useImageLoader";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";

const SilentHeadsets = () => {
  const schema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Silent Headsets Rental Dubai",
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
    "description": "Wireless silent disco headsets for unique party experiences in Dubai",
    "areaServed": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "25.2048",
        "longitude": "55.2708"
      },
      "geoRadius": "50000"
    },
    "serviceType": "Silent Disco Headset Rental",
    "category": "Entertainment Services",
    "offers": {
      "@type": "Offer",
      "priceRange": "AED 3000 - AED 10000",
      "priceCurrency": "AED"
    }
  };

  const services = [
    {
      icon: PartyPopper,
      title: "Silent Disco",
      description: "Multi-channel wireless headphones for unique party experiences with 3 DJs simultaneously",
      link: "/services/silent-headsets/silent-disco",
      backgroundImage: "/images/services/silent-disco-bg.webp",
      alt: "Silent disco party with LED wireless headphones and multiple DJs at Dubai event"
    },
    {
      icon: Users,
      title: "Silent Yoga",
      description: "Wireless headsets for outdoor yoga and wellness sessions with clear instructor guidance",
      link: "/services/silent-headsets/silent-yoga",
      backgroundImage: "/images/services/silent-yoga-bg.webp",
      alt: "Silent yoga session with wireless headsets at outdoor Dubai wellness event"
    },
    {
      icon: Briefcase,
      title: "Corporate Headsets",
      description: "Professional wireless solutions for conferences, presentations, and team building events",
      link: "/services/silent-headsets/corporate-headsets",
      backgroundImage: "/images/services/corporate-headsets-bg.webp",
      alt: "Corporate wireless headsets for professional conferences and events in Dubai"
    }
  ];

  const faqQuestions = [
    {
      question: "How many channels do your silent disco headsets support?",
      answer: "Our professional silent disco headsets support 3 channels simultaneously. This means you can have up to 3 different DJs or music styles playing at once, and guests can switch between channels to choose their preferred music. Each channel is color-coded with LED lights (Red, Green, Blue) so you can see what others are listening to."
    },
    {
      question: "What's the battery life of the headsets?",
      answer: "Our headsets have 8-10 hours of continuous battery life when fully charged. We deliver all headsets fully charged and include charging stations for longer events. The headsets automatically power off when not in use to conserve battery, and we provide backup units for extended events."
    },
    {
      question: "How much does it cost to rent silent disco headsets in Dubai?",
      answer: "Silent headset rental prices vary based on quantity and event duration. Packages typically start from AED 3,000 for 50 headsets for 3 hours, up to AED 10,000+ for larger events with 200+ headsets. Pricing includes delivery, setup, professional transmitters, technical support, and collection. We offer discounted rates for multi-day events and corporate packages. Contact us for a customized quote based on your specific needs."
    },
    {
      question: "How many headsets can you provide?",
      answer: "We can provide anywhere from 20 to 500+ headsets depending on your event size. Our most popular packages range from 50-200 headsets for parties and corporate events. For large festivals or public events requiring more than 500 units, we can coordinate with partners to scale up. All headsets come from the same high-quality inventory to ensure consistent audio experience."
    },
    {
      question: "Can guests switch between different music channels?",
      answer: "Yes! That's the beauty of silent disco. Each guest can freely switch between the 3 channels at any time using a simple button on their headset. The LED lights on each headset change color to indicate which channel they're listening to, creating a visual light show as guests switch between channels. Individual volume control allows each guest to set their preferred listening level."
    },
    {
      question: "What events are silent headsets perfect for?",
      answer: "Silent headsets are ideal for: outdoor events with noise restrictions, beach and rooftop parties, corporate team building and conferences, silent yoga and wellness sessions, museum nights and cultural events, university campus events, multi-language presentations, outdoor cinemas with commentary, and any venue with strict noise regulations. They're especially popular in Dubai for events in residential areas, hotels with quiet hours, and unique corporate experiences."
    },
    {
      question: "What's the wireless range of the headsets?",
      answer: "Our professional-grade silent disco headsets have a wireless range of up to 300 meters (approximately 1,000 feet) from the transmitter in open spaces. For indoor events, the effective range is typically 100-150 meters depending on walls and obstacles. We strategically position transmitters to ensure full coverage for your event space and conduct signal tests before guests arrive."
    },
    {
      question: "Do you provide DJs and music for silent disco events?",
      answer: "Yes! We offer complete silent disco packages including professional DJs, music curation, and headset rental. You can choose to have 1, 2, or 3 DJs playing different genres simultaneously. Alternatively, if you prefer to use your own DJs or playlists, we provide just the headset equipment with technical support. Our entertainment team can also help you select the right music mix for your audience and event type."
    }
  ];

  const features = [
    "Wireless Headphone Systems",
    "Multi-Channel Options (3 DJs)",
    "LED Color-Coded Channels",
    "Long Battery Life",
    "Perfect for Noise Restrictions",
    "Complete Technical Support"
  ];

  const heroSection = useIntersectionObserver({ threshold: 0, triggerOnce: true });

  return (
    <>
      <Helmet>
        <title>Silent Headsets Dubai | Wireless Silent Disco Systems</title>
        <meta name="description" content="Rent wireless silent disco headsets in Dubai. Multi-channel systems perfect for noise-restricted venues and unique party experiences." />
        <meta name="keywords" content="silent disco Dubai, silent headsets rental, wireless headphones Dubai, silent party Dubai" />
      </Helmet>
      <StructuredData data={schema} />
      
      <main id="main-content" className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section 
          ref={heroSection.ref}
          className="relative min-h-[500px] flex items-center justify-center overflow-hidden pt-24 pb-16"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/services/silent-headsets-hero-bg.webp"
              alt="Professional silent disco headsets rental Dubai with multi-channel wireless technology and LED lighting"
              className="w-full h-full object-cover"
              loading="eager"
            />
            {/* Enhanced gradient for better mobile overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-background lg:from-black/60 lg:via-black/40 lg:to-background"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
            <div className="mb-8">
              <Breadcrumbs 
                items={[
                  { label: "Services", href: "/services" },
                  { label: "Silent Headsets" }
                ]}
              />
            </div>
            <Headphones className="w-16 h-16 text-[#D25C84] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              Silent Disco <span className="gradient-text">Headsets</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Create unforgettable silent disco experiences with our premium wireless headphone systems featuring multi-channel DJ options
            </p>
          </div>
        </section>

        {/* Service Types Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Silent Headset Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Choose from our range of wireless headset solutions for different event types
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-16">
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
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#D25C84]" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <CardContent className="p-6">
                      <h3 className="text-xl font-heading font-bold mb-2">{service.title}</h3>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </section>

        {/* Features Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Key Features
              </h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
              {features.map((feature, index) => (
                <Card key={index} className="hover-lift">
                  <CardContent className="p-6 flex items-center gap-3">
                    <Check className="w-5 h-5 text-primary flex-shrink-0" />
                    <span className="font-medium">{feature}</span>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Video Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              See Our Headsets In Action
            </h2>
          </div>
          
          <div className="max-w-md mx-auto">
            <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
              <iframe 
                className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                src="https://www.youtube.com/embed/3S7tFHN8mBI?si=mTTJp_0tWIzkQDXd&rel=0&modestbranding=1"
                title="See our headsets in action"
                allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                loading="lazy"
              />
            </div>
          </div>
        </section>

        {/* Details Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-12 mb-16">
            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-4 flex items-center gap-2">
                  <Sparkles className="w-8 h-8 text-primary" />
                  Perfect For
                </h2>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Outdoor events with noise restrictions</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Corporate events and team building</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Unique party experiences and celebrations</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Beach parties and outdoor venues</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Star className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                    <span>Museum nights and cultural events</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="space-y-6">
              <div>
                <h2 className="font-heading text-3xl font-bold mb-4 flex items-center gap-2">
                  <Radio className="w-8 h-8 text-primary" />
                  How It Works
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>Experience the magic of silent disco with our advanced headphone system:</p>
                  <ul className="space-y-2 ml-4">
                    <li>• Up to 3 different music channels (DJs) simultaneously</li>
                    <li>• LED lights on headphones show active channel (Red/Green/Blue)</li>
                    <li>• Guests switch between channels with a simple button</li>
                    <li>• Individual volume control on each headset</li>
                    <li>• Range of up to 300 meters from transmitter</li>
                    <li>• 8-10 hour battery life per headset</li>
                    <li>• Professional transmitters and DJ equipment included</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="bg-card p-8 md:p-12 rounded-lg shadow-lg">
              <h2 className="font-heading text-3xl font-bold mb-8 text-center">
                Why Choose Silent Disco?
              </h2>
              <div className="grid md:grid-cols-2 gap-8 text-muted-foreground">
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">Zero Noise Complaints</h3>
                  <p>Perfect for venues with strict noise regulations or late-night events</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">Multiple Music Genres</h3>
                  <p>Satisfy everyone with 3 different music channels playing simultaneously</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">Unique Experience</h3>
                  <p>Create unforgettable memories with this innovative party format</p>
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2 text-lg">Flexible Venue Options</h3>
                  <p>Works anywhere - indoors, outdoors, rooftops, beaches, and more</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <FAQSection 
            questions={faqQuestions} 
            title="Silent Headsets Rental FAQ"
          />
        </section>

        {/* Related Services */}
        <section className="container mx-auto px-4 lg:px-8 pb-20">
          <RelatedServices currentService="silent-headsets" />
        </section>

        {/* CTA Section */}
        <section className="container mx-auto px-4 lg:px-8 pb-20">
          <div className="text-center bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg shadow-lg border border-primary/20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready for a Silent Disco Experience?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Book our silent headsets and create a unique, unforgettable event that your guests will love.
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/contact">
                Book Silent Headsets Now
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default SilentHeadsets;
