import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Camera, Sparkles, Square, Frame } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useImageLoader } from "@/hooks/useImageLoader";

const Photobooth = () => {
  const heroSection = useIntersectionObserver({ threshold: 0, triggerOnce: true });
  const videoSection = useIntersectionObserver({ threshold: 0.25 });

  const services = [
    {
      icon: Camera,
      title: "360 Degree Booth",
      description: "Stunning 360° videos with slow-motion effects and instant sharing",
      link: "/services/photobooth/360-booth",
      backgroundImage: "/images/services/360-booth-bg.webp",
      alt: "360-degree photo booth capturing stunning slow-motion videos at Dubai event"
    },
    {
      icon: Sparkles,
      title: "Original Photo Booth",
      description: "Classic photo booth experience with instant prints and digital copies",
      link: "/services/photobooth/original-booth",
      backgroundImage: "/images/services/original-booth-bg.webp",
      alt: "Classic original photo booth with instant prints at Dubai wedding"
    },
    {
      icon: Square,
      title: "Mirror Photo Booth",
      description: "Interactive mirror booth with touch screen and customizable templates",
      link: "/services/photobooth/mirror-booth",
      backgroundImage: "/images/services/mirror-booth-bg.webp",
      alt: "Interactive mirror photo booth with touch screen at Dubai corporate event"
    },
    {
      icon: Frame,
      title: "Mirror Booth Backdrop",
      description: "Premium backdrop setups to enhance your mirror booth experience",
      link: "/services/photobooth/mirror-booth-backdrop",
      backgroundImage: "/images/services/mirror-booth-backdrop-bg.webp",
      alt: "Mirror photo booth with silver balloon backdrop at Dubai event - guests posing with instant prints"
    }
  ];

  const faqQuestions = [
    {
      question: "What types of photo booths do you offer in Dubai?",
      answer: "We offer four premium photo booth options: 360 Degree Booths for stunning slow-motion videos, Original Photo Booths for classic instant prints, Mirror Photo Booths with interactive touch screens, and Mirror Booth Backdrops for enhanced aesthetics. Each booth type is perfect for different event styles and guest preferences, from weddings and corporate events to birthday parties and product launches."
    },
    {
      question: "How much does it cost to rent a photo booth in Dubai?",
      answer: "Photo booth rental prices in Dubai vary based on the booth type, rental duration, and additional features. Original photo booths typically start from AED 1,500 for 3 hours, mirror booths from AED 2,000, and 360-degree booths from AED 3,500. Packages include setup, attendant, unlimited sessions, digital copies, and instant sharing. Custom branding, props, and extended hours are available. Contact us for a personalized quote based on your event needs."
    },
    {
      question: "How far in advance should I book a photo booth?",
      answer: "We recommend booking 4-6 weeks in advance, especially during peak wedding season (October to April) and for popular dates like New Year's Eve, Valentine's Day, and UAE National Day. Last-minute bookings are often available subject to availability. For large corporate events or weddings with specific booth requirements, booking 2-3 months ahead ensures your preferred booth and date are secured."
    },
    {
      question: "Do you provide props and backdrops?",
      answer: "Yes! All our photo booth packages include a selection of fun props (hats, glasses, signs, themed accessories). We also offer premium custom backdrops including sequin walls, floral arrangements, branded step-and-repeats for corporate events, and themed designs. Mirror Booth Backdrop packages feature specially designed premium setups. You can also request specific prop themes or custom branded materials for your event."
    },
    {
      question: "Can guests share photos instantly?",
      answer: "Absolutely! All our photo booths feature instant digital sharing via WhatsApp, email, SMS, and social media platforms. Guests receive their photos and videos within seconds of capture. For 360 booths, slow-motion videos are processed on-site and shared immediately. You can also add custom overlays with event hashtags, logos, and branding to all digital copies for enhanced social media engagement."
    },
    {
      question: "What space do you need for setup?",
      answer: "Space requirements vary by booth type: Original booths need approximately 2.5m x 2.5m, Mirror booths require 3m x 3m, and 360 booths need 4m x 4m circular space for safe rotation. All booths need access to standard power outlets. We handle complete setup and breakdown, typically requiring 60-90 minutes before and after your event. Our team will assess your venue during consultation to ensure optimal placement for guest flow and lighting."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Photo Booth Rentals Dubai | Box Entertainment</title>
        <meta name="description" content="Rent professional photo booths in Dubai. 360° booths, mirror booths, and original photo booths for weddings, parties, and corporate events." />
        <link rel="canonical" href="https://boxentertainment.ae/services/photobooth" />
      </Helmet>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Photo Booth Rentals in Dubai",
          description: "Professional photo booth rental services for events in Dubai",
          provider: {
            "@type": "Organization",
            name: "Box Entertainment"
          }
        }}
      />

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "VideoObject",
          "name": "Photo Booth Rentals Dubai - Box Entertainment",
          "description": "See our premium photo booth services in action at Dubai events including 360 booths, mirror booths, and classic photo booths",
          "thumbnailUrl": "https://img.youtube.com/vi/J5YXBPHhHf0/maxresdefault.jpg",
          "uploadDate": "2025-11-10T00:00:00Z",
          "embedUrl": "https://www.youtube.com/embed/J5YXBPHhHf0",
          "contentUrl": "https://www.youtube.com/watch?v=J5YXBPHhHf0"
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
              src="/images/services/photobooth-hero-bg.webp"
              alt="Professional photo booth experiences at Dubai events with instant sharing and custom branding"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
          </div>

          {/* Hero Content */}
          <div className="relative z-10 container mx-auto px-4 lg:px-8 text-white">
            <div className="mb-8 text-left">
              <Breadcrumbs 
                items={[
                  { label: "Services", href: "/services" },
                  { label: "Photo Booth" }
                ]}
              />
            </div>
            <div className="text-center">
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
                Photo Booth <span className="gradient-text">Rentals</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8">
                Create lasting memories with our professional photo booth services in Dubai
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
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
                      <h2 className="text-xl font-heading font-bold mb-2">{service.title}</h2>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Sparkles className="w-8 h-8 text-[#D25C84]" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Instant Sharing</h3>
              <p className="text-muted-foreground">Share photos and videos instantly via WhatsApp, email, or social media</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Frame className="w-8 h-8 text-[#D25C84]" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Custom Branding</h3>
              <p className="text-muted-foreground">Personalize with custom overlays, logos, and templates</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 bg-primary/10 rounded-full flex items-center justify-center">
                <Camera className="w-8 h-8 text-[#D25C84]" />
              </div>
              <h3 className="text-xl font-heading font-bold mb-2">Professional Setup</h3>
              <p className="text-muted-foreground">Delivered, set up, and operated by our experienced team</p>
            </div>
          </div>

          {/* Video Section */}
          <div ref={videoSection.ref} className="mb-16">
            <div className={`text-center mb-8 transition-all duration-700 ${videoSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <h2 className="text-3xl font-heading font-bold mb-2">
                See Our Photo Booths in <span className="gradient-text">Action</span>
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Watch how our premium photo booths create unforgettable moments at events across Dubai
              </p>
            </div>
            
            <div className={`max-w-4xl mx-auto transition-all duration-700 delay-200 ${videoSection.isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                {videoSection.isVisible && (
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                    src="https://www.youtube.com/embed/J5YXBPHhHf0?si=faMEWq2ZCQGDcfqN&rel=0&modestbranding=1"
                    title="Box Entertainment Photo Booth Experience in Dubai"
                    allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    loading="lazy"
                  />
                )}
              </div>
            </div>
          </div>

          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Ready to Capture Memories?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              Our photo booths are perfect for weddings, corporate events, birthday parties, and any celebration. 
              Create shareable moments your guests will love.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
            >
              Book a Photo Booth Now
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 lg:px-8 pb-20">
          <FAQSection 
            questions={faqQuestions}
            title="Photo Booth Rental FAQ"
          />
        </section>

        {/* Related Services */}
        <RelatedServices currentService="photobooth" />
      </main>
    </>
  );
};

export default Photobooth;
