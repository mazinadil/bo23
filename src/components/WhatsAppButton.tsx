import { useState, useEffect } from "react";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const [show, setShow] = useState(false);
  const [whatsappUrl, setWhatsappUrl] = useState("https://wa.me/971562683212");

  useEffect(() => {
    const timer = setTimeout(() => setShow(true), 2000);
    
    if (typeof window !== "undefined") {
      const currentUrl = 'www.boxentertainment.ae' + window.location.pathname;
      const message = `Hi, I have a question about ${currentUrl}`;
      setWhatsappUrl(`https://wa.me/971562683212?text=${encodeURIComponent(message)}`);
    }
    
    return () => clearTimeout(timer);
  }, []);

  if (!show) return null;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#20BA5A] transition-all hover:scale-110 animate-float"
      aria-label="Contact us on WhatsApp"
    >
      <MessageCircle size={28} />
    </a>
  );
};

export default WhatsAppButton;
