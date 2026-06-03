"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import React, { useState, useEffect } from "react";
import { CheckCircle } from "lucide-react";
import { useRouter } from "next/navigation";

import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterBase from "@/components/sections/footer/FooterBase";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [redirectSeconds, setRedirectSeconds] = useState(10);
  const router = useRouter();

  const businessPhoneNumber = "+1 (336) 429-7774";
  const displayPhoneNumber = "(336) 429-7774";
  const businessEmail = "info@stevensonhardwoodfloors.com";

  useEffect(() => {
    if (isSubmitted) {
      const timer = setInterval(() => {
        setRedirectSeconds((prev) => {
          if (prev === 1) {
            clearInterval(timer);
            router.push("/");
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      // Clear the timer if the component unmounts or submission state changes
      return () => clearInterval(timer);
    }
  }, [isSubmitted, router]);

  const handleContactSubmit = async (data: Record<string, string>) => {
    const submissionData = {
      Timestamp: new Date().toISOString(),
      Name: data.name,
      Phone: data.phone,
      Email: data.email,
      City: data.city,
      "Service Needed": data.serviceNeeded || "N/A",      "Project Details": data.projectDetails || "N/A",      "Source Page": window.location.href,
    };
    console.log("Lead Data Submitted:", submissionData);
    // In a real application, this would send data to an API endpoint
    // await fetch('/api/submit-lead', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(submissionData),
    // });
    await new Promise((resolve) => setTimeout(resolve, 1000)); // Simulate API call
    setIsSubmitted(true);
  };

  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="entrance-slide"
      borderRadius="rounded"
      contentWidth="medium"
      sizing="mediumLargeSizeMediumTitles"
      background="fluid"
      cardStyle="glass-depth"
      primaryButtonStyle="shadow"
      secondaryButtonStyle="solid"
      headingFontWeight="light"
    >
      <ReactLenis root>
        <div id="nav" data-section="nav">
          <NavbarLayoutFloatingInline
            navItems={[
              { name: "Home", id: "/" },
              { name: "Why Us", id: "/#why-us" },
              { name: "Services", id: "/#services" },
              { name: "Gallery", id: "/#gallery" },
              { name: "Reviews", id: "/#reviews" },
              { name: "About", id: "/#about" },
              { name: "FAQ", id: "/#faq" },
              { name: "Contact", id: "/contact" }
            ]}
            brandName="Stevenson's Hardwood Floors"
            button={{ text: "Get Free Estimate", href: "/contact" }}
            logoClassName="text-2xl font-semibold"
          />
        </div>

        <div id="contact-form-section" data-section="contact-form-section" className="relative isolate min-h-screen pt-20 lg:pt-24 flex items-center justify-center bg-background text-foreground">
          <div className="relative mx-auto px-6 py-12 lg:px-8 max-w-2xl w-full">
            {isSubmitted ? (
              <div className="bg-card text-foreground p-8 rounded-lg shadow-xl text-center border border-accent/20">
                <CheckCircle className="h-16 w-16 text-green-500 mx-auto mb-6" />
                <h2 className="text-4xl font-bold tracking-tight mb-4 text-primary-cta">Thank You!</h2>
                <p className="text-lg mb-6 leading-relaxed">
                  Your request has been successfully submitted.
                </p>
                <p className="mb-6 leading-relaxed">
                  We appreciate your interest in Stevenson's Hardwood Floors. A member of our team will review your information and contact you shortly to discuss your flooring project and provide your free estimate.
                </p>
                <p className="text-lg font-semibold mb-4">
                  If you need immediate assistance, call us at:
                </p>
                <a
                  href={`tel:${businessPhoneNumber}`}
                  className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-base font-semibold transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 h-10 px-8 py-2 bg-primary-cta text-primary-cta-text hover:bg-primary-cta/90 shadow-md text-xl mb-6"
                >
                  <span className="relative z-10">{displayPhoneNumber}</span>
                </a>
                <p className="text-foreground/70 text-sm italic mt-4">
                  Serving North Carolina homeowners and businesses with trusted flooring craftsmanship for over 30 years.
                </p>
                <p className="mt-8 text-sm text-foreground/60">
                  Redirecting you back to the homepage in {redirectSeconds} seconds...
                </p>
              </div>
            ) : (
              <>
                <ContactSplitForm
                  title="Request Your Free Flooring Estimate"
                  description="Tell us about your project and a flooring specialist will contact you shortly with a free estimate."
                  inputs={[
                    { name: "name", type: "text", placeholder: "Your Name", required: true },
                    { name: "phone", type: "tel", placeholder: "Your Phone Number", required: true },
                    { name: "email", type: "email", placeholder: "Your Email", required: true },
                    { name: "city", type: "text", placeholder: "Your City", required: true },
                    { name: "serviceNeeded", type: "text", placeholder: "e.g., Hardwood Installation, Refinishing, LVP", required: false }
                  ]}
                  textarea={{ name: "projectDetails", placeholder: "Tell us about your project details, dimensions, or any specific requirements.", rows: 4, required: false }}
                  buttonText="Submit Request"
                  onSubmit={handleContactSubmit}
                  useInvertedBackground={false}
                />
                <div className="text-center mt-8 text-foreground/80">
                  <p className="text-lg">Prefer to speak with us directly?</p>
                  <p className="mt-2 text-xl font-semibold">Call us: <a href={`tel:${businessPhoneNumber}`} className="text-primary-cta hover:underline">{displayPhoneNumber}</a></p>
                  <p className="text-lg">Email us: <a href={`mailto:${businessEmail}`} className="text-primary-cta hover:underline">{businessEmail}</a></p>
                  <p className="mt-4 text-sm">Stevenson's Hardwood Floors | Serving Elkin, NC & surrounding areas.</p>
                </div>
              </>
            )}
          </div>
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            columns={[
              {
                title: "Services",                items: [
                  { label: "Hardwood Installation", href: "/#services" },
                  { label: "Refinishing & Sanding", href: "/#services" },
                  { label: "LVP & Laminate", href: "/#services" },
                  { label: "Floor Repairs", href: "/#services" },
                  { label: "Custom Solutions", href: "/#services" }
                ]
              },
              {
                title: "Company",                items: [
                  { label: "About Us", href: "/#about" },
                  { label: "Our Work", href: "/#gallery" },
                  { label: "Testimonials", href: "/#reviews" },
                  { label: "Service Areas", href: "/#service-areas" },
                  { label: "FAQs", href: "/#faq" }
                ]
              },
              {
                title: "Contact",                items: [
                  { label: "Get Free Estimate", href: "/contact" },
                  { label: "Call Us", href: `tel:${businessPhoneNumber}` },
                  { label: "Email Us", href: `mailto:${businessEmail}` },
                  { label: "Visit Us", href: "https://maps.google.com/?q=Elkin,North Carolina" }
                ]
              }
            ]}
            logoText="Stevenson's Hardwood Floors"
            copyrightText="© 2024 Stevenson's Hardwood Floors. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}