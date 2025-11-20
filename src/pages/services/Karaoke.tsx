import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Mic, Music, Sparkles, Users, Star, Check, Heart, 
  Calendar, MapPin, Zap, Settings, Images, Globe,
  Headphones, Volume2, MonitorPlay
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
    question: "How much does karaoke rental cost in Dubai?",
    answer: "Karaoke rental in Dubai starts from AED 1,800 for basic systems (suitable for 20-50 guests) at intimate parties, up to AED 6,000+ for premium setups (100+ guests) with large screens, extensive song libraries, and professional sound systems. Pricing includes karaoke machine with touchscreen, wireless microphones (2-4 mics), LED screen for lyrics, professional speakers, complete setup, technical support, and removal. Custom packages available based on guest count, venue size, song library requirements, and event duration."
  },
  {
    question: "How many songs are available in your karaoke library?",
    answer: "Our professional karaoke systems feature over 100,000 songs across multiple genres spanning from the 1960s to current chart-toppers. The library includes pop, rock, R&B, country, jazz, Arabic classics, Bollywood hits, K-pop, Latin music, and more. We support 20+ languages including English, Arabic, Hindi, Urdu, Tagalog, Chinese, Korean, Japanese, French, and Spanish. The library is regularly updated monthly with the latest releases and trending songs."
  },
  {
    question: "Can karaoke systems work at any venue in Dubai?",
    answer: "Absolutely! We've set up karaoke systems at hotels, restaurants, bars, private villas, rooftop terraces, beach clubs, corporate offices, community centers, and outdoor event spaces across Dubai. Our systems are portable and adaptable to any venue size. We conduct site visits to assess acoustics, screen placement, power requirements, and guest flow. For venues without adequate power, we provide generator solutions. Our technicians ensure optimal setup for your specific space."
  },
  {
    question: "Do you provide microphones and what quality are they?",
    answer: "Yes! All our karaoke packages include professional wireless microphones. Standard packages include 2 high-quality wireless mics (perfect for duets and back-to-back performances). For larger events or group performances, we can provide up to 4 wireless mics simultaneously. All microphones are professional-grade (Shure or equivalent brands), include backup batteries, and we always bring spare microphones. Our audio mixers allow individual volume control for each mic and echo/reverb effects for that professional sound."
  },
  {
    question: "What are the benefits of karaoke at events?",
    answer: "Karaoke provides multiple benefits: Stress Relief - singing reduces anxiety and creates a fun, cathartic outlet for expression. Confidence Building - boosts self-confidence and public speaking skills through performance. Team Bonding - corporate events see improved team chemistry as colleagues share laughs and support each other. Entertainment Value - keeps guests engaged throughout your event with interactive fun. Cultural Connection - multilingual options allow diverse groups to enjoy songs in their native languages. Memory Making - creates unforgettable moments and photo opportunities."
  },
  {
    question: "Can you help guests find songs in the karaoke library?",
    answer: "Yes! Our systems feature intuitive touchscreen interfaces with multiple search options: search by song title, artist name, genre, language, decade, or popularity. The system shows album artwork and song previews. For events, we can provide a printed songbook of popular hits or create custom playlists matching your event theme. Our on-site technician can assist guests in finding songs and can queue up multiple performances to keep the flow going smoothly."
  },
  {
    question: "Do you offer karaoke for kids' parties?",
    answer: "Absolutely! Karaoke is fantastic for children's birthday parties and school events. We provide age-appropriate song selections including Disney favorites, children's movie soundtracks, popular kids' TV themes, and current child-friendly pop hits. Our systems can be adjusted for simpler interfaces for young users, and we include fun features like voice effects and colorful visual displays. Parental controls available to filter content. Perfect for ages 5 and up!"
  },
  {
    question: "What happens if there are technical issues during my event?",
    answer: "Technical support is included with every karaoke rental. Our trained technician remains on-site throughout your event (or available on-call for longer events). We bring backup equipment including spare microphones, cables, and even backup karaoke systems for large events. Our setup includes thorough pre-event testing of all equipment, sound checks, and guest orientation. Average response time for any issue is under 5 minutes. We've maintained a 99.8% uptime rate across thousands of events."
  },
  {
    question: "Can we connect our own devices or streaming services?",
    answer: "Yes! While our karaoke systems include extensive built-in libraries, you can also connect external devices. We support connections from laptops, tablets, phones, USB drives, and streaming devices (with appropriate subscription/licensing). You can play custom backing tracks, rare songs not in our library, or use apps like YouTube (for licensed venues). Our systems include HDMI inputs, Bluetooth connectivity, and aux cables for maximum flexibility."
  },
  {
    question: "How far in advance should I book karaoke rental?",
    answer: "We recommend booking 2-3 weeks in advance, especially during Dubai's peak event season (October-April) and during holidays/weekends when demand is highest. This allows time for song library customization, venue coordination, and securing your preferred package. However, we maintain backup equipment and can often accommodate last-minute bookings (3-7 days notice) based on availability. For large corporate events or multi-day bookings, 4-6 weeks advance booking is ideal."
  }
];

const Karaoke = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Karaoke Rental Dubai",
    "description": "Professional karaoke rental in Dubai featuring 100,000+ songs in 20+ languages. Wireless mics, LED screens, professional sound. Perfect for parties, weddings, corporate events.",
    "provider": {
      "@type": "Organization",
      "name": "Box Entertainment",
      "url": "https://boxentertainment.ae"
    },
    "areaServed": "Dubai, UAE",
    "offers": {
      "@type": "Offer",
      "price": "1800",
      "priceCurrency": "AED",
      "priceSpecification": {
        "@type": "PriceSpecification",
        "minPrice": "1800",
        "priceCurrency": "AED"
      }
    }
  };

  return (
    <>
      <Helmet>
        <title>Karaoke Rental Dubai | 100,000+ Songs from AED 1,800</title>
        <meta name="description" content="Professional karaoke rental in Dubai from AED 1,800. 100,000+ songs in 20+ languages. Wireless mics, LED screens, professional sound included." />
        <meta name="keywords" content="karaoke rental Dubai, karaoke machine Dubai, karaoke party Dubai, professional karaoke system, karaoke hire UAE, singing machine rental" />
        <link rel="canonical" href="https://boxentertainment.ae/services/karaoke" />
      </Helmet>

      <StructuredData data={serviceSchema} />

      {/* Hero Section with Breadcrumbs */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/karaoke-hero.webp"
            alt="Professional karaoke microphone with colorful stage lighting at Dubai event venue"
            className="w-full h-full object-cover"
            loading="eager"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>

        {/* Hero Content */}
        <div className="relative z-10 container mx-auto px-4 lg:px-8 text-center text-white pt-24 pb-20">
          <div className="mb-8">
            <Breadcrumbs 
              items={[
                { label: "Services", href: "/services" },
                { label: "Karaoke" }
              ]} 
            />
          </div>
          
          <Mic className="w-16 h-16 mx-auto mb-6 text-white" />
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Karaoke Rental <span className="text-[#D25C84]">Dubai</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Unleash your inner superstar with professional karaoke systems featuring 100,000+ songs in 20+ languages. Perfect for parties, corporate events, and celebrations across Dubai.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
              <a href="#gallery">
                View Gallery
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* Split Content Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Side - Image */}
          <div className="relative overflow-hidden rounded-lg h-[500px] lg:h-[600px] mb-8 lg:mb-0">
            <img
              src="/images/services/karaoke-bg.webp"
              alt="People enjoying karaoke at various Dubai events including corporate parties and celebrations"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
            
            {/* Dark gradient overlay (mobile only) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
            
            {/* H2 Title Overlay (mobile only) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                Sing Your Heart <span className="gradient-text">Out</span>
              </h2>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="text-left">
            <h2 className="hidden lg:block text-3xl md:text-4xl font-heading font-bold mb-6">
              Sing Your Heart <span className="gradient-text">Out</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              From intimate house parties to large corporate functions - create unforgettable singing experiences with our complete karaoke rental solutions featuring professional microphones, LED screens, and extensive multilingual song libraries.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our systems include touchscreen interfaces, wireless microphones, HD lyric displays, and a massive library spanning all genres, languages, and decades with monthly updates.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Karaoke Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Choose Our Karaoke?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Professional equipment and extensive song libraries for unforgettable performances
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <Music className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">100,000+ Songs</h3>
              <p className="text-muted-foreground">Massive library spanning all genres and decades with monthly updates</p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <Globe className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">20+ Languages</h3>
              <p className="text-muted-foreground">English, Arabic, Hindi, Tagalog, Chinese, Korean, and many more</p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <Headphones className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">Pro Wireless Mics</h3>
              <p className="text-muted-foreground">High-quality wireless microphones with backup equipment included</p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <MonitorPlay className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">LED Lyric Display</h3>
              <p className="text-muted-foreground">Large HD screens with clear lyrics and touchscreen song selection</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* What's Included Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            What's Included in Our Karaoke Package
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Everything you need for an amazing singing experience
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Card>
            <CardContent className="p-6">
              <Check className="w-8 h-8 text-[#D25C84] mb-3" />
              <h3 className="font-heading text-lg font-bold mb-2">Professional Karaoke System</h3>
              <p className="text-muted-foreground text-sm">Touchscreen interface with 100,000+ songs and intuitive search functions</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Check className="w-8 h-8 text-[#D25C84] mb-3" />
              <h3 className="font-heading text-lg font-bold mb-2">Wireless Microphones (2-4)</h3>
              <p className="text-muted-foreground text-sm">Professional-grade wireless mics with backup batteries and spares included</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Check className="w-8 h-8 text-[#D25C84] mb-3" />
              <h3 className="font-heading text-lg font-bold mb-2">LED Display Screen</h3>
              <p className="text-muted-foreground text-sm">Large HD screen for crystal-clear lyrics visible to all performers and audience</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Check className="w-8 h-8 text-[#D25C84] mb-3" />
              <h3 className="font-heading text-lg font-bold mb-2">Professional Audio System</h3>
              <p className="text-muted-foreground text-sm">High-quality speakers, mixer with echo/reverb effects, and optimal sound calibration</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Check className="w-8 h-8 text-[#D25C84] mb-3" />
              <h3 className="font-heading text-lg font-bold mb-2">Multilingual Song Library</h3>
              <p className="text-muted-foreground text-sm">20+ languages including English, Arabic, Hindi, Tagalog, Chinese, Korean, and more</p>
            </CardContent>
          </Card>

          <Card>
            <CardContent className="p-6">
              <Check className="w-8 h-8 text-[#D25C84] mb-3" />
              <h3 className="font-heading text-lg font-bold mb-2">Setup & Technical Support</h3>
              <p className="text-muted-foreground text-sm">Complete installation, testing, on-site technician support, and post-event removal</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Perfect For Any Event Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/services/karaoke-bg.webp" 
            alt="People enjoying karaoke at various Dubai events including corporate parties and celebrations"
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/93 via-background/95 to-background" />
        </div>
        <div className="container relative z-10 mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Perfect For Any Event
            </h2>
            <p className="text-foreground/90 text-lg max-w-2xl mx-auto">
              Create memorable singing experiences for every special occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Corporate Events</h3>
                <p className="text-muted-foreground">Team building, office parties, and corporate celebrations with interactive fun</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Wedding Receptions</h3>
                <p className="text-muted-foreground">Entertain guests with sing-alongs and memorable performances during receptions</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Birthday Parties</h3>
                <p className="text-muted-foreground">Kids and adults love karaoke - perfect for birthday celebrations of all ages</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Volume2 className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Bars & Restaurants</h3>
                <p className="text-muted-foreground">Weekly karaoke nights to attract customers and create lively atmospheres</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Community Events</h3>
                <p className="text-muted-foreground">Fundraisers, cultural celebrations, and neighborhood gatherings</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Music className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Private House Parties</h3>
                <p className="text-muted-foreground">Intimate gatherings with friends and family singing favorite songs</p>
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
            Our Karaoke Setups
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how we've created amazing singing experiences across Dubai
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
                  src="/images/services/karaoke-hero.webp"
                  alt="Professional karaoke microphone setup with colorful lighting at Dubai event"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden">
                <img
                  src="/images/services/karaoke-bg.webp"
                  alt="Karaoke system with LED screen showing lyrics at Dubai corporate party"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden">
                <img
                  src="/images/services/entertainment-hero-bg.webp"
                  alt="Guests singing karaoke at Dubai wedding reception with professional setup"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden">
                <img
                  src="/images/services/sound-lighting-bg.webp"
                  alt="Karaoke performance with professional sound and lighting at Dubai venue"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden">
                <img
                  src="/images/services/dj-bg.webp"
                  alt="Karaoke setup with DJ booth at Dubai nightclub event"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden">
                <img
                  src="/images/services/stage-lighting-bg.webp"
                  alt="Professional karaoke stage with lighting at Dubai corporate function"
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

      {/* Why Choose Our Services Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Karaoke Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional entertainment solutions with comprehensive support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Massive Song Library</h3>
                <p className="text-muted-foreground">100,000+ songs across all genres with monthly updates and requests accommodated</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Professional Equipment</h3>
                <p className="text-muted-foreground">Commercial-grade systems, wireless mics, HD screens, and premium audio for best performance</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Any Venue, Anywhere</h3>
                <p className="text-muted-foreground">We set up at hotels, villas, offices, outdoor venues - anywhere in Dubai and UAE</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Globe className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Multilingual Support</h3>
                <p className="text-muted-foreground">20+ languages perfect for Dubai's multicultural events and diverse audiences</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Settings className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Complete Setup Service</h3>
                <p className="text-muted-foreground">Full installation, sound testing, guest orientation, and post-event breakdown included</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">On-Site Technician</h3>
                <p className="text-muted-foreground">Expert support throughout your event with backup equipment ready for any situation</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <FAQSection 
          questions={faqQuestions}
          title="Frequently Asked Questions About Karaoke Rental"
        />
      </section>

      {/* Related Services */}
      <RelatedServices currentService="karaoke" />

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <CardContent className="p-12 text-center">
            <Mic className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Make Your Event Unforgettable?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Book professional karaoke systems and let your guests showcase their talent with 100,000+ songs
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book Your Karaoke System
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </>
  );
};

export default Karaoke;
