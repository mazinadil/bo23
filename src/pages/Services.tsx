import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { ArrowRight, Music, Camera, Headphones, Lightbulb } from "lucide-react";
import { useImageLoader } from "@/hooks/useImageLoader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { Card } from "@/components/ui/card";
import StructuredData from "@/components/StructuredData";

const Services = () => {
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    "serviceType": "Entertainment Services",
    "provider": {
      "@type": "LocalBusiness",
      "name": "Box Entertainment",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    },
    "areaServed": {
      "@type": "City",
      "name": "Dubai"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Entertainment Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "DJ Services",
            "image": "https://box-sparkle-site.vercel.app/images/services/dj-bg.webp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Photo Booth Rental",
            "image": "https://box-sparkle-site.vercel.app/images/services/photobooth-bg.webp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sound & Lighting Equipment",
            "image": "https://box-sparkle-site.vercel.app/images/services/sound-lighting-bg.webp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Magicians",
            "image": "https://box-sparkle-site.vercel.app/images/services/magicians-bg.webp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Dancers",
            "image": "https://box-sparkle-site.vercel.app/images/services/dancers-bg.webp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Singers & Bands",
            "image": "https://box-sparkle-site.vercel.app/images/services/singers-bg.webp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Silent Headsets",
            "image": "https://box-sparkle-site.vercel.app/images/services/silent-headsets-bg.webp"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "LED Letters & Dance Floors",
            "image": "https://box-sparkle-site.vercel.app/images/services/led-dancefloor-bg.webp"
          }
        }
      ]
    }
  };

  const featuredServices = [
    {
      icon: Music,
      title: "Entertainment",
      description: "Professional performers including DJs, magicians, dancers, singers, bands, comedians, emcees, and saxophonists for all event types",
      link: "/services/entertainment",
      image: "/images/services/entertainment-hero-bg.webp",
      imageAlt: "Professional entertainment performers at luxury Dubai event"
    },
    {
      icon: Camera,
      title: "Photo Booths",
      description: "360° booth, mirror booth with backdrop, original booth, and photo booth guests. Capture memories with cutting-edge technology",
      link: "/services/photobooth",
      image: "/images/services/photobooth-hero-bg.webp",
      imageAlt: "Modern photo booth setup at premium event in Dubai"
    },
    {
      icon: Headphones,
      title: "Silent Headsets",
      description: "Silent disco parties, corporate wireless headsets, and silent yoga sessions. Perfect for noise-sensitive venues",
      link: "/services/silent-headsets",
      image: "/images/services/silent-headsets-hero-bg.webp",
      imageAlt: "Silent disco headphones glowing at Dubai party"
    },
    {
      icon: Lightbulb,
      title: "Sound & Lighting",
      description: "Professional PA systems, stage lighting, festoon lights, and LED uplighting. Complete audio-visual solutions",
      link: "/services/sound-lighting",
      image: "/images/services/sound-lighting-hero-bg.webp",
      imageAlt: "Professional sound and lighting equipment at Dubai event"
    }
  ];

  const additionalServices = [
    {
      title: "Outdoor Cinema",
      link: "/services/outdoor-cinema",
      image: "/images/services/outdoor-cinema-hero.webp",
      imageAlt: "Outdoor cinema setup under the stars in Dubai"
    },
    {
      title: "Karaoke",
      link: "/services/karaoke",
      image: "/images/services/karaoke-hero.webp",
      imageAlt: "Karaoke system setup at Dubai event"
    },
    {
      title: "Dance Floors",
      link: "/services/dance-floors",
      image: "/images/services/dance-floors-hero.webp",
      imageAlt: "LED dance floor at luxury wedding in Dubai"
    },
    {
      title: "LED Light Up Letters",
      link: "/services/led-letters",
      image: "/images/services/led-letters-hero.webp",
      imageAlt: "Illuminated LED letters at Dubai event"
    }
  ];

  const FeaturedServiceCard = ({ icon: Icon, title, description, link, image, imageAlt }: any) => {
    const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
    const { isLoaded } = useImageLoader(image);

    return (
      <Link to={link}>
        <Card
          ref={ref}
          className={`relative h-[500px] overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-2xl ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          {isLoaded && (
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="eager"
            />
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/60 to-black/30" />
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-8 text-white">
            <Icon className="w-12 h-12 mb-4 text-[#D25C84]" />
            <h3 className="font-heading text-3xl font-bold mb-3">{title}</h3>
            <p className="text-white/90 text-base mb-6 leading-relaxed">{description}</p>
            <div className="flex items-center gap-2 text-[#D25C84] font-semibold group-hover:gap-4 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-5 h-5" />
            </div>
          </div>
        </Card>
      </Link>
    );
  };

  const AdditionalServiceCard = ({ title, link, image, imageAlt }: any) => {
    const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1 });
    const { isLoaded } = useImageLoader(image);

    return (
      <Link to={link}>
        <Card
          ref={ref}
          className={`relative h-[300px] overflow-hidden group cursor-pointer transition-all duration-300 hover:scale-[1.02] hover:shadow-xl ${
            isVisible ? "animate-fade-in" : "opacity-0"
          }`}
        >
          {/* Background Image */}
          {isLoaded && (
            <img
              src={image}
              alt={imageAlt}
              className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              loading="lazy"
            />
          )}
          
          {/* Gradient Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
          
          {/* Content */}
          <div className="relative h-full flex flex-col justify-end p-6 text-white">
            <h3 className="font-heading text-2xl font-bold mb-3">{title}</h3>
            <div className="flex items-center gap-2 text-[#D25C84] font-semibold group-hover:gap-4 transition-all">
              <span>Learn More</span>
              <ArrowRight className="w-4 h-4" />
            </div>
          </div>
        </Card>
      </Link>
    );
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Event Entertainment Dubai | DJs, Photo Booths & More</title>
        <meta name="description" content="Professional event entertainment in Dubai: DJs, magicians, photo booths, sound & lighting. Complete solutions for weddings and corporate events." />
        <link rel="canonical" href="https://box-sparkle-site.vercel.app/services" />
      </Helmet>
      
      <StructuredData data={serviceSchema} />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold">
            Our <span className="gradient-text">Services</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Comprehensive entertainment solutions for every type of event across Dubai
          </p>
        </div>

        {/* Featured Services */}
        <section className="mb-20">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              Featured <span className="gradient-text">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Comprehensive entertainment solutions for every type of event
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredServices.map((service, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <FeaturedServiceCard {...service} />
              </div>
            ))}
          </div>
        </section>

        {/* Additional Services */}
        <section className="mb-20">
          <div className="mb-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-3">
              More <span className="text-primary">Services</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Specialized equipment and experiences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {additionalServices.map((service, index) => (
              <div key={index} style={{ animationDelay: `${index * 100}ms` }}>
                <AdditionalServiceCard {...service} />
              </div>
            ))}
          </div>
        </section>

        {/* CTA Section */}
        <div className="text-center bg-card/50 backdrop-blur-sm border border-primary/20 rounded-lg p-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            Need a Custom <span className="gradient-text">Package?</span>
          </h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            We can create bespoke entertainment packages tailored to your specific needs and budget
          </p>
          <a href="/contact">
            <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 hover:scale-105 transition-all">
              Request Custom Quote
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Services;
