import { Link } from "react-router-dom";
import { ArrowRight, LucideIcon } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useImageLoader } from "@/hooks/useImageLoader";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  link?: string;
  backgroundImage?: string;
  backgroundAlt?: string;
}

const ServiceCard = ({ icon: Icon, title, description, link, backgroundImage, backgroundAlt }: ServiceCardProps) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0.1, triggerOnce: true });
  const { isLoaded, error } = useImageLoader(isVisible ? backgroundImage : undefined);

  const isClickable = !!link;

  const cardContent = (
    <Card className={cn(
      "border-border/50 bg-card/50 backdrop-blur-sm overflow-hidden h-full transition-all duration-300 relative",
      isClickable && "group hover-lift hover-glow"
    )}>
      {/* Background Image Layer */}
      {backgroundImage && !error && (
        <div className="absolute inset-0 overflow-hidden">
          <img
            src={backgroundImage}
            alt={backgroundAlt || title}
            width="800"
            height="600"
            loading="eager"
            decoding="async"
            className={`w-full h-full object-cover transition-all duration-700 ${
              isLoaded ? 'opacity-60 group-hover:opacity-70 scale-100' : 'opacity-0 scale-105'
            }`}
          />
          {/* Gradient overlay for text readability */}
          <div className="absolute inset-0 bg-gradient-to-t from-background/95 via-background/50 to-background/30" />
        </div>
      )}
      
      {/* Content Layer */}
      <CardContent className="relative z-10 p-6 space-y-4">
        <div className={cn(
          "w-14 h-14 rounded-lg bg-primary/10 flex items-center justify-center transition-colors backdrop-blur-sm",
          isClickable && "group-hover:bg-primary/30"
        )}>
          <Icon className="w-7 h-7 text-[#D25C84]" aria-hidden="true" />
        </div>
        
        <h3 className={cn(
          "font-heading text-xl font-semibold transition-colors drop-shadow-lg",
          isClickable && "group-hover:text-[#D25C84]"
        )}>
          {title}
        </h3>
        
        <p className="text-muted-foreground text-sm leading-relaxed">
          {description}
        </p>
        
        {isClickable && (
          <div className="flex items-center text-[#D25C84] text-sm font-medium pt-2">
            Learn More
            <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div ref={ref}>
      {isClickable ? (
        <Link to={link}>{cardContent}</Link>
      ) : (
        cardContent
      )}
    </div>
  );
};

export default ServiceCard;
