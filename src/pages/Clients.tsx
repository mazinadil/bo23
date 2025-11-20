import { Helmet } from "react-helmet-async";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Building2, Hotel, Users, Star, Trophy, Heart, ChevronLeft, ChevronRight } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import { useImageLoader } from "@/hooks/useImageLoader";
import { useRef, useState, useEffect } from "react";

const Clients = () => {
  const heroImage = "/images/events/corporate-hero.webp";
  const { isLoaded } = useImageLoader(heroImage);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  // Check scroll position to enable/disable arrows
  const checkScrollPosition = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  // Scroll left by one logo width (224px = 192px logo + 32px gap)
  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      setIsAutoScrolling(false);
      scrollContainerRef.current.scrollBy({
        left: -224,
        behavior: 'smooth'
      });
    }
  };

  // Scroll right by one logo width
  const scrollRight = () => {
    if (scrollContainerRef.current) {
      setIsAutoScrolling(false);
      scrollContainerRef.current.scrollBy({
        left: 224,
        behavior: 'smooth'
      });
    }
  };

  // Monitor scroll position
  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      checkScrollPosition();
      container.addEventListener('scroll', checkScrollPosition);
      return () => container.removeEventListener('scroll', checkScrollPosition);
    }
  }, []);

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Box Entertainment",
    "description": "Trusted by leading brands, hotels, and organizations across Dubai for exceptional event entertainment",
    "url": "https://boxentertainment.ae/clients",
    "logo": "https://boxentertainment.ae/box-logo.png"
  };

  const clientCategories = [
    {
      icon: Building2,
      title: "Corporate Clients",
      description: "Leading tech companies, financial institutions, multinational corporations, and government entities trust us for their events.",
      count: "200+"
    },
    {
      icon: Hotel,
      title: "Hospitality Partners",
      description: "5-star hotels, luxury resorts, premium venues, and beach clubs choose us for consistent excellence.",
      count: "50+"
    },
    {
      icon: Users,
      title: "Private Events",
      description: "High-profile weddings, celebrity events, exclusive parties, and VIP gatherings made unforgettable.",
      count: "1000+"
    }
  ];

  const testimonials = [
    {
      quote: "Box Entertainment transformed our annual corporate gala into an unforgettable experience. Their professionalism and attention to detail are unmatched.",
      author: "Sarah Johnson",
      position: "Events Director",
      company: "Fortune 500 Company"
    },
    {
      quote: "We've partnered with Box Entertainment for over 5 years. Their consistency, quality, and innovative entertainment solutions make them our go-to provider.",
      author: "Ahmed Al Mansouri",
      position: "General Manager",
      company: "Luxury Hotel Dubai"
    },
    {
      quote: "From planning to execution, Box Entertainment exceeded all expectations for our wedding. They made our special day truly magical.",
      author: "Emily & James",
      position: "Wedding Couple",
      company: "Private Client"
    }
  ];

  const stats = [
    {
      icon: Star,
      number: "10+",
      label: "Years Experience"
    },
    {
      icon: Trophy,
      number: "500+",
      label: "Prestigious Clients"
    },
    {
      icon: Heart,
      number: "5000+",
      label: "Successful Events"
    }
  ];

  const clientLogos = [
    {
      name: "Al Arabiya School",
      image: "/images/clients/schools/al-arabiya.jpg",
      alt: "Al Arabiya International School Dubai logo - Box Entertainment educational events partner"
    },
    {
      name: "Safa British School",
      image: "/images/clients/schools/safa-british.jpg",
      alt: "Safa British School Dubai logo - Box Entertainment school events client"
    },
    {
      name: "Hartland International School",
      image: "/images/clients/schools/hartland.jpg",
      alt: "Hartland International School Dubai logo - Box Entertainment educational partner"
    },
    {
      name: "APCO Worldwide",
      image: "/images/clients/schools/apco.jpg",
      alt: "APCO Worldwide logo - Box Entertainment corporate events client"
    },
    {
      name: "AIS Dubai",
      image: "/images/clients/schools/ais-dubai.jpg",
      alt: "American International School Dubai logo - Box Entertainment school events partner"
    },
    {
      name: "BLA BLA",
      image: "/images/clients/schools/bla-bla.jpg",
      alt: "BLA BLA Dubai logo - Box Entertainment hospitality events partner"
    },
    {
      name: "Cranleigh Abu Dhabi",
      image: "/images/clients/schools/cranleigh.jpg",
      alt: "Cranleigh Abu Dhabi school logo - Box Entertainment educational events partner"
    },
    {
      name: "Emirates Dubai Rugby 7s",
      image: "/images/clients/schools/rugby-7s.jpg",
      alt: "Emirates Dubai Rugby 7s logo - Box Entertainment sports events partner"
    },
    {
      name: "Dubai British School",
      image: "/images/clients/schools/dubai-british.jpg",
      alt: "Dubai British School Jumeirah Park logo - Box Entertainment school events client"
    },
    {
      name: "Yas Links Abu Dhabi",
      image: "/images/clients/schools/yas-links.jpg",
      alt: "Yas Links Abu Dhabi golf course logo - Box Entertainment corporate events partner"
    },
    {
      name: "DESC",
      image: "/images/clients/desc.jpg",
      alt: "Dubai English Speaking College logo - Box Entertainment educational events partner"
    },
    {
      name: "The Westin Dubai Mina Seyahi",
      image: "/images/clients/westin-mina-seyahi.jpg",
      alt: "The Westin Dubai Mina Seyahi hotel logo - Box Entertainment luxury hospitality partner"
    },
    {
      name: "Fairgreen International School",
      image: "/images/clients/fairgreen.jpg",
      alt: "Fairgreen International School Dubai logo - Box Entertainment school events client"
    },
    {
      name: "Vida Hotels and Resorts",
      image: "/images/clients/vida-hotels.jpg",
      alt: "Vida Hotels and Resorts logo - Box Entertainment hospitality events partner"
    },
    {
      name: "Frontline International Private School",
      image: "/images/clients/frontline-school.jpg",
      alt: "Frontline International Private School Dubai logo - Box Entertainment educational partner"
    },
    {
      name: "Sofitel Hotels & Resorts",
      image: "/images/clients/sofitel.jpg",
      alt: "Sofitel Hotels and Resorts logo - Box Entertainment luxury hotel events client"
    },
    {
      name: "Jebel Ali School",
      image: "/images/clients/jebel-ali-school.jpg",
      alt: "Jebel Ali School Dubai logo - Box Entertainment educational events partner"
    },
    {
      name: "Mövenpick Hotel Jumeirah Beach",
      image: "/images/clients/movenpick-jbr.jpg",
      alt: "Mövenpick Hotel Jumeirah Beach logo - Box Entertainment hospitality events client"
    },
    {
      name: "JESS Dubai",
      image: "/images/clients/jess-dubai.jpg",
      alt: "Jumeirah English Speaking School Dubai logo - Box Entertainment school events partner"
    },
    {
      name: "ADMM",
      image: "/images/clients/admm.jpg",
      alt: "Abu Dhabi Motorsports Management logo - Box Entertainment motorsports events partner"
    },
    {
      name: "African + Eastern",
      image: "/images/clients/african-eastern.jpg",
      alt: "African + Eastern logo - Box Entertainment corporate events client"
    },
    {
      name: "Le Royal Meridien Beach Resort & Spa Dubai",
      image: "/images/clients/royal-meridien.jpg",
      alt: "Le Royal Meridien Beach Resort & Spa Dubai logo - Box Entertainment luxury hotel events partner"
    },
    {
      name: "DHL",
      image: "/images/clients/dhl.jpg",
      alt: "DHL Express logo - Box Entertainment corporate events partner"
    },
    {
      name: "Atlantis The Palm",
      image: "/images/clients/atlantis.jpg",
      alt: "Atlantis The Palm Dubai logo - Box Entertainment luxury resort events client"
    },
    {
      name: "Dubai International Hotel",
      image: "/images/clients/dubai-international-hotel.jpg",
      alt: "Dubai International Hotel logo - Box Entertainment hotel events partner"
    },
    {
      name: "FIVE Palm Jumeirah Dubai",
      image: "/images/clients/five-palm.jpg",
      alt: "FIVE Palm Jumeirah Dubai logo - Box Entertainment luxury hotel events client"
    },
    {
      name: "AVANI Palm View Dubai",
      image: "/images/clients/avani-palm-view.jpg",
      alt: "AVANI Palm View Dubai Hotel & Suites logo - Box Entertainment hospitality events partner"
    },
    {
      name: "Amwaj Rotana Jumeirah Beach",
      image: "/images/clients/amwaj-rotana.jpg",
      alt: "Amwaj Rotana Jumeirah Beach Dubai logo - Box Entertainment luxury hotel events client"
    },
    {
      name: "Al Maha Island & Resort",
      image: "/images/clients/al-maha.jpg",
      alt: "Al Maha Island & Resort logo - Box Entertainment resort events partner"
    },
    {
      name: "ACWA Power",
      image: "/images/clients/acwa-power.jpg",
      alt: "ACWA Power logo - Box Entertainment corporate energy sector events partner in UAE"
    },
    {
      name: "Coca-Cola",
      image: "/images/clients/coca-cola.jpg",
      alt: "Coca-Cola logo - Box Entertainment global beverage brand events client in Dubai"
    },
    {
      name: "Jumeirah Zabeel Saray Dubai",
      image: "/images/clients/jumeirah-zabeel-saray.jpg",
      alt: "Jumeirah Zabeel Saray Dubai logo - Box Entertainment luxury resort events partner on Palm Jumeirah"
    },
    {
      name: "Porsche",
      image: "/images/clients/porsche.jpg",
      alt: "Porsche logo - Box Entertainment premium automotive brand events client in Dubai"
    }
  ];

  return (
    <>
      <Helmet>
        <title>Our Clients | Box Entertainment Dubai</title>
        <meta 
          name="description" 
          content="Discover leading brands, hotels, and organizations that trust Box Entertainment for events in Dubai. Join our prestigious client list."
        />
        <link rel="canonical" href="https://boxentertainment.ae/clients" />
      </Helmet>

      <StructuredData data={organizationSchema} />

      <main id="main-content" className="min-h-screen">
        {/* Hero Section */}
        <section className="relative min-h-[70vh] flex items-center overflow-hidden">
          <div className="absolute inset-0">
            <img 
              src={heroImage}
              alt="Professional business event with diverse corporate clients celebrating partnership with Box Entertainment in Dubai"
              className={`w-full h-full object-cover transition-opacity duration-700 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
              loading="eager"
              width="1920"
              height="1080"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h1 className="text-4xl lg:text-6xl font-heading font-bold mb-6 text-white">
                Our <span className="gradient-text">Clients</span>
              </h1>
              <p className="text-lg lg:text-xl text-white/90 max-w-2xl mx-auto">
                Trusted by Dubai's most prestigious brands, hotels, and organizations to deliver exceptional entertainment experiences
              </p>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-16 bg-gradient-to-br from-card/50 to-background border-y border-border/50">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {stats.map((stat, index) => (
                <Card key={index} className="text-center border-border/50 backdrop-blur-sm">
                  <CardContent className="pt-8 pb-8">
                    <stat.icon className="w-12 h-12 mx-auto mb-4 text-primary" />
                    <div className="text-4xl lg:text-5xl font-heading font-bold mb-2 gradient-text">
                      {stat.number}
                    </div>
                    <div className="text-muted-foreground font-medium">{stat.label}</div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Client Categories */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
                Who We <span className="gradient-text">Serve</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From corporate giants to intimate celebrations, we bring expertise and excellence to every event
              </p>
            </div>

            {/* Logo Carousel */}
            <div className="mt-12 mb-16 relative">
              <div className="overflow-hidden">
                <div 
                  ref={scrollContainerRef}
                  className={`flex gap-8 overflow-x-auto scrollbar-hide ${isAutoScrolling ? 'animate-scroll-left' : ''}`}
                  style={{ scrollBehavior: 'smooth' }}
                >
                  {/* Original logos */}
                  {clientLogos.map((logo, index) => (
                    <div
                      key={`original-${index}`}
                className="flex-shrink-0 w-48 h-32 bg-white rounded-xl shadow-md flex items-center justify-center p-3 transition-transform hover:scale-105"
                    >
                      <img
                        src={logo.image}
                        alt={logo.alt}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                  {/* Duplicate logos for seamless loop */}
                  {clientLogos.map((logo, index) => (
                    <div
                      key={`duplicate-${index}`}
                      className="flex-shrink-0 w-48 h-32 bg-white rounded-xl shadow-md flex items-center justify-center p-3 transition-transform hover:scale-105"
                      aria-hidden="true"
                    >
                      <img
                        src={logo.image}
                        alt={logo.alt}
                        className="max-w-full max-h-full object-contain"
                        loading="lazy"
                      />
                    </div>
                  ))}
                </div>
                
                {/* Gradient fade edges */}
                <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background to-transparent pointer-events-none" />
                <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background to-transparent pointer-events-none" />
              </div>

              {/* Navigation Arrows */}
              <Button
                variant="outline"
                size="icon"
                className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={scrollLeft}
                disabled={!canScrollLeft}
                aria-label="Scroll left to previous client logos"
              >
                <ChevronLeft className="h-6 w-6" />
              </Button>

              <Button
                variant="outline"
                size="icon"
                className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/90 hover:bg-white shadow-lg disabled:opacity-50 disabled:cursor-not-allowed"
                onClick={scrollRight}
                disabled={!canScrollRight}
                aria-label="Scroll right to next client logos"
              >
                <ChevronRight className="h-6 w-6" />
              </Button>
              
              {/* Placeholder comment for future second row */}
              {/* Second row with right-to-left animation will be added here */}
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {clientCategories.map((category, index) => (
                <Card key={index} className="group hover-lift transition-all duration-300 border-border/50 backdrop-blur-sm">
                  <CardContent className="p-8 text-center">
                    <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                      <category.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-heading font-bold mb-2 text-primary">
                      {category.count}
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-3 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-muted-foreground">
                      {category.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 lg:py-24 bg-gradient-to-br from-primary/5 via-secondary/5 to-background">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-4">
                Client <span className="gradient-text">Success Stories</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Hear what our clients have to say about their experiences with Box Entertainment
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-border/50 backdrop-blur-sm">
                  <CardContent className="p-8">
                    <div className="mb-6">
                      <svg className="w-10 h-10 text-primary/30" fill="currentColor" viewBox="0 0 32 32">
                        <path d="M10 8c-3.3 0-6 2.7-6 6v10h8V14h-6c0-2.2 1.8-4 4-4V8zm14 0c-3.3 0-6 2.7-6 6v10h8V14h-6c0-2.2 1.8-4 4-4V8z"/>
                      </svg>
                    </div>
                    <p className="text-muted-foreground mb-6 italic">
                      "{testimonial.quote}"
                    </p>
                    <div>
                      <div className="font-semibold">{testimonial.author}</div>
                      <div className="text-sm text-muted-foreground">{testimonial.position}</div>
                      <div className="text-sm text-primary">{testimonial.company}</div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 lg:py-24">
          <div className="container mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-heading font-bold mb-6">
              Join Our Prestigious <span className="gradient-text">Client List</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Experience the same level of excellence that has made us Dubai's trusted entertainment partner
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Get Started Today</Link>
            </Button>
          </div>
        </section>
      </main>
    </>
  );
};

export default Clients;
