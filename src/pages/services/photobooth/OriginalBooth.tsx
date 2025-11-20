import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { 
  Camera, Users, Sparkles, Share2, Printer, Layout, 
  PartyPopper, UserCheck, Zap, Smartphone, Image, Monitor, HelpCircle 
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { useImageLoader } from "@/hooks/useImageLoader";

const OriginalBooth = () => {
  const heroImageLoaded = useImageLoader("/images/services/original-booth-bg.webp");

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Original Photo Booth Hire in Dubai and UAE",
    description: "Classic photo booth rental with instant prints, digital sharing, custom branding, and unlimited photo sessions for weddings, corporate events, and parties",
    serviceType: ["Photo Booth Rental", "Event Photography", "Wedding Photo Booth", "Corporate Photo Booth"],
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
    image: "https://boxentertainment.ae/images/services/photobooth-guests-bg.webp"
  };

  const videoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    name: "Original Photo Booth in Action at Dubai Event",
    description: "Watch real guests enjoying our classic photo booth with instant prints, props, and digital sharing at a Dubai event. See the fun and excitement our original booth brings to weddings and parties.",
    thumbnailUrl: "https://boxentertainment.ae/images/services/original-booth-bg.webp",
    uploadDate: "2023-06-22",
    contentUrl: "https://boxentertainment.ae/videos/original-booth-demo.mp4",
    embedUrl: "https://boxentertainment.ae/services/photobooth/original-booth#video-reels"
  };

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What size area do you need for the booth?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Our original photo booth requires a space of approximately 3m x 3m (10ft x 10ft) including the queue area. We can adapt to slightly smaller spaces and work with both indoor and outdoor venues across Dubai and the UAE. Setup is flexible for most event layouts."
        }
      },
      {
        "@type": "Question",
        name: "How many prints can guests have?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Unlimited! There's no limit on photo sessions or prints. Guests can return to the booth as many times as they like throughout your event. Each session produces two identical photo strips – one to keep and one to share."
        }
      },
      {
        "@type": "Question",
        name: "Can branding or custom frames be added?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Absolutely! We create custom photo strip designs featuring your company logo, wedding names, event hashtag, dates, and custom graphics. Perfect for corporate branding and personalized wedding keepsakes. Design mockups provided before your event."
        }
      },
      {
        "@type": "Question",
        name: "Is the booth suitable for outdoor events?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, our photo booth works perfectly at outdoor venues including beach weddings, rooftop parties, garden celebrations, and poolside events. We provide weather protection for equipment and ensure optimal lighting regardless of outdoor conditions."
        }
      },
      {
        "@type": "Question",
        name: "How far in advance should I book?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "We recommend booking at least 2-3 weeks in advance for private parties and 6-8 weeks for weddings and large corporate events. Peak season (October-April) and weekend dates require earlier booking to guarantee availability."
        }
      },
      {
        "@type": "Question",
        name: "What happens to the photos after the event?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "All photos are uploaded to a private online gallery accessible for 90 days. You receive a download link to save all images, and guests can access their photos via SMS/email sharing. High-resolution digital files are available upon request."
        }
      }
    ]
  };

  const benefits = [
    {
      icon: <Users className="h-12 w-12 text-[#D25C84]" />,
      title: "Engage Your Guests",
      description: "Break the ice and get everyone interacting. Photo booths create natural social moments and keep guests entertained throughout your event."
    },
    {
      icon: <Camera className="h-12 w-12 text-[#D25C84]" />,
      title: "Instant Keepsakes",
      description: "Guests take home high-quality printed photo strips within seconds. These tangible memories last forever and keep your event top-of-mind."
    },
    {
      icon: <Sparkles className="h-12 w-12 text-[#D25C84]" />,
      title: "Custom Branding",
      description: "Add your company logo, wedding hashtag, or custom frame designs. Perfect for corporate branding and personalized wedding mementos."
    },
    {
      icon: <Share2 className="h-12 w-12 text-[#D25C84]" />,
      title: "Viral Social Sharing",
      description: "Digital copies delivered via SMS, email, or QR code for instant social media posting. Your event becomes viral-worthy content."
    }
  ];

  const inclusions = [
    {
      icon: <Layout className="h-12 w-12 text-[#D25C84]" />,
      title: "Open-Air Booth Design",
      description: "Modern open-air setup allowing groups of all sizes to participate. No cramped enclosed spaces – perfect for large parties and weddings."
    },
    {
      icon: <Printer className="h-12 w-12 text-[#D25C84]" />,
      title: "Unlimited Photo Prints",
      description: "High-quality 2×6 inch photo strips printed on premium paper within 10 seconds. No limits on how many times guests can pose and print."
    },
    {
      icon: <PartyPopper className="h-12 w-12 text-[#D25C84]" />,
      title: "Fun Props Collection",
      description: "Over 50 premium props including hats, glasses, signs, and themed accessories to spark creativity and laughter."
    },
    {
      icon: <UserCheck className="h-12 w-12 text-[#D25C84]" />,
      title: "Professional Booth Operator",
      description: "Friendly, experienced attendant manages the booth, assists guests, and ensures everything runs smoothly throughout your event."
    },
    {
      icon: <Zap className="h-12 w-12 text-[#D25C84]" />,
      title: "Quick Setup",
      description: "Professional installation and removal by our team. Setup takes just 30-45 minutes, and we handle all technical aspects."
    },
    {
      icon: <Smartphone className="h-12 w-12 text-[#D25C84]" />,
      title: "Digital Sharing",
      description: "Guests receive digital copies via SMS or email instantly. QR code access for social media sharing makes your event go viral."
    },
    {
      icon: <Image className="h-12 w-12 text-[#D25C84]" />,
      title: "Custom Templates",
      description: "Personalized photo strip designs with your event name, date, logo, hashtag, or custom graphics that match your theme."
    },
    {
      icon: <Monitor className="h-12 w-12 text-[#D25C84]" />,
      title: "Online Gallery",
      description: "All photos uploaded to a private online gallery. Access your event photos anytime and share with guests after the celebration."
    }
  ];

  const faqs = [
    {
      question: "What size area do you need for the booth?",
      answer: "Our original photo booth requires a space of approximately 3m x 3m (10ft x 10ft) including the queue area. We can adapt to slightly smaller spaces and work with both indoor and outdoor venues across Dubai and the UAE. Setup is flexible for most event layouts."
    },
    {
      question: "How many prints can guests have?",
      answer: "Unlimited! There's no limit on photo sessions or prints. Guests can return to the booth as many times as they like throughout your event. Each session produces two identical photo strips – one to keep and one to share."
    },
    {
      question: "Can branding or custom frames be added?",
      answer: "Absolutely! We create custom photo strip designs featuring your company logo, wedding names, event hashtag, dates, and custom graphics. Perfect for corporate branding and personalized wedding keepsakes. Design mockups provided before your event."
    },
    {
      question: "Is the booth suitable for outdoor events?",
      answer: "Yes, our photo booth works perfectly at outdoor venues including beach weddings, rooftop parties, garden celebrations, and poolside events. We provide weather protection for equipment and ensure optimal lighting regardless of outdoor conditions."
    },
    {
      question: "How far in advance should I book?",
      answer: "We recommend booking at least 2-3 weeks in advance for private parties and 6-8 weeks for weddings and large corporate events. Peak season (October-April) and weekend dates require earlier booking to guarantee availability."
    },
    {
      question: "What happens to the photos after the event?",
      answer: "All photos are uploaded to a private online gallery accessible for 90 days. You receive a download link to save all images, and guests can access their photos via SMS/email sharing. High-resolution digital files are available upon request."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Original Photo Booth Dubai | Instant Prints & Props</title>
        <meta name="description" content="Book classic photo booth in Dubai. Instant prints, digital sharing, fun props, unlimited sessions. Perfect for weddings, corporate events & parties." />
        <link rel="canonical" href="https://boxentertainment.ae/services/photobooth/original-booth" />
        
        <meta property="og:title" content="Original Photo Booth Hire Dubai & UAE | Box Entertainment" />
        <meta property="og:description" content="Classic photo booth with instant prints, digital sharing, and unlimited fun for your Dubai event" />
        <meta property="og:image" content="https://boxentertainment.ae/images/services/original-booth-bg.webp" />
        <meta property="og:url" content="https://boxentertainment.ae/services/photobooth/original-booth" />
        
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Original Photo Booth Hire Dubai & UAE" />
        <meta name="twitter:description" content="Classic photo booth with instant prints for weddings, corporate events & parties" />
        <meta name="twitter:image" content="https://boxentertainment.ae/images/services/original-booth-bg.webp" />
        
        <link 
          rel="preload" 
          as="image" 
          href="/images/services/photobooth-guests-bg.webp"
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
              { label: "Original Photo Booth" }
            ]} 
          />

          {/* Hero Section */}
          <section className="lg:grid lg:grid-cols-2 gap-12 items-center mb-20">
            {/* Hero Image */}
            <div className="relative h-[500px] lg:h-[600px] rounded-lg overflow-hidden shadow-2xl mb-8 lg:mb-0">
              {heroImageLoaded && (
                <img
                  src="/images/services/original-booth-bg.webp"
                  alt="Original photo booth with instant prints at Dubai wedding event"
                  className="absolute inset-0 w-full h-full object-cover"
                  loading="eager"
                />
              )}
              {!heroImageLoaded && (
                <div className="absolute inset-0 bg-muted animate-pulse" />
              )}
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
              
              {/* H1 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight" data-lovable-id="hero_title">
                  Original <span className="gradient-text">Photo Booth</span> Dubai
                </h1>
              </div>
            </div>

            {/* Hero Content */}
            <div className="space-y-6">
              <h1 className="hidden lg:block text-5xl md:text-6xl font-heading font-bold leading-tight" data-lovable-id="hero_title">
                Turn Moments into <span className="gradient-text">Memories</span> with Our Original Photo Booth
              </h1>
              <p className="text-2xl text-muted-foreground" data-lovable-id="hero_subtitle">
                Instant prints, digital sharing, and tons of fun for weddings, corporate events and parties across the UAE
              </p>
              <p className="text-lg text-muted-foreground" data-lovable-id="hero_description">
                Our classic original photo booth brings timeless entertainment to your celebration. Guests receive high-quality instant prints they can cherish forever, while digital sharing ensures your event goes viral on social media. Perfect for weddings, corporate events, birthday parties, and any celebration in Dubai and across the UAE.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" asChild data-lovable-id="cta_book_now_hero">
                  <Link to="/contact">
                    Book Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild data-lovable-id="cta_view_gallery">
                  <a href="#video-reels">
                    View Sample Gallery
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
                alt="Happy guests enjoying photo booth with props at party"
                className="w-full h-full object-cover"
                loading="lazy"
              />
              {/* Dark overlay for text readability */}
              <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/70" />
            </div>

            <div className="container mx-auto relative z-10">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white drop-shadow-lg" data-lovable-id="why_hire_title">
                  Why Hire an <span className="gradient-text drop-shadow-lg">Original Photo Booth</span>
                </h2>
                <p className="text-xl text-white/90 max-w-2xl mx-auto drop-shadow-md" data-lovable-id="why_hire_description">
                  Transform your event into an unforgettable experience with interactive entertainment that your guests will love
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {benefits.map((benefit, index) => (
                  <Card key={index} className="backdrop-blur-md bg-card/95 hover-lift border-white/20">
                    <CardContent className="p-6 text-center">
                      <div className="mb-4 flex justify-center" data-lovable-id={`benefit_${index + 1}_icon`}>
                        {benefit.icon}
                      </div>
                      <h3 className="font-heading text-xl font-semibold mb-3" data-lovable-id={`benefit_${index + 1}_title`}>
                        {benefit.title}
                      </h3>
                      <p className="text-muted-foreground" data-lovable-id={`benefit_${index + 1}_desc`}>
                        {benefit.description}
                      </p>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </section>

          {/* What's Included Section */}
          <section className="py-16">
            <div className="text-center mb-12">
              <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-lovable-id="whats_included_title">
                What's <span className="gradient-text">Included</span>
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-lovable-id="whats_included_subtitle">
                Everything you need for a seamless photo booth experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 mb-12">
              {inclusions.map((inclusion, index) => (
                <Card key={index} className="backdrop-blur-sm bg-card hover-lift">
                  <CardContent className="p-6 flex gap-4">
                    <div className="flex-shrink-0" data-lovable-id={`inclusion_${index + 1}_icon`}>
                      {inclusion.icon}
                    </div>
                    <div>
                      <h3 className="font-heading text-xl font-semibold mb-2" data-lovable-id={`inclusion_${index + 1}_title`}>
                        {inclusion.title}
                      </h3>
                      <p className="text-muted-foreground" data-lovable-id={`inclusion_${index + 1}_desc`}>
                        {inclusion.description}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          {/* Video Reels Section */}
          <section id="video-reels" className="py-20 bg-muted/30 -mx-4 lg:-mx-8 px-4 lg:px-8 mb-20">
            <div className="container mx-auto">
              <div className="text-center mb-12">
                <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4" data-lovable-id="video_section_title">
                  See It In <span className="gradient-text">Action</span>
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto" data-lovable-id="video_section_subtitle">
                  Watch real guests having fun with our original photo booth at Dubai events
                </p>
              </div>

              <div className="flex justify-center mb-12">
                <div className="max-w-4xl w-full space-y-4">
                  <div className="aspect-video rounded-lg overflow-hidden bg-muted shadow-2xl">
                    <video
                      className="w-full h-full object-cover"
                      controls
                      playsInline
                      preload="metadata"
                      poster="/images/services/original-booth-bg.webp"
                    >
                      <source src="/videos/original-booth-demo.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  </div>
                  <p className="text-center text-muted-foreground" data-lovable-id="video_caption">
                    Watch real guests having fun with instant prints at our original photo booth
                  </p>
                </div>
              </div>

              <div className="text-center">
                <Button variant="hero" size="lg" asChild data-lovable-id="cta_book_after_video">
                  <Link to="/contact">
                    Book Your Photo Booth Now
                  </Link>
                </Button>
              </div>
            </div>
          </section>

          {/* FAQ Section */}
          <section className="py-16 max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
                <HelpCircle size={18} className="text-[#D25C84]" />
                <span className="text-sm font-medium text-primary" data-lovable-id="faq_badge">FAQ</span>
              </div>
              <h2 className="font-heading text-3xl md:text-4xl font-bold" data-lovable-id="faq_title">
                Frequently Asked Questions
              </h2>
            </div>

            <Accordion type="single" collapsible className="w-full">
              {faqs.map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`}>
                  <AccordionTrigger className="text-left font-semibold" data-lovable-id={`faq_${index + 1}_question`}>
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
          <RelatedServices currentService="original-booth" />

          {/* Bottom CTA */}
          <section className="text-center py-16">
            <h3 className="text-3xl font-heading font-bold mb-4" data-lovable-id="bottom_cta_heading">
              Ready to Make Your Event Unforgettable?
            </h3>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto" data-lovable-id="bottom_cta_subtext">
              Book our original photo booth today and give your guests memories they'll treasure forever
            </p>
            <Button variant="hero" size="lg" asChild data-lovable-id="cta_book_final">
              <Link to="/contact">
                Book Your Photo Booth Now
              </Link>
            </Button>
          </section>
        </div>
      </main>
    </>
  );
};

export default OriginalBooth;
