import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Heart, Sparkles, Music, Camera, Video, MapPin,
  Lightbulb, Flower2, Gift, Award, Building2, Mountain
} from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { useImageLoader } from "@/hooks/useImageLoader";

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Service",
  "name": "Marriage Proposal Planning Services Dubai",
  "description": "Professional marriage proposal planning in Dubai with romantic setups, photography, videography, live musicians, and complete surprise coordination at iconic locations including Atlantis, Burj Khalifa, Jabal Jais, and desert camps",
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
  "serviceType": "Marriage Proposal Planning",
  "areaServed": {
    "@type": "GeoCircle",
    "geoMidpoint": {
      "@type": "GeoCoordinates",
      "latitude": "25.2048",
      "longitude": "55.2708"
    },
    "geoRadius": "50000"
  },
  "offers": {
    "@type": "Offer",
    "priceCurrency": "AED",
    "price": "5000",
    "description": "Starting from AED 5,000 for professional proposal planning services"
  }
};

const locations = [
  {
    icon: Building2,
    title: "Atlantis, The Palm",
    description: "Propose at Dubai's most iconic resort with stunning Palm views, private beach setups, or underwater at The Ambassador Lagoon surrounded by 65,000 marine animals. Luxury, exclusivity, and Instagram-worthy backdrops.",
    image: "/images/services/photobooth-bg.webp",
    alt: "Marriage proposal setup at Atlantis The Palm Dubai with ocean view"
  },
  {
    icon: Building2,
    title: "The Burj Khalifa View",
    description: "Pop the question with the world's tallest building as your backdrop. Rooftop terraces, At.mosphere restaurant, or Dubai Fountain-side locations create unforgettable skyline proposals with city lights twinkling.",
    image: "/images/services/entertainment-hero-bg.webp",
    alt: "Romantic proposal with Burj Khalifa Dubai skyline backdrop"
  },
  {
    icon: Mountain,
    title: "At The Top Of Jabal Jais",
    description: "UAE's highest peak offers breathtaking mountain views and dramatic scenery. Propose above the clouds with sunset vistas, cool mountain air, and the world's longest zipline nearby for the adventurous couple.",
    image: "/images/services/outdoor-cinema-bg.webp",
    alt: "Marriage proposal at Jabal Jais mountain peak UAE with stunning views"
  },
  {
    icon: MapPin,
    title: "Dine In The Desert",
    description: "Traditional Arabian romance under starlit skies. Private desert camps with Bedouin-style setups, bonfire ambiance, traditional carpets and cushions, lantern lighting, and absolute privacy for your magical moment.",
    image: "/images/services/sound-lighting-bg.webp",
    alt: "Romantic desert proposal setup Dubai with traditional Arabian decor"
  },
  {
    icon: Heart,
    title: "Madinat Jumeirah Boat Date",
    description: "Glide through Venice-like waterways in a traditional abra boat. Propose while floating past Arabian architecture, wind towers, and ambient lighting. Intimate, romantic, and quintessentially Dubai luxury.",
    image: "/images/services/festoon-lights-bg.webp",
    alt: "Marriage proposal on boat at Madinat Jumeirah waterways Dubai"
  },
  {
    icon: MapPin,
    title: "Private Beach Sunset",
    description: "Classic beach proposal with Arabian Gulf waves, golden sunset, rose petal pathways, LOVE letters in the sand, festoon lighting, and the soothing sound of waves. Timeless romance at its finest.",
    image: "/images/services/photobooth-guests-bg.webp",
    alt: "Beachside proposal setup Dubai with sunset and romantic decorations"
  }
];

const inclusions = [
  {
    icon: Lightbulb,
    title: "Romantic Lighting & Ambiance",
    description: "LED LOVE letters, festoon lights, candles, lanterns, and ambient lighting creating magical atmosphere. Transform any location into a dreamy proposal setting."
  },
  {
    icon: Music,
    title: "Live Musicians",
    description: "Professional violinists, saxophonists, or acoustic guitarists playing your special song. Perfect timing, perfect soundtrack for your perfect moment."
  },
  {
    icon: Camera,
    title: "Professional Photography",
    description: "Discreet professional photographer capturing every emotion, reaction, and precious moment. High-resolution photos delivered within 48 hours for sharing with loved ones."
  },
  {
    icon: Video,
    title: "Cinematic Videography",
    description: "Professionally edited proposal video with music, slow-motion highlights, and storytelling. Relive your proposal moment forever in stunning quality."
  },
  {
    icon: Flower2,
    title: "Floral & Décor Styling",
    description: "Rose petals, flower arrangements, elegant table settings, luxury cushions, and themed decorations. Every detail designed for romance and beauty."
  },
  {
    icon: Gift,
    title: "Surprise Coordination",
    description: "Complete surprise management including distraction planning, timing coordination, guest coordination (if desired), and ensuring everything unfolds flawlessly."
  },
  {
    icon: MapPin,
    title: "Location Scouting & Permits",
    description: "We handle venue bookings, location permits, access arrangements, and site preparation. You focus on the question, we handle the logistics."
  },
  {
    icon: Award,
    title: "Dedicated Proposal Planner",
    description: "Personal planner guiding you through every step, confidential consultations, design mockups, timeline creation, and 24/7 support until your proposal is complete."
  }
];

const faqQuestions = [
  {
    question: "How much does proposal planning cost in Dubai?",
    answer: "Proposal planning packages in Dubai range from AED 5,000 for intimate setups (simple location, photographer, basic décor) to AED 25,000+ for elaborate productions (premium locations, videography, musicians, extensive floral arrangements). Most couples invest AED 8,000-15,000 for complete packages including professional photography, live music, romantic lighting, and full coordination. Pricing depends on location choice, services included, guest count (if family/friends attend), and customization level. We provide transparent quotes after understanding your vision and budget."
  },
  {
    question: "Which Dubai locations are best for marriage proposals?",
    answer: "Top proposal locations include: Atlantis The Palm (luxury resort backdrop), Burj Khalifa views (iconic skyline), Jabal Jais mountain peak (dramatic heights), desert camps (Arabian romance), Madinat Jumeirah boat rides (Venice-like waterways), private beaches (sunset classic), rooftop terraces (city lights), luxury yacht decks (sea views), hotel suites (intimate privacy), and botanical gardens (natural beauty). Location choice depends on your partner's personality, preferred ambiance, and proposal style. We help select the perfect spot during consultation."
  },
  {
    question: "Can proposals be kept completely secret?",
    answer: "Absolutely! Confidentiality is our priority. We communicate only with you (never your partner), use code names in correspondence, coordinate with trusted contacts if needed, arrive at venues discretely, and set up while you create distractions. For locations requiring advance setup, we use professional event covers. Our team has executed hundreds of surprise proposals - we're experts at maintaining secrecy while ensuring flawless execution."
  },
  {
    question: "Do you provide photographers for the proposal?",
    answer: "Yes! Professional photography is included in all our packages. Our discreet photographers position themselves strategically to capture the proposal from multiple angles without being noticed. You'll receive 150-300+ high-resolution edited photos within 48-72 hours, including the proposal moment, reactions, ring close-ups, couple portraits, and location beauty shots. Add videography for cinematic highlight films with music and slow-motion editing."
  },
  {
    question: "Can you arrange live music for the proposal?",
    answer: "Definitely! Live musicians add incredible romance and emotion. Popular options include: solo violinist (elegant and moving), saxophonist (smooth and jazzy), acoustic guitarist with vocals (intimate and personal), string quartet (grand and sophisticated), or harpist (ethereal and dreamy). Musicians can play your special song, your partner's favorite music, or classic romantic pieces. They're positioned strategically and begin playing at your signal."
  },
  {
    question: "What if the weather is bad for outdoor proposals?",
    answer: "Dubai weather is generally reliable, but we plan for all scenarios. For outdoor proposals, we monitor forecasts closely and have backup plans including covered terraces, indoor venues with great views, weather protection (elegant tents/canopies), or rescheduling if necessary (no penalty within 48 hours). Peak proposal season (October-April) has minimal rain. For desert and beach proposals, we choose optimal times and always have contingency options ready."
  },
  {
    question: "How far in advance should I plan my proposal?",
    answer: "We recommend booking 4-6 weeks in advance, especially for premium locations requiring advance reservations (luxury hotels, restaurants, exclusive venues) and during peak season (October-April, Valentine's Day, New Year's Eve). This timeframe allows for proper planning, location scouting, design mockups, and vendor coordination. However, we've successfully executed proposals with just 1-2 weeks notice based on availability. Contact us as soon as you're ready - we'll make it happen!"
  },
  {
    question: "Can you coordinate with family and friends?",
    answer: "Absolutely! Whether you want intimate privacy or a surprise gathering of loved ones, we coordinate everything. We can arrange for family/friends to appear after the proposal for celebrations, coordinate with your confidants for distraction planning, manage guest arrivals and positioning (hidden until the right moment), and handle post-proposal celebration setups (champagne toasts, group photos, dinner reservations). Your dedicated planner manages all communications."
  },
  {
    question: "Do you provide the engagement ring?",
    answer: "We do not provide engagement rings - that special selection is entirely yours! However, we offer ring-related services including: recommendations for reputable Dubai jewelers, ring box styling and placement in the proposal setup, coordinating hidden ring delivery (if you purchase separately), ensuring ring box is camera-ready for photos, and safe ring handling throughout the setup. The ring choice and purchase are personal decisions we support but don't provide."
  },
  {
    question: "What happens after I say yes to your proposal planning services?",
    answer: "After booking: (1) Confidential consultation - share your love story, partner's personality, and proposal vision; (2) Custom proposal design - we create detailed plan with location mockups, décor samples, and timeline; (3) Approval and refinements - you review and approve every detail; (4) Final preparations - we coordinate vendors, secure locations, and confirm logistics; (5) Proposal day - we handle complete setup, execution, and surprise coordination; (6) Post-proposal - receive photos/videos within days and celebrate your engagement! Your dedicated planner guides you through every step with complete confidentiality."
  }
];

const Proposals = () => {
  const { isLoaded: heroLoaded } = useImageLoader("/images/events/proposals-hero.webp");

  return (
    <div className="min-h-screen">
      <Helmet>
        <title>Marriage Proposal Planning Dubai | Romantic Services</title>
        <meta name="description" content="Perfect marriage proposals in Dubai. Romantic setups at Atlantis, Burj Khalifa, desert camps. Photography, live music, coordination from AED 5,000." />
        <meta name="keywords" content="marriage proposal Dubai, proposal planning Dubai, romantic proposal services, Atlantis proposal, Burj Khalifa proposal, desert proposal Dubai, proposal photographer Dubai, wedding proposal ideas" />
        <link rel="canonical" href="https://boxentertainment.ae/events/proposals" />
      </Helmet>

      <StructuredData data={eventSchema} />

      {/* Hero Section */}
      <section className="relative min-h-[80vh] flex items-center justify-center overflow-hidden">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          {heroLoaded && (
            <img
              src="/images/events/proposals-hero.webp"
              alt="Romantic marriage proposal moment with elegant balloon backdrop and Dubai cityscape creating perfect engagement atmosphere"
              className="w-full h-full object-cover"
              loading="eager"
            />
          )}
          <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
        </div>

        {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-24 text-center text-white">
        <div className="mb-8">
          <Breadcrumbs 
            items={[
              { label: "Events", href: "/events" },
              { label: "Marriage Proposals" }
            ]}
          />
        </div>
        <div className="max-w-4xl mx-auto space-y-6">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold">
              Marriage Proposal <span className="gradient-text">Planning</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
              Create an unforgettable "Yes!" moment at Dubai's most romantic locations with professional planning, photography, live music, and complete surprise coordination
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">Book Now</Link>
              </Button>
              <Button variant="outline" size="lg" className="bg-white/10 backdrop-blur-sm hover:bg-white/20 text-white border-white/30" asChild>
                <a href="#locations">Why Choose Us</a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Choose Your Perfect Location */}
      <section id="locations" className="container mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-12">
          <Heart className="w-12 h-12 mx-auto mb-4 text-[#D25C84]" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            Choose Your Perfect <span className="gradient-text">Location</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            From iconic Dubai landmarks to intimate desert settings - find the perfect backdrop for your special moment
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {locations.map((location, index) => {
            const Icon = location.icon;
            const { isLoaded } = useImageLoader(location.image);
            
            return (
              <Card key={index} className="overflow-hidden group hover-lift">
                {/* Location Image */}
                <div className="relative h-56 overflow-hidden">
                  {isLoaded && (
                    <img
                      src={location.image}
                      alt={location.alt}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                      loading="lazy"
                    />
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <Icon className="h-8 w-8 text-white mb-2" />
                  </div>
                </div>

                {/* Location Content */}
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-bold mb-3 group-hover:text-[#D25C84] transition-colors">
                    {location.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {location.description}
                  </p>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </section>

      {/* What's Included */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="text-center mb-12">
            <Sparkles className="w-12 h-12 mx-auto mb-4 text-[#D25C84]" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              What's Included in Our Proposal Planning
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Complete end-to-end proposal services ensuring every detail is perfect
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {inclusions.map((item, index) => {
              const Icon = item.icon;
              return (
                <Card key={index} className="backdrop-blur-sm bg-card/50">
                  <CardContent className="p-6 text-center">
                    <Icon className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                    <h3 className="font-heading text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-muted-foreground text-sm">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Video Showcase */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <div className="text-center mb-12">
          <Video className="w-12 h-12 mx-auto mb-4 text-primary" />
          <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
            See Our Proposal Set-Ups in <span className="gradient-text">Action</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Watch real proposals we've planned and executed across Dubai's most romantic locations
          </p>
        </div>

        <div className="max-w-3xl mx-auto mb-12">
          <div className="aspect-video rounded-lg overflow-hidden bg-muted shadow-2xl">
            <video
              className="w-full h-full object-cover"
              controls
              preload="metadata"
              poster="/images/events/proposals-hero.webp"
            >
              <source src="/videos/proposal-showcase.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>

        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/contact">
              Plan Your Perfect Proposal
            </Link>
          </Button>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 lg:px-8 py-20">
        <FAQSection 
          questions={faqQuestions} 
          title="Marriage Proposal Planning FAQ" 
        />
      </section>

      {/* You Might Also Like */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4 lg:px-8">
          <RelatedServices currentService="proposals" />
        </div>
      </section>

      {/* Final CTA */}
      <section className="container mx-auto px-4 lg:px-8 pb-20">
        <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
          <CardContent className="p-12 text-center">
            <Heart className="w-16 h-16 mx-auto mb-6 text-[#D25C84]" />
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Ready to Pop <span className="gradient-text">The Question?</span>
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
              Let's plan the perfect proposal that leads to a lifetime of happiness. Confidential consultations available now.
            </p>
            <Button variant="hero" size="lg" asChild>
              <Link to="/contact">
                Start Planning Your Proposal
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
};

export default Proposals;
