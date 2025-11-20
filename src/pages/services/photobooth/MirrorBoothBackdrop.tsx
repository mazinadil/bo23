import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Image, Palette, Hand, Sparkles, Monitor, PenTool,
  Printer, Box, UserCheck, Lightbulb, Users,
  Flower2, Building2, Grid3x3, Calendar, Wand2, Crown
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { useImageLoader } from "@/hooks/useImageLoader";

const MirrorBoothBackdrop = () => {
  const { isLoaded: heroLoaded } = useImageLoader("/images/services/mirror-booth-backdrop-bg.webp");

  const benefits = [
    {
      icon: Image,
      title: "Perfect Photo Composition",
      description: "Professional backdrops create flawless photo composition. No distracting backgrounds, just beautiful themed designs that make every photo Instagram-worthy and frame-ready."
    },
    {
      icon: Palette,
      title: "Complete Branding Solution",
      description: "Custom backdrops featuring your company logo, wedding monogram, event colors, and brand elements. Perfect for corporate activations, product launches, and branded experiences."
    },
    {
      icon: Hand,
      title: "Interactive Mirror Technology",
      description: "Enjoy all the mirror booth features - touch-screen animations, digital signatures, voice prompts, and instant prints - enhanced with a stunning professional backdrop setup."
    },
    {
      icon: Sparkles,
      title: "Versatile Theme Options",
      description: "Choose from elegant florals, modern geometric patterns, corporate designs, seasonal themes, or fully custom backdrops. We create the perfect visual experience for any event type."
    }
  ];

  const inclusions = [
    {
      icon: Monitor,
      title: "Interactive Mirror Booth",
      description: "Full-length touch-screen mirror with all premium features: voice prompts, animations, digital signing, custom graphics, and instant photo printing technology."
    },
    {
      icon: Image,
      title: "Professional Custom Backdrop",
      description: "High-quality custom printed or fabric backdrop (8ft x 8ft) designed to match your event theme, colors, branding, or aesthetic. Professionally installed and lit."
    },
    {
      icon: PenTool,
      title: "Backdrop Design Service",
      description: "Our design team creates custom backdrop artwork incorporating your logos, monograms, colors, patterns, and theme elements. Multiple design revisions included."
    },
    {
      icon: Lightbulb,
      title: "Premium Lighting Setup",
      description: "Professional lighting for both the mirror and backdrop ensuring perfect illumination. Ring lights and backdrop lighting create flawless, evenly-lit photos."
    },
    {
      icon: Printer,
      title: "Unlimited Instant Prints",
      description: "High-quality 4x6 photo prints throughout your event with no limits. Photos feature both the interactive mirror experience and your beautiful backdrop design."
    },
    {
      icon: Box,
      title: "Props & Accessories",
      description: "Curated prop collection that complements your backdrop theme. Coordinated accessories that enhance the overall photo aesthetic and guest experience."
    },
    {
      icon: Users,
      title: "Professional Setup Team",
      description: "Experienced team handles complete setup including mirror installation, backdrop mounting, lighting positioning, and styling. Professional attendant throughout event."
    },
    {
      icon: Monitor,
      title: "Digital Photo Gallery",
      description: "All photos uploaded to private online gallery for 90 days. High-resolution downloads available. Perfect for sharing the beautiful backdrop photos with guests."
    }
  ];

  const backdropOptions = [
    {
      icon: Flower2,
      title: "Elegant Floral Designs",
      description: "Romantic floral backdrops perfect for weddings, engagements, and upscale celebrations"
    },
    {
      icon: Building2,
      title: "Corporate Branding",
      description: "Company logos, product showcases, and professional branded backgrounds for corporate events"
    },
    {
      icon: Grid3x3,
      title: "Modern Geometric Patterns",
      description: "Contemporary designs with bold patterns, metallic accents, and modern aesthetics"
    },
    {
      icon: Calendar,
      title: "Seasonal Themes",
      description: "Holiday-specific designs, seasonal colors, and festive themed backdrops"
    },
    {
      icon: Wand2,
      title: "Fully Custom Design",
      description: "Completely bespoke backdrops created from your vision, photos, artwork, or brand guidelines"
    },
    {
      icon: Crown,
      title: "Luxury & Glam",
      description: "Sequin walls, shimmer curtains, and glamorous designs for high-end events"
    }
  ];

  const faqs = [
    {
      question: "What's the difference between a mirror booth with and without a backdrop?",
      answer: "The mirror booth with backdrop includes both the interactive touch-screen mirror experience AND a professional custom backdrop setup. This creates picture-perfect photos with a beautiful, themed background instead of whatever is behind the mirror (walls, guests, furniture). It's ideal for events where photo aesthetics and branding are priorities."
    },
    {
      question: "Can we fully customize the backdrop design?",
      answer: "Absolutely! Our design team works with you to create completely custom backdrop designs. Provide your logos, colors, themes, inspiration images, or brand guidelines, and we'll design a backdrop that perfectly matches your vision. You'll receive design mockups for approval before production. Popular options include wedding monograms, corporate branding, themed patterns, and seasonal designs."
    },
    {
      question: "How much space is required for the mirror booth with backdrop setup?",
      answer: "The complete setup requires approximately 3m x 3m (10ft x 10ft) of space. This includes the mirror booth (2m x 2m), backdrop stand (2.4m wide x 2.4m tall), lighting equipment, and guest queue area. We can adapt to your venue layout and work with both indoor and covered outdoor spaces across Dubai."
    },
    {
      question: "Do you provide different backdrop sizes?",
      answer: "Our standard backdrop is 8ft x 8ft (2.4m x 2.4m), which provides perfect coverage for mirror booth photos. For larger setups or specific requirements, we can provide 10ft x 10ft backdrops or wider panoramic designs. The backdrop size is chosen to complement the mirror booth perfectly."
    },
    {
      question: "Can we change the backdrop during the event?",
      answer: "For full-day events or multi-session occasions, we can arrange backdrop changes between segments (for example, switching from ceremony to reception themes, or changing designs for different event phases). This should be discussed during booking to ensure proper planning and setup time."
    },
    {
      question: "Is the backdrop suitable for outdoor events?",
      answer: "Yes! We provide weather-resistant backdrop materials and secure mounting systems for outdoor events. The setup works beautifully at beach weddings, garden parties, rooftop venues, and poolside celebrations. We ensure both the mirror booth and backdrop are protected from wind and weather conditions common in Dubai's outdoor venues."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Mirror Photo Booth with Custom Backdrop Hire in Dubai and UAE",
    description: "Interactive mirror photo booth enhanced with professional custom themed backdrops, combining touch-screen technology with beautiful backgrounds for weddings, corporate events, and celebrations",
    serviceType: ["Mirror Photo Booth with Backdrop", "Interactive Photo Booth", "Custom Backdrop Rental", "Event Entertainment"],
    provider: {
      "@type": "Organization",
      name: "Box Entertainment",
      url: "https://boxentertainment.ae",
      areaServed: ["Dubai", "Abu Dhabi", "Sharjah", "United Arab Emirates"]
    },
    areaServed: {
      "@type": "Country",
      name: "United Arab Emirates"
    },
    offers: {
      "@type": "Offer",
      availability: "https://schema.org/InStock",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "AED"
      }
    },
    image: "https://boxentertainment.ae/images/services/mirror-booth-backdrop-bg.webp"
  };

  return (
    <>
      <Helmet>
        <title>Mirror Booth + Custom Backdrop Dubai | Photo Booth Rental</title>
        <meta name="description" content="Interactive mirror booth with professional custom backdrops in Dubai. Touch-screen tech + themed designs for weddings, corporate events & parties." />
        <link rel="canonical" href="https://boxentertainment.ae/services/photobooth/mirror-booth-backdrop" />
        
        <meta property="og:title" content="Mirror Photo Booth with Custom Backdrop Dubai | Box Entertainment" />
        <meta property="og:description" content="Interactive mirror booth enhanced with professional themed backdrops for Dubai events" />
        <meta property="og:image" content="https://boxentertainment.ae/images/services/mirror-booth-backdrop-bg.webp" />
        <meta property="og:url" content="https://boxentertainment.ae/services/photobooth/mirror-booth-backdrop" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Mirror Booth with Custom Backdrop Dubai" />
        <meta name="twitter:description" content="Interactive touch-screen mirror + professional themed backdrops" />
        <meta name="twitter:image" content="https://boxentertainment.ae/images/services/mirror-booth-backdrop-bg.webp" />
        
        <link rel="preload" as="image" href="/images/services/mirror-booth-backdrop-bg.webp" type="image/webp" />
      </Helmet>

      <StructuredData data={serviceSchema} />

      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/services" },
              { label: "Photo Booth", href: "/services/photobooth" },
              { label: "Mirror Booth with Backdrop" }
            ]} 
          />

          {/* Hero Section */}
          <section className="mb-24">
            <div className="lg:grid lg:grid-cols-2 gap-12 items-center">
              <div className="relative mb-8 lg:mb-0">
                {!heroLoaded && (
                  <div className="aspect-[4/3] bg-muted animate-pulse rounded-lg" />
                )}
                <img
                  src="/images/services/mirror-booth-backdrop-bg.webp"
                  alt="Interactive mirror photo booth with silver balloon backdrop and guests at Dubai wedding celebration"
                  className={`rounded-lg shadow-2xl w-full transition-opacity duration-500 ${
                    heroLoaded ? 'opacity-100' : 'opacity-0'
                  }`}
                  loading="eager"
                />
                
                {/* Dark gradient overlay (mobile only) */}
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden rounded-lg" />
                
                {/* H1 Title Overlay (mobile only) */}
                <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                  <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                    Mirror Photo Booth with <span className="gradient-text">Custom Backdrop</span>
                  </h1>
                </div>
              </div>
              
              <div className="space-y-6">
                <h1 className="hidden lg:block text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                  Mirror Photo Booth with <span className="gradient-text">Custom Backdrop</span> in Dubai & UAE
                </h1>
                <p className="text-xl text-muted-foreground">
                  Interactive touch-screen mirror enhanced with professional themed backdrops
                </p>
                <p className="text-muted-foreground">
                  Elevate your event with the ultimate photo experience combining our elegant interactive mirror booth with stunning custom backdrops. Guests enjoy the fun touch-screen technology, voice prompts, and instant prints while posing against professionally designed backdrops that perfectly match your event theme. The ideal solution for creating picture-perfect memories at weddings, corporate events, and celebrations throughout Dubai and the UAE.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" variant="hero" asChild>
                    <Link to="/contact">Book Now</Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <a href="#backdrop-options">View Backdrop Options</a>
                  </Button>
                </div>
              </div>
            </div>
          </section>

          {/* Why Choose Section */}
          <section 
            className="relative py-24 mb-24 -mx-4 lg:-mx-8 px-4 lg:px-8 bg-cover bg-center"
            style={{ backgroundImage: 'url(/images/services/mirror-booth-backdrop-bg.webp)' }}
          >
            <div className="absolute inset-0 bg-background/95" />
            <div className="relative container mx-auto">
              <div className="text-center mb-16">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                  Why Choose Mirror Booth <span className="gradient-text">with Backdrop</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  The perfect combination of interactive technology and professional photography aesthetics
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => {
                  const Icon = benefit.icon;
                  return (
                    <Card key={index} className="backdrop-blur-sm bg-card/50 border-primary/20 hover:border-primary/40 transition-all">
                      <CardContent className="p-6 text-center space-y-4">
                        <div className="inline-flex p-4 rounded-full bg-primary/10">
                          <Icon className="h-8 w-8 text-[#D25C84]" />
                        </div>
                        <h3 className="font-heading text-xl font-semibold">{benefit.title}</h3>
                        <p className="text-muted-foreground">{benefit.description}</p>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                What's <span className="gradient-text">Included</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Complete mirror booth and backdrop package with professional setup
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {inclusions.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="p-6 space-y-4">
                      <div className="inline-flex p-3 rounded-lg bg-primary/10">
                        <Icon className="h-6 w-6 text-[#D25C84]" />
                      </div>
                      <h3 className="font-heading text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-muted-foreground">{item.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Backdrop Options Section */}
          <section id="backdrop-options" className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                Backdrop Themes & <span className="gradient-text">Customization</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Choose from our popular themes or create a completely custom design
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {backdropOptions.map((option, index) => {
                const Icon = option.icon;
                return (
                  <Card key={index} className="hover:shadow-lg transition-all hover:scale-105">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="inline-flex p-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/5">
                        <Icon className="h-10 w-10 text-[#D25C84]" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold">{option.title}</h3>
                      <p className="text-muted-foreground">{option.description}</p>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </section>

          {/* Video Reels Section */}
          <section className="mb-24">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold mb-6">
                See It <span className="gradient-text">In Action</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Watch our mirror booth with custom backdrop creating memorable moments
              </p>
            </div>

            <div className="max-w-4xl mx-auto mb-12">
              <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                <iframe 
                  className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                  src="https://www.youtube.com/embed/J5YXBPHhHf0?si=faMEWq2ZCQGDcfqN&rel=0&modestbranding=1"
                  title="Box Entertainment Mirror Photo Booth Experience in Dubai"
                  allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  loading="lazy"
                />
              </div>
              <p className="text-center text-muted-foreground mt-4">
                Watch our interactive mirror booth and other photo booth experiences at Dubai events
              </p>
            </div>

            <div className="text-center">
              <Button size="lg" variant="hero" asChild>
                <Link to="/contact">Book Your Mirror Booth with Backdrop</Link>
              </Button>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection questions={faqs} title="Frequently Asked Questions" />

          {/* Related Services */}
          <section className="mb-16">
            <RelatedServices currentService="mirror-booth-backdrop" />
          </section>

          {/* Bottom CTA */}
          <section className="text-center py-16 px-4 rounded-2xl bg-gradient-to-br from-primary/10 via-primary/5 to-background">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready for the Complete Photo Booth Experience?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Book our mirror booth with custom backdrop for picture-perfect memories at your Dubai event
            </p>
            <Button size="lg" variant="hero" asChild>
              <Link to="/contact">Book Mirror Booth with Backdrop Now</Link>
            </Button>
          </section>
        </div>
      </main>
    </>
  );
};

export default MirrorBoothBackdrop;
