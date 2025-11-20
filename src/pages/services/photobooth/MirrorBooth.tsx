import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Camera, Hand, Sparkles, Square, Printer, Volume2,
  UserCheck, Image, Monitor, PenTool, Box, HelpCircle, CheckCircle
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { useImageLoader } from "@/hooks/useImageLoader";

const MirrorBooth = () => {
  const { isLoaded: heroLoaded } = useImageLoader("/images/services/mirror-booth-bg.webp");

  const benefits = [
    {
      icon: Hand,
      title: "Interactive Touch Experience",
      description: "Guests interact directly with the mirror using touch-screen technology. Sign photos digitally, choose filters, add emojis, and watch animations come to life on the mirror surface."
    },
    {
      icon: Sparkles,
      title: "Elegant Event Décor",
      description: "The full-length mirror serves as a stunning decorative piece when not in use. Its sleek, modern design complements any venue aesthetic from elegant weddings to corporate galas."
    },
    {
      icon: Volume2,
      title: "Voice-Guided Fun",
      description: "Friendly voice prompts guide guests through the experience, offering compliments and instructions. Creates an engaging, entertaining experience that gets everyone laughing."
    },
    {
      icon: Printer,
      title: "Instant Premium Prints",
      description: "High-quality 4x6 photo strips print in seconds. Guests take home beautiful keepsakes with your custom branding, event details, and professional photo quality."
    }
  ];

  const inclusions = [
    {
      icon: Monitor,
      title: "Full-Length Interactive Mirror",
      description: "Stunning full-length touch-screen mirror with sleek frame. Elegant design that serves as both entertainment and décor. High-resolution display with responsive touch interface."
    },
    {
      icon: Camera,
      title: "Professional DSLR Camera",
      description: "Built-in professional camera capturing crisp, high-quality images. Superior photo quality compared to standard photo booths. Perfect lighting integration for flawless shots."
    },
    {
      icon: Printer,
      title: "Unlimited Instant Prints",
      description: "High-quality 4x6 photo prints throughout your event with no limits. Professional-grade photo paper with vibrant colors. Guests can take home multiple copies."
    },
    {
      icon: Sparkles,
      title: "Custom Animations & Graphics",
      description: "Personalized touch-screen animations, compliments, and visual effects. Custom event branding, logos, names, dates, and hashtags. Engaging interactive elements that wow guests."
    },
    {
      icon: PenTool,
      title: "Digital Signing Feature",
      description: "Guests can sign photos directly on the mirror using touch technology. Add messages, drawings, and personal touches. Creates unique, personalized keepsakes."
    },
    {
      icon: Box,
      title: "Props & Accessories Box",
      description: "Curated collection of fun props perfectly suited for mirror booth photos. Hats, glasses, signs, and themed accessories. Refreshed throughout your event."
    },
    {
      icon: UserCheck,
      title: "Professional Attendant",
      description: "Experienced booth operator manages setup, assists guests, troubleshoots, and ensures smooth operation. Professional service from start to finish."
    },
    {
      icon: Image,
      title: "Online Photo Gallery",
      description: "All photos uploaded to private online gallery accessible for 90 days. Download high-resolution digital copies. Share with all guests via link."
    }
  ];

  const faqs = [
    {
      question: "How is the mirror booth different from a traditional photo booth?",
      answer: "The mirror booth is a full-length interactive mirror, not an enclosed booth. Guests see themselves in a stunning mirror display and interact using touch-screen technology. They can sign photos digitally on the mirror, enjoy voice prompts and animations, and experience a more open, social atmosphere. It's perfect for guests who might feel claustrophobic in traditional enclosed booths and serves as elegant event décor."
    },
    {
      question: "How much space does the mirror booth require?",
      answer: "The mirror booth requires approximately 2m x 2m (6.5ft x 6.5ft) of space, making it perfect for venues with limited room. This compact footprint is significantly smaller than traditional booth setups. The mirror can be placed against a wall or freestanding with a backdrop. Works perfectly in hotel ballrooms, villas, outdoor venues, and corporate spaces across Dubai and the UAE."
    },
    {
      question: "Can we customize the mirror booth experience?",
      answer: "Absolutely! We fully customize the mirror booth to match your event. This includes custom animations, voice prompts, opening screens, photo layouts, logos, event names, hashtags, and color schemes. We can create themed compliments (wedding, corporate, birthday), branded overlays, and personalized touch-screen interactions. Design proofs provided before your event."
    },
    {
      question: "How long does it take to get a photo?",
      answer: "The entire experience takes 30-60 seconds from start to finish. Guests interact with the mirror, pose for 3-5 photos, can sign the image digitally on the touch screen, and receive high-quality prints within 10 seconds. The quick turnaround means no long queues and maximum guest participation throughout your event."
    },
    {
      question: "Is the mirror booth suitable for outdoor events?",
      answer: "Yes! The mirror booth works beautifully at outdoor venues including beach weddings, garden parties, rooftop events, and poolside celebrations. We provide weather protection and ensure all equipment is secured. The mirror is suitable for covered outdoor areas or we can arrange a protective canopy. Popular for Dubai's stunning outdoor venues."
    },
    {
      question: "What happens to the digital photos?",
      answer: "All photos are automatically uploaded to a private online gallery during your event. The gallery remains active for 90 days, allowing you and your guests to download high-resolution images. You receive a shareable link to distribute. Photos can be shared on social media, downloaded for printing, or saved as digital keepsakes. You also receive a USB drive with all images."
    }
  ];

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Interactive Mirror Photo Booth Hire in Dubai and UAE",
    description: "Full-length interactive mirror photo booth with touch-screen technology, instant prints, voice prompts, and custom animations for weddings, corporate events, and celebrations",
    serviceType: ["Mirror Photo Booth Rental", "Interactive Photo Booth", "Event Entertainment", "Wedding Photo Booth"],
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
    image: "https://boxentertainment.ae/images/services/mirror-booth-bg.webp"
  };

  return (
    <>
      <Helmet>
        <title>Mirror Photo Booth Dubai | Interactive Touch Screen</title>
        <meta name="description" content="Book interactive mirror photo booth in Dubai. Full-length touch-screen, instant prints, voice prompts & custom animations for weddings & events." />
        <link rel="canonical" href="https://boxentertainment.ae/services/photobooth/mirror-booth" />
        
        <meta property="og:title" content="Interactive Mirror Photo Booth Dubai | Box Entertainment" />
        <meta property="og:description" content="Stunning full-length touch-screen mirror booth with instant prints for Dubai events" />
        <meta property="og:image" content="https://boxentertainment.ae/images/services/mirror-booth-bg.webp" />
        <meta property="og:url" content="https://boxentertainment.ae/services/photobooth/mirror-booth" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Interactive Mirror Photo Booth Dubai" />
        <meta name="twitter:description" content="Touch-screen mirror booth with instant prints" />
        <meta name="twitter:image" content="https://boxentertainment.ae/images/services/mirror-booth-bg.webp" />
        
        <link rel="preload" as="image" href="/images/services/mirror-booth-bg.webp" type="image/webp" />
      </Helmet>

      <StructuredData data={serviceSchema} />

      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/services" },
              { label: "Photo Booth", href: "/services/photobooth" },
              { label: "Mirror Photo Booth" }
            ]} 
          />

          {/* Hero Section */}
          <section className="lg:grid lg:grid-cols-2 gap-12 items-center mb-24" data-lovable-id="hero-section">
            <div className="relative mb-8 lg:mb-0" data-lovable-id="hero-image">
              {!heroLoaded && (
                <div className="aspect-[4/3] rounded-2xl bg-muted animate-pulse" />
              )}
              <img
                src="/images/services/mirror-booth-bg.webp"
                alt="Interactive mirror photo booth with touch screen at Dubai wedding"
                className={`w-full h-auto rounded-2xl shadow-2xl transition-opacity duration-500 ${
                  heroLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="eager"
              />
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden rounded-2xl" />
              
              {/* H1 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  Mirror <span className="gradient-text">Photo Booth</span> Dubai
                </h1>
              </div>
            </div>
            
            <div className="space-y-6" data-lovable-id="hero-content">
              <h1 className="hidden lg:block text-4xl md:text-5xl lg:text-6xl font-heading font-bold leading-tight">
                Interactive Mirror Photo Booth Hire in <span className="gradient-text">Dubai & UAE</span>
              </h1>
              <p className="text-xl text-muted-foreground font-medium">
                Full-length touch-screen magic mirror with instant prints and interactive animations
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Transform your event with our stunning interactive mirror photo booth. This elegant full-length mirror engages guests with touch-screen technology, voice prompts, animated compliments, and produces instant high-quality prints. The sleek design doubles as a beautiful décor piece while creating unforgettable photo experiences. Perfect for weddings, corporate events, and celebrations throughout Dubai and the UAE.
              </p>
              <div className="flex flex-wrap gap-4 pt-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">Book Now</Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#video-reels">View Gallery</a>
                </Button>
              </div>
            </div>
          </section>

          {/* Why Hire Section */}
          <section 
            className="relative py-24 -mx-4 lg:-mx-8 px-4 lg:px-8 mb-24"
            style={{
              backgroundImage: "url('/images/services/mirror-booth-backdrop-bg.webp')",
              backgroundSize: "cover",
              backgroundPosition: "center"
            }}
            data-lovable-id="why-hire-section"
          >
            <div className="absolute inset-0 bg-background/95 backdrop-blur-sm" />
            
            <div className="relative container mx-auto">
              <div className="text-center mb-16 space-y-4">
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                  Why Hire a <span className="gradient-text">Mirror Booth</span>?
                </h2>
                <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                  The perfect blend of entertainment, technology, and elegant design
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="backdrop-blur-sm bg-card/80 hover:bg-card/90 transition-all">
                    <CardContent className="p-6 text-center space-y-4">
                      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10">
                        <benefit.icon className="h-8 w-8 text-[#D25C84]" />
                      </div>
                      <h3 className="font-heading text-xl font-semibold">{benefit.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{benefit.description}</p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="mb-24" data-lovable-id="whats-included-section">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                What's <span className="gradient-text">Included</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Everything you need for an unforgettable interactive photo experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {inclusions.map((inclusion, index) => (
                <Card key={index} className="backdrop-blur-sm bg-card/50 hover:shadow-lg transition-all">
                  <CardContent className="p-6 space-y-4">
                    <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary/10">
                      <inclusion.icon className="h-7 w-7 text-[#D25C84]" />
                    </div>
                    <h3 className="font-heading text-lg font-semibold">{inclusion.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed">{inclusion.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Video Reels Section */}
          <section id="video-reels" className="mb-24" data-lovable-id="video-reels-section">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold">
                See the Mirror Booth in <span className="gradient-text">Action</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
                Watch how our interactive mirror captivates guests at events
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
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book Your Mirror Booth Now</Link>
              </Button>
            </div>
          </section>

          {/* FAQ Section */}
          <FAQSection questions={faqs} title="Mirror Booth FAQs" />

          {/* Related Services */}
          <RelatedServices currentService="mirror-booth" />

          {/* Bottom CTA */}
          <section className="text-center py-16 space-y-6" data-lovable-id="bottom-cta">
            <h2 className="text-3xl md:text-4xl font-heading font-bold">
              Ready to Add Interactive Magic to Your Event?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Book our stunning mirror photo booth and give your guests an unforgettable touch-screen experience
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">Book Your Mirror Booth Now</Link>
            </Button>
          </section>
        </div>
      </main>
    </>
  );
};

export default MirrorBooth;
