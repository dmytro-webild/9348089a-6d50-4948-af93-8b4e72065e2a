"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import React, { useState } from "react";

import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterBase from "@/components/sections/footer/FooterBase";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";

export default function ContactPage() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleContactSubmit = async (data: Record<string, string>) => {
    const submissionData = {
      Timestamp: new Date().toISOString(),
      Name: data.name,
      Phone: data.phone,
      Email: data.email,
      City: data.city,
      "Service Needed": data.serviceNeeded || "N/A",      "Project Details": data.projectDetails || "N/A",      "Source Page": window.location.href
    };
    console.log("Lead Data Submitted:", submissionData);
    // In a real application, this would send data to an API endpoint
    // await fetch('/api/submit-lead', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(submissionData),
    // });
    await new Promise(resolve => setTimeout(resolve, 1000)); // Simulate API call
    setIsSubmitted(true);
  };

  const businessPhoneNumber = "+1 (336) 429-7774";
  const businessEmail = "info@stevensonhardwoodfloors.com";

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
              <div className="bg-primary-cta text-primary-cta-foreground p-6 rounded-lg shadow-lg text-center">
                <h2 className="text-2xl font-bold mb-4">Thank You!</h2>
                <p>Your request has been submitted. We'll be in touch shortly.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="mt-6 px-6 py-3 bg-secondary-cta text-secondary-cta-foreground rounded-md hover:bg-secondary-cta/80 transition-colors"
                >
                  Submit another inquiry
                </button>
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
                  <p className="mt-2 text-xl font-semibold">Call us: <a href={`tel:${businessPhoneNumber}`} className="text-primary-cta hover:underline">{businessPhoneNumber}</a></p>
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
                  { label: "Call Us", href: "tel:+13364297774" },
                  { label: "Email Us", href: "mailto:info@stevensonhardwoodfloors.com" },
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