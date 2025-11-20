import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import About from "./pages/About";
import Blog from "./pages/Blog";
import BlogCategory from "./pages/BlogCategory";
import BlogPost from "./pages/BlogPost";
import Clients from "./pages/Clients";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import Events from "./pages/Events";
import Corporate from "./pages/events/Corporate";
import Weddings from "./pages/events/Weddings";
import Parties from "./pages/events/Parties";
import Proposals from "./pages/events/Proposals";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import OutdoorCinema from "./pages/services/OutdoorCinema";
import Karaoke from "./pages/services/Karaoke";
import SilentHeadsets from "./pages/services/SilentHeadsets";
import DanceFloors from "./pages/services/DanceFloors";
import LedLetters from "./pages/services/LedLetters";
import NotFound from "./pages/NotFound";
import Magicians from "./pages/services/entertainment/Magicians";
import Comedians from "./pages/services/entertainment/Comedians";
import DJs from "./pages/services/entertainment/DJs";
import Emcees from "./pages/services/entertainment/Emcees";
import Dancers from "./pages/services/entertainment/Dancers";
import Bands from "./pages/services/entertainment/Bands";
import Singers from "./pages/services/entertainment/Singers";
import Saxophonists from "./pages/services/entertainment/Saxophonists";
import Booth360 from "./pages/services/photobooth/Booth360";
import OriginalBooth from "./pages/services/photobooth/OriginalBooth";
import MirrorBooth from "./pages/services/photobooth/MirrorBooth";
import MirrorBoothBackdrop from "./pages/services/photobooth/MirrorBoothBackdrop";
import SilentDisco from "./pages/services/silent-headsets/SilentDisco";
import CorporateHeadsets from "./pages/services/silent-headsets/CorporateHeadsets";
import SilentYoga from "./pages/services/silent-headsets/SilentYoga";
import FestoonLights from "./pages/services/sound-lighting/FestoonLights";
import Entertainment from "./pages/services/Entertainment";
import Photobooth from "./pages/services/Photobooth";
import SoundLighting from "./pages/services/SoundLighting";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Layout>
        <ScrollToTop />
        <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/clients" element={<Clients />} />
              <Route path="/services" element={<Services />} />
              
              {/* Category landing pages */}
              <Route path="/services/entertainment" element={<Entertainment />} />
              <Route path="/services/photobooth" element={<Photobooth />} />
              <Route path="/services/sound-lighting" element={<SoundLighting />} />
              
              <Route path="/services/:category" element={<Services />} />
              <Route path="/services/outdoor-cinema" element={<OutdoorCinema />} />
              <Route path="/services/karaoke" element={<Karaoke />} />
              <Route path="/services/silent-headsets" element={<SilentHeadsets />} />
              <Route path="/services/dance-floors" element={<DanceFloors />} />
              <Route path="/services/led-letters" element={<LedLetters />} />
              
              {/* Entertainment sub-services */}
              <Route path="/services/entertainment/magicians" element={<Magicians />} />
              <Route path="/services/entertainment/comedians" element={<Comedians />} />
              <Route path="/services/entertainment/djs" element={<DJs />} />
              <Route path="/services/entertainment/emcees" element={<Emcees />} />
              <Route path="/services/entertainment/dancers" element={<Dancers />} />
              <Route path="/services/entertainment/bands" element={<Bands />} />
              <Route path="/services/entertainment/singers" element={<Singers />} />
              <Route path="/services/entertainment/saxophonists" element={<Saxophonists />} />
              
              {/* Photobooth sub-services */}
              <Route path="/services/photobooth/360-booth" element={<Booth360 />} />
              <Route path="/services/photobooth/original-booth" element={<OriginalBooth />} />
              <Route path="/services/photobooth/mirror-booth" element={<MirrorBooth />} />
              <Route path="/services/photobooth/mirror-booth-backdrop" element={<MirrorBoothBackdrop />} />
              
              {/* Silent Headsets sub-services */}
              <Route path="/services/silent-headsets/silent-disco" element={<SilentDisco />} />
              <Route path="/services/silent-headsets/corporate-headsets" element={<CorporateHeadsets />} />
              <Route path="/services/silent-headsets/silent-yoga" element={<SilentYoga />} />
              
              {/* Sound & Lighting sub-services */}
              <Route path="/services/sound-lighting/festoon-lights" element={<FestoonLights />} />
              
              <Route path="/events" element={<Events />} />
              <Route path="/events/corporate" element={<Corporate />} />
              <Route path="/events/wedding-package" element={<Weddings />} />
              <Route path="/events/parties" element={<Parties />} />
              <Route path="/events/proposals" element={<Proposals />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/privacy" element={<Privacy />} />
              <Route path="/terms" element={<Terms />} />
              
              {/* Explicit 404 route */}
              <Route path="/404" element={<NotFound />} />
              
              {/* Blog category and post routes - after fixed routes, before catch-all */}
              <Route path="/:category" element={<BlogCategory />} />
              <Route path="/:category/:slug" element={<BlogPost />} />
              
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
          </Routes>
      </Layout>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
