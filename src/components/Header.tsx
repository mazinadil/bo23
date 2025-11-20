import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronDown } from "lucide-react";
import boxLogoWebp from "@/assets/box-logo.webp";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

const Header = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const handleLinkClick = () => {
    setMobileMenuOpen(false);
    setActiveSubmenu(null);
    setExpandedCategory(null);
  };

  const mobileMenuData = {
    services: {
      title: "Services",
      items: [
        {
          category: "Entertainment",
          link: "/services/entertainment",
          children: [
            { title: "Magicians", link: "/services/entertainment/magicians" },
            { title: "Comedians", link: "/services/entertainment/comedians" },
            { title: "DJs", link: "/services/entertainment/djs" },
            { title: "Emcees", link: "/services/entertainment/emcees" },
            { title: "Dancers", link: "/services/entertainment/dancers" },
            { title: "Bands", link: "/services/entertainment/bands" },
            { title: "Singers", link: "/services/entertainment/singers" },
            { title: "Saxophonists", link: "/services/entertainment/saxophonists" }
          ]
        },
        {
          category: "Photo Booth",
          link: "/services/photobooth",
          children: [
            { title: "360 Degree Booth", link: "/services/photobooth/360-booth" },
            { title: "Original Photo Booth", link: "/services/photobooth/original-booth" },
            { title: "Mirror Photo Booth", link: "/services/photobooth/mirror-booth" },
            { title: "Mirror Booth Backdrop", link: "/services/photobooth/mirror-booth-backdrop" }
          ]
        },
        {
          category: "Silent Headsets",
          link: "/services/silent-headsets",
          children: [
            { title: "Silent Disco Party", link: "/services/silent-headsets/silent-disco" },
            { title: "Corporate Headsets", link: "/services/silent-headsets/corporate-headsets" },
            { title: "Silent Yoga", link: "/services/silent-headsets/silent-yoga" }
          ]
        },
        {
          category: "Sound & Lighting",
          link: "/services/sound-lighting",
          children: [
            { title: "Festoon & Fairy Lights", link: "/services/sound-lighting/festoon-lights" }
          ]
        },
        {
          category: "More Services",
          link: null,
          children: [
            { title: "Outdoor Cinema", link: "/services/outdoor-cinema" },
            { title: "Karaoke", link: "/services/karaoke" },
            { title: "Dance Floors", link: "/services/dance-floors" },
            { title: "LED Light Up Letters", link: "/services/led-letters" }
          ]
        },
        { title: "View All Services", link: "/services", isHighlight: true }
      ]
    },
    events: {
      title: "Events",
      items: [
        { title: "Corporate Events", link: "/events/corporate" },
        { title: "Weddings", link: "/events/wedding-package" },
        { title: "Parties", link: "/events/parties" },
        { title: "Proposals", link: "/events/proposals" }
      ]
    },
    about: {
      title: "About Us",
      items: [
        { title: "About Us", link: "/about", description: "Our story, values, and team" },
        { title: "Blog", link: "/blog", description: "Latest news, tips, and event insights" },
        { title: "Clients", link: "/clients", description: "Featured clients and success stories" }
      ]
    }
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <a href="#main-content" className="sr-only">
        Skip to main content
      </a>
      <nav className="container mx-auto px-4 lg:px-8 py-2">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2 hover-lift">
            <img src={boxLogoWebp} alt="Box Entertainment Dubai - Premium Event Entertainment Company Logo" className="w-[133px] h-[67px]" width="133" height="67" loading="eager" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <Link
              to="/"
              className={`text-xl font-heading font-semibold transition-colors hover:text-primary ${
                isActive("/") ? "text-primary" : "text-foreground"
              }`}
            >
              Home
            </Link>
            
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-xl font-heading font-semibold hover:text-primary">
                    Services
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[850px] p-6 bg-card">
                      <div className="grid grid-cols-4 gap-6">
                        {/* Column 1: Entertainment */}
                        <div>
                          <Link to="/services/entertainment" className="text-sm font-semibold mb-3 text-primary hover:underline block">Entertainment</Link>
                          <div className="space-y-2">
                            <Link to="/services/entertainment/magicians" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Magicians
                            </Link>
                            <Link to="/services/entertainment/comedians" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Comedians
                            </Link>
                            <Link to="/services/entertainment/djs" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              DJs
                            </Link>
                            <Link to="/services/entertainment/emcees" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Emcees
                            </Link>
                            <Link to="/services/entertainment/dancers" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Dancers
                            </Link>
                            <Link to="/services/entertainment/bands" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Bands
                            </Link>
                            <Link to="/services/entertainment/singers" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Singers
                            </Link>
                            <Link to="/services/entertainment/saxophonists" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Saxophonists
                            </Link>
                          </div>
                        </div>

                        {/* Column 2: Photo Booth & Silent Headsets */}
                        <div>
                          <Link to="/services/photobooth" className="text-sm font-semibold mb-3 text-primary hover:underline block">Photo Booth</Link>
                          <div className="space-y-2 mb-6">
                            <Link to="/services/photobooth/360-booth" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              360 Degree Booth
                            </Link>
                            <Link to="/services/photobooth/original-booth" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Original Photo Booth
                            </Link>
                            <Link to="/services/photobooth/mirror-booth" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Mirror Photo Booth
                            </Link>
                            <Link to="/services/photobooth/mirror-booth-backdrop" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Mirror Booth Backdrop
                            </Link>
                          </div>
                          
                          <Link to="/services/silent-headsets" className="text-sm font-semibold mb-3 text-primary hover:underline block">Silent Headsets</Link>
                          <div className="space-y-2">
                            <Link to="/services/silent-headsets/silent-disco" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Silent Disco Party
                            </Link>
                            <Link to="/services/silent-headsets/corporate-headsets" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Corporate Headsets
                            </Link>
                            <Link to="/services/silent-headsets/silent-yoga" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Silent Yoga
                            </Link>
                          </div>
                        </div>

                        {/* Column 3: Sound & Lighting + Other Services */}
                        <div>
                          <Link to="/services/sound-lighting" className="text-sm font-semibold mb-3 text-primary hover:underline block">Sound & Lighting</Link>
                          <div className="space-y-2 mb-6">
                            <Link to="/services/sound-lighting/festoon-lights" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Festoon & Fairy Lights
                            </Link>
                          </div>

                          <h3 className="text-sm font-semibold mb-3 text-primary">More Services</h3>
                          <div className="space-y-2">
                            <Link to="/services/outdoor-cinema" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Outdoor Cinema
                            </Link>
                            <Link to="/services/karaoke" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Karaoke
                            </Link>
                            <Link to="/services/dance-floors" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              Dance Floors
                            </Link>
                            <Link to="/services/led-letters" className="block text-sm p-2 rounded-md hover:bg-muted hover:text-primary transition-colors">
                              LED Light Up Letters
                            </Link>
                          </div>
                        </div>

                        {/* Column 4: All Services */}
                        <div>
                          <Link to="/services" className="block p-4 rounded-md bg-muted/50 hover:bg-muted transition-colors">
                            <h3 className="text-sm font-semibold mb-2 text-primary">View All Services</h3>
                            <p className="text-xs text-muted-foreground">
                              Browse our complete range of entertainment and event services
                            </p>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-xl font-heading font-semibold hover:text-primary">
                    Events
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4 bg-card">
                      <div className="grid gap-3">
                        <Link to="/events/corporate" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary">
                          <div className="text-sm font-medium leading-none">Corporate Events</div>
                        </Link>
                        <Link to="/events/wedding-package" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary">
                          <div className="text-sm font-medium leading-none">Weddings</div>
                        </Link>
                        <Link to="/events/parties" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary">
                          <div className="text-sm font-medium leading-none">Parties</div>
                        </Link>
                        <Link to="/events/proposals" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary">
                          <div className="text-sm font-medium leading-none">Proposals</div>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger className="bg-transparent text-xl font-heading font-semibold hover:text-primary">
                    About Us
                  </NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="w-[300px] p-4 bg-card">
                      <div className="grid gap-3">
                        <Link to="/about" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary">
                          <div className="text-sm font-medium leading-none">About Us</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Our story, values, and team
                          </p>
                        </Link>
                        <Link to="/blog" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary">
                          <div className="text-sm font-medium leading-none">Blog</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Latest news, tips, and event insights
                          </p>
                        </Link>
                        <Link to="/clients" className="block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-muted hover:text-primary">
                          <div className="text-sm font-medium leading-none">Clients</div>
                          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
                            Featured clients and success stories
                          </p>
                        </Link>
                      </div>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>

            <Link
              to="/contact"
              className={`text-xl font-heading font-semibold transition-colors hover:text-primary ${
                isActive("/contact") ? "text-primary" : "text-foreground"
              }`}
            >
              Contact
            </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button variant="hero" asChild>
              <Link to="/contact">
                Book Now
              </Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 text-foreground hover:text-primary transition-colors"
            onClick={() => {
              setMobileMenuOpen(!mobileMenuOpen);
              if (!mobileMenuOpen) {
                setActiveSubmenu(null);
                setExpandedCategory(null);
              }
            }}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && !activeSubmenu && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 animate-slide-in">
            <Link
              to="/"
              className="block py-2 text-xl font-heading font-semibold hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            
            <button
              onClick={() => {
                setActiveSubmenu('services');
                setExpandedCategory(null);
              }}
              className="w-full flex items-center justify-between py-2 text-xl font-heading font-semibold hover:text-primary transition-colors text-left"
            >
              <span>Services</span>
              <ChevronDown className="h-5 w-5 -rotate-90" />
            </button>
            
            <button
              onClick={() => {
                setActiveSubmenu('events');
                setExpandedCategory(null);
              }}
              className="w-full flex items-center justify-between py-2 text-xl font-heading font-semibold hover:text-primary transition-colors text-left"
            >
              <span>Events</span>
              <ChevronDown className="h-5 w-5 -rotate-90" />
            </button>
            
            <button
              onClick={() => {
                setActiveSubmenu('about');
                setExpandedCategory(null);
              }}
              className="w-full flex items-center justify-between py-2 text-xl font-heading font-semibold hover:text-primary transition-colors text-left"
            >
              <span>About Us</span>
              <ChevronDown className="h-5 w-5 -rotate-90" />
            </button>
            
            <Link
              to="/contact"
              className="block py-2 text-xl font-heading font-semibold hover:text-primary transition-colors"
              onClick={handleLinkClick}
            >
              Contact
            </Link>
            
            <Button variant="hero" className="w-full" asChild>
              <Link to="/contact" onClick={handleLinkClick}>
                Book Now
              </Link>
            </Button>
          </div>
        )}

        {/* Mobile Submenus */}
        {mobileMenuOpen && activeSubmenu && (
          <div className="lg:hidden mt-4 pb-4 space-y-4 animate-slide-in-right">
            <button
              onClick={() => {
                setActiveSubmenu(null);
                setExpandedCategory(null);
              }}
              className="flex items-center gap-2 py-2 text-xl font-heading font-semibold hover:text-primary transition-colors"
            >
              <ChevronDown className="h-5 w-5 rotate-90" />
              <span>Back</span>
            </button>
            
            <h3 className="text-2xl font-heading font-bold text-primary border-b border-border pb-2">
              {mobileMenuData[activeSubmenu as keyof typeof mobileMenuData].title}
            </h3>
            
            <div className="space-y-3">
              {activeSubmenu === 'services' && (
                <div className="space-y-2">
                  {mobileMenuData.services.items.map((item, index) => (
                    'children' in item ? (
                      <div key={index} className="border border-border rounded-md overflow-hidden">
                        {item.link ? (
                          <div className="space-y-0">
                            <button
                              onClick={() => setExpandedCategory(expandedCategory === item.category ? null : item.category)}
                              className="w-full flex items-center justify-between p-3 bg-card hover:bg-muted transition-colors"
                            >
                              <span className="text-lg font-semibold text-primary">{item.category}</span>
                              <ChevronDown 
                                className={`h-5 w-5 transition-transform duration-200 ${
                                  expandedCategory === item.category ? 'rotate-180' : ''
                                }`} 
                              />
                            </button>
                            
                            <Link
                              to={item.link}
                              className="block px-3 pb-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                              onClick={handleLinkClick}
                            >
                              View all {item.category.toLowerCase()} →
                            </Link>
                          </div>
                        ) : (
                          <button
                            onClick={() => setExpandedCategory(expandedCategory === item.category ? null : item.category)}
                            className="w-full flex items-center justify-between p-3 bg-card hover:bg-muted transition-colors"
                          >
                            <span className="text-lg font-semibold text-primary">{item.category}</span>
                            <ChevronDown 
                              className={`h-5 w-5 transition-transform duration-200 ${
                                expandedCategory === item.category ? 'rotate-180' : ''
                              }`} 
                            />
                          </button>
                        )}
                        
                        {expandedCategory === item.category && (
                          <div className="px-3 pb-3 space-y-2 bg-card/50 animate-accordion-down">
                            {item.children.map((child, childIndex) => (
                              <Link
                                key={childIndex}
                                to={child.link}
                                className="block py-2 px-3 rounded text-base hover:bg-muted hover:text-primary transition-colors"
                                onClick={handleLinkClick}
                              >
                                {child.title}
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ) : (
                      <Link
                        key={index}
                        to={item.link}
                        className="block py-3 px-4 bg-primary/10 rounded-md text-lg font-semibold text-primary hover:bg-primary/20 transition-colors border border-primary/20"
                        onClick={handleLinkClick}
                      >
                        {item.title}
                      </Link>
                    )
                  ))}
                </div>
              )}
              
              {activeSubmenu === 'events' && (
                <div className="space-y-2">
                  {mobileMenuData.events.items.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="block py-3 px-4 rounded-md text-lg font-semibold hover:bg-muted hover:text-primary transition-colors"
                      onClick={handleLinkClick}
                    >
                      {item.title}
                    </Link>
                  ))}
                </div>
              )}
              
              {activeSubmenu === 'about' && (
                <div className="space-y-2">
                  {mobileMenuData.about.items.map((item, index) => (
                    <Link
                      key={index}
                      to={item.link}
                      className="block py-3 px-4 rounded-md hover:bg-muted transition-colors"
                      onClick={handleLinkClick}
                    >
                      <div className="text-lg font-semibold hover:text-primary">{item.title}</div>
                      {item.description && (
                        <p className="text-sm text-muted-foreground mt-1">{item.description}</p>
                      )}
                    </Link>
                  ))}
                </div>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
