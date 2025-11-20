import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Sparkles, Zap, Users, Star, Check, Heart, 
  Calendar, MapPin, Settings, Music, 
  Lightbulb, Monitor, Video
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";

const faqQuestions = [
  {
    question: "What factors affect LED dance floor rental costs?",
    answer: "LED dance floor rental costs vary based on several factors including: the size of the dance floor (from 12ft x 12ft up to 30ft x 30ft), the complexity of lighting effects and color programming required, the event duration and location within Dubai/UAE, whether custom shapes or configurations are needed, the number of LED panels required, and any additional services like extended technical support or special installation requirements. We provide custom quotes based on your specific event needs and venue specifications."
  },
  {
    question: "What sizes are available for LED dance floors?",
    answer: "We offer LED dance floors in multiple sizes: 12ft x 12ft (ideal for 50-75 guests), 16ft x 16ft (100-150 guests), 20ft x 20ft (200+ guests), and custom sizes up to 30ft x 30ft for large galas and festivals. Our modular panel system (typically 2ft x 2ft or 3ft x 3ft panels) allows us to create any size or shape including rectangles, squares, L-shapes, T-shapes, or custom configurations to fit your venue perfectly. Each panel interlocks securely for seamless appearance."
  },
  {
    question: "Can you customize the LED light patterns and colors?",
    answer: "Absolutely! Our LED dance floors offer full RGB color customization with millions of color combinations. We provide multiple pre-programmed patterns including: static single colors, smooth color fading/transitions, sound-reactive modes (lights pulse with music), chase effects, sparkle/twinkle patterns, and custom animations. We can program specific colors to match your event theme, corporate branding, or wedding color palette. Control options include DMX control, sound activation, or manual operation."
  },
  {
    question: "Are LED dance floors safe for outdoor use?",
    answer: "Yes! Our LED dance floors are IP65 rated, making them weather-resistant and suitable for outdoor use. They can withstand light rain, humidity, and outdoor conditions. For fully exposed outdoor locations, we recommend having a tent, canopy, or marquee cover for optimal protection and guest comfort. The floors feature anti-slip surfaces with textured finish for safety, reinforced panels rated for high foot traffic, and weatherproof electrical connections. We've successfully installed at beach weddings, rooftop terraces, garden venues, and poolside celebrations across Dubai."
  },
  {
    question: "Do you offer traditional wooden dance floors as well?",
    answer: "Yes! We offer premium traditional dance floors with beautiful hardwood finish for clients preferring classic elegance. Traditional floors are perfect for formal weddings, ballroom events, and upscale corporate galas. Available in multiple wood finishes including light oak, dark walnut, and natural maple. Traditional floors feature non-slip surfaces, professional leveling systems, and elegant finishing edging. They work beautifully in indoor venues and covered outdoor spaces. Can be combined with uplighting for stunning visual effect."
  },
  {
    question: "How long does dance floor installation take?",
    answer: "Installation typically takes 1-2 hours depending on the size and complexity. For a standard 16ft x 16ft floor, we need approximately 90 minutes. We arrive 3-4 hours before your event starts to allow time for complete setup, precise leveling, electrical connections (for LED floors), thorough testing of all lighting effects, and any last-minute adjustments. Our team conducts final safety checks before guests arrive. Breakdown after your event takes approximately 45-60 minutes and is scheduled for a time that doesn't disrupt your event flow."
  },
  {
    question: "Can dance floors be installed on uneven surfaces?",
    answer: "Yes, we can install on slightly uneven surfaces! Our professional installation team uses advanced leveling systems and subflooring when needed to create a perfectly flat, safe dancing surface even on uneven ground, grass, sand, or outdoor terrain. We conduct site visits beforehand to assess the surface and determine if subflooring or leveling platforms are required. For significantly uneven surfaces (beach venues, sloped gardens), we may need to construct a raised platform base, which is assessed during the site visit."
  },
  {
    question: "What's included in the dance floor rental?",
    answer: "The rental includes: complete LED or traditional dance floor system (your chosen size), professional delivery to any Dubai/UAE location, expert installation with precision leveling, safety edging/trim around perimeter, dedicated power supply and DMX control systems (for LED floors), color programming to match your theme (LED floors), on-site technical support during your event, and complete post-event breakdown and removal. We also provide emergency backup panels and on-call technician support. Setup and breakdown services are always included."
  },
  {
    question: "Can you combine LED floors with other lighting effects?",
    answer: "Absolutely! LED dance floors pair beautifully with other lighting services we offer. Popular combinations include: LED dance floor + uplighting (illuminate walls/columns to match floor colors), LED floor + festoon lights overhead (romantic canopy effect), LED floor + spotlights/moving heads (create full nightclub atmosphere), LED floor + gobo projection (project patterns or logos). We offer package discounts when booking multiple lighting services together. Our team ensures all systems are synchronized and controlled cohesively."
  },
  {
    question: "How far in advance should I book dance floor rental?",
    answer: "We recommend booking 3-4 weeks in advance, especially during Dubai's peak wedding season (October-April) and during holiday periods when demand is highest. This allows time for site visits, custom size planning, color programming, and securing your preferred date. However, we maintain backup equipment and can often accommodate last-minute bookings (1-2 weeks notice) based on availability. For large corporate events, galas, or custom installations requiring extensive planning, we suggest 6-8 weeks advance booking for optimal preparation."
  }
];

const schema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "LED Dance Floor Rental Dubai",
  "description": "Professional LED and traditional dance floor rental services in Dubai featuring customizable RGB lighting, custom sizes, and professional installation for weddings, corporate events, and celebrations.",
  "provider": {
    "@type": "Organization",
    "name": "Box Entertainment",
    "url": "https://boxentertainment.ae"
  },
  "areaServed": {
    "@type": "City",
    "name": "Dubai"
  }
};

const DanceFloors = () => {
  return (
    <div className="min-h-screen">
      <Helmet>
        <title>LED Dance Floor Rental Dubai | Light-Up & Traditional</title>
        <meta name="description" content="LED & traditional dance floor rental in Dubai. Custom RGB lighting, sizes to 30ft. Weddings, corporate events & parties. Professional setup." />
        <meta name="keywords" content="LED dance floor rental Dubai, light up dance floor Dubai, wedding dance floor hire, RGB dance floor, traditional dance floor Dubai, event flooring rental" />
        <link rel="canonical" href="https://boxentertainment.ae/services/dance-floors" />
      </Helmet>

      <StructuredData data={schema} />

      {/* Hero Section with Breadcrumbs */}
      <section className="relative min-h-[500px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="/images/services/dance-floors-hero.webp"
            alt="Stunning LED dance floor with colorful RGB lighting at luxury Dubai wedding venue with chandeliers and elegant decor"
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
                { label: "Dance Floors" }
              ]} 
            />
          </div>
          
          <Sparkles className="w-16 h-16 mx-auto mb-6 text-white" />
          
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
            LED Dance Floors <span className="text-[#D25C84]">Dubai</span>
          </h1>
          
          <p className="text-xl text-white/90 mb-6 max-w-3xl mx-auto">
            Transform your event with stunning LED dance floors featuring customizable RGB lighting and traditional wooden floors. Create unforgettable experiences for weddings, corporate galas, and celebrations across Dubai.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book Now
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="bg-white/10 text-white border-white/20 hover:bg-white/20" asChild>
              <a href="#video-gallery">
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
              src="/images/services/led-dancefloor-bg.webp"
              alt="LED dance floors at various Dubai events including weddings, corporate galas, and celebrations"
              className="w-full h-full object-cover rounded-lg shadow-2xl"
              loading="lazy"
            />
            
            {/* Dark gradient overlay (mobile only) */}
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
            
            {/* H2 Title Overlay (mobile only) - using H2 since this is not the main hero */}
            <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-white leading-tight">
                Light Up Your <span className="gradient-text">Dance Floor</span>
              </h2>
            </div>
          </div>

          {/* Right Side - Text Content */}
          <div className="text-left">
            <h2 className="hidden lg:block text-3xl md:text-4xl font-heading font-bold mb-6">
              Light Up Your <span className="gradient-text">Dance Floor</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Choose from our spectacular LED floors with millions of color combinations and sound-reactive modes, or opt for classic elegance with our premium traditional hardwood dance floors.
            </p>
            <p className="text-lg text-muted-foreground mb-8">
              All floors come with professional installation, safety features, anti-slip surfaces, and custom sizing up to 30ft x 30ft to fit any venue perfectly.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Our Dance Floors */}
      <section className="container mx-auto px-4 lg:px-8 mb-16">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Why Choose Our Dance Floors?
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Premium quality floors with stunning visual effects and professional installation
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <Sparkles className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">RGB LED Magic</h3>
              <p className="text-muted-foreground">Millions of colors, sound-reactive modes, and custom animations</p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <Zap className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">Custom Sizes</h3>
              <p className="text-muted-foreground">From 12ft x 12ft up to 30ft x 30ft - any size, any shape</p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <Check className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">Safe & Secure</h3>
              <p className="text-muted-foreground">Anti-slip surfaces, weatherproof panels, professional leveling</p>
            </CardContent>
          </Card>
          <Card className="backdrop-blur-sm bg-card/50">
            <CardContent className="p-6 text-center">
              <Star className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
              <h3 className="font-heading text-xl mb-2">Traditional Options</h3>
              <p className="text-muted-foreground">Premium hardwood floors for classic elegance</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* See the Dance Floor in Action */}
      <section id="video-gallery" className="container mx-auto px-4 lg:px-8 py-20 mb-16">
        <div className="text-center mb-12">
          <Video className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            See the Dance Floor in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch how our LED dance floors transform events with stunning lighting effects
          </p>
        </div>

        <div className="max-w-sm mx-auto mb-12">
          <div className="relative w-full" style={{ paddingBottom: '177.78%' }}>
            <iframe 
              className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
              src="https://www.youtube.com/embed/GwqT9GHeZHc?si=MRw3sKUoFhFkmOFS&rel=0&modestbranding=1"
              title="LED dance floor in action at Dubai event"
              allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerPolicy="strict-origin-when-cross-origin"
              allowFullScreen
              loading="lazy"
            />
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Book Your Dance Floor Now
            </Link>
          </Button>
        </div>
      </section>

      {/* Perfect For Any Event */}
      <section className="relative py-20 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/images/services/led-dancefloor-bg.webp" 
            alt="LED dance floors at various Dubai events including weddings, corporate galas, and celebrations"
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
              Create stunning dance experiences for every special occasion
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Weddings</h3>
                <p className="text-muted-foreground">Create magical moments with customized lighting matching your wedding colors</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Corporate Galas</h3>
                <p className="text-muted-foreground">Impress clients and employees with branded colors and professional ambiance</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Sparkles className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Private Parties</h3>
                <p className="text-muted-foreground">Transform birthday parties and celebrations with vibrant lighting effects</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Lightbulb className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Product Launches</h3>
                <p className="text-muted-foreground">Create buzz with dynamic floors featuring brand colors and logos</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Music className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Festivals & Concerts</h3>
                <p className="text-muted-foreground">Large-scale installations with sound-reactive modes for music events</p>
              </CardContent>
            </Card>

            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Calendar className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Themed Events</h3>
                <p className="text-muted-foreground">Customize colors and patterns for any theme or celebration</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Choose Our Services */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Why Choose Our Dance Floor Services
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Professional installations with comprehensive support and stunning results
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <Card>
              <CardContent className="p-6">
                <Check className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Premium LED Technology</h3>
                <p className="text-muted-foreground">IP65 weatherproof panels with full RGB color control, millions of combinations, and DMX compatibility</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Zap className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Modular System</h3>
                <p className="text-muted-foreground">Flexible panel design allows any size from 12ft to 30ft+ and custom shapes to fit your venue perfectly</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <MapPin className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Site Visit & Planning</h3>
                <p className="text-muted-foreground">Complimentary venue assessment to determine optimal size, placement, and leveling requirements</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Settings className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Professional Installation</h3>
                <p className="text-muted-foreground">Expert team handles delivery, precise leveling, electrical setup, and complete post-event breakdown</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Monitor className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Custom Programming</h3>
                <p className="text-muted-foreground">Program specific colors, patterns, and effects to match your theme or brand identity</p>
              </CardContent>
            </Card>

            <Card>
              <CardContent className="p-6">
                <Star className="w-12 h-12 text-[#D25C84] mb-4" />
                <h3 className="font-heading text-xl font-bold mb-2">Technical Support</h3>
                <p className="text-muted-foreground">On-site technician during setup and on-call support throughout your event for peace of mind</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 lg:px-8">
        <FAQSection questions={faqQuestions} />
      </section>

      {/* Related Services */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <RelatedServices currentService="dance-floors" />
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <CardContent className="p-12 text-center">
            <Sparkles className="w-16 h-16 mx-auto mb-6 text-primary" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Light Up Your Event?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Get a custom quote for LED or traditional dance floors tailored to your venue and event vision
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Book Your Dance Floor
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default DanceFloors;
