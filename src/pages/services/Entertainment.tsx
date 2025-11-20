import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { Wand2, Mic, Music, Users, PartyPopper, Guitar, Mic2, Music2 } from "lucide-react";
import StructuredData from "@/components/StructuredData";
import Breadcrumbs from "@/components/Breadcrumbs";
import FAQSection from "@/components/FAQSection";
import RelatedServices from "@/components/RelatedServices";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useImageLoader } from "@/hooks/useImageLoader";

const Entertainment = () => {
  const heroSection = useIntersectionObserver({ threshold: 0, triggerOnce: true });
  
  const services = [
    {
      icon: Wand2,
      title: "Magicians",
      description: "Close-up magic, stage illusions, and mind-reading performances",
      link: "/services/entertainment/magicians",
      backgroundImage: "/images/services/magicians-bg.webp",
      alt: "Professional magician performing close-up magic at Dubai event"
    },
    {
      icon: Mic,
      title: "Comedians",
      description: "Stand-up comedy, improv, and corporate entertainment",
      link: "/services/entertainment/comedians",
      backgroundImage: "/images/services/comedians-bg.webp",
      alt: "Professional comedian performing stand-up at Dubai corporate event"
    },
    {
      icon: Music,
      title: "DJs",
      description: "Professional DJs for all genres and event types",
      link: "/services/entertainment/djs",
      backgroundImage: "/images/services/dj-bg-20251110.webp",
      alt: "Professional DJ mixing music at luxury Dubai event with turntables and equipment"
    },
    {
      icon: Users,
      title: "Emcees",
      description: "Professional hosts to engage and entertain your guests",
      link: "/services/entertainment/emcees",
      backgroundImage: "/images/services/emcees-bg.webp",
      alt: "Professional emcee hosting luxury Dubai event"
    },
    {
      icon: PartyPopper,
      title: "Dancers",
      description: "Professional dancers for all styles and performances",
      link: "/services/entertainment/dancers",
      backgroundImage: "/images/services/dancers-bg.webp",
      alt: "Professional dancers performing at Dubai event"
    },
    {
      icon: Guitar,
      title: "Bands",
      description: "Live bands covering all genres and musical styles",
      link: "/services/entertainment/bands",
      backgroundImage: "/images/services/bands-bg.webp",
      alt: "Live band performing at luxury Dubai event"
    },
    {
      icon: Mic2,
      title: "Singers",
      description: "Solo vocalists and featured artists for any occasion",
      link: "/services/entertainment/singers",
      backgroundImage: "/images/services/singers-bg.webp",
      alt: "Professional singer performing at Dubai event"
    },
    {
      icon: Music2,
      title: "Saxophonists",
      description: "Live saxophone performances to elevate your event",
      link: "/services/entertainment/saxophonists",
      backgroundImage: "/images/services/saxophonists-bg.webp",
      alt: "Saxophonist performing live at Dubai event"
    }
  ];

  const faqQuestions = [
    {
      question: "What types of entertainment services do you offer in Dubai?",
      answer: "We offer a comprehensive range of entertainment services including professional DJs for all music genres, magicians for close-up and stage performances, comedians for stand-up and corporate entertainment, emcees to host your events, dancers for various performance styles, live bands, solo singers, and saxophonists. All our entertainers are experienced professionals who have performed at hundreds of events across Dubai."
    },
    {
      question: "How much does it cost to hire entertainment for an event in Dubai?",
      answer: "Entertainment costs vary depending on the type of performer, event duration, and specific requirements. DJ services typically range from AED 2,000-8,000, magicians from AED 3,000-10,000, and bands from AED 5,000-15,000. We provide customized quotes based on your event needs, date, and venue. Contact us for a detailed consultation and pricing tailored to your budget."
    },
    {
      question: "How far in advance should I book entertainment for my event?",
      answer: "We recommend booking 2-3 months in advance, especially for peak season (October-April) and popular dates like New Year's Eve, Valentine's Day, and National Day. For corporate events and weddings, 3-4 months advance booking ensures you get your preferred entertainers. However, we often accommodate last-minute bookings subject to availability."
    },
    {
      question: "Do your entertainers perform at all types of events?",
      answer: "Yes! Our entertainers are versatile and experienced in performing at weddings, corporate galas, private parties, product launches, exhibitions, conferences, birthday celebrations, and cultural events. We carefully match the right entertainers to your event type, audience, and atmosphere to ensure a perfect fit."
    },
    {
      question: "Can I see the entertainers perform before booking?",
      answer: "We provide video samples, showreels, and references for all our entertainers. For high-value bookings, we can arrange live auditions or video calls with performers. Many of our entertainers have performed at major Dubai venues and events, and we're happy to share testimonials from previous clients."
    },
    {
      question: "What equipment do entertainers need, and who provides it?",
      answer: "Most entertainers bring their own essential equipment. DJs bring controllers, laptops, and basic equipment, but venue sound systems are typically required. Bands bring instruments but may need PA systems and lighting. Magicians are self-contained. We can provide full sound and lighting packages as an add-on service, and we'll discuss all technical requirements during the booking consultation."
    }
  ];

  return (
    <>
      <Helmet>
        <title>Entertainment Services Dubai | DJs, Magicians & More</title>
        <meta name="description" content="Book professional entertainment for your Dubai event. DJs, magicians, dancers, bands, singers, comedians, and more. Expert performers." />
        <link rel="canonical" href="https://boxentertainment.ae/services/entertainment" />
      </Helmet>

      <StructuredData
        data={{
          "@context": "https://schema.org",
          "@type": "Service",
          name: "Entertainment Services in Dubai",
          description: "Professional entertainment services for events in Dubai",
          provider: {
            "@type": "Organization",
            name: "Box Entertainment"
          }
        }}
      />

      <main id="main-content" className="min-h-screen">
        {/* Hero Section with Background Image */}
        <section 
          ref={heroSection.ref}
          className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden"
        >
          {/* Background Image with Overlay */}
          <div className="absolute inset-0 z-0">
            <img
              src="/images/services/entertainment-hero-bg.webp"
              alt="Professional entertainment performers at luxury Dubai event featuring DJs, magicians, dancers and live acts"
              className="w-full h-full object-cover"
              loading="eager"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-background"></div>
          </div>

          {/* Hero Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 text-white">
        <div className="mb-8 text-left">
          <Breadcrumbs 
            items={[
              { label: "Services", href: "/services" },
              { label: "Entertainment" }
            ]}
          />
        </div>
        <div className="text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-bold mb-6 mt-8">
            Entertainment <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto">
            Book world-class entertainers to make your Dubai event unforgettable
          </p>
        </div>
      </div>
        </section>

        {/* Services Grid Section */}
        <section className="container mx-auto px-4 lg:px-8 py-20">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {services.map((service, index) => {
              const Icon = service.icon;
              const { isLoaded } = useImageLoader(service.backgroundImage);
              
              return (
                <Link key={index} to={service.link}>
                  <Card className="h-full hover-lift transition-all duration-300 hover:shadow-lg overflow-hidden group">
                    {/* Background Image */}
                    <div className="relative h-48 overflow-hidden">
                      {isLoaded && (
                        <img
                          src={service.backgroundImage}
                          alt={service.alt}
                          className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                          loading="lazy"
                        />
                      )}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                      
                      {/* Icon Overlay */}
                      <div className="absolute top-4 right-4 w-12 h-12 bg-white/90 rounded-full flex items-center justify-center">
                        <Icon className="w-6 h-6 text-[#D25C84]" />
                      </div>
                    </div>

                    {/* Card Content */}
                    <CardContent className="p-6">
                      <h2 className="text-xl font-heading font-bold mb-2">{service.title}</h2>
                      <p className="text-muted-foreground text-sm">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>

          <div className="bg-muted/50 rounded-lg p-8 text-center">
            <h2 className="text-3xl font-heading font-bold mb-4">
              Why Choose Our Entertainment Services?
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-8">
              We provide vetted, professional entertainers who have performed at hundreds of events across Dubai. 
              From intimate gatherings to large corporate events, we have the perfect entertainment solution.
            </p>
            <Link 
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-3 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors font-semibold"
            >
              Book Entertainment Now
            </Link>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="container mx-auto px-4 lg:px-8 pb-20">
          <FAQSection 
            questions={faqQuestions}
            title="Entertainment Services FAQ"
          />
        </section>

        {/* Related Services */}
        <RelatedServices currentService="entertainment" />
      </main>
    </>
  );
};

export default Entertainment;
