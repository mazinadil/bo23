import { ReactNode } from "react";
import { useIntersectionObserver } from "@/hooks/useIntersectionObserver";
import Header from "./Header";
import WhatsAppButton from "./WhatsAppButton";
import Footer from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const { ref, isVisible } = useIntersectionObserver({ threshold: 0, triggerOnce: true });

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow">
        {children}
      </main>
      <div ref={ref}>{isVisible && <Footer />}</div>
      <WhatsAppButton />
    </div>
  );
};

export default Layout;
