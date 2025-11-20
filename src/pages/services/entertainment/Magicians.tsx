import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Star, Users, Calendar, HelpCircle } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import RelatedServices from "@/components/RelatedServices";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import julietImg from "@/assets/magicians/juliet-arndt.webp";
import aronImg from "@/assets/magicians/aron-mentalist.webp";
import alistairImg from "@/assets/magicians/alistair.webp";
import heliosImg from "@/assets/magicians/helios.webp";
const Magicians = () => {
  return <>
      <Helmet>
        <title>Professional Magicians Dubai | Box Entertainment</title>
        <meta name="description" content="Book world-class magicians in Dubai. Close-up magic, stage illusions, mentalism for weddings, corporate events & parties. Experienced performers." />
        <link rel="canonical" href="https://boxentertainment.ae/services/entertainment/magicians" />
      </Helmet>

      <StructuredData data={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Professional Magicians in Dubai",
      description: "World-class magicians for events in Dubai - close-up magic, stage illusions, mentalism, and corporate entertainment",
      provider: {
        "@type": "Organization",
        name: "Box Entertainment"
      },
      areaServed: "Dubai, UAE",
      serviceType: ["Close-Up Magic", "Stage Illusions", "Mentalism", "Corporate Entertainment"]
    }} />

      <main className="min-h-screen pt-24 pb-16">
        <section className="container mx-auto px-4 lg:px-8 mb-16">
          <Breadcrumbs items={[{
          label: "Services",
          href: "/services"
        }, {
          label: "Entertainment",
          href: "/services/entertainment"
        }, {
          label: "Magicians"
        }]} />

          {/* Split Hero Layout */}
          <div className="lg:grid lg:grid-cols-2 gap-12 mt-12 items-center">
            {/* Left Side - Image */}
            <div className="relative overflow-hidden rounded-lg h-[500px] lg:h-[600px] mb-8 lg:mb-0">
              <img src="/images/services/magicians-hero-bg.webp" alt="Professional magician performing at luxury Dubai event" className="w-full h-full object-cover rounded-lg shadow-2xl" loading="eager" />
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
              
              {/* H1 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  <span data-lovable-id="hero_title_professional">Professional</span> <span data-lovable-id="hero_title_magicians" className="gradient-text">Magicians</span>
                </h1>
              </div>
            </div>

            {/* Right Side - Text Content (Left Aligned) */}
            <div className="text-left">
              <h1 className="hidden lg:block text-4xl md:text-5xl lg:text-6xl font-heading font-bold mb-6">
                <span data-lovable-id="hero_title_professional">Professional</span> <span data-lovable-id="hero_title_magicians" className="gradient-text">Magicians</span>
              </h1>
              <p data-lovable-id="hero_subtitle" className="text-xl text-muted-foreground mb-6">
                Bring wonder and amazement to your event with world-class magicians
              </p>
              <p data-lovable-id="hero_description" className="text-lg text-muted-foreground mb-8">
                From intimate close-up magic to grand stage illusions, our professional magicians create unforgettable moments that will leave your guests talking for weeks. Specializing in corporate events, weddings, and private celebrations across Dubai.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    <span data-lovable-id="cta_book_magician_hero">Book a Magician Now</span>
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#meet-our-magicians">
                    <span data-lovable-id="cta_meet_magicians">Meet Our Magicians</span>
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>


        {/* Meet Our Magicians Section */}
        <section id="meet-our-magicians" className="bg-muted/30 py-20 mb-16">
          <div className="container mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                <span data-lovable-id="section_magicians_title_meet">Meet Our</span> <span data-lovable-id="section_magicians_title_magicians" className="gradient-text">Magicians</span>
              </h2>
              <p data-lovable-id="section_magicians_desc" className="text-muted-foreground text-lg max-w-2xl mx-auto">
                World-class magicians who have performed at Dubai's most prestigious venues
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="overflow-hidden hover-lift group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={julietImg} alt="Juliet Arndt - Stage Illusionist" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 data-lovable-id="magicians_juliet_name" className="font-heading text-2xl font-bold mb-1">Juliet Arndt</h3>
                    <p data-lovable-id="magicians_juliet_role" className="text-sm text-gray-300 mb-2">Stage Illusionist</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p data-lovable-id="magicians_juliet_desc" className="text-muted-foreground text-sm mb-4">International award-winning illusionist performing grand-scale shows featuring spectacular illusions and audience participation.</p>
                  <div className="flex flex-wrap gap-2">
                    <span data-lovable-id="magicians_juliet_chip_stage_illusions" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Stage Illusions</span>
                    <span data-lovable-id="magicians_juliet_chip_grand_shows" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Grand Shows</span>
                    <span data-lovable-id="magicians_juliet_chip_levitation" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Levitation</span>
                    <span data-lovable-id="magicians_juliet_chip_escape_acts" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Escape Acts</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover-lift group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={aronImg} alt="Aron - Mentalist & Mind Reader" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 data-lovable-id="magicians_aron_name" className="font-heading text-2xl font-bold mb-1">Aron</h3>
                    <p data-lovable-id="magicians_aron_role" className="text-sm text-gray-300 mb-2">Mentalist & Mind Reader</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p data-lovable-id="magicians_aron_desc" className="text-muted-foreground text-sm mb-4">Master mentalist blending psychology and entertainment to create mind-bending experiences for corporate and private events.</p>
                  <div className="flex flex-wrap gap-2">
                    <span data-lovable-id="magicians_aron_chip_mentalism" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Mentalism</span>
                    <span data-lovable-id="magicians_aron_chip_mind_reading" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Mind Reading</span>
                    <span data-lovable-id="magicians_aron_chip_hypnosis" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Hypnosis</span>
                    <span data-lovable-id="magicians_aron_chip_corporate_shows" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Corporate Shows</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover-lift group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={alistairImg} alt="Alistair - Comedy Magician" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 data-lovable-id="magicians_alistair_name" className="font-heading text-2xl font-bold mb-1">Alistair</h3>
                    <p data-lovable-id="magicians_alistair_role" className="text-sm text-gray-300 mb-2">Comedy Magician</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p data-lovable-id="magicians_alistair_desc" className="text-muted-foreground text-sm mb-4">Combining magic with humor to create entertaining performances perfect for family events and celebrations.</p>
                  <div className="flex flex-wrap gap-2">
                    <span data-lovable-id="magicians_alistair_chip_comedy_magic" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Comedy Magic</span>
                    <span data-lovable-id="magicians_alistair_chip_family_shows" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Family Shows</span>
                    <span data-lovable-id="magicians_alistair_chip_interactive_acts" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Interactive Acts</span>
                    <span data-lovable-id="magicians_alistair_chip_weddings" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Weddings</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover-lift group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src={heliosImg} alt="Helios - Modern Magician" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 data-lovable-id="magicians_helios_name" className="font-heading text-2xl font-bold mb-1">Helios</h3>
                    <p data-lovable-id="magicians_helios_role" className="text-sm text-gray-300 mb-2">Modern Magician</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p data-lovable-id="magicians_helios_desc" className="text-muted-foreground text-sm mb-4">Contemporary magic performances incorporating technology and modern illusions for tech-savvy audiences.</p>
                  <div className="flex flex-wrap gap-2">
                    <span data-lovable-id="magicians_helios_chip_modern_magic" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Modern Magic</span>
                    <span data-lovable-id="magicians_helios_chip_tech_integration" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Tech Integration</span>
                    <span data-lovable-id="magicians_helios_chip_product_launches" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Product Launches</span>
                    <span data-lovable-id="magicians_helios_chip_innovation" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Innovation</span>
                  </div>
                </CardContent>
              </Card>

              <Card className="overflow-hidden hover-lift group">
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img src="/images/magicians/magic-phil.webp" alt="Magic Phil - Comedy & Family Magician" className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-110" loading="lazy" />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent"></div>
                  <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                    <h3 data-lovable-id="magicians_phil_name" className="font-heading text-2xl font-bold mb-1">Magic Phil</h3>
                    <p data-lovable-id="magicians_phil_role" className="text-sm text-gray-300 mb-2">Comedy & Family Magician</p>
                  </div>
                </div>
                <CardContent className="p-6">
                  <p data-lovable-id="magicians_phil_desc" className="text-muted-foreground text-sm mb-4">High-energy family entertainment combining magic, comedy, and audience participation. Perfect for children's parties, family events, and celebrations.</p>
                  <div className="flex flex-wrap gap-2">
                    <span data-lovable-id="magicians_phil_chip_childrens_magic" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Children's Magic</span>
                    <span data-lovable-id="magicians_phil_chip_comedy_acts" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Comedy Acts</span>
                    <span data-lovable-id="magicians_phil_chip_birthday_parties" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Birthday Parties</span>
                    <span data-lovable-id="magicians_phil_chip_family_shows" className="text-xs bg-[#D25C84]/10 text-[#D25C84] px-3 py-1 rounded-full">Family Shows</span>
                  </div>
                </CardContent>
              </Card>
            </div>

            <div className="text-center mt-12">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  <span data-lovable-id="cta_book_magician_bottom">Book Your Magician Now</span>
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 lg:px-8 mb-16 py-16">
          <StructuredData data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          "mainEntity": [{
            "@type": "Question",
            "name": "How much does it cost to hire a magician in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Magician pricing ranges from AED 3,000 for close-up magic at small events to AED 10,000+ for grand stage illusions. Pricing depends on performance type, duration, and event size. Contact us for a customized quote based on your specific requirements."
            }
          }, {
            "@type": "Question",
            "name": "What's the difference between close-up and stage magic?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Close-up magic involves intimate performances for small groups using cards, coins, and small objects, perfect for cocktail hours and mingling. Stage magic features large-scale illusions, elaborate props, and is designed for larger audiences with dramatic theatrical presentations."
            }
          }, {
            "@type": "Question",
            "name": "How far in advance should I book a magician?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We recommend booking at least 4-6 weeks in advance for private events and 2-3 months for corporate events or weddings. Popular dates during peak season (October-April) may require even earlier booking."
            }
          }, {
            "@type": "Question",
            "name": "Can magicians perform at outdoor events in Dubai?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, our magicians can perform at outdoor events. However, we recommend close-up magic for outdoor settings as stage illusions may be affected by weather conditions and lighting. Evening outdoor events work best for magical performances."
            }
          }, {
            "@type": "Question",
            "name": "Do you provide magicians for corporate events?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Absolutely! Our magicians specialize in corporate entertainment including product launches, team building events, gala dinners, and conferences. They can customize their performances to incorporate your brand messaging and corporate themes."
            }
          }, {
            "@type": "Question",
            "name": "Are the magic shows suitable for children?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Yes, we offer family-friendly magicians who specialize in entertaining children and mixed-age audiences. Our comedy magicians are particularly popular for birthday parties, school events, and family celebrations."
            }
          }]
        }} />
          
          <div className="text-center mb-12 space-y-4">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2">
              <HelpCircle size={18} className="text-primary" />
              <span data-lovable-id="faq_pill" className="text-sm font-medium text-primary">FAQ</span>
            </div>
            <h2 data-lovable-id="faq_title" className="font-heading text-3xl md:text-4xl font-bold">
              Frequently Asked Questions About Magicians
            </h2>
          </div>

          <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto">
            <AccordionItem value="item-0">
              <AccordionTrigger data-lovable-id="faq_q1" className="text-left">
                How much does it cost to hire a magician in Dubai?
              </AccordionTrigger>
              <AccordionContent data-lovable-id="faq_a1" className="text-muted-foreground">
                Magician pricing ranges from AED 3,000 for close-up magic at small events to AED 10,000+ for grand stage illusions. Pricing depends on performance type, duration, and event size. Contact us for a customized quote based on your specific requirements.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-1">
              <AccordionTrigger data-lovable-id="faq_q2" className="text-left">
                What's the difference between close-up and stage magic?
              </AccordionTrigger>
              <AccordionContent data-lovable-id="faq_a2" className="text-muted-foreground">
                Close-up magic involves intimate performances for small groups using cards, coins, and small objects, perfect for cocktail hours and mingling. Stage magic features large-scale illusions, elaborate props, and is designed for larger audiences with dramatic theatrical presentations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2">
              <AccordionTrigger data-lovable-id="faq_q3" className="text-left">
                How far in advance should I book a magician?
              </AccordionTrigger>
              <AccordionContent data-lovable-id="faq_a3" className="text-muted-foreground">
                We recommend booking at least 4-6 weeks in advance for private events and 2-3 months for corporate events or weddings. Popular dates during peak season (October-April) may require even earlier booking.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3">
              <AccordionTrigger data-lovable-id="faq_q4" className="text-left">
                Can magicians perform at outdoor events in Dubai?
              </AccordionTrigger>
              <AccordionContent data-lovable-id="faq_a4" className="text-muted-foreground">
                Yes, our magicians can perform at outdoor events. However, we recommend close-up magic for outdoor settings as stage illusions may be affected by weather conditions and lighting. Evening outdoor events work best for magical performances.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-4">
              <AccordionTrigger data-lovable-id="faq_q5" className="text-left">
                Do you provide magicians for corporate events?
              </AccordionTrigger>
              <AccordionContent data-lovable-id="faq_a5" className="text-muted-foreground">
                Absolutely! Our magicians specialize in corporate entertainment including product launches, team building events, gala dinners, and conferences. They can customize their performances to incorporate your brand messaging and corporate themes.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-5">
              <AccordionTrigger data-lovable-id="faq_q6" className="text-left">
                Are the magic shows suitable for children?
              </AccordionTrigger>
              <AccordionContent data-lovable-id="faq_a6" className="text-muted-foreground">
                Yes, we offer family-friendly magicians who specialize in entertaining children and mixed-age audiences. Our comedy magicians are particularly popular for birthday parties, school events, and family celebrations.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </section>

        {/* Related Services */}
        <div className="container mx-auto px-4 lg:px-8">
          <RelatedServices currentService="magicians" />
        </div>
      </main>
    </>;
};
export default Magicians;