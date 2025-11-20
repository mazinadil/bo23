import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Lightbulb, Sparkles, TreePine, Heart, Check, Star, 
  Calendar, MapPin, Zap, Sun, Moon, Images, Music, Settings 
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const faqQuestions = [
  {
    question: "How much does festoon light rental cost in Dubai?",
    answer: "Festoon light rental in Dubai starts from AED 1,500 for basic installations (50-100 meters) for small garden events, up to AED 8,000+ for extensive installations (300+ meters) at large outdoor weddings and venues. Pricing includes festoon lights, rigging equipment, power distribution, professional installation, testing, and removal. Custom quotes provided based on venue size, length required, bulb type (Edison or LED), and event duration."
  },
  {
    question: "What types of festoon lights do you offer?",
    answer: "We offer multiple festoon light options: Classic Edison bulbs (warm vintage glow, perfect for romantic events), warm white LED bulbs (energy-efficient, consistent light), multicolor RGB LED options, and fairy lights (delicate twinkling strands). All lights are commercial-grade, weatherproof, and suitable for indoor and outdoor installations. We can mix styles to create unique lighting designs tailored to your event theme."
  },
  {
    question: "Can you install festoon lights at outdoor venues in Dubai?",
    answer: "Absolutely! We specialize in outdoor festoon light installations across Dubai including gardens, beaches, desert venues, rooftop terraces, poolside areas, and private villa compounds. Our team handles all rigging safely using professional-grade equipment, and we ensure all electrical connections are weatherproof and comply with Dubai safety regulations. We've installed at hundreds of outdoor venues and understand local requirements."
  },
  {
    question: "How long does installation take?",
    answer: "Installation time depends on the complexity and scale. Small installations (50-100 meters for intimate events) typically take 2-3 hours. Medium installations (100-200 meters) take 4-6 hours. Large wedding or festival installations (300+ meters) can take a full day or more. We always arrive well before your event starts, conduct thorough testing, and stay available during your event for any adjustments needed."
  },
  {
    question: "Do festoon lights work for daytime events?",
    answer: "While festoon lights are most impactful at dusk and night when they create magical ambiance, they also add beautiful decorative elements during daytime events. For daytime weddings and parties, the bulbs and rigging create an elegant overhead canopy effect even before they're illuminated. Many clients choose festoon lights for all-day events to enjoy both the daytime aesthetic and stunning evening atmosphere."
  },
  {
    question: "What if there's no power at my outdoor venue?",
    answer: "No problem! We provide generator solutions for venues without power access. Our quiet, professional generators are sized appropriately for your lighting requirements and positioned discreetly to minimize noise. We handle all power distribution, cable management, and safety protocols. This service is common for beach events, desert venues, park celebrations, and construction sites."
  },
  {
    question: "Can you create custom festoon light patterns or designs?",
    answer: "Yes! Our installation team can create various patterns including: straight runs across spaces, zigzag/crosshatch canopy patterns, circular designs around pool areas, draped swags for romantic effects, and tree wrapping for garden venues. We conduct site visits to understand your venue layout and create custom lighting designs that complement your space and event vision. We'll show you design mockups before installation."
  },
  {
    question: "Are your festoon lights safe for Dubai's weather?",
    answer: "All our festoon lights are commercial-grade, weatherproof, and rated for outdoor use in extreme conditions. They're designed to withstand Dubai's heat, occasional rain, and wind. We use secure rigging methods, proper cable management, and weather-sealed connections. Our team monitors Dubai weather forecasts and has contingency plans for high winds. We've successfully operated in all Dubai weather conditions without issues."
  },
  {
    question: "How far in advance should I book festoon light rental?",
    answer: "We recommend booking 4-6 weeks in advance, especially for the peak wedding season (October-April) when demand is highest. This allows time for venue site visits, custom design planning, and securing your preferred date. However, we can often accommodate last-minute bookings (1-2 weeks notice) based on equipment availability. Large or complex installations benefit from earlier booking for proper planning and coordination with other vendors."
  },
  {
    question: "What happens after my event ends?",
    answer: "Our team returns at the agreed time (typically the morning after evening events) to safely remove all festoon lights, rigging equipment, and cables. We handle all breakdown and cleanup, leaving your venue exactly as we found it. For multi-day events, we can leave the installation in place for the duration. All removal is included in your rental package at no additional cost."
  }
];

const FestoonLights = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Festoon & Fairy Lights Dubai",
    "description": "Professional festoon lights and fairy lights rental in Dubai. Edison bulbs, LED options for weddings, gardens, outdoor venues. Custom installations from AED 1,500.",
    "provider": {
      "@type": "Organization",
      "name": "Box Entertainment",
      "url": "https://boxentertainment.ae"
    },
    "areaServed": "Dubai, UAE",
    "serviceType": "Event Lighting Rental"
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Festoon & Fairy Lights Dubai | Outdoor Event Lighting</title>
        <meta name="description" content="Festoon & fairy lights rental in Dubai. Edison bulbs, LED options for weddings, gardens & outdoor venues. Custom installations from AED 1,500." />
        <meta name="keywords" content="festoon lights Dubai, fairy lights rental, edison bulb lights, outdoor wedding lights Dubai, garden party lighting, string lights Dubai, event lighting rental" />
        <link rel="canonical" href="https://boxentertainment.ae/services/sound-lighting/festoon-lights" />
      </Helmet>

      <StructuredData data={serviceSchema} />

      <main>
        {/* Hero Section with Split Layout */}
        <section className="container mx-auto px-4 lg:px-8 py-8 mb-16">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/services" },
              { label: "Sound & Lighting", href: "/services/sound-lighting" },
              { label: "Festoon & Fairy Lights" }
            ]} 
          />

          {/* Split Hero Layout */}
          <div className="lg:grid lg:grid-cols-2 gap-12 mt-12">
            {/* Left Side - Hero Image */}
            <div className="relative overflow-hidden rounded-lg h-[500px] lg:h-[600px] mb-8 lg:mb-0">
              <img
                src="/images/services/festoon-lights-hero.webp"
                alt="Beautiful festoon lights creating magical ambiance at outdoor Dubai wedding with warm Edison bulbs"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
                loading="eager"
              />
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
              
              {/* H1 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  <span className="gradient-text">Festoon & Fairy Lights</span> Dubai
                </h1>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="text-left flex flex-col justify-center">
              <h1 className="hidden lg:block text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
                Festoon & Fairy Lights <span className="gradient-text">Dubai</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Transform your outdoor event into a magical wonderland with professional festoon and fairy light installations. Perfect for creating romantic ambiance at weddings, garden parties, and special celebrations across Dubai.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Choose from warm Edison bulbs, elegant LED options, or twinkling fairy lights. Our expert team designs and installs custom lighting that brings your venue to life from sunset onwards.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#gallery">
                    View Gallery
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Why Choose Our Festoon Lights */}
        <section className="container mx-auto px-4 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose Our Festoon Lights?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional lighting solutions for unforgettable outdoor events
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-xl mb-2">Edison & LED Bulbs</h3>
                <p className="text-muted-foreground">Classic vintage glow or modern LED efficiency</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <TreePine className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-xl mb-2">Custom Installations</h3>
                <p className="text-muted-foreground">Tailored designs for your unique venue</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Sun className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-xl mb-2">Indoor & Outdoor</h3>
                <p className="text-muted-foreground">Weatherproof solutions for any location</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Star className="h-12 w-12 mx-auto mb-4 text-primary" />
                <h3 className="font-heading text-xl mb-2">Expert Rigging</h3>
                <p className="text-muted-foreground">Safe, professional installation by certified team</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Perfect For Any Event */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/images/services/festoon-lights-bg.webp" 
              alt="Various festoon light installations at Dubai events"
              className="w-full h-full object-cover"
              loading="lazy"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-background/95 via-background/95 to-background" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Perfect For Any Event
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Create magical ambiance for every special occasion
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-heading text-xl mb-2">Outdoor Weddings</h3>
                  <p className="text-muted-foreground">Romantic canopy lighting for ceremonies and receptions</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <TreePine className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-heading text-xl mb-2">Garden Parties</h3>
                  <p className="text-muted-foreground">Transform outdoor spaces with elegant overhead lighting</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Music className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-heading text-xl mb-2">Corporate Events</h3>
                  <p className="text-muted-foreground">Professional ambiance for outdoor corporate functions</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Sparkles className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-heading text-xl mb-2">Private Celebrations</h3>
                  <p className="text-muted-foreground">Birthday parties, anniversaries, and special occasions</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Moon className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-heading text-xl mb-2">Rooftop Venues</h3>
                  <p className="text-muted-foreground">Stunning overhead installations for terraces and rooftops</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-primary" />
                  <h3 className="font-heading text-xl mb-2">Seasonal Events</h3>
                  <p className="text-muted-foreground">Holiday parties and festive celebrations</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Image Gallery Carousel */}
        <section id="gallery" className="container mx-auto px-4 lg:px-8 py-20">
          <div className="text-center mb-12">
            <Images className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Our Festoon Light Installations
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how we've transformed venues across Dubai with stunning festoon lighting
            </p>
          </div>

          <Carousel
            opts={{
              align: "start",
              loop: true,
            }}
            className="w-full max-w-6xl mx-auto"
          >
            <CarouselContent>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden">
                  <img
                    src="/images/services/festoon-lights-bg.webp"
                    alt="Festoon lights creating warm ambiance at Dubai outdoor wedding ceremony"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden">
                  <img
                    src="/images/services/festoon-lights-hero.webp"
                    alt="Edison bulb festoon lights at garden party in Dubai with beautiful bokeh effect"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden">
                  <img
                    src="/images/services/sound-lighting-bg.webp"
                    alt="Festoon light installation at rooftop event with Dubai skyline"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden">
                  <img
                    src="/images/services/entertainment-hero-bg.webp"
                    alt="Crosshatch pattern festoon lights at private villa party"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden">
                  <img
                    src="/images/services/led-uplighting-bg.webp"
                    alt="Fairy lights combined with uplighting at Dubai wedding reception"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden">
                  <img
                    src="/images/services/stage-lighting-bg.webp"
                    alt="Festoon lights and stage lighting at corporate outdoor event"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </Card>
              </CarouselItem>
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </section>

        {/* Why Choose Our Services */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Festoon Lighting Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Professional installations with comprehensive support
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Check className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Premium Quality Equipment</h3>
                  <p className="text-muted-foreground">Commercial-grade festoon lights and rigging equipment built for reliability and beautiful results</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Zap className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Expert Installation Team</h3>
                  <p className="text-muted-foreground">Certified technicians handle all rigging, power distribution, and safety protocols professionally</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Site Visit & Design</h3>
                  <p className="text-muted-foreground">Complimentary venue consultation and custom lighting design tailored to your space</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Sun className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Weatherproof Solutions</h3>
                  <p className="text-muted-foreground">All equipment rated for Dubai's climate with backup plans for weather changes</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Settings className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Full Setup & Breakdown</h3>
                  <p className="text-muted-foreground">Complete installation before your event and removal afterwards - no hassle for you</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Star className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">On-Site Support</h3>
                  <p className="text-muted-foreground">Technician available during your event for any adjustments or assistance needed</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 lg:px-8 py-20">
          <FAQSection 
            questions={faqQuestions}
            title="Festoon Lights FAQ"
          />
        </div>

        {/* Related Services */}
        <div className="container mx-auto px-4 lg:px-8">
          <RelatedServices 
            currentService="sound-lighting"
            exclude={["festoon-lights"]}
          />
        </div>

        {/* Final CTA */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
            <CardContent className="p-12 text-center">
              <Lightbulb className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Illuminate Your Event?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Get a custom quote for festoon lights tailored to your venue and event vision
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Request a Quote
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </div>
  );
};

export default FestoonLights;
