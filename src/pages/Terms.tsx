import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import Breadcrumbs from "@/components/Breadcrumbs";

const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <Helmet>
        <title>Terms & Conditions | Box Entertainment Dubai</title>
        <meta name="description" content="Terms and Conditions for Box Entertainment Dubai. Read our booking policies, cancellation terms, liability information, and service agreements for entertainment, photobooths, LED letters, silent headsets, and event services." />
        <link rel="canonical" href="https://box-sparkle-site.vercel.app/terms" />
      </Helmet>
      
      <div className="container mx-auto px-4 lg:px-8 max-w-4xl">
        <Breadcrumbs items={[{ label: "Terms & Conditions" }]} />

        <h1 className="font-heading text-4xl md:text-5xl font-bold mb-8">
          Box Entertainment – Terms & Conditions
        </h1>
        
        <div className="prose prose-invert max-w-none space-y-8">
          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">1. Introduction</h2>
            <div className="text-muted-foreground">
              <p>
                These Terms and Conditions ("Agreement") govern the use of Box Entertainment including but not limited to Entertainment, Lights and Sound, Silent Headsets Hire, 360 video booths, photobooths, LED letters, Outdoor Cinema and other event package services (the "Services"). By booking any of our Services, you agree to comply with and be bound by the following terms.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">2. Booking and Payments</h2>
            <div className="text-muted-foreground space-y-3">
              <p><strong className="text-foreground">Deposits:</strong> A non-refundable deposit of 50% is required at the time of booking to secure your event date. The balance is due 7 days prior to the event.</p>
              <p><strong className="text-foreground">Payment Methods:</strong> We accept payments via bank transfer, credit card, and other methods as agreed.</p>
              <p><strong className="text-foreground">Late Payments:</strong> If full payment is not received by the due date, Box Entertainment reserves the right to cancel the booking without refund.</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">3. Cancellations and Refunds</h2>
            <div className="text-muted-foreground space-y-3">
              <p><strong className="text-foreground">Client Cancellations:</strong> If you need to cancel your booking, you must do so in writing. Cancellations made more than 14 days before the event will forfeit the deposit. Cancellations within 14 days of the event will incur a full charge.</p>
              <p><strong className="text-foreground">Force Majeure:</strong> Box Entertainment will not be liable for cancellations due to circumstances beyond our control (e.g., natural disasters, pandemics, or acts of government). In such cases, we will attempt to reschedule or provide a credit for future use.</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">4. Changes to Booking</h2>
            <div className="text-muted-foreground">
              <p>
                Any changes to the booking (e.g., timings, locations, or services required) must be made in writing at least 7 days prior to the event. Changes requested less than 7 days before the event may incur additional fees or may not be accommodated depending on availability.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">5. Use of Services</h2>
            <div className="text-muted-foreground space-y-3">
              <p><strong className="text-foreground">Equipment Usage:</strong> All equipment provided by Box Entertainment must be used with care. Clients are responsible for any damage caused by misuse, negligence, or improper handling during the event.</p>
              <p><strong className="text-foreground">Supervision:</strong> Some services, such as photobooths or video booths, may require supervision. It is the client's responsibility to ensure guests follow instructions for proper use.</p>
              <p><strong className="text-foreground">Silent Headsets:</strong> Silent headsets must be returned in the same condition as they were provided. Any missing or damaged items will incur replacement costs.</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">6. Health and Safety</h2>
            <div className="text-muted-foreground">
              <p>
                Box Entertainment ensures that all equipment is regularly inspected and in good working order. However, it is the client's responsibility to ensure that guests use the equipment safely and follow any instructions provided by our team.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">7. Liability</h2>
            <div className="text-muted-foreground space-y-3">
              <p><strong className="text-foreground">Damage to Property:</strong> Box Entertainment is not responsible for any damage to the venue or property during the use of our services unless caused by our direct negligence.</p>
              <p><strong className="text-foreground">Personal Injury:</strong> Box Entertainment is not liable for any injuries sustained by guests during the event, except in cases where such injury is directly caused by our negligence.</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">8. Media and Promotion</h2>
            <div className="text-muted-foreground space-y-3">
              <p><strong className="text-foreground">Photography and Videography:</strong> Box Entertainment reserves the right to use any photos or videos captured during your event for promotional purposes, unless otherwise requested in writing by the client.</p>
              <p><strong className="text-foreground">Client Media:</strong> If the client or guests capture their own media using our services, Box Entertainment is not responsible for the storage, loss, or misuse of such media.</p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">9. Privacy</h2>
            <div className="text-muted-foreground">
              <p>
                We are committed to protecting your privacy and will only use the information collected during your booking process to provide and improve our services. We will not share your personal information with third parties without your consent unless required by law.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">10. Governing Law</h2>
            <div className="text-muted-foreground">
              <p>
                This Agreement is governed by and construed in accordance with the laws of the United Arab Emirates (UAE). Any disputes arising out of or in connection with this Agreement shall be subject to the exclusive jurisdiction of the courts of the UAE.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">11. Amendments</h2>
            <div className="text-muted-foreground">
              <p>
                Box Entertainment reserves the right to modify these Terms & Conditions at any time. Clients will be notified of any significant changes in writing.
              </p>
            </div>
          </section>

          <section>
            <h2 className="font-heading text-2xl font-bold mb-4">12. Contact Information</h2>
            <p className="text-muted-foreground">
              For any questions or concerns regarding these Terms & Conditions, please{" "}
              <Link to="/contact" className="text-primary hover:underline font-semibold">
                visit our contact page
              </Link>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Terms;
