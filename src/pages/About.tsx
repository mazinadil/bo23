import { Helmet } from "react-helmet-async";
import { Award, Users, Target, Heart } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import StructuredData from "@/components/StructuredData";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";

const About = () => {
  const videoSection = useIntersectionObserver({ threshold: 0.25 });

  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "Box Entertainment",
    "url": "https://boxentertainment.ae",
    "logo": "https://boxentertainment.ae/assets/box-logo.webp",
    "description": "Dubai's premier entertainment and events company, creating unforgettable experiences since 2010.",
    "foundingDate": "2010",
    "address": {
      "@type": "PostalAddress",
      "addressLocality": "Dubai",
      "addressCountry": "AE"
    },
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+971501234567",
      "contactType": "customer service",
      "areaServed": "AE",
      "availableLanguage": ["English", "Arabic"]
    }
  };

  const founderVideoSchema = {
    "@context": "https://schema.org",
    "@type": "VideoObject",
    "name": "A Message from Box Entertainment Founder",
    "description": "Our founder shares the vision and values behind Box Entertainment Dubai's premium event services",
    "thumbnailUrl": "https://img.youtube.com/vi/fVzQqL5pPtI/maxresdefault.jpg",
    "uploadDate": "2025-11-10T00:00:00Z",
    "embedUrl": "https://www.youtube.com/embed/fVzQqL5pPtI",
    "contentUrl": "https://www.youtube.com/watch?v=fVzQqL5pPtI"
  };

  const values = [
    {
      icon: Award,
      title: "Excellence",
      description: "We strive for perfection in every event we undertake"
    },
    {
      icon: Users,
      title: "Professional Team",
      description: "Experienced artists and technicians dedicated to your success"
    },
    {
      icon: Target,
      title: "Precision",
      description: "Attention to detail in planning and execution"
    },
    {
      icon: Heart,
      title: "Passion",
      description: "We love what we do and it shows in our work"
    }
  ];

  return (
    <div className="min-h-screen pt-24 pb-20">
      <Helmet>
        <title>About Box Entertainment | Dubai's Premier Event Company</title>
        <meta name="description" content="Since 2010, Box Entertainment creates unforgettable Dubai events. Learn our story, values, and commitment to excellence in entertainment." />
        <link rel="canonical" href="https://boxentertainment.ae/about" />
        <script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js' defer />
      </Helmet>
      
      <StructuredData data={organizationSchema} />
      <StructuredData data={founderVideoSchema} />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold">
            About <span className="gradient-text">Box Entertainment</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Since 2010, we've been creating unforgettable experiences across Dubai, establishing ourselves as the city's premier entertainment and events company.
          </p>
        </div>

        {/* Story Section */}
        <div className="max-w-4xl mx-auto mb-20">
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 md:p-12 space-y-6">
              <h2 className="font-heading text-3xl font-bold">Our Story</h2>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Box Entertainment was born from a passion for creating memorable experiences. What started as a small team of entertainment enthusiasts has grown into Dubai's most trusted name in event entertainment and production.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                Today, we work with leading brands, luxury hotels, and private clients across the UAE, delivering world-class entertainment services that exceed expectations. Our diverse portfolio includes corporate events, weddings, private parties, and everything in between.
              </p>
              <p className="text-muted-foreground leading-relaxed text-lg">
                With a team of over 50 professional artists, state-of-the-art equipment, and years of experience, we bring creativity, professionalism, and innovation to every event we touch.
              </p>

              {/* Founder Video */}
              <div ref={videoSection.ref} className="mt-8">
                <h3 className="font-heading text-2xl font-semibold mb-4">
                  A Message from Our <span className="gradient-text">Founder</span>
                </h3>
                <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
                  {videoSection.isVisible && (
                    <iframe 
                      className="absolute top-0 left-0 w-full h-full rounded-lg shadow-2xl"
                      src="https://www.youtube.com/embed/fVzQqL5pPtI?si=0d5JJYI5Gx6B8aUL&rel=0&modestbranding=1"
                      title="A Message from Box Entertainment Founder"
                      allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                      loading="lazy"
                    />
                  )}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Values Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">
              Our <span className="gradient-text">Core Values</span>
            </h2>
            <p className="text-muted-foreground text-lg">The principles that guide everything we do</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <Card key={index} className="hover-lift border-border/50 bg-card/50 backdrop-blur-sm">
                <CardContent className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto">
                    <value.icon className="w-8 h-8 text-primary" />
                  </div>
                  <h3 className="font-heading text-xl font-semibold">{value.title}</h3>
                  <p className="text-muted-foreground text-sm">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Customer Reviews Section */}
        <div className="mb-20">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl font-bold mb-4">
              What <span className="gradient-text">Our Customers Say</span>
            </h2>
            <p className="text-muted-foreground text-lg">Hear from our satisfied clients</p>
          </div>

          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-6">
              <div className="review-widget-container">
                <iframe 
                  className='lc_reviews_widget' 
                  src='https://reputationhub.site/reputation/widgets/review_widget/YY25Ltvs8mMkCCVp8kkh?widgetId=6911d0be0591d2ab344cdfd1' 
                  frameBorder='0' 
                  scrolling='no' 
                  style={{ minWidth: '100%', width: '100%', height: '100%', minHeight: '600px' }}
                  title="Customer Reviews"
                />
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-20">
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">13+</div>
              <div className="text-muted-foreground">Years Experience</div>
            </CardContent>
          </Card>
          <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">1000+</div>
              <div className="text-muted-foreground">Events Completed</div>
            </CardContent>
          </Card>
          <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Happy Clients</div>
            </CardContent>
          </Card>
          <Card className="border-secondary/20 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-8 text-center">
              <div className="text-4xl md:text-5xl font-bold text-secondary mb-2">50+</div>
              <div className="text-muted-foreground">Team Members</div>
            </CardContent>
          </Card>
        </div>

        {/* CTA Section */}
        <Card className="border-primary/20 bg-card/50 backdrop-blur-sm">
          <CardContent className="p-12 text-center space-y-6">
            <h2 className="font-heading text-3xl md:text-4xl font-bold">
              Let's Work <span className="gradient-text">Together</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Ready to make your next event unforgettable? Contact our team today for a personalized consultation.
            </p>
            <a href="/contact">
              <button className="inline-flex items-center justify-center px-8 py-4 bg-primary text-primary-foreground rounded-md font-semibold shadow-lg shadow-primary/50 hover:shadow-xl hover:shadow-primary/60 hover:scale-105 transition-all">
                Get in Touch
              </button>
            </a>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default About;
