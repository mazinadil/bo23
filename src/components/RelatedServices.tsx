import { Link } from "react-router-dom";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface Service {
  title: string;
  slug: string;
  description: string;
  image: string;
}

interface RelatedServicesProps {
  currentService: string;
  exclude?: string[];
}

const allServices: Record<string, Service> = {
  "outdoor-cinema": {
    title: "Outdoor Cinema",
    slug: "outdoor-cinema",
    description: "Transform any space into a magical cinema experience",
    image: "/images/services/outdoor-cinema-bg.webp"
  },
  "karaoke": {
    title: "Karaoke Systems",
    slug: "karaoke",
    description: "Professional karaoke equipment for unforgettable parties",
    image: "/images/services/karaoke-bg.webp"
  },
  "silent-headsets": {
    title: "Silent Headsets",
    slug: "silent-headsets",
    description: "Wireless headphones for unique silent disco experiences",
    image: "/images/services/silent-headsets-bg.webp"
  },
  "dance-floors": {
    title: "Dance Floors",
    slug: "dance-floors",
    description: "Premium dance floors for any event size",
    image: "/images/services/dance-floors-bg.webp"
  },
  "led-letters": {
    title: "LED Letters",
    slug: "led-letters",
    description: "Giant illuminated letters for stunning event décor",
    image: "/images/services/led-letters-bg.webp"
  },
  "dj": {
    title: "DJs & Entertainment",
    slug: "entertainment",
    description: "Professional DJs to keep your guests dancing",
    image: "/images/services/dj-bg.webp"
  },
  "photobooth": {
    title: "Photo Booths",
    slug: "photobooth",
    description: "Modern photo booths with instant prints",
    image: "/images/services/photobooth-bg.webp"
  },
  "sound-lighting": {
    title: "Sound & Lighting",
    slug: "sound-lighting",
    description: "Professional audio and lighting equipment",
    image: "/images/services/sound-lighting-bg.webp"
  },
  "dancers": {
    title: "Dancers",
    slug: "entertainment",
    description: "Talented dancers for captivating performances",
    image: "/images/services/dancers-bg.webp"
  },
  "singers": {
    title: "Singers & Bands",
    slug: "entertainment",
    description: "Live music entertainment for every occasion",
    image: "/images/services/singers-bg.webp"
  },
  "magicians": {
    title: "Magicians",
    slug: "entertainment/magicians",
    description: "World-class magicians for unforgettable entertainment",
    image: "/images/services/magicians-bg.webp"
  },
  "comedians": {
    title: "Comedians",
    slug: "entertainment/comedians",
    description: "Professional comedians for hilarious entertainment",
    image: "/images/services/comedians-bg.webp"
  },
  "saxophonists": {
    title: "Saxophonists",
    slug: "entertainment/saxophonists",
    description: "Professional saxophone performances with soulful tones",
    image: "/images/services/saxophonists-bg.webp"
  },
  "bands": {
    title: "Live Bands",
    slug: "entertainment/bands",
    description: "Live bands for unforgettable musical performances",
    image: "/images/services/bands-bg.webp"
  },
  "original-booth": {
    title: "Original Photo Booth",
    slug: "photobooth/original-booth",
    description: "Classic photo booth with instant prints and fun props",
    image: "/images/services/original-booth-bg.webp"
  },
  "360-booth": {
    title: "360 Photo Booth",
    slug: "photobooth/360-booth",
    description: "Revolutionary 360-degree video booth experiences",
    image: "/images/services/360-booth-bg.webp"
  },
  "mirror-booth": {
    title: "Mirror Photo Booth",
    slug: "photobooth/mirror-booth",
    description: "Interactive full-length mirror with touch screen",
    image: "/images/services/mirror-booth-backdrop-bg.webp"
  },
  "weddings": {
    title: "Wedding Entertainment",
    slug: "events/wedding-package",
    description: "Complete wedding planning and entertainment services",
    image: "/images/events/weddings-hero.webp"
  },
  "birthday-parties": {
    title: "Birthday Party Entertainment",
    slug: "events/parties",
    description: "Complete birthday party entertainment and celebration services",
    image: "/images/events/parties-hero.webp"
  },
  "proposals": {
    title: "Marriage Proposal Planning",
    slug: "events/proposals",
    description: "Professional proposal planning at Dubai's most romantic locations",
    image: "/images/events/proposals-hero.webp"
  },
  "corporate-events": {
    title: "Corporate Events",
    slug: "events/corporate",
    description: "Professional entertainment for conferences, galas, and team building",
    image: "/images/events/corporate-hero.webp"
  }
};

const recommendations: Record<string, string[]> = {
  "outdoor-cinema": ["karaoke", "silent-headsets", "sound-lighting"],
  "karaoke": ["silent-headsets", "outdoor-cinema", "dj"],
  "silent-headsets": ["karaoke", "dj", "outdoor-cinema"],
  "dance-floors": ["led-letters", "sound-lighting", "dj"],
  "led-letters": ["dance-floors", "photobooth", "sound-lighting"],
  "dj": ["sound-lighting", "dancers", "singers"],
  "entertainment": ["sound-lighting", "photobooth", "silent-headsets"],
  "photobooth": ["led-letters", "dance-floors", "sound-lighting"],
  "sound-lighting": ["photobooth", "silent-headsets", "dance-floors"],
  "magicians": ["comedians", "dj", "singers"],
  "comedians": ["magicians", "dj", "singers"],
  "dancers": ["dj", "singers", "sound-lighting"],
  "bands": ["singers", "dj", "sound-lighting"],
  "singers": ["bands", "dj", "sound-lighting"],
  "saxophonists": ["dj", "singers", "bands"],
  "original-booth": ["360-booth", "mirror-booth", "dj"],
  "360-booth": ["original-booth", "mirror-booth", "led-letters"],
  "mirror-booth": ["original-booth", "360-booth", "led-letters"],
  "corporate-events": ["weddings", "birthday-parties", "sound-lighting"],
  "birthday-parties": ["weddings", "proposals", "photobooth"],
  "weddings": ["proposals", "corporate-events", "photobooth"],
  "proposals": ["weddings", "birthday-parties", "entertainment"]
};

const RelatedServices = ({ currentService, exclude = [] }: RelatedServicesProps) => {
  const relatedServiceKeys = recommendations[currentService] || [];
  const filteredServices = relatedServiceKeys
    .filter(key => !exclude.includes(key))
    .slice(0, 3)
    .map(key => allServices[key])
    .filter(Boolean);

  if (filteredServices.length === 0) return null;

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4">
            You Might Also Like
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Enhance your event with these complementary services
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredServices.map((service, index) => (
            <Link 
              key={`${service.slug}-${index}`} 
              to={`/services/${service.slug}`}
              className="group"
            >
              <Card className="h-full overflow-hidden border-border hover:border-primary transition-all duration-300 hover:shadow-lg">
                <div className="relative h-48 overflow-hidden">
                  <img 
                    src={service.image} 
                    alt={`${service.title} service in Dubai`}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/90 to-transparent" />
                </div>
                <CardContent className="p-6">
                  <h3 className="font-heading text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    {service.description}
                  </p>
                  <div className="flex items-center text-primary font-medium group-hover:gap-2 transition-all">
                    Learn More
                    <ArrowRight size={18} className="ml-1 group-hover:translate-x-1 transition-transform" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedServices;
