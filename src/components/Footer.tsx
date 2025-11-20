import { Link } from "react-router-dom";
import { Facebook, Instagram, MapPin } from "lucide-react";
import boxLogoWebp from "@/assets/box-logo.webp";
const Footer = () => {
  const currentYear = new Date().getFullYear();
  return <footer className="bg-card border-t border-border mt-20">
      <div className="container mx-auto px-4 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <img src={boxLogoWebp} alt="Box Entertainment Dubai - Premium Event Entertainment Company Logo" className="w-[133px] h-[67px]" width="133" height="67" loading="lazy" />
            <p className="text-sm text-muted-foreground">
              Dubai's premier entertainment and events company, creating unforgettable experiences since 2010.
            </p>
            <div className="flex space-x-4">
              <a href="https://www.facebook.com/share/15jBMXacQH/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Follow Box Entertainment on Facebook">
                <Facebook size={20} aria-hidden="true" />
              </a>
              <a href="https://www.instagram.com/boxentertainment_" target="_blank" rel="noopener noreferrer" className="text-muted-foreground hover:text-primary transition-colors" aria-label="Follow Box Entertainment on Instagram">
                <Instagram size={20} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Events */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Events</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/events" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  View All Events
                </Link>
              </li>
              <li>
                <Link to="/events/wedding-package" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Weddings
                </Link>
              </li>
              <li>
                <Link to="/events/corporate" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Corporate Events
                </Link>
              </li>
              <li>
                <Link to="/events/parties" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Parties
                </Link>
              </li>
              <li>
                <Link to="/events/proposals" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Proposals
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="lg:col-span-2">
            <h3 className="font-heading font-semibold text-lg mb-4">Our Services</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-4 gap-y-2">
              <li>
                <Link to="/services/entertainment" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Entertainment
                </Link>
              </li>
              <li>
                <Link to="/services/photobooth" className="text-sm text-muted-foreground hover:text-primary transition-colors">Photo Booth </Link>
              </li>
              <li>
                <Link to="/services/sound-lighting" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Sound & Lighting
                </Link>
              </li>
              <li>
                <Link to="/services/silent-headsets" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Silent Headsets
                </Link>
              </li>
              <li>
                <Link to="/services/outdoor-cinema" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Outdoor Cinema
                </Link>
              </li>
              <li>
                <Link to="/services/karaoke" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Karaoke
                </Link>
              </li>
              <li>
                <Link to="/services/dance-floors" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                  Dance Floors
                </Link>
              </li>
              <li>
                <Link to="/services/led-letters" className="text-sm text-muted-foreground hover:text-primary transition-colors">LED Letters</Link>
              </li>
            </ul>
          </div>

          {/* Location Info */}
          <div>
            <h3 className="font-heading font-semibold text-lg mb-4">Our Location</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 text-sm text-muted-foreground">
                <MapPin size={18} className="mt-0.5 flex-shrink-0 text-primary" />
                <span>Dubai, United Arab Emirates</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <p className="text-sm text-muted-foreground">
              © {currentYear} Box Entertainment. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <Link to="/privacy" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <Link to="/terms" className="text-sm text-muted-foreground hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </div>
          </div>
          
          {/* Credit Line */}
          <div className="mt-6 text-center">
            <p className="text-xs text-muted-foreground/80">
              Website designed & built by{" "}
              <a 
                href="https://www.thepartyplatform.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-primary transition-colors underline underline-offset-4"
              >
                The PartyPlatform
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>;
};
export default Footer;