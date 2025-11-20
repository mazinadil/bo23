import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Film, Sparkles, Users, Star, Check, Heart, 
  Calendar, MapPin, Zap, Sun, Settings, Images,
  Popcorn, TreePine, Music
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
    question: "How much does outdoor cinema rental cost in Dubai?",
    answer: "Outdoor cinema rental in Dubai starts from AED 3,000 for basic setups (small screen, 20-50 guests) for private events, up to AED 12,000+ for premium large-screen installations (150+ guests) with surround sound and luxury seating. Pricing includes HD projector, large screen (up to 20ft), professional sound system, seating options, technical setup, and on-site support. Add-ons like popcorn machines, candy floss, and themed decorations available. Custom quotes provided based on guest count, screen size, venue requirements, and event duration."
  },
  {
    question: "What screen sizes do you offer for outdoor cinema?",
    answer: "We offer multiple screen sizes to suit different events: Small screens (8-10ft diagonal) for intimate gatherings of 20-50 guests, medium screens (12-16ft) for 50-100 guests, and large screens (18-20ft+) for 100-200+ guests. All screens are inflatable or frame-mounted, HD-compatible, and include professional projection equipment. We'll recommend the optimal size based on your venue dimensions, viewing distance, and guest count during consultation."
  },
  {
    question: "Can you set up outdoor cinema at any venue in Dubai?",
    answer: "Yes! We've set up outdoor cinemas at gardens, beaches, rooftop terraces, desert locations, villa compounds, parks, poolside areas, and corporate offices across Dubai. Our team conducts site visits to assess space requirements, power access, ambient light conditions, and seating arrangements. We bring generator solutions for venues without power and can adapt to virtually any outdoor or covered space."
  },
  {
    question: "Do you provide seating for outdoor cinema events?",
    answer: "Absolutely! We offer multiple seating options including: comfortable bean bags, folding chairs with cushions, picnic blankets, luxury lounge furniture, and tiered platform seating. Seating recommendations are based on your guest count, venue type, and event style. We can create cinema-style rows, casual lounge arrangements, or family-friendly picnic setups. All seating is included in our packages."
  },
  {
    question: "What happens if there's too much ambient light at my venue?",
    answer: "Outdoor cinema works best after sunset when ambient light is minimal. For venues with street lighting or surrounding buildings, we use high-lumen projectors (minimum 5,000 lumens) to ensure clear, vibrant images. We conduct evening site visits during planning to assess light conditions and position the screen optimally. For daytime events, we can provide enclosed cinema tents, though we generally recommend sunset/evening screenings for best viewing experience."
  },
  {
    question: "Can you provide popcorn and candy floss for our movie night?",
    answer: "Yes! We offer delicious cinema add-ons to complete the authentic movie experience including: professional popcorn machines with unlimited servings, candy floss (cotton candy) carts with multiple flavors, cinema-style snack boxes, beverage stations, and themed decorations. Our add-on packages can be customized to match your event theme and guest preferences. Staff are included to operate all concession equipment throughout your event."
  },
  {
    question: "Do you help with movie licensing and content?",
    answer: "We provide all technical equipment and setup. For commercial screenings, public events, or corporate functions, you'll need to arrange movie licensing through appropriate channels (MPAA, local distributors). For private residential events showing personal media or streaming services you own, licensing is typically not required. We're happy to provide guidance and can play content from laptops, USB drives, streaming devices, or Blu-ray players."
  },
  {
    question: "What's included in the sound system?",
    answer: "Our professional sound systems include: high-quality speakers (4-8 speakers depending on setup), subwoofers for deep bass, wireless microphones (for introductions or commentary), mixer for audio control, and all necessary cables and connections. Sound is calibrated for optimal outdoor acoustics, providing clear dialogue and immersive effects without disturbing neighbors. We conduct sound checks before your event starts and provide volume control throughout."
  },
  {
    question: "How long does setup and breakdown take?",
    answer: "Setup typically takes 2-3 hours depending on screen size and venue complexity. We arrive well before your event (usually 3-4 hours early) to complete installation, conduct testing, and ensure everything is perfect. Breakdown takes 1-2 hours and is usually scheduled for the morning after evening events. Our team handles all setup, technical support during your screening, and complete removal - you just enjoy the movie magic!"
  },
  {
    question: "How far in advance should I book outdoor cinema rental?",
    answer: "We recommend booking 3-4 weeks in advance, especially during Dubai's peak outdoor season (October-April) when demand is highest. This allows time for venue site visits, content planning, and securing your preferred date. However, we can often accommodate last-minute bookings (1-2 weeks notice) based on equipment availability. Large corporate events or weddings benefit from earlier booking (6-8 weeks) for comprehensive planning and coordination with other vendors."
  }
];

const OutdoorCinema = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Outdoor Cinema Rental Dubai",
    "description": "Professional outdoor cinema rental in Dubai with big screens, HD projectors, surround sound, and comfortable seating. Perfect for weddings, corporate events, and special celebrations.",
    "provider": {
      "@type": "Organization",
      "name": "Box Entertainment",
      "url": "https://boxentertainment.ae"
    },
    "areaServed": "Dubai, UAE",
    "offers": {
      "@type": "Offer",
      "priceCurrency": "AED",
      "price": "3000",
      "description": "Starting from AED 3,000 for outdoor cinema rental with HD projector, screen, sound system, and seating"
    }
  };

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Outdoor Cinema Dubai | Movie Nights from AED 3,000</title>
        <meta name="description" content="Outdoor cinema rental in Dubai. Big screen, HD projectors, surround sound, seating, popcorn. From AED 3,000. Events, parties, corporate functions." />
        <meta name="keywords" content="outdoor cinema Dubai, movie night rental, outdoor projector screen, cinema under stars Dubai, outdoor movie screening, big screen rental Dubai, outdoor theater Dubai" />
        <link rel="canonical" href="https://boxentertainment.ae/services/outdoor-cinema" />
      </Helmet>

      <StructuredData data={serviceSchema} />

      {/* Hero Section with Breadcrumbs */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/outdoor-cinema-hero.webp"
            alt="Outdoor cinema experience in Dubai with large screen showing movie and guests watching on grass under stars"
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
                { label: "Outdoor Cinema" }
              ]} 
            />
          </div>
          
          <Film className="w-16 h-16 mx-auto mb-6 text-white" />
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            Outdoor Cinema <span className="text-[#D25C84]">Dubai</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Transform any outdoor space into a magical movie theater under the stars. Professional outdoor cinema setups with big screens, HD projectors, and surround sound for unforgettable movie nights in Dubai.
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
              src="/images/services/outdoor-cinema-bg.webp"
              alt="Evening outdoor movie screening with projector and seating at Dubai venue"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
            
            {/* Dark gradient overlay (mobile only) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
            
            {/* H2 Title Overlay (mobile only) */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                Cinema Magic Under the <span className="gradient-text">Stars</span>
              </h2>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="text-left">
            <h2 className="hidden lg:block text-3xl md:text-4xl font-heading font-bold mb-6">
              Cinema Magic Under the <span className="gradient-text">Stars</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              From intimate backyard screenings to large corporate events and community gatherings - create cinematic memories with our complete outdoor cinema solutions.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              Our professional setups include HD projectors up to 20ft screens, surround sound systems, comfortable seating options, and authentic cinema treats like popcorn and candy floss.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Outdoor Cinema Section */}
      <section className="container mx-auto px-4 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Choose Our Outdoor Cinema?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Complete cinema experience with professional equipment and delicious cinema treats
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <Film className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">HD Big Screen</h3>
              <p className="text-muted-foreground">Crystal-clear projection on screens up to 20ft for immersive viewing</p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">Pro Sound System</h3>
              <p className="text-muted-foreground">Surround sound with perfect outdoor acoustics and wireless mics</p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <Users className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">Comfortable Seating</h3>
              <p className="text-muted-foreground">Bean bags, chairs, blankets, and luxury lounge options included</p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <Popcorn className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">Popcorn & Candy Floss</h3>
              <p className="text-muted-foreground">Add authentic cinema snacks with popcorn machines and candy floss carts</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Perfect For Any Event Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/services/outdoor-cinema-bg.webp" 
            alt="Various outdoor cinema events in Dubai including weddings, corporate functions, and family gatherings"
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
              Create memorable movie experiences for every special occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Wedding Receptions</h3>
                <p className="text-muted-foreground">Romantic movie screenings for wedding guests under the stars</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Corporate Events</h3>
                <p className="text-muted-foreground">Team building movie nights and company celebrations</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Birthday Parties</h3>
                <p className="text-muted-foreground">Unique birthday celebrations with favorite films and cinema treats</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <TreePine className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Community Gatherings</h3>
                <p className="text-muted-foreground">Neighborhood movie nights and fundraising screenings</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">School Events</h3>
                <p className="text-muted-foreground">Educational screenings and end-of-term celebrations</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Music className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Festival Screenings</h3>
                <p className="text-muted-foreground">Film festivals and outdoor cultural events</p>
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
            Our Outdoor Cinema Installations
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            See how we've created magical movie experiences across Dubai
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
                  src="/images/services/outdoor-cinema-hero.webp"
                  alt="Outdoor cinema setup with large screen and guests watching movie on grass at Dubai event"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden">
                <img
                  src="/images/services/outdoor-cinema-bg.webp"
                  alt="Evening outdoor movie screening with projector and seating at Dubai venue"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden">
                <img
                  src="/images/services/sound-lighting-bg.webp"
                  alt="Outdoor cinema with professional lighting setup at Dubai wedding reception"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden">
                <img
                  src="/images/services/popcorn-cart.webp"
                  alt="Professional popcorn cart machine with fresh popcorn for outdoor cinema events in Dubai"
                  className="w-full h-64 object-cover"
                  loading="lazy"
                />
              </Card>
            </CarouselItem>
            <CarouselItem className="md:basis-1/2 lg:basis-1/3">
              <Card className="overflow-hidden">
                <img
                  src="/images/services/candy-floss.webp"
                  alt="Colorful cotton candy candy floss for outdoor movie nights and cinema events Dubai"
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
              Why Choose Our Outdoor Cinema Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional cinema experiences with comprehensive support
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Premium HD Equipment</h3>
                <p className="text-muted-foreground">High-lumen projectors (5,000+ lumens), large screens up to 20ft, and cinema-quality sound systems</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Expert Technical Team</h3>
                <p className="text-muted-foreground">Experienced technicians handle all setup, testing, and provide on-site support throughout your event</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Site Visit & Planning</h3>
                <p className="text-muted-foreground">Complimentary venue consultation to assess space, lighting, power, and optimal screen placement</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Sun className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Weather Solutions</h3>
                <p className="text-muted-foreground">Generators for remote venues, weather monitoring, and backup plans for optimal viewing conditions</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Settings className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Complete Setup Service</h3>
                <p className="text-muted-foreground">Full installation, sound calibration, content setup, and post-event breakdown - hassle-free experience</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Popcorn className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Cinema Add-Ons Available</h3>
                <p className="text-muted-foreground">Popcorn machines, candy floss carts, snack boxes, and beverage stations for authentic cinema experience</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <div className="container mx-auto px-4 lg:px-8">
        <FAQSection 
          questions={faqQuestions}
          title="Outdoor Cinema FAQ"
        />
      </div>

      {/* Related Services */}
      <div className="container mx-auto px-4 lg:px-8">
        <RelatedServices 
          currentService="outdoor-cinema"
        />
      </div>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <CardContent className="p-12 text-center">
            <Film className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Create Movie Magic?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get a custom quote for outdoor cinema tailored to your venue and event vision
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
  );
};

export default OutdoorCinema;
