import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Heart, Waves, Sun, Users, Music, Volume2, Radio, Settings, Check, Leaf, Sparkles, Mountain, Calendar } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useImageLoader } from "@/hooks/useImageLoader";
const faqQuestions = [{
  question: "What is silent yoga and how does it work in Dubai?",
  answer: "Silent yoga in Dubai uses wireless headsets to deliver the instructor's voice, music, and guided meditation directly to each participant. This creates an intimate, immersive experience whether you're practicing on the beach, in a park, or at a corporate wellness event. Each person receives crystal-clear audio guidance without disturbing the surrounding environment."
}, {
  question: "How much does silent yoga rental cost in Dubai?",
  answer: "Silent yoga headset rental in Dubai starts from AED 1,500 for 20 headsets for a 1-hour session, up to AED 5,000+ for 100+ headsets for corporate wellness programs or large group classes. Pricing includes wireless headsets, transmitter equipment, technical setup, and support. Custom packages available based on group size and session duration."
}, {
  question: "Where can we host silent yoga sessions in Dubai?",
  answer: "Silent yoga works anywhere! Popular locations include Dubai beaches (Kite Beach, La Mer, JBR), parks (Safa Park, Zabeel Park), desert settings, hotel rooftops, corporate offices, and even indoor spaces. The wireless technology means no venue acoustics or noise restriction limitations – practice yoga wherever inspiration strikes."
}, {
  question: "Can silent yoga headsets be used for meditation and mindfulness sessions?",
  answer: "Absolutely! Our wireless headsets are perfect for guided meditation, sound healing, breathwork sessions, mindfulness workshops, and ecstatic dance. The immersive audio experience helps participants tune out distractions and deeply connect with the practice, making it ideal for corporate wellness programs and retreat experiences."
}, {
  question: "What's the battery life of silent yoga headsets?",
  answer: "Our professional wireless headsets have 8-10 hours of continuous battery life, more than enough for multiple yoga sessions. All headsets are delivered fully charged. For multi-session events or full-day wellness retreats, we provide charging stations and backup equipment to ensure uninterrupted practice."
}, {
  question: "Can we play music during silent yoga sessions?",
  answer: "Yes! Silent yoga headsets support multi-channel audio, so you can mix the instructor's voice with background music, nature sounds, or binaural beats. The instructor can adjust the balance in real-time, creating the perfect atmosphere for different yoga styles – from energizing vinyasa flows to calming yin yoga sessions."
}, {
  question: "Is silent yoga suitable for corporate wellness programs?",
  answer: "Silent yoga is perfect for corporate wellness! It allows companies to host yoga sessions in offices, outdoor team-building venues, or during corporate retreats without worrying about space acoustics or disturbing other workers. Employees receive personalized audio guidance, making it ideal for mixed-level groups and multilingual workforces."
}, {
  question: "How far in advance should we book silent yoga headsets in Dubai?",
  answer: "We recommend booking at least 2-3 weeks in advance for regular yoga sessions, and 4-6 weeks for large corporate wellness events or during peak season (October-April). However, we often accommodate last-minute bookings based on availability. Contact us early to secure your preferred date and time."
}];
const SilentYoga = () => {
  const {
    ref: heroRef,
    isVisible: heroVisible
  } = useIntersectionObserver({
    threshold: 0.1,
    triggerOnce: true
  });
  const {
    isLoaded: heroImageLoaded,
    error: heroImageError
  } = useImageLoader("/images/services/silent-yoga-bg.webp");
  return <>
      <Helmet>
        <title>Silent Yoga Dubai | Wireless Headsets for Outdoor Yoga</title>
        <meta name="description" content="Book silent yoga in Dubai with wireless headsets. Beach yoga, corporate wellness, meditation & outdoor classes. From AED 1,500 across Dubai." />
        <meta name="keywords" content="silent yoga dubai, wireless yoga headsets, beach yoga dubai, corporate wellness yoga, outdoor yoga dubai, meditation headsets, mindfulness sessions dubai" />
        <link rel="canonical" href="https://boxentertainment.ae/services/silent-headsets/silent-yoga" />
      </Helmet>

      <StructuredData data={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Silent Yoga in Dubai",
      description: "Silent yoga sessions with wireless headsets for outdoor and corporate wellness events",
      provider: {
        "@type": "Organization",
        name: "Box Entertainment"
      },
      offers: {
        "@type": "Offer",
        priceCurrency: "AED",
        price: "1500",
        description: "Starting from AED 1,500 for 20 headsets"
      }
    }} />

      <main className="min-h-screen pt-24 pb-16">
        {/* Hero Section */}
        <section ref={heroRef} className="container mx-auto px-4 lg:px-8 mb-20">
          <Breadcrumbs items={[{
          label: "Services",
          href: "/services"
        }, {
          label: "Silent Headsets",
          href: "/services/silent-headsets"
        }, {
          label: "Silent Yoga"
        }]} />

          <div className="lg:grid lg:grid-cols-2 gap-12 mt-12">
            {/* Left Side - Image */}
            <div className="relative overflow-hidden rounded-lg h-[500px] lg:h-[600px] mb-8 lg:mb-0">
              {!heroImageLoaded && !heroImageError && <div className="w-full h-full bg-muted animate-pulse rounded-lg" />}
              {heroImageError && <div className="w-full h-full bg-muted rounded-lg flex items-center justify-center">
                  <p className="text-muted-foreground">Image unavailable</p>
                </div>}
              <img src="/images/services/silent-yoga-bg.webp" alt="Silent yoga session with wireless headsets on Dubai beach at sunrise" className={`w-full h-full object-cover rounded-lg shadow-2xl transition-opacity duration-300 ${heroImageLoaded ? 'opacity-100' : 'opacity-0'}`} loading="eager" />
              
              {/* Dark gradient overlay (mobile only) */}
              <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden rounded-lg" />
              
              {/* H1 Title Overlay (mobile only) */}
              <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
                <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
                  Silent Yoga <span className="gradient-text">Dubai</span>
                </h1>
              </div>
            </div>

            {/* Right Side - Text Content */}
            <div className="text-left">
              <h1 className="hidden lg:block text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
                Silent Yoga <span className="gradient-text">Dubai</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Transform your yoga and wellness sessions with immersive wireless headset technology. Experience guided practice in Dubai's most beautiful outdoor locations without disturbing the peace.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                From beach sunrise sessions to corporate wellness programs, silent yoga creates an intimate connection between instructor and practitioners – perfect for groups of any size.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book Silent Yoga
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#features">
                    Learn More
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Section */}
        <section id="features" className="container mx-auto px-4 lg:px-8 mb-16 mt-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose Silent Yoga in Dubai?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Wireless technology meets ancient wellness practices
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Headphones className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Immersive Audio</h3>
                <p className="text-muted-foreground">Crystal-clear instructor guidance and ambient music</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Waves className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Any Location</h3>
                <p className="text-muted-foreground">Beach, desert, parks, or rooftops – practice anywhere</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Heart className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Wellness Focus</h3>
                <p className="text-muted-foreground">Perfect for meditation, mindfulness, and breathwork</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Group Sessions</h3>
                <p className="text-muted-foreground">Scalable for intimate groups to corporate events</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Video Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">SEE OUR YOGA HEADSETS IN ACTION</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full" style={{
            paddingBottom: '56.25%'
          }}>
              <iframe className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl" src="https://www.youtube.com/embed/EBFRvcBXotE?si=dkMnTOwKnkc-z9EK&rel=0&modestbranding=1" title="See our Corporate headsets in action" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" />
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/services/silent-yoga-bg.webp" alt="Silent yoga equipment and wireless headsets setup for wellness sessions" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/92 to-background/95" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                What's Included in Your Silent Yoga Package
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything you need for an unforgettable wellness experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Headphones className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Premium Wireless Headsets</h3>
                  <p className="text-muted-foreground">Comfortable, high-quality headsets with exceptional sound clarity for extended yoga sessions</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Radio className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Professional Transmitter</h3>
                  <p className="text-muted-foreground">Long-range wireless transmitter ensuring perfect coverage for indoor and outdoor venues</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Music className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Audio Mixing Support</h3>
                  <p className="text-muted-foreground">Balance instructor voice with ambient music, nature sounds, or meditation tracks</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Settings className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Complete Setup Service</h3>
                  <p className="text-muted-foreground">Our team handles all technical setup and testing before your session begins</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Volume2 className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Individual Volume Control</h3>
                  <p className="text-muted-foreground">Each participant adjusts their own volume for perfect personal comfort</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Check className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">On-Site Technical Support</h3>
                  <p className="text-muted-foreground">Dedicated technician available throughout your yoga session for assistance</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How Silent Yoga Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Simple setup for a seamless wellness experience
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">Equipment Setup</h3>
              <p className="text-muted-foreground text-sm">Our team arrives early to set up and test all wireless equipment</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">Participants Arrive</h3>
              <p className="text-muted-foreground text-sm">Each person receives a fully-charged wireless headset</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">Instructor Begins</h3>
              <p className="text-muted-foreground text-sm">Clear voice guidance flows directly to each headset with ambient music</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">Immersive Practice</h3>
              <p className="text-muted-foreground text-sm">Participants enjoy deeply focused yoga with crystal-clear audio</p>
            </div>
          </div>
        </section>

        {/* Benefits Section with Square Image */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Square Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img src="/images/services/silent-yoga-bg.webp" alt="Group practicing silent yoga outdoors with wireless headsets at sunset" className="w-full h-full object-cover rounded-lg shadow-xl aspect-square" loading="lazy" />
            </div>

            {/* Right: Content */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-heading text-2xl font-bold mb-4">
                  The Silent Yoga Experience
                </h3>
                <p className="text-muted-foreground mb-4">
                  Silent yoga transforms traditional practice by using wireless technology to create an intimate, focused experience regardless of location. Whether on a busy beach, in a corporate office, or during a desert retreat, each participant receives crystal-clear guidance directly in their headphones.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D25C84] mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>No Venue Limitations:</strong> Practice yoga anywhere in Dubai without worrying about noise or acoustics</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D25C84] mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Enhanced Focus:</strong> Eliminate external distractions and deepen your connection to the practice</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D25C84] mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Personalized Volume:</strong> Each participant controls their audio level for maximum comfort</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-[#D25C84] mt-0.5 flex-shrink-0" />
                    <span className="text-muted-foreground"><strong>Scalable Sessions:</strong> Perfect for intimate groups of 10 or corporate wellness events with 100+</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/services/entertainment-hero-bg.webp" alt="Various silent yoga and wellness events in Dubai" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/93 via-background/95 to-background" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Perfect For Every Wellness Occasion
              </h2>
              <p className="text-foreground/90 text-lg max-w-2xl mx-auto">
                Silent yoga enhances any mindfulness experience in Dubai
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Waves className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Beach Yoga Sessions</h3>
                  <p className="text-muted-foreground">Sunrise and sunset yoga at Dubai's beautiful beaches</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Users className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Corporate Wellness</h3>
                  <p className="text-muted-foreground">Office yoga and team mindfulness programs</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Mountain className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Outdoor Retreats</h3>
                  <p className="text-muted-foreground">Desert yoga and mountain wellness experiences</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Heart className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Meditation & Breathwork</h3>
                  <p className="text-muted-foreground">Guided meditation and pranayama sessions</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Sparkles className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Sound Healing</h3>
                  <p className="text-muted-foreground">Immersive sound baths and vibrational therapy</p>
                </CardContent>
              </Card>

              <Card className="backdrop-blur-sm bg-card/50">
                <CardContent className="p-6 text-center">
                  <Calendar className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                  <h3 className="font-heading text-xl mb-2">Special Events</h3>
                  <p className="text-muted-foreground">Wellness festivals and yoga retreats</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <div className="container mx-auto px-4 lg:px-8">
          <FAQSection questions={faqQuestions} />
        </div>

        {/* Related Services */}
        <div className="container mx-auto px-4 lg:px-8">
          <RelatedServices currentService="silent-headsets" />
        </div>

        {/* Final CTA */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <Card className="bg-gradient-to-br from-primary/10 via-secondary/5 to-background">
            <CardContent className="p-12 text-center">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Ready to Transform Your Yoga Experience?
              </h2>
              <p className="text-muted-foreground text-lg mb-8 max-w-2xl mx-auto">
                Book silent yoga headsets for your next wellness session in Dubai
              </p>
              <Button variant="hero" size="lg" asChild>
                <Link to="/contact">
                  Get a Quote
                </Link>
              </Button>
            </CardContent>
          </Card>
        </section>
      </main>
    </>;
};
export default SilentYoga;