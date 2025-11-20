import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Camera, Video, Share2, Sparkles, Smartphone, Layout,
  PartyPopper, UserCheck, Zap, Monitor, HelpCircle, Target, Lightbulb
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { useImageLoader } from "@/hooks/useImageLoader";

const Booth360 = () => {
  const { isLoaded: heroLoaded } = useImageLoader("/images/services/360-booth-bg.webp");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "360 Degree Video Booth Hire in Dubai and UAE",
    description: "360° rotating video booth creating cinematic slow-motion videos from every angle with instant digital sharing for weddings, corporate events, and celebrations",
    serviceType: ["360 Video Booth Rental", "Event Entertainment", "Wedding Video Booth", "Corporate Video Booth"],
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
      availability: "https://schema.org/InStock"
    },
    image: "https://boxentertainment.ae/images/services/360-booth-bg.webp"
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "360 Degree Video Booth in Action - Dubai Event",
    description: "See our 360° rotating video booth capturing stunning slow-motion footage at a Dubai event. Watch guests create viral-worthy content with our professional 360 booth.",
    thumbnailUrl: "https://boxentertainment.ae/images/services/360-booth-bg.webp",
    uploadDate: "2023-06-22",
    contentUrl: "https://boxentertainment.ae/videos/360-booth-demo.mp4",
    embedUrl: "https://boxentertainment.ae/services/photobooth/360-booth#video-reels"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "How does the 360 booth work?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Guests step onto our sturdy rotating platform (accommodating 1-3 people). Our high-speed camera rotates 360° around them, capturing cinematic slow-motion footage from every angle. The video is processed instantly and delivered via SMS, email, or QR code within 30 seconds."
        }
      },
      {
        "@type": "Question",
        name: "How much space is required?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The 360 booth requires approximately 4m x 4m (13ft x 13ft) of clear space for safe operation. This includes the platform, camera arm rotation radius, and queue area. We can work with both indoor and outdoor venues across Dubai and the UAE."
        }
      },
      {
        "@type": "Question",
        name: "Can we add our branding to the videos?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We create custom video overlays featuring your logo, event hashtag, company branding, wedding names, dates, and custom graphics. Overlays can appear at the beginning, end, or throughout the video. Design mockups provided before your event."
        }
      },
      {
        "@type": "Question",
        name: "Is it suitable for outdoor events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes! Our 360 booth works perfectly at outdoor venues including beach weddings, rooftop parties, garden events, and poolside celebrations. We provide weather protection for equipment and ensure optimal setup regardless of outdoor conditions."
        }
      },
      {
        "@type": "Question",
        name: "How many videos can guests create?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlimited! There's no limit on sessions throughout your event. Each session takes about 30-45 seconds, allowing approximately 60-80 videos per hour. Guests can return multiple times to create different videos with costume changes or props."
        }
      },
      {
        "@type": "Question",
        name: "What format are the videos delivered in?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Videos are delivered as high-quality MP4 files optimized for social media. Perfect for Instagram Reels, TikTok, Facebook, and all platforms. Videos are typically 10-15 seconds long and include your custom branding and effects."
        }
      }
    ]
  };

  const benefits = [
    {
      icon: <Share2 className="h-12 w-12 text-[#D25C84]" />,
      title: "Viral Social Content",
      description: "Create Instagram and TikTok-worthy content that gets shared thousands of times. Your guests become influencers for your event."
    },
    {
      icon: <Video className="h-12 w-12 text-[#D25C84]" />,
      title: "360° Slow Motion Magic",
      description: "Our rotating arm captures cinematic slow-motion footage from every angle, creating movie-quality videos your guests will treasure."
    },
    {
      icon: <Sparkles className="h-12 w-12 text-[#D25C84]" />,
      title: "Modern & Unique",
      description: "Stand out with the latest event entertainment technology. The 360 booth is unlike anything your guests have experienced before."
    },
    {
    icon: <Smartphone className="h-12 w-12 text-[#D25C84]" />,
      title: "Instant Digital Delivery",
      description: "Videos delivered via SMS, email, or QR code within seconds. Guests can share immediately on all social platforms."
    }
  ];

  const inclusions = [
    {
      icon: <Target className="h-12 w-12 text-[#D25C84]" />,
      title: "Premium 360° Platform",
      description: "Sturdy rotating platform with safety railings accommodating 1-3 guests at a time. Professional-grade equipment for smooth, stable footage."
    },
    {
      icon: <Camera className="h-12 w-12 text-[#D25C84]" />,
      title: "High-Speed Camera Rig",
      description: "Professional rotating camera arm capturing 120fps slow-motion video in stunning HD quality. Creates that cinematic wow-factor."
    },
    {
      icon: <Lightbulb className="h-12 w-12 text-[#D25C84]" />,
      title: "Professional LED Ring Light",
      description: "Studio-quality lighting ensures perfect illumination from every angle. Your guests look like movie stars in every frame."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-[#D25C84]" />,
      title: "Instant Digital Sharing",
      description: "Videos sent via SMS, email, or QR code in under 30 seconds. Compatible with all social media platforms for instant posting."
    },
    {
      icon: <Layout className="h-12 w-12 text-[#D25C84]" />,
      title: "Custom Video Overlays",
      description: "Branded intros, outros, logos, hashtags, and custom graphics. Perfect for corporate branding or personalized wedding touches."
    },
    {
      icon: <PartyPopper className="h-12 w-12 text-[#D25C84]" />,
      title: "Fun Props & Accessories",
      description: "Curated selection of props perfect for 360° videos – flowing fabrics, confetti, champagne bottles, and themed accessories."
    },
    {
      icon: <UserCheck className="h-12 w-12 text-[#D25C84]" />,
      title: "Professional Booth Attendant",
      description: "Experienced operator manages the booth, guides guests, ensures safety, and troubleshoots. Professional service throughout your event."
    },
    {
      icon: <Monitor className="h-12 w-12 text-[#D25C84]" />,
      title: "Online Video Gallery",
      description: "All videos uploaded to private gallery accessible for 90 days. Download high-resolution files and share with all your guests."
    }
  ];

  const faqs = [
    {
      question: "How does the 360 booth work?",
      answer: "Guests step onto our sturdy rotating platform (accommodating 1-3 people). Our high-speed camera rotates 360° around them, capturing cinematic slow-motion footage from every angle. The video is processed instantly and delivered via SMS, email, or QR code within 30 seconds."
    },
    {
      question: "How much space is required?",
      answer: "The 360 booth requires approximately 4m x 4m (13ft x 13ft) of clear space for safe operation. This includes the platform, camera arm rotation radius, and queue area. We can work with both indoor and outdoor venues across Dubai and the UAE."
    },
    {
      question: "Can we add our branding to the videos?",
      answer: "Absolutely! We create custom video overlays featuring your logo, event hashtag, company branding, wedding names, dates, and custom graphics. Overlays can appear at the beginning, end, or throughout the video. Design mockups provided before your event."
    },
    {
      question: "Is it suitable for outdoor events?",
      answer: "Yes! Our 360 booth works perfectly at outdoor venues including beach weddings, rooftop parties, garden events, and poolside celebrations. We provide weather protection for equipment and ensure optimal setup regardless of outdoor conditions."
    },
    {
      question: "How many videos can guests create?",
      answer: "Unlimited! There's no limit on sessions throughout your event. Each session takes about 30-45 seconds, allowing approximately 60-80 videos per hour. Guests can return multiple times to create different videos with costume changes or props."
    },
    {
      question: "What format are the videos delivered in?",
      answer: "Videos are delivered as high-quality MP4 files optimized for social media. Perfect for Instagram Reels, TikTok, Facebook, and all platforms. Videos are typically 10-15 seconds long and include your custom branding and effects."
    }
  ];

  return (
    <>
      <Helmet>
        <title>360 Video Booth Dubai | Slow Motion Photo Booth Rental</title>
        <meta name="description" content="360° video booth for slow-motion videos from every angle. Perfect for Dubai weddings, corporate events & parties. Instant digital sharing." />
        <link rel="canonical" href="https://boxentertainment.ae/services/photobooth/360-booth" />
        
        <meta property="og:title" content="360 Degree Video Booth Dubai | Box Entertainment" />
        <meta property="og:description" content="Create stunning 360° slow-motion videos at your Dubai event" />
        <meta property="og:image" content="https://boxentertainment.ae/images/services/360-booth-bg.webp" />
        <meta property="og:url" content="https://boxentertainment.ae/services/photobooth/360-booth" />
        <meta property="og:type" content="website" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="360 Degree Video Booth Dubai" />
        <meta name="twitter:description" content="Viral-worthy slow-motion 360° videos for events" />
        <meta name="twitter:image" content="https://boxentertainment.ae/images/services/360-booth-bg.webp" />
        
        <link 
          rel="preload" 
          as="image" 
          href="/images/services/360-booth-bg.webp"
          type="image/webp"
        />
      </Helmet>

      <StructuredData data={serviceSchema} />
      <StructuredData data={videoSchema} />
      <StructuredData data={faqSchema} />

      <main className="min-h-screen pt-24 pb-16">
        <div className="container mx-auto px-4 lg:px-8">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/services" },
              { label: "Photo Booth", href: "/services/photobooth" },
              { label: "360 Degree Booth" }
            ]} 
          />

          {/* Hero Section */}
          <section className="lg:grid lg:grid-cols-2 gap-12 items-center mb-20">
            <div className="relative aspect-square rounded-lg overflow-hidden shadow-2xl mb-8 lg:mb-0 order-1 lg:order-2">
              {!heroLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
              <img
                src="/images/services/360-booth-bg.webp"
                alt="360 degree video booth capturing slow motion footage at Dubai event"
                className={`w-full h-full object-cover transition-opacity duration-300 ${
                  heroLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                loading="eager"
              />
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
              
              {/* H1 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight" data-lovable-id="hero_title">
                  <span className="gradient-text">360 Degree</span> Video Booth Dubai
                </h1>
              </div>
            </div>
            
            <div className="order-2 lg:order-1">
              <h1 className="hidden lg:block text-4xl md:text-5xl lg:text-6xl font-heading mb-6" data-lovable-id="hero_title">
                Create Viral-Worthy Content with Our <span className="gradient-text">360 Degree Photo Booth</span>
              </h1>
              <p className="text-xl md:text-2xl text-muted-foreground mb-6" data-lovable-id="hero_subtitle">
                Stunning slow-motion videos from every angle for weddings, corporate events, and celebrations across Dubai & UAE
              </p>
              <p className="text-lg text-muted-foreground mb-8" data-lovable-id="hero_description">
                Step onto our cutting-edge 360° video booth platform and watch as our rotating camera captures you in breathtaking slow motion from every angle. Perfect for creating shareable, viral-worthy content that makes your event the talk of social media. Available for weddings, corporate events, product launches, and private celebrations throughout Dubai and the UAE.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#video-reels">
                    Watch Sample Videos
                  </a>
                </Button>
              </div>
            </div>
          </section>

          {/* Why Hire Section */}
          <section className="relative py-16 -mx-4 lg:-mx-8 px-4 lg:px-8 mb-20 overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img
                src="/images/services/photobooth-guests-bg.webp"
                alt="Guests creating viral 360 degree slow motion videos at event"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
            </div>

            <div className="container mx-auto relative z-10">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg" data-lovable-id="why_hire_title">
                  Why Hire a <span className="gradient-text drop-shadow-lg">360 Degree Booth</span>
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md" data-lovable-id="why_hire_description">
                  Create unforgettable viral content that your guests will share thousands of times on social media
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="backdrop-blur-md bg-card/95 hover-lift border-white/20">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center" data-lovable-id={`benefit_${index + 1}_icon`}>
                        {benefit.icon}
                      </div>
                      <h3 className="font-heading text-xl mb-2" data-lovable-id={`benefit_${index + 1}_title`}>
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground" data-lovable-id={`benefit_${index + 1}_description`}>
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-lovable-id="whats_included_title">
                What's <span className="gradient-text">Included</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-lovable-id="whats_included_description">
                Everything you need for an incredible 360° video experience at your event
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {inclusions.map((item, index) => (
                <Card key={index} className="backdrop-blur-sm bg-card hover-lift">
                  <CardContent className="p-6">
                    <div className="mb-4" data-lovable-id={`inclusion_${index + 1}_icon`}>
                      {item.icon}
                    </div>
                    <h3 className="font-heading text-xl mb-2" data-lovable-id={`inclusion_${index + 1}_title`}>
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground" data-lovable-id={`inclusion_${index + 1}_description`}>
                      {item.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Video Reels Section */}
          <section id="video-reels" className="mb-20">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-lovable-id="video_reels_title">
                See the <span className="gradient-text">360 Magic</span> in Action
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-lovable-id="video_reels_description">
                Watch how our 360° booth creates stunning slow-motion videos that guests love to share
              </p>
            </div>

            <div className="flex justify-center mb-12">
              <div className="max-w-md w-full space-y-4">
                <div className="aspect-[9/16] rounded-lg overflow-hidden bg-muted shadow-2xl">
                  <video
                    className="w-full h-full object-cover"
                    controls
                    playsInline
                    preload="metadata"
                    poster="/images/services/360-booth-bg.webp"
                  >
                    <source src="/videos/360-booth-demo.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-center text-muted-foreground" data-lovable-id="video_caption">
                  Watch our 360° booth creating stunning slow-motion videos at a Dubai event
                </p>
              </div>
            </div>

            <div className="text-center">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Book Your 360 Booth Now
                </Link>
              </Button>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="mb-20">
            <div className="text-center mb-12 space-y-4">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
                <HelpCircle size={18} className="text-primary" />
                <span className="text-sm font-medium text-primary">FAQ</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold" data-lovable-id="faq_title">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left" data-lovable-id={`faq_${index + 1}_question`}>
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground" data-lovable-id={`faq_${index + 1}_answer`}>
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </section>

          {/* Related Services */}
          <RelatedServices currentService="360-booth" />

          {/* Bottom CTA Section */}
          <section className="text-center py-16 px-4 rounded-lg bg-gradient-to-r from-primary/10 to-primary/5">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-lovable-id="bottom_cta_title">
              Ready to Create Viral-Worthy Content?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-lovable-id="bottom_cta_description">
              Book our 360° video booth today and give your guests an experience they'll share thousands of times
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book Your 360 Booth Now
              </Link>
            </Button>
          </section>
        </div>
      </main>
    </>
  );
};

export default Booth360;
