import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Briefcase, Users, Volume2, Settings, Headphones, Radio, Check, Building2, Trophy, Target, Calendar } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { useImageLoader } from "@/hooks/useImageLoader";

const faqQuestions = [
  {
    question: "How much does corporate headset rental cost in Dubai?",
    answer: "Corporate wireless headset rental in Dubai starts from AED 2,500 for 50 headsets for half-day conferences, up to AED 8,000+ for 200+ headsets for full-day events. Pricing includes headsets, transmitters, technical support, setup, and collection. We offer customized packages based on attendee count, event duration, and venue requirements."
  },
  {
    question: "What types of corporate events are wireless headsets suitable for?",
    answer: "Wireless headsets are perfect for conferences, seminars, team building activities, outdoor training sessions, factory tours, multilingual presentations, trade shows, and any corporate event where traditional PA systems are impractical or where attendees need to hear clearly while moving around."
  },
  {
    question: "Can you provide wireless headsets for multilingual corporate events?",
    answer: "Yes! Our multi-channel headsets support simultaneous interpretation in up to 3 languages. Each language is broadcast on a different channel, and attendees simply switch channels to hear their preferred language. This is ideal for international conferences and multinational corporate events in Dubai."
  },
  {
    question: "What is the wireless range for corporate headsets?",
    answer: "Our professional corporate headsets have a wireless range of up to 300 meters in open spaces and 100-150 meters indoors. We strategically position transmitters throughout your venue to ensure complete coverage for conference halls, outdoor venues, and large corporate facilities."
  },
  {
    question: "Do you provide technical support during corporate events?",
    answer: "Absolutely! Every corporate headset rental includes an on-site technician who handles setup, conducts pre-event testing, and remains available throughout your event for any technical support. We also provide backup equipment on-site to ensure uninterrupted presentations."
  },
  {
    question: "How long is the battery life of corporate wireless headsets?",
    answer: "Our corporate wireless headsets have 8-10 hours of continuous battery life. All headsets are delivered fully charged. For multi-day events or longer durations, we provide charging stations and backup headsets to ensure seamless operation throughout your event."
  },
  {
    question: "Can wireless headsets work in outdoor corporate venues in Dubai?",
    answer: "Yes! Our wireless headsets are perfect for outdoor corporate events in Dubai - desert team building, beach conferences, golf course events, and rooftop presentations. The wireless technology works even better outdoors, and we provide weatherproof equipment and can arrange generators if needed."
  },
  {
    question: "How far in advance should we book corporate headsets?",
    answer: "We recommend booking at least 2-3 weeks in advance for standard corporate events, and 4-6 weeks for large conferences or events during peak season (October-April in Dubai). However, we often accommodate last-minute requests subject to availability. Contact us early to secure your preferred date."
  }
];

const CorporateHeadsets = () => {
  const { isLoaded: heroLoaded, error: heroError } = useImageLoader("/images/services/corporate-headsets-bg.webp");

  return (
    <>
      <Helmet>
        <title>Corporate Wireless Headsets Dubai | Conference Equipment</title>
        <meta name="description" content="Rent professional wireless headsets for corporate events in Dubai. Conferences, seminars, team building, tours. From AED 2,500 for 50+ attendees." />
        <meta name="keywords" content="corporate wireless headsets Dubai, conference headsets, team building headsets, silent conference, multilingual headsets, corporate event equipment Dubai" />
        <link rel="canonical" href="https://boxentertainment.ae/services/silent-headsets/corporate-headsets" />
      </Helmet>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Corporate Wireless Headsets in Dubai",
          description: "Professional wireless headset solutions for corporate events and conferences in Dubai",
          provider: {
            "@type": "Organization",
            name: "Box Entertainment",
          },
          offers: {
            "@type": "Offer",
            priceRange: "AED 2,500 - AED 8,000+",
            availability: "https://schema.org/InStock"
          }
        }}
      />

      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/services" },
              { label: "Silent Headsets", href: "/services/silent-headsets" },
              { label: "Corporate Headsets" }
            ]} 
          />

          {/* Hero Section - Split Layout */}
          <div className="lg:grid lg:grid-cols-2 gap-12 mt-12">
            {/* Left Side - Image */}
            <div className="relative overflow-hidden rounded-lg h-[500px] lg:h-[600px] mb-8 lg:mb-0">
              {!heroLoaded && !heroError && (
                <div className="w-full h-full bg-muted animate-pulse rounded-lg" />
              )}
              {heroError && (
                <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Image unavailable</p>
                </div>
              )}
              {heroLoaded && (
                <img
                  src="/images/services/corporate-headsets-bg.webp"
                  alt="Corporate wireless headsets for conferences and team building events in Dubai"
                  className="w-full h-full object-cover rounded-lg shadow-2xl"
                  loading="eager"
                />
              )}
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden rounded-lg" />
              
              {/* H1 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  Corporate Wireless <span className="gradient-text">Headsets Dubai</span>
                </h1>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="text-left">
              <h1 className="hidden lg:block text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
                Corporate Wireless <span className="gradient-text">Headsets Dubai</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Elevate your corporate events with professional wireless headset solutions. Perfect for conferences, team building activities, and presentations where clear audio delivery is essential.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                No noise restrictions, no venue limitations. Our multi-channel wireless headsets ensure every attendee hears perfectly, whether indoors or outdoors across Dubai.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book Corporate Headsets
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#features">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Key Features Section */}
          <section id="features" className="mb-16 mt-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Why Choose Corporate Wireless Headsets?
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Professional audio solutions for modern corporate events
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Briefcase className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Conferences</h3>
                  <p className="text-muted-foreground">Perfect for large-scale conferences and seminars</p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Team Building</h3>
                  <p className="text-muted-foreground">Outdoor corporate activities and workshops</p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Volume2 className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Crystal Clear Audio</h3>
                  <p className="text-muted-foreground">Professional sound quality for every attendee</p>
                </CardContent>
              </Card>
              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Radio className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Multi-Channel</h3>
                  <p className="text-muted-foreground">Support for multilingual events</p>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Video Section */}
          <section className="container mx-auto px-4 lg:px-8 py-20">
            <div className="text-center mb-8">
              <h2 className="font-heading text-3xl md:text-4xl font-bold">
                See Our Corporate Headsets In Action
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                  src="https://www.youtube.com/embed/l6p2s3RCS-I?si=tSiuWbM5jaWjAfgn&rel=0&modestbranding=1"
                  title="See our Corporate headsets in action"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="relative py-20 overflow-hidden -mx-4 lg:-mx-8">
            <div className="absolute inset-0">
              <img 
                src="/images/services/corporate-headsets-bg.webp" 
                alt="Professional corporate wireless headsets setup for conferences"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/92 to-background/95" />
            </div>
            <div className="container relative z-10 mx-auto px-4 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  What's Included in Your Corporate Headset Package
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  Complete wireless headset solutions for professional corporate events
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card>
                  <CardContent className="p-6">
                    <Headphones className="w-12 h-12 text-[#D25C84] mb-4" />
                    <h3 className="font-heading text-xl font-bold mb-2">Premium Wireless Headsets</h3>
                    <p className="text-muted-foreground">Professional-grade headsets with multi-channel support, individual volume control, and comfortable design for extended wear</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Radio className="w-12 h-12 text-[#D25C84] mb-4" />
                    <h3 className="font-heading text-xl font-bold mb-2">Multi-Channel Transmitters</h3>
                    <p className="text-muted-foreground">High-quality transmitters with 300m range, supporting up to 3 channels for multilingual events or breakout sessions</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Users className="w-12 h-12 text-[#D25C84] mb-4" />
                    <h3 className="font-heading text-xl font-bold mb-2">On-Site Technical Support</h3>
                    <p className="text-muted-foreground">Dedicated technician for setup, testing, and real-time troubleshooting throughout your event</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Settings className="w-12 h-12 text-[#D25C84] mb-4" />
                    <h3 className="font-heading text-xl font-bold mb-2">Complete Setup & Breakdown</h3>
                    <p className="text-muted-foreground">Full installation, pre-event testing, and equipment removal handled by our professional team</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Check className="w-12 h-12 text-[#D25C84] mb-4" />
                    <h3 className="font-heading text-xl font-bold mb-2">Backup Equipment</h3>
                    <p className="text-muted-foreground">Spare headsets, batteries, and transmitters on standby to ensure zero disruption</p>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <Building2 className="w-12 h-12 text-[#D25C84] mb-4" />
                    <h3 className="font-heading text-xl font-bold mb-2">Venue Consultation</h3>
                    <p className="text-muted-foreground">Pre-event site survey to optimize equipment placement and ensure complete coverage</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* How It Works Section */}
          <section className="py-20">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                How Corporate Wireless Headsets Work
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Simple setup, professional results
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">Pre-Event Setup</h3>
                <p className="text-muted-foreground text-sm">Our team installs and tests all equipment before your event starts</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">Attendees Receive Headsets</h3>
                <p className="text-muted-foreground text-sm">Guests collect fully-charged headsets upon arrival</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">Connect & Listen</h3>
                <p className="text-muted-foreground text-sm">Automatic connection to the broadcast channel with individual volume control</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl font-bold text-primary">4</span>
                </div>
                <h3 className="font-heading text-lg font-bold mb-2">On-Site Support</h3>
                <p className="text-muted-foreground text-sm">Technical team available for any assistance needed</p>
              </div>
            </div>
          </section>

          {/* Benefits Section */}
          <section className="py-20">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              {/* Left: Square Image */}
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="/images/services/corporate-headsets-bg.webp"
                  alt="Corporate team using wireless headsets for outdoor team building activity"
                  className="w-full h-full object-cover rounded-lg shadow-xl aspect-square"
                  loading="lazy"
                />
              </div>

              {/* Right: Content */}
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-8">
                  <h3 className="font-heading text-2xl font-bold mb-4">
                    Why Corporate Events Need Wireless Headsets
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    Traditional PA systems don't work for every corporate scenario. Whether you're conducting outdoor team building in the Dubai desert, hosting a factory tour with machinery noise, or running a multilingual conference, wireless headsets provide the flexibility and audio clarity you need.
                  </p>
                  <ul className="space-y-3">
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#D25C84] mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>No Venue Limitations:</strong> Host events anywhere without worrying about acoustics or noise restrictions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#D25C84] mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Multilingual Support:</strong> Accommodate international attendees with simultaneous interpretation on separate channels</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#D25C84] mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Attendee Mobility:</strong> Participants can move freely during tours, outdoor activities, or interactive sessions</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-[#D25C84] mt-0.5 flex-shrink-0" />
                      <span className="text-muted-foreground"><strong>Professional Image:</strong> Modern wireless technology demonstrates your company's commitment to quality</span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>
          </section>

          {/* Perfect For Section */}
          <section className="relative py-20 overflow-hidden -mx-4 lg:-mx-8">
            <div className="absolute inset-0">
              <img 
                src="/images/services/entertainment-hero-bg.webp" 
                alt="Various corporate event types using wireless headsets"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-b from-background/93 via-background/95 to-background" />
            </div>
            <div className="container relative z-10 mx-auto px-4 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Perfect For Every Corporate Occasion
                </h2>
                <p className="text-foreground/90 text-lg max-w-2xl mx-auto">
                  Wireless headsets elevate any professional event in Dubai
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                <Card className="backdrop-blur-sm bg-card/50">
                  <CardContent className="p-6 text-center">
                    <Briefcase className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                    <h3 className="font-heading text-xl mb-2">Conferences & Seminars</h3>
                    <p className="text-muted-foreground">Large-scale professional gatherings with hundreds of attendees</p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-sm bg-card/50">
                  <CardContent className="p-6 text-center">
                    <Users className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                    <h3 className="font-heading text-xl mb-2">Team Building Activities</h3>
                    <p className="text-muted-foreground">Outdoor desert adventures, beach activities, and interactive workshops</p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-sm bg-card/50">
                  <CardContent className="p-6 text-center">
                    <Building2 className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                    <h3 className="font-heading text-xl mb-2">Factory & Site Tours</h3>
                    <p className="text-muted-foreground">Clear communication in noisy industrial environments</p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-sm bg-card/50">
                  <CardContent className="p-6 text-center">
                    <Target className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                    <h3 className="font-heading text-xl mb-2">Product Launches</h3>
                    <p className="text-muted-foreground">Showcase new products with crystal-clear presentations</p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-sm bg-card/50">
                  <CardContent className="p-6 text-center">
                    <Trophy className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                    <h3 className="font-heading text-xl mb-2">Training Sessions</h3>
                    <p className="text-muted-foreground">Interactive training with multilingual support options</p>
                  </CardContent>
                </Card>

                <Card className="backdrop-blur-sm bg-card/50">
                  <CardContent className="p-6 text-center">
                    <Calendar className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                    <h3 className="font-heading text-xl mb-2">Trade Shows</h3>
                    <p className="text-muted-foreground">Stand out at exhibitions with wireless presentation technology</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection questions={faqQuestions} />

          {/* Related Services */}
          <RelatedServices 
            currentService="silent-headsets"
          />

          {/* Final CTA Section */}
          <section className="py-20">
            <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
              <CardContent className="p-12 text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                  Ready to Enhance Your Corporate Event?
                </h2>
                <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                  Get a custom quote for wireless headsets tailored to your event requirements
                </p>
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Request a Quote
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </section>
        </div>
      </main>
    </>
  );
};

export default CorporateHeadsets;