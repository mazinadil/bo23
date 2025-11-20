import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";

const Privacy = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Privacy Policy | Box Entertainment Dubai</title>
        <meta name="description" content="Privacy Policy for Box Entertainment. Learn how we collect, use, and protect your personal information." />
        <link rel="canonical" href="https://box-sparkle-site.vercel.app/privacy" />
      </Helmet>
      
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <Breadcrumbs items={[{ label: "Privacy Policy" }]} />

        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">
          Privacy <span className="gradient-text">Policy</span>
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <div>
            <p className="text-muted-foreground leading-relaxed mb-6">
              At Box Entertainment, we respect your privacy and are committed to protecting your personal information. This Privacy Policy outlines how we collect, use, and protect your data when you interact with us, our website, and our services.
            </p>
          </div>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Information We Collect</h2>
            <p className="text-muted-foreground mb-4">We may collect and process the following types of personal data:</p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Contact Information:</strong> Name, email address, phone number, and any other contact details you provide when contacting us or using our services.</li>
              <li><strong className="text-foreground">Event Information:</strong> Details related to your events, such as dates, venues, and preferences.</li>
              <li><strong className="text-foreground">Payment Information:</strong> Billing details and payment method when you make purchases or bookings.</li>
              <li><strong className="text-foreground">Technical Data:</strong> Information about your device, IP address, browser type, and usage patterns when interacting with our website.</li>
              <li><strong className="text-foreground">Marketing Preferences:</strong> Your preferences for receiving promotional content and offers.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">How We Use Your Information</h2>
            <p className="text-muted-foreground mb-4">We use the collected data to:</p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li>Provide you with our services, including event planning, entertainment packages, and related offerings.</li>
              <li>Process your bookings and transactions.</li>
              <li>Communicate with you about your event, including confirmations, updates, and follow-ups.</li>
              <li>Personalize your experience by tailoring content and offers to your preferences.</li>
              <li>Improve our website, services, and customer support based on your feedback and usage.</li>
              <li>Send promotional communications, if you've opted to receive them, regarding our latest events, offers, and services.</li>
            </ul>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Sharing Your Information</h2>
            <p className="text-muted-foreground mb-4">We may share your personal information:</p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">With Third-Party Service Providers:</strong> Who assist us in operating our business, providing services, and processing payments (e.g., event partners, payment processors).</li>
              <li><strong className="text-foreground">With Legal Authorities:</strong> When required by law or necessary to protect our rights, safety, or property.</li>
              <li><strong className="text-foreground">With Your Consent:</strong> If you request or consent to share your information with other parties.</li>
            </ul>
            <p className="text-muted-foreground mt-4">We do not sell your personal information to third parties.</p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Data Security</h2>
            <p className="text-muted-foreground">
              We take the security of your personal information seriously. We use appropriate technical and organizational measures to protect your data from unauthorized access, loss, or misuse. However, no method of transmission over the internet or electronic storage is completely secure. While we strive to use commercially acceptable means to protect your information, we cannot guarantee absolute security.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Your Rights</h2>
            <p className="text-muted-foreground mb-4">You have the following rights regarding your personal data:</p>
            <ul className="list-disc ml-6 space-y-2 text-muted-foreground">
              <li><strong className="text-foreground">Access:</strong> You can request a copy of the personal data we hold about you.</li>
              <li><strong className="text-foreground">Rectification:</strong> You can request corrections if any of the information we hold is inaccurate.</li>
              <li><strong className="text-foreground">Deletion:</strong> You can request the deletion of your personal data, subject to legal obligations.</li>
              <li><strong className="text-foreground">Objection:</strong> You can object to the processing of your data for certain purposes, such as marketing.</li>
              <li><strong className="text-foreground">Data Portability:</strong> You can request that we transfer your data to another service provider.</li>
            </ul>
            <p className="text-muted-foreground mt-4">
              To exercise any of these rights, please{" "}
              <Link to="/contact" className="text-primary hover:underline font-semibold">
                contact us
              </Link>.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Cookies and Tracking Technologies</h2>
            <p className="text-muted-foreground mb-4">
              Our website may use cookies and similar technologies to enhance user experience and gather analytical data about site traffic and usage. Cookies are small files stored on your device that help us improve the performance and functionality of our website.
            </p>
            <p className="text-muted-foreground">
              You can control and manage cookies through your browser settings. However, disabling cookies may affect certain functionalities on our website.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Links to Third-Party Websites</h2>
            <p className="text-muted-foreground">
              Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these external sites. We encourage you to review the privacy policies of any websites you visit from our platform.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Changes to Our Privacy Policy</h2>
            <p className="text-muted-foreground">
              We may update this Privacy Policy from time to time. Any changes will be posted on this page with an updated revision date. We encourage you to review this page periodically to stay informed of how we protect your data.
            </p>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy or our data practices, please{" "}
              <Link to="/contact" className="text-primary hover:underline font-semibold">
                visit our contact page
              </Link>
              {" "}to get in touch with us.
            </p>
          </section>
          <div className="mt-12 pt-8 border-t border-border/30">
            <p className="text-muted-foreground text-center mb-2">
              <strong>Effective Date:</strong> January 2025
            </p>
            <p className="text-muted-foreground text-center italic">
              This Privacy Policy is intended to ensure transparency and build trust as you interact with Box Entertainment.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;
