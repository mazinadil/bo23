import { useState, useEffect } from "react";
import { Helmet } from "react-helmet-async";
import { MessageCircle, Phone } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import StructuredData from "@/components/StructuredData";

const Contact = () => {
  const [waHref, setWaHref] = useState("https://wa.me/971562683212");

  useEffect(() => {
    if (typeof window !== "undefined") {
      setWaHref(
        `https://wa.me/971562683212?text=${encodeURIComponent(
          "Hi, I have a question about www.boxentertainment.ae" + window.location.pathname
        )}`
      );
    }
  }, []);
  const contactSchema = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "mainEntity": {
      "@type": "LocalBusiness",
      "name": "Box Entertainment",
      "telephone": "+971562683212",
      "email": "info@boxentertainment.ae",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Dubai",
        "addressCountry": "AE"
      }
    }
  };

  return (
    <div className="min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Contact Box Entertainment Dubai | Book Your Event Today</title>
        <meta name="description" content="Contact Box Entertainment Dubai to plan your event. WhatsApp or email us to receive instant quotes." />
        <link rel="canonical" href="https://boxentertainment.ae/contact" />
        <script src="https://link.msgsndr.com/js/form_embed.js" />
        <script type='text/javascript' src='https://reputationhub.site/reputation/assets/review-widget.js' />
      </Helmet>
      
      <StructuredData data={contactSchema} />
      
      <div className="container mx-auto px-4 lg:px-8">
        {/* Hero Section */}
        <div className="max-w-4xl mx-auto text-center mb-16 space-y-6 animate-fade-in">
          <h1 className="font-heading text-5xl md:text-6xl font-bold">
            Get in <span className="gradient-text">Touch</span>
          </h1>
          <p className="text-xl text-muted-foreground leading-relaxed">
            Ready to make your event extraordinary? Contact us today for a personalized consultation
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Contact Form */}
          <Card className="border-border/50 bg-card/50 backdrop-blur-sm">
            <CardContent className="p-0" style={{ minHeight: '660px' }}>
              <iframe
                src="https://api.leadconnectorhq.com/widget/form/JjoT06LwkZ8Lfe12GAle"
                style={{ width: '100%', height: '100%', minHeight: '660px', border: 'none', borderRadius: '3px' }}
                id="inline-JjoT06LwkZ8Lfe12GAle" 
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Form 0"
                data-height="660"
                data-layout-iframe-id="inline-JjoT06LwkZ8Lfe12GAle"
                data-form-id="JjoT06LwkZ8Lfe12GAle"
                title="Form 0"
              />
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-8 lg:flex lg:flex-col lg:h-[660px]">
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover-lift">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-heading font-semibold text-lg mb-2">Phone</h3>
                    <a href="tel:+971562683212" className="text-muted-foreground hover:text-primary transition-colors block mb-2">
                      +971 56 268 3212
                    </a>
                    <a 
                      href={waHref}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-[#25D366] hover:text-[#20BA5A] transition-colors font-medium"
                    >
                      <MessageCircle className="w-4 h-4" />
                      WhatsApp Us
                    </a>
                    <p className="text-sm text-muted-foreground mt-2">Mon-Sat, 9am-8pm</p>
                  </div>
                </div>
              </CardContent>
            </Card>


            {/* Google Reviews Widget */}
            <Card className="border-border/50 bg-card/50 backdrop-blur-sm hover-lift lg:flex-1 lg:flex lg:flex-col">
              <CardContent className="p-6 lg:flex-1 lg:flex lg:flex-col">
                <div className="space-y-4 lg:flex lg:flex-col lg:h-full">
                  <h3 className="font-heading font-semibold text-lg">What Our Clients Say</h3>
                  <div className="review-widget-container lg:flex-1">
                    <iframe 
                      className='lc_reviews_widget' 
                      src='https://reputationhub.site/reputation/widgets/review_widget/YY25Ltvs8mMkCCVp8kkh?widgetId=6911d0be0591d2ab344cdfd1' 
                      frameBorder='0' 
                      scrolling='no' 
                      style={{ minWidth: '100%', width: '100%', height: '100%', minHeight: '500px' }}
                      title="Google Reviews"
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
