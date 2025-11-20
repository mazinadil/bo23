import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { HelpCircle } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const Comedians = () => {
  return (
    <>
      <Helmet>
        <title>Professional Comedians Dubai | Box Entertainment</title>
        <meta name="description" content="Book award-winning comedians in Dubai. Stand-up comedy, MC hosting for weddings, parties & corporate events. Professional entertainment guaranteed." />
        <link rel="canonical" href="https://boxentertainment.ae/services/entertainment/comedians" />
      </Helmet>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Professional Comedians in Dubai",
          description: "Professional comedians for events in Dubai - stand-up comedy, corporate MC hosting, and event entertainment",
          provider: {
            "@type": "Organization",
            name: "Box Entertainment",
          },
          areaServed: "Dubai, UAE",
          serviceType: ["Stand-Up Comedy", "MC Hosting", "Corporate Entertainment", "Event Hosting"]
        }}
      />

      <main className="min-h-screen pt-24 pb-16">
        <section className="container mx-auto px-4 lg:px-8 mb-16">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/services" },
              { label: "Entertainment", href: "/services/entertainment" },
              { label: "Comedians" }
            ]} 
          />

          {/* Split Hero Layout */}
          <div className="lg:grid lg:grid-cols-2 gap-12 mt-12 items-center">
            {/* Left Side - Image */}
            <div className="relative overflow-hidden rounded-lg h-[500px] lg:h-[600px] mb-8 lg:mb-0">
              <img 
                src="/images/services/comedians-bg.webp" 
                alt="Professional comedian performing at luxury Dubai event" 
                className="w-full h-full object-cover rounded-lg shadow-2xl" 
                loading="eager" 
              />
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
              
              {/* H1 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  <span data-lovable-id="hero_title_professional">Professional</span> <span data-lovable-id="hero_title_comedians" className="gradient-text">Comedians</span>
                </h1>
              </div>
            </div>

            {/* Right Side - Text Content (Left Aligned) */}
            <div className="text-left">
              <h1 className="hidden lg:block text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span data-lovable-id="hero_title_professional">Professional</span> <span data-lovable-id="hero_title_comedians" className="gradient-text">Comedians</span>
              </h1>
              <p data-lovable-id="hero_subtitle" className="text-xl text-muted-foreground mb-6">
                Bring laughter and unforgettable entertainment to your Dubai event
              </p>
              <p data-lovable-id="hero_description" className="text-lg text-muted-foreground mb-8">
                From hilarious stand-up comedy to smooth MC hosting, our professional comedians deliver world-class entertainment that keeps your guests engaged and laughing. Specializing in corporate events, weddings, and private celebrations across Dubai.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    <span data-lovable-id="cta_book_comedian_hero">Book a Comedian Now</span>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#meet-our-comedians">
                    <span data-lovable-id="cta_meet_comedians">Meet Our Comedians</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Meet Our Comedians Section */}
        <section id="meet-our-comedians" className="bg-muted/30 py-20 mb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                <span data-lovable-id="section_comedians_title_meet">Meet Our</span> <span data-lovable-id="section_comedians_title_comedians" className="gradient-text">Comedians</span>
              </h2>
              <p data-lovable-id="section_comedians_desc" className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Dubai's finest comedians bringing laughter to events across the UAE
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover-lift group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src="/images/comedians/darryl-rees.jpg" 
                    alt="Darryl Rees - MC, Host & Comedian" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 data-lovable-id="comedians_darryl_name" className="font-heading text-2xl font-bold mb-1">Darryl Rees</h3>
                    <p data-lovable-id="comedians_darryl_role" className="text-sm text-gray-300 mb-2">MC, Host & Comedian</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p data-lovable-id="comedians_darryl_desc" className="text-muted-foreground text-sm mb-4">Professional MC and comedian who has hosted major events including Abu Dhabi F1 after-race concerts. With expertise in corporate hosting and stand-up comedy, Darryl brings energy and humor to events across industries.</p>
                  <div className="flex flex-wrap gap-2">
                    <span data-lovable-id="comedians_darryl_chip_standup" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Stand-Up Comedy</span>
                    <span data-lovable-id="comedians_darryl_chip_hosting" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Event Hosting</span>
                    <span data-lovable-id="comedians_darryl_chip_corporate" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Corporate MC</span>
                    <span data-lovable-id="comedians_darryl_chip_live" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Live Entertainment</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover-lift group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src="/images/comedians/imah.webp" 
                    alt="Imah Dumagay - Stand-Up Comedian" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 data-lovable-id="comedians_imah_name" className="font-heading text-2xl font-bold mb-1">Imah Dumagay</h3>
                    <p data-lovable-id="comedians_imah_role" className="text-sm text-gray-300 mb-2">Stand-Up Comedian</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p data-lovable-id="comedians_imah_desc" className="text-muted-foreground text-sm mb-4">Award-winning stand-up comedian with over 5 years of experience. Known for her sharp wit and relatable humor, Imah has become a fixture in Dubai's comedy scene, performing at top venues and making audiences laugh without boundaries.</p>
                  <div className="flex flex-wrap gap-2">
                    <span data-lovable-id="comedians_imah_chip_standup" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Stand-Up</span>
                    <span data-lovable-id="comedians_imah_chip_corporate" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Corporate Shows</span>
                    <span data-lovable-id="comedians_imah_chip_private" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Private Events</span>
                    <span data-lovable-id="comedians_imah_chip_production" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Comedy Production</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover-lift group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img 
                    src="/images/comedians/yash.webp" 
                    alt="Yash Bhardwaj - Stand-Up Comedian & Producer" 
                    className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" 
                    loading="lazy" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 data-lovable-id="comedians_yash_name" className="font-heading text-2xl font-bold mb-1">Yash Bhardwaj</h3>
                    <p data-lovable-id="comedians_yash_role" className="text-sm text-gray-300 mb-2">Stand-Up Comedian & Producer</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p data-lovable-id="comedians_yash_desc" className="text-muted-foreground text-sm mb-4">One of UAE's premier stand-up comedians since 2017. Has shared the stage with renowned comedians worldwide and created content for Star Sports/Disney Hotstar. Yash brings fresh, contemporary comedy to audiences across the region.</p>
                  <div className="flex flex-wrap gap-2">
                    <span data-lovable-id="comedians_yash_chip_standup" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Stand-Up Comedy</span>
                    <span data-lovable-id="comedians_yash_chip_production" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Comedy Production</span>
                    <span data-lovable-id="comedians_yash_chip_mc" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">MC Services</span>
                    <span data-lovable-id="comedians_yash_chip_corporate" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Corporate Events</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  <span data-lovable-id="cta_book_comedian_bottom">Book Your Comedian Now</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 lg:px-8 mb-16 py-16">
          <StructuredData
            data={{
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How much does it cost to hire a comedian in Dubai?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Comedian pricing ranges from AED 2,500 for stand-up sets at small events to AED 8,000+ for full MC hosting at large corporate events. Pricing depends on performance type, duration, and event size. Contact us for a customized quote."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's the difference between stand-up comedy and MC hosting?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Stand-up comedy is a dedicated performance slot focused on entertaining with jokes and stories. MC hosting involves keeping your event flowing smoothly, introducing speakers, and adding humor throughout the event to maintain energy and engagement."
                  }
                },
                {
                  "@type": "Question",
                  "name": "How far in advance should I book a comedian?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We recommend booking at least 3-4 weeks in advance for private events and 2-3 months for corporate events. Popular comedians during peak season (October-April) may require earlier booking."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can comedians perform at corporate events?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Absolutely! Our comedians specialize in corporate entertainment with clean, professional material suitable for business audiences. They can customize their content to align with your company culture and event theme."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Are the comedy shows family-friendly?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We offer both family-friendly comedians and adult-oriented performers. Let us know your audience demographics, and we'll recommend the perfect comedian whose style matches your event's tone."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide bilingual comedians?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we have comedians who perform in multiple languages including English, Arabic, Hindi, and Filipino. Perfect for Dubai's diverse multicultural events and audiences."
                  }
                }
              ]
            }}
          />
          
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
              <HelpCircle size={18} className="text-primary" />
              <span className="text-sm font-medium text-primary">FAQ</span>
            </div>
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              <span data-lovable-id="faq_title">Frequently Asked Questions</span>
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-1">
              <AccordionTrigger className="text-left">
                <span data-lovable-id="faq_q1">How much does it cost to hire a comedian in Dubai?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <span data-lovable-id="faq_a1">Comedian pricing ranges from AED 2,500 for stand-up sets at small events to AED 8,000+ for full MC hosting at large corporate events. Pricing depends on performance type, duration, and event size. Contact us for a customized quote.</span>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger className="text-left">
                <span data-lovable-id="faq_q2">What's the difference between stand-up comedy and MC hosting?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <span data-lovable-id="faq_a2">Stand-up comedy is a dedicated performance slot focused on entertaining with jokes and stories. MC hosting involves keeping your event flowing smoothly, introducing speakers, and adding humor throughout the event to maintain energy and engagement.</span>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger className="text-left">
                <span data-lovable-id="faq_q3">How far in advance should I book a comedian?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <span data-lovable-id="faq_a3">We recommend booking at least 3-4 weeks in advance for private events and 2-3 months for corporate events. Popular comedians during peak season (October-April) may require earlier booking.</span>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger className="text-left">
                <span data-lovable-id="faq_q4">Can comedians perform at corporate events?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <span data-lovable-id="faq_a4">Absolutely! Our comedians specialize in corporate entertainment with clean, professional material suitable for business audiences. They can customize their content to align with your company culture and event theme.</span>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger className="text-left">
                <span data-lovable-id="faq_q5">Are the comedy shows family-friendly?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <span data-lovable-id="faq_a5">We offer both family-friendly comedians and adult-oriented performers. Let us know your audience demographics, and we'll recommend the perfect comedian whose style matches your event's tone.</span>
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-6">
              <AccordionTrigger className="text-left">
                <span data-lovable-id="faq_q6">Do you provide bilingual comedians?</span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground">
                <span data-lovable-id="faq_a6">Yes, we have comedians who perform in multiple languages including English, Arabic, Hindi, and Filipino. Perfect for Dubai's diverse multicultural events and audiences.</span>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Related Services */}
        <RelatedServices currentService="comedians" />
      </main>
    </>
  );
};

export default Comedians;
