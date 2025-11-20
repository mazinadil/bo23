import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Lightbulb, Sparkles, Music, Zap, Check, Volume2, Mic, Radio, Settings } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useImageLoader } from "@/hooks/useImageLoader";

const SoundLighting = () => {
  const heroSection = useIntersectionObserver({ threshold: 0, triggerOnce: true });
  
  const services = [
    {
      icon: Lightbulb,
      title: "Festoon & Fairy Lights",
      description: "Create magical ambiance with professional festoon and fairy light installations for outdoor events",
      link: "/services/sound-lighting/festoon-lights",
      backgroundImage: "/images/services/festoon-lights-bg.webp",
      alt: "Beautiful festoon lights installation at outdoor Dubai wedding creating romantic ambiance"
    },
    {
      icon: Zap,
      title: "Stage Lighting",
      description: "Professional stage lighting with moving heads, uplighters, wash lights, and intelligent lighting systems",
      link: "/services/sound-lighting",
      backgroundImage: "/images/services/stage-lighting-bg.webp",
      alt: "Professional stage lighting setup with moving heads and uplighters at Dubai corporate event"
    },
    {
      icon: Music,
      title: "Sound Systems",
      description: "Crystal clear PA systems, line arrays, monitors, and microphones for events of any size",
      link: "/services/sound-lighting",
      backgroundImage: "/images/services/sound-systems-bg.webp",
      alt: "Premium sound system with speakers and PA equipment at Dubai event venue"
    },
    {
      icon: Sparkles,
      title: "LED Uplighting",
      description: "Color-changing LED uplighters to transform any venue with ambient architectural lighting",
      link: "/services/sound-lighting",
      backgroundImage: "/images/services/led-uplighting-bg.webp",
      alt: "LED uplighting creating colorful ambiance at Dubai wedding reception venue"
    }
  ];

  const faqQuestions = [
    {
      question: "What sound and lighting equipment do you provide for events in Dubai?",
      answer: "We provide comprehensive audio-visual solutions including professional PA systems, line array speakers, wireless and wired microphones, digital mixing consoles, stage monitors, moving head lights, LED uplighters, wash lights, festoon lights, fairy lights, intelligent lighting systems, truss structures, power distribution, and all necessary cables and stands. Our equipment is professional-grade from leading brands and maintained to the highest standards."
    },
    {
      question: "How much does sound and lighting rental cost in Dubai?",
      answer: "Pricing varies based on event size and requirements. Small events (50-100 guests) typically range from AED 2,000-4,000, medium events (100-300 guests) from AED 5,000-10,000, and large events (300+ guests) from AED 12,000-25,000+. Packages include equipment, delivery, setup, technical support, and collection. We offer customized quotes based on your specific needs, venue size, and event duration. Contact us for a detailed quote tailored to your event."
    },
    {
      question: "Do you provide technicians to operate the equipment?",
      answer: "Yes, all our packages include professional certified technicians who handle complete setup, sound checks, lighting programming, and on-site operation throughout your event. Our technicians arrive early for setup and testing, stay throughout the event to manage sound levels and lighting effects, and handle breakdown after your event. They're experienced with all types of events and venues across Dubai."
    },
    {
      question: "How far in advance should I book sound and lighting services?",
      answer: "We recommend booking 4-6 weeks in advance, especially during Dubai's peak event season (October to April). However, we understand events can be last-minute and will do our best to accommodate urgent bookings based on equipment availability. For large or complex events requiring custom lighting design, booking 6-8 weeks ahead allows for proper planning, venue visits, and design consultations."
    },
    {
      question: "Can you handle outdoor events in Dubai?",
      answer: "Absolutely! We specialize in outdoor events across Dubai including beach parties, desert events, rooftop venues, garden weddings, and pool parties. We use weatherproof equipment designed for Dubai's climate and can provide generators for locations without power access. Our team is experienced with wind considerations, sun positioning, and Dubai municipality regulations for outdoor events. We always have contingency plans for weather changes."
    },
    {
      question: "What venues have you worked with in Dubai?",
      answer: "We've worked with major hotels (Atlantis, Burj Al Arab, JW Marriott, Ritz-Carlton), private villas in Emirates Hills and Palm Jumeirah, beach clubs, desert venues, rooftop locations, corporate offices, exhibition centers, and cultural venues across Dubai. Our team is familiar with the technical requirements and restrictions of most major venues in Dubai and can coordinate with venue management for seamless setup."
    },
    {
      question: "Do you offer lighting design consultation?",
      answer: "Yes, we provide complimentary lighting design consultations for all events. Our team can visit your venue, discuss your vision and color scheme, create custom lighting plans, and provide mood boards showing how different lighting options will transform your space. We work with your event planner or decorator to ensure the lighting complements your overall event design and creates the perfect ambiance."
    },
    {
      question: "What if there's a technical issue during my event?",
      answer: "We have comprehensive protocols to prevent and handle any technical issues. Our technicians remain on-site throughout your event to immediately address any concerns. We carry backup equipment for all critical components, have 24/7 technical support available, and can deploy additional resources if needed. In our 10+ years serving Dubai events, we maintain a 99.9% uptime record through preventive maintenance and redundant systems."
    },
    {
      question: "Can you integrate with our existing AV setup or venue equipment?",
      answer: "Yes, we're experienced in hybrid setups and can integrate with existing venue equipment or your own AV systems. We'll conduct compatibility assessments, work from technical riders, and coordinate with venue technical teams to ensure seamless integration. Whether you need to supplement venue equipment or create a complete standalone system, our team has the expertise to make it work perfectly."
    },
    {
      question: "Do you provide festoon lights for outdoor weddings?",
      answer: "Yes! Festoon lights are one of our specialty services. We offer various styles including Edison bulbs, warm white LEDs, and multicolor options. We can install festoon lights over outdoor ceremony areas, reception spaces, gardens, pools, and patios. Installation lengths range from 50 to 500+ meters depending on your venue size. Our team handles all rigging, power distribution, and creates stunning overhead canopies that transform your venue into a magical space."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Sound & Lighting Dubai | Professional AV Services</title>
        <meta name="description" content="Professional sound and lighting services in Dubai. Festoon lights, fairy lights, complete audio-visual solutions for all events." />
        <link rel="canonical" href="https://boxentertainment.ae/services/sound-lighting" />
      </Helmet>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Sound & Lighting Services in Dubai",
          description: "Professional sound and lighting services for events in Dubai",
          provider: {
            "@type": "Organization",
            name: "Box Entertainment"
          }
        }}
      />

      <main id="main-content" className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section 
          ref={heroSection.ref}
          className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/services/sound-lighting-hero-bg.webp"
              alt="Professional sound and lighting equipment rental for Dubai events with expert setup and technical support"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white">
            <div className="mb-8 justify-center">
              <Breadcrumbs 
                items={[
                  { label: "Services", href: "/services" },
                  { label: "Sound & Lighting" }
                ]}
              />
            </div>
            <Volume2 className="w-16 h-16 text-[#D25C84] mx-auto mb-6" />
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              Sound & <span className="gradient-text">Lighting</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
              Professional audio-visual solutions to transform your event with premium equipment and expert technical support
            </p>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Our Sound & Lighting Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete audio-visual solutions for events of any size
            </p>
          </div>

          {/* Featured Service - Festoon & Fairy Lights */}
          <div className="mb-12">
            <Card className="overflow-hidden border-2 border-primary/20 shadow-xl">
              <div className="grid md:grid-cols-2 gap-0">
                {/* Left: Image */}
                <div className="relative h-64 md:h-auto">
                  <img
                    src="/images/services/festoon-lights-bg.webp"
                    alt="Beautiful festoon lights installation at outdoor Dubai wedding creating romantic ambiance"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/30 to-transparent md:bg-gradient-to-t md:from-black/40 md:to-transparent"></div>
                </div>

                {/* Right: Content */}
                <CardContent className="p-8 md:p-12 flex flex-col justify-center">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center">
                      <Lightbulb className="w-6 h-6 text-[#D25C84]" />
                    </div>
                    <span className="text-sm font-semibold text-primary uppercase tracking-wider">Featured Service</span>
                  </div>
                  
                  <h3 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                    Festoon & Fairy Lights
                  </h3>
                  
                  <p className="text-muted-foreground text-lg mb-6">
                    Create magical ambiance with professional festoon and fairy light installations for outdoor events. 
                    Perfect for weddings, garden parties, and romantic celebrations across Dubai.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-6">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Edison & LED Bulbs</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Custom Installations</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      <span>Indoor & Outdoor</span>
                    </div>
                  </div>

                  <Button variant="default" size="lg" asChild className="w-fit">
                    <Link to="/services/sound-lighting/festoon-lights">
                      Learn More About Festoon Lights
                    </Link>
                  </Button>
                </CardContent>
              </div>
            </Card>
          </div>

          {/* Other Services - Non-Clickable Information Cards */}
          <div>
            <h3 className="text-2xl font-heading font-semibold mb-6 text-center">
              Additional Sound & Lighting Equipment
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {/* Stage Lighting */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/images/services/stage-lighting-bg.webp"
                    alt="Professional stage lighting setup with moving heads and uplighters at Dubai corporate event"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-[#D25C84]" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h4 className="text-xl font-heading font-bold mb-2">Stage Lighting</h4>
                  <p className="text-muted-foreground text-sm">
                    Professional stage lighting with moving heads, uplighters, wash lights, and intelligent lighting systems
                  </p>
                </CardContent>
              </Card>

              {/* Sound Systems */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/images/services/sound-systems-bg.webp"
                    alt="Premium sound system with speakers and PA equipment at Dubai event venue"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Music className="w-6 h-6 text-[#D25C84]" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h4 className="text-xl font-heading font-bold mb-2">Sound Systems</h4>
                  <p className="text-muted-foreground text-sm">
                    Crystal clear PA systems, line arrays, monitors, and microphones for events of any size
                  </p>
                </CardContent>
              </Card>

              {/* LED Uplighting */}
              <Card className="overflow-hidden">
                <div className="relative h-48">
                  <img
                    src="/images/services/led-uplighting-bg.webp"
                    alt="LED uplighting creating colorful ambiance at Dubai wedding reception venue"
                    className="w-full h-full object-cover"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  
                  <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-[#D25C84]" />
                  </div>
                </div>

                <CardContent className="p-6">
                  <h4 className="text-xl font-heading font-bold mb-2">LED Uplighting</h4>
                  <p className="text-muted-foreground text-sm">
                    Color-changing LED uplighters to transform any venue with ambient architectural lighting
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                What's Included
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Comprehensive packages with everything you need for perfect audio and lighting
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Professional Equipment</h3>
                  <p className="text-muted-foreground">Latest sound systems, lighting fixtures, and control equipment from leading brands</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Settings className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Setup & Breakdown</h3>
                  <p className="text-muted-foreground">Complete installation, testing, and removal handled by our expert team</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Technical Support</h3>
                  <p className="text-muted-foreground">On-site certified technicians throughout your event for seamless operation</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Radio className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Sound Check & Testing</h3>
                  <p className="text-muted-foreground">Comprehensive audio testing and optimization before your event starts</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Zap className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Backup Equipment</h3>
                  <p className="text-muted-foreground">Redundant systems and spare equipment for complete peace of mind</p>
                </CardContent>
              </Card>

              <Card className="hover-lift">
                <CardContent className="p-6">
                  <div className="w-12 h-12 mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                    <Sparkles className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-bold mb-2">Custom Lighting Design</h3>
                  <p className="text-muted-foreground">Personalized lighting plans to match your event theme and venue</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Event Types Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Perfect For Any Event
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional sound and lighting solutions for all types of events in Dubai
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Weddings</h3>
              <p className="text-muted-foreground">Ceremony sound, reception lighting, and ambient decorative lights</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Settings className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Corporate Events</h3>
              <p className="text-muted-foreground">Presentations, conferences, galas, and team building events</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Music className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Private Parties</h3>
              <p className="text-muted-foreground">Birthdays, anniversaries, and special celebrations</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Lightbulb className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Outdoor Events</h3>
              <p className="text-muted-foreground">Beach parties, desert events, festivals, and outdoor celebrations</p>
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="bg-muted/30 py-20">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
                Why Choose Our Services
              </h2>
            </div>

            <div className="max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">10+ Years Experience</h3>
                    <p className="text-muted-foreground">Extensive experience serving Dubai's events industry with hundreds of successful events</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Latest Equipment</h3>
                    <p className="text-muted-foreground">Professional-grade equipment from leading brands, regularly maintained and updated</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Certified Technicians</h3>
                    <p className="text-muted-foreground">Expert team trained on all equipment with years of live event experience</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">24/7 Support</h3>
                    <p className="text-muted-foreground">Round-the-clock technical support and on-site assistance throughout your event</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Competitive Pricing</h3>
                    <p className="text-muted-foreground">Transparent pricing with customized packages to fit any budget</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                    <Check className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg mb-2">Full Event Coverage</h3>
                    <p className="text-muted-foreground">Complete audio-visual solutions from intimate gatherings to large-scale productions</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <FAQSection 
            questions={faqQuestions}
            title="Sound & Lighting Rental FAQ"
          />
        </section>

        {/* Related Services */}
        <RelatedServices currentService="sound-lighting" />

        {/* CTA Section */}
        <section className="container mx-auto px-4 lg:px-8 pb-20">
          <div className="text-center bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg shadow-lg border border-primary/20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Transform Your Event with Professional Audio & Lighting
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              From festoon lights for outdoor weddings to complete sound and lighting setups for corporate events, 
              we have the expertise and equipment to make your event unforgettable.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold text-lg"
            >
              Get Your Free Quote
            </Link>
          </div>
        </section>
      </main>
    </>
  );
};

export default SoundLighting;
