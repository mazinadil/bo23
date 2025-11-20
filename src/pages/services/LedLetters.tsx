import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Type, Sparkles, Users, Star, Check, Heart, 
  Calendar, MapPin, Settings, Images, 
  Lightbulb, Camera, Video, Zap
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
    question: "What letters and words are available for rental?",
    answer: "We have the complete alphabet (A-Z), numbers (0-9), and special characters (&, #, @, ❤). Popular combinations include 'LOVE', 'MR & MRS', custom initials, ages for birthdays, brand names, and event hashtags. We can create custom messages with advance notice. Our most requested options: LOVE (classic wedding favorite), initials (personalized touch), MR & MRS (wedding celebrations), numbers (milestone birthdays), brand names (corporate events), and hashtags (social media moments)."
  },
  {
    question: "How tall are the LED letters?",
    answer: "Our standard LED letters stand 4-5 feet tall (1.2-1.5 meters), making them impossible to miss and perfect for photos from across the room. The letters are approximately 8-12 inches deep with substantial presence and visual impact. We also offer 3ft letters for smaller, more intimate spaces upon request. The illuminated letters are freestanding with stable bases, don't require wall mounting, and create stunning focal points at any venue."
  },
  {
    question: "Can the LED letters be used outdoors?",
    answer: "Yes! Our LED letters are suitable for both indoor and covered outdoor use. For outdoor events, we recommend placing them under a tent, gazebo, pergola, or covered area to protect the electrical components from direct exposure to elements. They work beautifully for garden parties, beachside receptions (under canopies), rooftop terraces with coverage, and outdoor weddings with tent setups. We ensure all electrical connections are weatherproofed and safe."
  },
  {
    question: "Do the letters come with delivery and setup?",
    answer: "Absolutely! All rentals include professional delivery to any Dubai/UAE location, careful placement at your venue, complete electrical setup and testing, positioning for optimal photography angles, and post-event collection. Our experienced team ensures the letters are positioned perfectly, wired safely, photographed beautifully, and create maximum impact. We handle everything so you can focus on enjoying your event. Setup typically takes 30-45 minutes depending on the message length."
  },
  {
    question: "How much space do I need for the LED letters?",
    answer: "Space requirements depend on your chosen message. As a guide: 'LOVE' needs approximately 12-14ft of width, 'MR & MRS' needs 20-25ft, individual initials need 3-4ft per letter, and numbers need 3-4ft each. Height clearance needed is 6ft minimum. We'll help you plan the optimal layout during consultation, provide floor plan recommendations, and ensure perfect placement within your venue's dimensions. We can adapt to most spaces including tight venues."
  },
  {
    question: "Can we choose different lighting colors?",
    answer: "Our letters typically feature warm white or cool white LED bulbs, which photograph beautifully under all lighting conditions and suit every event theme. The classic white illumination creates that timeless, elegant Instagram-worthy look that never goes out of style. For special requests like colored LED bulbs (gold, pink, blue, etc.) or RGB color-changing options, please contact us at least 2-3 weeks in advance for custom arrangements."
  },
  {
    question: "Are the LED letters safe for venues with children?",
    answer: "Yes! Safety is our priority. Our LED letters use low-voltage LED bulbs that remain cool to the touch (no burn risk), feature stable freestanding bases that won't tip over, have protected electrical connections with no exposed wires, and meet all UAE safety standards. The letters are designed for public events and are completely safe around children, elderly guests, and high-traffic areas. Our team ensures proper placement away from walkways if needed."
  },
  {
    question: "Can LED letters be incorporated with other decorations?",
    answer: "Absolutely! LED letters pair beautifully with other event elements. Popular combinations include: flowers and greenery around the base, fairy lights or festoon lights overhead, photobooth backdrops or props nearby, stage or dance floor lighting to complement, floral arches or balloon installations, and themed decorations matching your event. We work closely with your decorator/planner to ensure cohesive design. The letters serve as stunning focal points or photo backdrops."
  },
  {
    question: "How do LED letters work as wedding decorations?",
    answer: "LED letters are one of the most popular wedding decorations in Dubai! They create magical photo opportunities for guests throughout the reception, serve as beautiful ceremony backdrops (especially 'LOVE' or initials), mark the sweetheart table or stage area, provide ambient lighting and romantic glow, offer perfect Instagram moments that guests love to share, and become centerpieces that tie the whole theme together. Couples love them for first dance photos, cake cutting backdrops, and signature guest photo spots."
  },
  {
    question: "How far in advance should I book LED letters?",
    answer: "We recommend booking 3-4 weeks in advance, especially during Dubai's peak wedding season (October-April) and during holidays/special dates when demand is highest for popular messages like 'LOVE' and 'MR & MRS'. This allows time for custom message planning, venue coordination, and securing your preferred date. However, we maintain good inventory and can often accommodate last-minute bookings (1-2 weeks notice) based on availability. For large corporate events with custom branding or special characters, 6-8 weeks advance booking is ideal."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "LED Light Up Letters Rental Dubai",
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
  "description": "Stunning illuminated letters and numbers rental for weddings, parties, and corporate events in Dubai. Complete alphabet, numbers, custom messages with professional setup.",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "geoRadius": "50000"
  },
  "serviceType": "LED Letter Rental",
  "category": "Entertainment Services"
};

const LedLetters = () => {
  return (
    <>
      <Helmet>
        <title>LED Letters Dubai | LOVE Letters & Custom Messages</title>
        <meta name="description" content="Stunning LED letters rental in Dubai. 4-5ft illuminated LOVE letters, custom messages, initials, numbers. Weddings, parties, corporate events." />
        <meta name="keywords" content="LED letters Dubai, light up letters rental, LOVE letters Dubai, marquee letters, illuminated letters, wedding letters Dubai, event letters UAE" />
        <link rel="canonical" href="https://boxentertainment.ae/services/led-letters" />
      </Helmet>
      <StructuredData data={schema} />

      <main id="main-content">
        {/* Hero Section with Breadcrumbs */}
        <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/services/led-letters-hero.webp"
              alt="Stunning illuminated LOVE letters with LED lights at elegant Dubai wedding venue creating perfect photo backdrop"
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
                  { label: "LED Letters" }
                ]} 
              />
            </div>
            
            <Type className="w-16 h-16 mx-auto mb-6 text-white" />
            
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
              LED Light Up Letters <span className="text-[#D25C84]">Dubai</span>
            </h1>
            
            <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
              Make your event unforgettable with stunning 4-5ft illuminated LED letters. Perfect for creating Instagram-worthy photo moments at weddings, corporate events, and celebrations across Dubai.
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
                src="/images/services/led-letters-bg.webp"
                alt="LED illuminated letters at various Dubai events including weddings, parties, and corporate functions"
                className="w-full h-full object-cover rounded-lg shadow-2xl"
                loading="lazy"
              />
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
              
              {/* H2 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                  Instagram-Worthy <span className="gradient-text">Moments</span>
                </h2>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="text-left">
              <h2 className="hidden lg:block text-3xl md:text-4xl font-heading font-bold mb-6">
                Instagram-Worthy <span className="gradient-text">Moments</span>
              </h2>
              <p className="text-lg text-muted-foreground mb-6">
                Choose from classic LOVE letters, custom initials, MR & MRS, numbers for milestone birthdays, brand names, or create your own personalized message.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Professional delivery, setup, and styling included. Our 4-5ft tall letters feature bright LED illumination that photographs beautifully and creates magical ambiance.
              </p>
            </div>
          </div>
        </section>

        {/* Why Choose Our LED Letters Section */}
        <section className="container mx-auto px-4 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose Our LED Letters?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Create unforgettable photo moments with stunning illuminated letters
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Bright LED Illumination</h3>
                <p className="text-muted-foreground">Stunning warm white LED bulbs creating magical ambiance and perfect photos</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Zap className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">4-5 Feet Tall</h3>
                <p className="text-muted-foreground">Impressive size making a statement and visible from across any venue</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Type className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Custom Messages</h3>
                <p className="text-muted-foreground">Complete alphabet, numbers, and special characters for any personalized message</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Check className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Full Service Included</h3>
                <p className="text-muted-foreground">Professional delivery, placement, setup, styling, and collection</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* See the LED Letters in Action Section */}
        <section id="video-gallery" className="container mx-auto px-4 lg:px-8 py-20 mb-16">
          <div className="text-center mb-12">
            <Video className="w-12 h-12 mx-auto mb-4 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              See the LED Letters in <span className="gradient-text">Action</span>
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Watch how our illuminated letters transform events and create stunning photo moments
            </p>
          </div>

        <div className="max-w-5xl mx-auto mb-12">
          <div className="aspect-video rounded-lg overflow-hidden bg-muted shadow-2xl">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              poster="/images/services/led-letters-bg.webp"
            >
              <source src="/videos/led-letters-showcase.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

          <div className="text-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book Your LED Letters Now
              </Link>
            </Button>
          </div>
        </section>

        {/* Perfect For Any Event Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src="/images/services/led-letters-bg.webp" 
              alt="LED illuminated letters at various Dubai events including weddings, parties, and corporate functions"
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
                Create memorable moments and stunning photo opportunities
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Weddings</h3>
                  <p className="text-muted-foreground">LOVE letters, MR & MRS, or initials creating romantic photo backdrops</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Sparkles className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Engagement Parties</h3>
                  <p className="text-muted-foreground">Personalized initials and messages for proposal celebrations</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Milestone Birthdays</h3>
                  <p className="text-muted-foreground">Age numbers and names making birthday celebrations extra special</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Corporate Events</h3>
                  <p className="text-muted-foreground">Brand names, logos, and branded messaging for launches and galas</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Camera className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Photo Booth Backdrops</h3>
                  <p className="text-muted-foreground">Instagram-worthy focal points for photobooth areas and selfie stations</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Star className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Special Celebrations</h3>
                  <p className="text-muted-foreground">Anniversaries, graduations, baby showers, and themed parties</p>
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
              Our LED Letter Installations
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              See how we've created stunning moments across Dubai
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
                    src="/images/services/led-letters-hero.webp"
                    alt="Illuminated LOVE letters at Dubai wedding creating romantic atmosphere"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden">
                  <img
                    src="/images/services/led-letters-bg.webp"
                    alt="LED MR & MRS letters at wedding reception in Dubai"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden">
                  <img
                    src="/images/services/entertainment-hero-bg.webp"
                    alt="Custom LED initials at Dubai engagement party"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden">
                  <img
                    src="/images/services/photobooth-bg.webp"
                    alt="LED letters as photobooth backdrop at Dubai celebration"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden">
                  <img
                    src="/images/services/sound-lighting-bg.webp"
                    alt="LED number letters at milestone birthday party"
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                </Card>
              </CarouselItem>
              <CarouselItem className="md:basis-1/2 lg:basis-1/3">
                <Card className="overflow-hidden">
                  <img
                    src="/images/services/dj-bg.webp"
                    alt="Custom LED brand letters at corporate event"
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
                Why Choose Our LED Letter Services
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Professional installations creating unforgettable event moments
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <Check className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Instagram-Worthy Design</h3>
                  <p className="text-muted-foreground">Stunning photo opportunities that guests love sharing on social media, creating lasting memories</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Type className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Fully Customizable</h3>
                  <p className="text-muted-foreground">Any message, initials, numbers, or combination - we create exactly what your event needs</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Lightbulb className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Premium Quality</h3>
                  <p className="text-muted-foreground">High-quality construction with bright, even LED illumination and professional finish</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Settings className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Complete Setup Service</h3>
                  <p className="text-muted-foreground">Professional delivery, precise placement, electrical setup, styling, and post-event collection</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <MapPin className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Any Venue in Dubai</h3>
                  <p className="text-muted-foreground">We deliver and setup at hotels, villas, gardens, beaches, rooftops - anywhere across Dubai and UAE</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Star className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Proven Track Record</h3>
                  <p className="text-muted-foreground">Hundreds of successful installations at weddings, corporate events, and celebrations across the UAE</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <FAQSection questions={faqQuestions} />
        </section>

        {/* Related Services */}
        <section className="container mx-auto px-4 lg:px-8 mb-16">
          <RelatedServices currentService="led-letters" />
        </section>

        {/* Final CTA Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
            <CardContent className="p-12 text-center">
              <Type className="w-16 h-16 mx-auto mb-6 text-primary" />
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Light Up Your Special Moment?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Create unforgettable photo moments with our stunning LED letters - custom messages available
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Book LED Letters Now
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </>
  );
};

export default LedLetters;
