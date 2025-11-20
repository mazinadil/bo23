import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { useCounterAnimation } from "@/hooks/useCounterAnimation";

const Hero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const { ref: statsRef, isVisible } = useIntersectionObserver({ 
    threshold: 0.3,
    triggerOnce: true 
  });

  const eventsCount = useCounterAnimation({ 
    target: 1000, 
    start: isVisible, 
    suffix: "+",
    duration: 2000 
  });
  
  const clientsCount = useCounterAnimation({ 
    target: 500, 
    start: isVisible, 
    suffix: "+",
    duration: 2000 
  });
  
  const artistsCount = useCounterAnimation({ 
    target: 50, 
    start: isVisible, 
    suffix: "+",
    duration: 2000 
  });

  return <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-32 sm:pt-28 md:pt-24 lg:pt-20">
      {/* Video Background - Disabled on mobile for performance */}
      <div className="absolute inset-0 z-0">
        {!isMobile ? (
          <video 
            autoPlay
            loop 
            muted 
            playsInline 
            preload="metadata"
            poster="/images/hero-poster.webp"
            className="absolute inset-0 w-full h-full object-cover"
            aria-label="Box Entertainment event showcase featuring DJs, photo booths, and live entertainment in Dubai"
            title="Box Entertainment Dubai Events Showcase"
          >
            <source src="/videos/box-slider.mp4" type="video/mp4" />
          </video>
        ) : (
          <img 
            src="/images/hero-poster.webp"
            alt="Box Entertainment event showcase featuring DJs, photo booths, and live entertainment in Dubai"
            className="absolute inset-0 w-full h-full object-cover"
            loading="eager"
          />
        )}
        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/50"></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 lg:px-8 relative z-10" id="main-content">
        <div className="max-w-4xl mx-auto text-center space-y-8 animate-fade-in">
          <div className="inline-flex items-center space-x-2 bg-card/50 backdrop-blur-sm border border-primary/20 rounded-full px-4 py-2 mb-4">
            <Sparkles size={18} className="text-[#D25C84]" aria-hidden="true" />
            <span className="text-sm font-medium">Dubai's Premier Entertainment Company</span>
          </div>

          <h1 className="font-heading text-5xl md:text-7xl lg:text-8xl font-bold leading-tight">
            Unforgettable{" "}
            <span className="gradient-text">Experiences</span>
            <br />
            Start Here
          </h1>

          <p className="text-xl md:text-2xl max-w-2xl mx-auto text-slate-50">
            Transform your events with world-class DJs, magicians, photo booths, and premium entertainment services across Dubai
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
            <Button variant="hero" size="lg" className="group" asChild>
              <Link to="/contact">
                Book Now
                <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </Button>
            <Button variant="outline" size="lg" asChild>
              <a href="#services">
                View Our Services
              </a>
            </Button>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 max-w-3xl mx-auto">
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">{eventsCount}</div>
              <div className="text-sm text-muted-foreground">Events Completed</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">{clientsCount}</div>
              <div className="text-sm text-muted-foreground">Happy Clients</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-primary">{artistsCount}</div>
              <div className="text-sm text-muted-foreground">Professional Artists</div>
            </div>
            <div className="space-y-2">
              <div className="text-4xl font-bold text-secondary">24/7</div>
              <div className="text-sm text-muted-foreground">Customer Support</div>
            </div>
          </div>
        </div>
      </div>
    </section>;
};
export default Hero;