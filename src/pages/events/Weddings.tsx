import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { 
  CalendarCheck, 
  Flower2, 
  Cake, 
  Sparkles, 
  Armchair, 
  Camera, 
  Lightbulb, 
  Music, 
  Grid3x3, 
  UtensilsCrossed,
  Heart,
  Award,
  CheckCircle2,
  Users,
  ArrowRight
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { useImageLoader } from "@/hooks/useImageLoader";

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Wedding Entertainment & Planning Services Dubai",
  "description": "Transform your special day with Dubai's premier wedding entertainment and planning services. From intimate ceremonies to grand celebrations, we bring your dream wedding to life.",
  "provider": {
    "@type": "Organization",
    "name": "Box Entertainment",
    "url": "https://boxentertainment.ae"
  },
  "areaServed": "Dubai, UAE",
  "serviceType": "Wedding Entertainment and Planning"
};

const valuePoints = [
  {
    icon: CheckCircle2,
    title: "Stress-Free Planning",
    description: "Let our experienced team handle every detail while you enjoy the journey to your special day"
  },
  {
    icon: Users,
    title: "Expert Coordination",
    description: "Seamless coordination between vendors, venues, and entertainment for flawless execution"
  },
  {
    icon: Sparkles,
    title: "Creative Vision",
    description: "Transform your wedding dreams into reality with our creative planning and design expertise"
  },
  {
    icon: Award,
    title: "Budget Management",
    description: "Maximize your budget and timeline with our industry connections and efficient planning"
  }
];

const services = [
  {
    icon: CalendarCheck,
    title: "Wedding Planning",
    image: "/images/services/entertainment-hero-bg.webp",
    description: "Complete wedding planning and coordination services from concept to celebration",
    link: null
  },
  {
    icon: Flower2,
    title: "Floral & Table Design",
    image: "/images/services/festoon-lights-bg.webp",
    description: "Stunning floral arrangements and elegant table settings to match your wedding theme",
    link: null
  },
  {
    icon: Cake,
    title: "Wedding Cakes",
    image: "/images/services/photobooth-guests-bg.webp",
    description: "Custom designed wedding cakes from Dubai's finest pastry chefs and bakeries",
    link: null
  },
  {
    icon: Sparkles,
    title: "Décor",
    image: "/images/services/led-uplighting-bg.webp",
    description: "Beautiful venue transformation with custom décor and styling for ceremonies and receptions",
    link: null
  },
  {
    icon: Armchair,
    title: "Furniture Hire",
    image: "/images/services/sound-lighting-bg.webp",
    description: "Elegant furniture rental including chairs, tables, lounges, and specialty pieces",
    link: null
  },
  {
    icon: Camera,
    title: "Photographer / Videographer",
    image: "/images/services/photobooth-bg.webp",
    description: "Professional wedding photography and cinematic videography to preserve every precious moment",
    link: null
  },
  {
    icon: Camera,
    title: "Photo Booth",
    image: "/images/services/photobooth-bg.webp",
    description: "360° photo booths, mirror booths, and instant print stations with custom wedding templates",
    link: "/services/photobooth"
  },
  {
    icon: Lightbulb,
    title: "LED Lighting",
    image: "/images/services/led-uplighting-bg.webp",
    description: "Romantic uplighting, festoon lights, and custom lighting design for magical ambiance",
    link: "/services/sound-lighting"
  },
  {
    icon: Music,
    title: "Entertainment",
    image: "/images/services/dj-bg.webp",
    description: "Professional DJs, live bands, singers, and performers for ceremony, cocktail hour, and reception",
    link: "/services/entertainment"
  },
  {
    icon: Grid3x3,
    title: "LED Dance Floors",
    image: "/images/services/led-dancefloor-bg.webp",
    description: "Stunning illuminated dance floors that create an unforgettable centerpiece for your reception",
    link: "/services/dance-floors"
  },
  {
    icon: Sparkles,
    title: "Festoon & Fairy Lights",
    image: "/images/services/festoon-lights-bg.webp",
    description: "Romantic outdoor lighting with festoon strings and fairy lights for enchanting atmosphere",
    link: "/services/sound-lighting/festoon-lights"
  },
  {
    icon: UtensilsCrossed,
    title: "Catering",
    image: "/images/services/sound-systems-bg.webp",
    description: "Exquisite culinary experiences with custom menus and professional catering services",
    link: null
  }
];

const benefits = [
  {
    icon: CheckCircle2,
    title: "10+ Years Wedding Experience",
    description: "Over a decade of creating magical wedding moments across Dubai's most prestigious venues with hundreds of delighted couples"
  },
  {
    icon: Heart,
    title: "Personalized Service",
    description: "Every wedding is unique. We tailor our services to match your vision, style, cultural traditions, and budget perfectly"
  },
  {
    icon: Users,
    title: "All-Inclusive Coordination",
    description: "Single point of contact for entertainment, planning, and technical services. Seamless vendor management for stress-free execution"
  },
  {
    icon: Award,
    title: "Premium Quality Guaranteed",
    description: "Professional-grade equipment, experienced performers, backup systems, and flawless delivery on your most important day"
  }
];

const faqQuestions = [
  {
    question: "What wedding services does Box Entertainment provide in Dubai?",
    answer: "We offer comprehensive wedding services including full wedding planning and coordination, entertainment (DJs, live bands, singers, saxophonists, magicians), photo booths (360°, mirror, original), sound and lighting design, LED dance floors, festoon and fairy lights, floral and table design, custom décor, furniture hire, photographer/videographer coordination, wedding cakes, and catering services. We can provide individual services or complete wedding packages tailored to your needs."
  },
  {
    question: "Do you provide wedding planning services or just entertainment?",
    answer: "We provide both! Our wedding planning service offers full support from initial consultation through your wedding day. We coordinate all vendors, manage timelines, handle logistics, and ensure flawless execution. If you prefer to handle your own planning, we also offer standalone entertainment and production services. Many couples choose our hybrid approach where we plan entertainment elements while they manage other aspects."
  },
  {
    question: "Can you customize services for different cultural and religious wedding traditions?",
    answer: "Absolutely! Dubai's multicultural environment is our specialty. We have extensive experience with Indian, Pakistani, Arabic, Western, Filipino, Persian, and fusion weddings. We understand various cultural requirements including music restrictions, gender-segregated events, ceremony traditions, and religious considerations. Our team works respectfully with your cultural needs while delivering exceptional entertainment and service."
  },
  {
    question: "How far in advance should we book for our wedding date?",
    answer: "We recommend booking 6-12 months in advance for weddings, especially if your date falls during peak wedding season (October-April) or on weekends. This ensures availability of your preferred services and allows time for detailed planning, custom branding, and coordination. However, we maintain good inventory and can often accommodate bookings with 4-6 weeks notice based on availability."
  },
  {
    question: "What venues do you work with in Dubai?",
    answer: "We service all wedding venues across Dubai and the UAE including luxury hotels and resorts, beach clubs and beachfront locations, desert camps and safari venues, private villas and estates, rooftop terraces with skyline views, traditional Arabic majlis settings, banquet halls and ballrooms, garden and outdoor venues, yacht and boat celebrations, and unique destination wedding locations. Our team conducts site visits and coordinates with venue management for seamless setup."
  },
  {
    question: "Can you provide entertainment for multiple wedding events (Mehndi, Sangeet, Reception)?",
    answer: "Yes! We specialize in multi-day wedding celebrations common in South Asian and Middle Eastern traditions. We can provide different entertainment packages for each event - traditional performers for Mehndi, Bollywood DJ and dancers for Sangeet, live band for cocktail hour, and high-energy DJ for reception. Many couples book us for their entire wedding weekend, and we offer package discounts for multiple events."
  },
  {
    question: "Do you offer packages or do we select services individually?",
    answer: "Both options are available! We offer curated wedding packages at different price points that bundle popular services together for convenience and value. These can be customized by adding or removing elements. Alternatively, you can build a completely custom package selecting only the specific services you want. During our consultation, we'll discuss your vision and budget to recommend the best approach for your wedding."
  },
  {
    question: "What makes your wedding services different from other companies in Dubai?",
    answer: "Several key differences set us apart: 10+ years specialized wedding experience with hundreds of successful celebrations; comprehensive one-stop solution for entertainment, planning, and production; professional reliability with backup equipment and dedicated support; cultural sensitivity and experience with diverse wedding traditions; dedicated wedding coordinator as your single point of contact; premium equipment from leading brands; customization flexibility for any vision or budget; and proven track record with leading Dubai venues and delighted couples."
  },
  {
    question: "Do you provide day-of coordination for DIY weddings?",
    answer: "Yes! Many couples enjoy planning their wedding but want professional support on the actual day. Our day-of coordination service includes final venue walkthrough, vendor coordination and communication, timeline management, setup supervision, troubleshooting any issues, coordination between ceremony and reception, and ensuring everything runs smoothly so you can be fully present. This is perfect for couples who planned everything but want expert execution support."
  },
  {
    question: "Can we schedule a consultation to discuss our wedding plans?",
    answer: "Absolutely! We offer complimentary initial consultations for all wedding inquiries. During this meeting, we'll discuss your wedding vision, date, venue, guest count, budget, cultural requirements, and service needs. We'll provide recommendations, answer your questions, show you our portfolio, and create a custom proposal. You can contact us via phone, WhatsApp, or our website to schedule a consultation at your convenience."
  }
];

const Weddings = () => {
  const heroImage = "/images/events/weddings-hero.webp";
  const { isLoaded: heroLoaded } = useImageLoader(heroImage);

  return (
    <>
      <Helmet>
        <title>Wedding Entertainment Dubai | Complete Wedding Services</title>
        <meta 
          name="description" 
          content="Transform your Dubai wedding with complete planning services. DJs, live music, photo booths, lighting, décor. Custom packages available." 
        />
        <meta 
          name="keywords" 
          content="wedding entertainment Dubai, wedding planner Dubai, Dubai wedding DJ, wedding photo booth, wedding lighting, Dubai wedding services, wedding coordination Dubai, wedding décor Dubai" 
        />
        <link rel="canonical" href="https://boxentertainment.ae/events/wedding-package" />
        <meta property="og:title" content="Wedding Entertainment & Planning Dubai | Box Entertainment" />
        <meta property="og:description" content="Transform your Dubai wedding with complete planning and entertainment services." />
        <meta property="og:image" content="https://boxentertainment.ae/images/events/weddings-hero.webp" />
        <meta property="og:url" content="https://boxentertainment.ae/events/wedding-package" />
      </Helmet>

      <StructuredData data={eventSchema} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {heroLoaded && (
          <img
            src={heroImage}
            alt="Wedding Entertainment Dubai"
            className="absolute inset-0 w-full h-full object-cover"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background" />
        
        <div className="container relative z-10 mx-auto px-4 lg:px-8 py-20">
          <div className="mb-8">
            <Breadcrumbs
              items={[
                { label: "Events", href: "/events" },
                { label: "Weddings" }
              ]}
            />
          </div>

          <div className="text-center text-white">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Wedding <span className="gradient-text">Entertainment</span> Dubai
            </h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto text-white/90">
              Transform your special day with Dubai's premier wedding entertainment and planning services. From intimate ceremonies to grand celebrations, we bring your dream wedding to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="group" asChild>
                <Link to="/contact">
                  Enquire Now
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                </Link>
              </Button>
              <Button variant="outline" size="lg" asChild>
                <a href="#services">Our Services</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* The Value of Having a Wedding Planner */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-[#D25C84]/10">
                <Heart className="h-12 w-12 text-[#D25C84]" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              The Value of Having a <span className="gradient-text">Wedding Planner</span>
            </h2>
            <p className="text-muted-foreground max-w-3xl mx-auto mb-8">
              Our Wedding Planning service is for couples who feel they need the full support and experience of a wedding planner. At the initial consultation, we will really get to know your ideas and wishes for your wedding and any style you have in mind.
            </p>
            <p className="text-muted-foreground max-w-3xl mx-auto">
              With over 10 years of experience in the entertainment industry, we have been recognized to offer exceptional entertainment services. We deliver all our services in a highly professional and unique way.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {valuePoints.map((point, index) => {
              const Icon = point.icon;
              return (
                <Card key={index} className="backdrop-blur-sm bg-card/50 text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-[#D25C84]/10">
                        <Icon className="h-12 w-12 text-[#D25C84]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                    <p className="text-muted-foreground">{point.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Our Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-[#D25C84]/10">
                <Sparkles className="h-12 w-12 text-[#D25C84]" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Our Wedding <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive wedding services to create your perfect celebration
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              const { isLoaded } = useImageLoader(service.image);
              
              const content = (
                <>
                  <div className="relative h-56 overflow-hidden">
                    {isLoaded && (
                      <img
                        src={service.image}
                        alt={service.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    <div className="absolute bottom-4 left-4">
                      <div className="p-2 rounded-full bg-[#D25C84]/90 backdrop-blur-sm">
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-semibold mb-2 transition-colors group-hover:text-[#D25C84]">
                      {service.title}
                    </h3>
                    <p className="text-muted-foreground">{service.description}</p>
                  </CardContent>
                </>
              );

              return service.link ? (
                <Link key={index} to={service.link} className="block">
                  <Card className="overflow-hidden group hover-lift cursor-pointer">
                    {content}
                  </Card>
                </Link>
              ) : (
                <Card key={index} className="overflow-hidden group hover-lift">
                  {content}
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <div className="flex justify-center mb-4">
              <div className="p-3 rounded-full bg-[#D25C84]/10">
                <Award className="h-12 w-12 text-[#D25C84]" />
              </div>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Why Choose Box Entertainment for Your <span className="gradient-text">Wedding?</span>
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Over a decade of creating magical wedding moments across Dubai
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <Card key={index} className="backdrop-blur-sm bg-card/50 text-center">
                  <CardContent className="pt-6">
                    <div className="flex justify-center mb-4">
                      <div className="p-3 rounded-full bg-[#D25C84]/10">
                        <Icon className="h-12 w-12 text-[#D25C84]" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2">{benefit.title}</h3>
                    <p className="text-muted-foreground">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 lg:px-8">
          <FAQSection questions={faqQuestions} title="Wedding Planning FAQs" />
        </div>
      </section>

      {/* Related Services Section */}
      <RelatedServices currentService="weddings" />

      {/* Final CTA */}
      <section className="py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Plan Your <span className="gradient-text">Dream Wedding?</span>
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's create a celebration that perfectly reflects your love story and exceeds every expectation
            </p>
            <Button asChild size="lg" className="shadow-lg shadow-primary/20">
              <Link to="/contact">Get Your Wedding Quote</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  );
};

export default Weddings;
