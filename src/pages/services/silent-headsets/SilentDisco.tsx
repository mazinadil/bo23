import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Headphones, Music, PartyPopper, Users, Radio, Settings, Check, Star, Zap } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
const faqQuestions = [{
  question: "How much does silent disco rental cost in Dubai?",
  answer: "Silent disco rental prices in Dubai start from AED 3,000 for 50 headphones for 3 hours, up to AED 10,000+ for 200+ headphones for larger events. Pricing includes headphones, transmitters, DJ equipment, setup, technical support, and collection. We offer customized packages based on your guest count, event duration, and whether you need DJs or prefer to use your own playlists. Contact us for a detailed quote tailored to your event."
}, {
  question: "How many headphones can you provide for a silent disco party?",
  answer: "We can provide anywhere from 50 to 500+ wireless headphones depending on your event size. Our most popular packages include 50-100 headphones for private parties, 100-200 for corporate events and weddings, and 300+ for festivals and large public events. All headphones come from the same professional inventory to ensure consistent quality and seamless channel switching."
}, {
  question: "Do you provide DJs for silent disco parties?",
  answer: "Yes! We offer complete silent disco packages with 1, 2, or 3 professional DJs playing different music genres simultaneously. Each DJ broadcasts on their own channel (Red, Green, Blue), giving guests the power to choose their favorite music. Alternatively, if you have your own DJs or want to use curated playlists, we provide just the headphone equipment and technical support. Our DJs specialize in reading the crowd and can adapt their sets based on which channels are most popular."
}, {
  question: "What is the wireless range of silent disco headphones?",
  answer: "Our professional silent disco headphones have a wireless range of up to 300 meters (approximately 1,000 feet) in open outdoor spaces. For indoor venues, the effective range is typically 100-150 meters depending on walls and building materials. We strategically position transmitters throughout your venue to ensure complete coverage and conduct thorough signal tests before guests arrive. For very large venues or complex layouts, we can add additional transmitters to eliminate any dead zones."
}, {
  question: "Can guests switch between music channels freely?",
  answer: "Absolutely! That's the beauty of silent disco. Each guest can switch between the 3 channels at any time with a simple button press on their headset. The LED lights on each headphone change color (Red, Green, or Blue) to show which channel they're listening to, creating an amazing visual effect as the crowd lights up in different colors. Guests also have individual volume control, so everyone can set their perfect listening level."
}, {
  question: "What's the battery life of the silent disco headphones?",
  answer: "Our silent disco headphones have 8-10 hours of continuous battery life when fully charged. We deliver all headphones fully charged and ready to use. For events longer than 8 hours, we include charging stations and backup headphones so guests can swap if needed. The headphones also have auto-shutoff features to conserve battery when not in use, and LED indicators show battery levels so our technicians can proactively manage replacements."
}, {
  question: "Is silent disco suitable for outdoor Dubai events?",
  answer: "Yes! Silent disco is perfect for outdoor events in Dubai. Since there's no external sound system, you can party anywhere without noise complaints - beaches, rooftops, desert camps, gardens, and parks. The wireless headphones work flawlessly outdoors with even better range than indoor venues. We provide weatherproof equipment and can arrange generators if power isn't available at your outdoor location. Silent disco is especially popular for Dubai beach clubs, desert safaris, and late-night outdoor celebrations where noise restrictions typically apply."
}, {
  question: "Can we customize the music genres for each channel?",
  answer: "Absolutely! You have complete control over the music on each channel. You can assign different genres (Hip-Hop, House, Arabic, Rock, Bollywood, etc.), use our professional DJs who specialize in specific genres, provide your own curated playlists, or mix DJ-led channels with playlist-based channels. Popular combinations include: Channel 1 - Top 40/Hip-Hop, Channel 2 - House/EDM, Channel 3 - Arabic/Classics. We work with you before the event to design the perfect music mix for your audience."
}, {
  question: "What venues in Dubai have you provided silent disco for?",
  answer: "We've provided silent disco services at hundreds of Dubai venues including luxury hotels (Atlantis, Burj Al Arab, JW Marriott), beach clubs (Zero Gravity, Nikki Beach), private villas in Emirates Hills and Palm Jumeirah, corporate venues, desert camps, rooftop terraces, and public festivals. We're experienced with all Dubai venue types and understand local regulations, noise restrictions, and power requirements. We can also help you choose the ideal venue for your silent disco event."
}, {
  question: "What if there's a technical issue during the event?",
  answer: "Every silent disco rental includes an on-site technician throughout your event. They handle all setup, sound checks, and remain available for any troubleshooting. We also provide backup headphones, transmitters, and batteries on-site so any issues can be resolved instantly without interrupting your party. Our technicians have handled hundreds of events and are trained to solve problems quickly and discreetly. We also provide a 24/7 support hotline for emergency assistance."
}];
const SilentDisco = () => {
  return <>
      <Helmet>
        <title>Silent Disco Dubai | Wireless Headphone Party Rental</title>
        <meta name="description" content="Silent disco in Dubai with 3-channel wireless headphones & DJs. Perfect for parties, weddings, corporate events & outdoor venues. From AED 3,000." />
        <meta name="keywords" content="silent disco Dubai, wireless headphones rental, silent party Dubai, silent disco hire, multi-channel headphones, LED headphones Dubai, party equipment rental" />
        <link rel="canonical" href="https://boxentertainment.ae/services/silent-headsets/silent-disco" />
      </Helmet>

      <StructuredData data={{
      "@context": "https://schema.org",
      "@type": "Service",
      name: "Silent Disco Party in Dubai",
      description: "Silent disco with multi-channel wireless headphones",
      provider: {
        "@type": "Organization",
        name: "Box Entertainment"
      }
    }} />

      <main className="min-h-screen pt-24 pb-16">
        <section className="container mx-auto px-4 lg:px-8 mb-16">
          <Breadcrumbs items={[{
          label: "Services",
          href: "/services"
        }, {
          label: "Silent Headsets",
          href: "/services/silent-headsets"
        }, {
          label: "Silent Disco Party"
        }]} />

      {/* Split Hero Layout */}
      <div className="lg:grid lg:grid-cols-2 gap-12 mt-12">
        {/* Left Side - Image */}
        <div className="relative overflow-hidden rounded-lg h-[500px] lg:h-[600px] mb-8 lg:mb-0">
          <img src="/images/services/silent-disco-hero.webp" alt="Silent disco party in Dubai with wireless LED headphones and multiple music channels" className="w-full h-full object-cover rounded-lg shadow-2xl" loading="eager" />
          
          {/* Dark gradient overlay (mobile only) */}
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/80 lg:hidden" />
          
          {/* H1 Title Overlay (mobile only) */}
          <div className="absolute bottom-0 left-0 right-0 p-6 lg:hidden z-10">
            <h1 className="text-4xl md:text-5xl font-heading font-bold text-white leading-tight">
              <span className="gradient-text">Silent Disco</span> Party Dubai
            </h1>
          </div>
        </div>

            {/* Right Side - Text Content (Left Aligned) */}
            <div className="text-left">
              <h1 className="hidden lg:block text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6">
                Silent Disco <span className="gradient-text">Party Dubai</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-6">
                Transform your event with the ultimate silent disco experience in Dubai. Multi-channel wireless headphones let guests choose their favorite music from up to 3 DJs playing simultaneously.
              </p>
              <p className="text-lg text-muted-foreground mb-8">
                Perfect for venues with noise restrictions, outdoor events, and parties where everyone wants different music. Watch the crowd light up with colorful LED headphones as they dance to their own beat.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="hero" size="lg" asChild>
                  <Link to="/contact">
                    Book Silent Disco Now
                  </Link>
                </Button>
                <Button variant="outline" size="lg" asChild>
                  <a href="#how-it-works">
                    Learn How It Works
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Key Features Grid */}
        <section className="container mx-auto px-4 lg:px-8 mb-16">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              Why Choose Silent Disco?
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              A unique party experience that keeps everyone happy
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Headphones className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">3 Channels</h3>
                <p className="text-muted-foreground">Choose your music channel</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Music className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">Multiple DJs</h3>
                <p className="text-muted-foreground">3 DJs playing simultaneously</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <PartyPopper className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">No Noise</h3>
                <p className="text-muted-foreground">Party without noise complaints</p>
              </CardContent>
            </Card>
            <Card className="backdrop-blur-sm bg-card/50">
              <CardContent className="p-6 text-center">
                <Users className="h-12 w-12 mx-auto mb-4 text-[#D25C84]" />
                <h3 className="font-heading text-xl mb-2">All Group Sizes</h3>
                <p className="text-muted-foreground">From 50 to 500+ guests</p>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Video Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="text-center mb-8">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">SEE OUR HEADSETS IN ACTION</h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="relative w-full" style={{
            paddingBottom: '56.25%'
          }}>
              <iframe className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl" src="https://www.youtube.com/embed/m-EIL5-gzcw?si=_QAeBhWba3P5YUUm&rel=0&modestbranding=1" title="See our Corporate headsets in action" allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen loading="lazy" />
            </div>
          </div>
        </section>

        {/* What's Included Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/services/silent-disco-bg.webp" alt="Silent disco equipment and headphones setup" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/92 to-background/95" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                What's Included in Your Silent Disco Package
              </h2>
              <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                Everything you need for an unforgettable silent disco experience
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <Card>
                <CardContent className="p-6">
                  <Headphones className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Premium Wireless Headphones</h3>
                  <p className="text-muted-foreground">Professional-grade silent disco headphones with 3 channels, LED lights (Red/Green/Blue), and individual volume control</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Radio className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">3-Channel Transmitters</h3>
                  <p className="text-muted-foreground">High-quality transmitters with 300m range, supporting up to 3 DJs or music sources simultaneously</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Music className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Professional DJ Setup</h3>
                  <p className="text-muted-foreground">Mixing equipment, DJ controllers, and all necessary audio connections for seamless music delivery</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Users className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Technical Support</h3>
                  <p className="text-muted-foreground">On-site technician for setup, operation, and troubleshooting throughout your event</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Settings className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Full Setup & Breakdown</h3>
                  <p className="text-muted-foreground">Complete installation, testing, and removal of all equipment before and after your event</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Check className="w-12 h-12 text-[#D25C84] mb-4" />
                  <h3 className="font-heading text-xl font-bold mb-2">Backup Equipment</h3>
                  <p className="text-muted-foreground">Extra headphones and transmitters on standby to ensure uninterrupted party experience</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section id="how-it-works" className="container mx-auto px-4 lg:px-8 py-20">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
              How Silent Disco Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              It's simple, fun, and creates an unforgettable party atmosphere
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">1</span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">Pick Up Your Headphones</h3>
              <p className="text-muted-foreground text-sm">Each guest receives wireless headphones upon arrival</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">2</span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">Choose Your Channel</h3>
              <p className="text-muted-foreground text-sm">Switch between 3 channels to find your favorite music</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">3</span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">Adjust Your Volume</h3>
              <p className="text-muted-foreground text-sm">Control your personal listening experience</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl font-bold text-primary">4</span>
              </div>
              <h3 className="font-heading text-lg font-bold mb-2">Dance & Enjoy!</h3>
              <p className="text-muted-foreground text-sm">Party with LED lights showing which channel you're on</p>
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-center">
            {/* Left: Square Image */}
            <div className="relative overflow-hidden rounded-lg">
              <img src="/images/services/silent-disco-hero.webp" alt="Guests enjoying multi-channel silent disco with LED headphones showing different colors" className="w-full h-full object-cover rounded-lg shadow-xl aspect-square" loading="lazy" />
            </div>

            {/* Right: Content */}
            <Card className="bg-primary/5 border-primary/20">
              <CardContent className="p-8">
                <h3 className="font-heading text-xl font-bold mb-4">The Magic of Multi-Channel Music</h3>
                <p className="text-muted-foreground mb-4">
                  Up to 3 DJs or playlists can play simultaneously, each broadcasting on a different channel (Red, Green, or Blue). The LED lights on each headphone change color to match the channel, creating a mesmerizing light show as guests switch between music styles. Whether your crowd loves hip-hop, house, or Arabic music, everyone can listen to what they love while dancing together.
                </p>
                <ul className="space-y-2 text-muted-foreground">
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#D25C84] mt-0.5 flex-shrink-0" />
                    <span><strong>Channel 1 (Red):</strong> Hip-hop, R&B, and top 40 hits</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#D25C84] mt-0.5 flex-shrink-0" />
                    <span><strong>Channel 2 (Green):</strong> House, techno, and electronic dance music</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <Check className="w-5 h-5 text-[#D25C84] mt-0.5 flex-shrink-0" />
                    <span><strong>Channel 3 (Blue):</strong> Arabic music, classics, or your custom playlist</span>
                  </li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </section>

        {/* Perfect For Section */}
        <section className="relative py-20 overflow-hidden">
          <div className="absolute inset-0">
            <img src="/images/services/entertainment-hero-bg.webp" alt="Various event types showcasing silent disco applications" className="w-full h-full object-cover" loading="lazy" />
            <div className="absolute inset-0 bg-gradient-to-b from-background/93 via-background/95 to-background" />
          </div>
          <div className="container relative z-10 mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-heading font-bold mb-4">
                Perfect For Every Event
              </h2>
            <p className="text-foreground/90 text-lg max-w-2xl mx-auto">
                Silent disco works brilliantly for any occasion in Dubai
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              <Card>
                <CardContent className="p-6">
                  <PartyPopper className="w-10 h-10 text-[#D25C84] mb-3" />
                  <h3 className="font-heading text-lg font-bold mb-2">Private Parties & Birthdays</h3>
                  <p className="text-muted-foreground text-sm">Celebrate with friends without disturbing neighbors. Perfect for villa parties, rooftop events, and residential venues.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Users className="w-10 h-10 text-[#D25C84] mb-3" />
                  <h3 className="font-heading text-lg font-bold mb-2">Corporate Events</h3>
                  <p className="text-muted-foreground text-sm">Unique team building activities, product launches, and after-work parties that stand out from typical corporate events.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Star className="w-10 h-10 text-[#D25C84] mb-3" />
                  <h3 className="font-heading text-lg font-bold mb-2">Beach & Outdoor Events</h3>
                  <p className="text-muted-foreground text-sm">No noise complaints at beach clubs, desert camps, or outdoor venues. Party under the stars without restrictions.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Music className="w-10 h-10 text-[#D25C84] mb-3" />
                  <h3 className="font-heading text-lg font-bold mb-2">Wedding Receptions</h3>
                  <p className="text-muted-foreground text-sm">Keep guests entertained during late-night celebrations without exceeding venue noise limits or disturbing hotel guests.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Zap className="w-10 h-10 text-[#D25C84] mb-3" />
                  <h3 className="font-heading text-lg font-bold mb-2">Festival & Public Events</h3>
                  <p className="text-muted-foreground text-sm">Create immersive experiences at festivals, community events, and public gatherings with multiple music zones.</p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <Headphones className="w-10 h-10 text-[#D25C84] mb-3" />
                  <h3 className="font-heading text-lg font-bold mb-2">Youth & School Events</h3>
                  <p className="text-muted-foreground text-sm">Safe, supervised parties for teenagers and school events where volume control and music variety matter.</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <FAQSection questions={faqQuestions} title="Silent Disco Party FAQ" />
        </section>

        {/* Related Services */}
        <section className="container mx-auto px-4 lg:px-8 pb-20">
          <RelatedServices currentService="silent-headsets" />
        </section>

        {/* Final CTA Section */}
        <section className="container mx-auto px-4 lg:px-8 pb-20">
          <div className="text-center bg-gradient-to-br from-primary/10 to-primary/5 p-12 rounded-lg shadow-lg border border-primary/20">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
              Ready to Book Your Silent Disco Party?
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto text-lg">
              Transform your Dubai event into an unforgettable silent disco experience. Get a custom quote in minutes.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="hero" asChild>
                <Link to="/contact">
                  <Music className="mr-2 h-5 w-5" />
                  Book Silent Disco Now
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <a href="/contact">
                  Get a Custom Quote
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
    </>;
};
export default SilentDisco;