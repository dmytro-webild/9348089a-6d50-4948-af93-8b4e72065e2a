"use client";

import { useState } from 'react';
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterBase from "@/components/sections/footer/FooterBase";
import ContactCenter from "@/components/sections/contact/ContactCenter";
import { CheckCircle } from "lucide-react";

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const phoneNumber = "+13364297774";

  const handleCallNow = () => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(phoneNumber)
        .then(() => {
          alert("Phone number copied to clipboard! You can now paste it into your phone dialer or preferred communication app.");
        })
        .catch((err) => {
          console.error("Failed to copy phone number:", err);
          window.location.href = `tel:${phoneNumber}`;
        });
    } else {
      window.location.href = `tel:${phoneNumber}`;
    }
  };

  const handleSubmit = (email: string) => {
    console.log("Form submitted with email:", email);
    // In a real application, you would send this to a backend
    // For this task, we simulate success after a brief delay
    setTimeout(() => {
      setSubmitted(true);
    }, 500);
  };

  const navItems = [
    {
      name: "Home",      id: "/"
    },
    {
      name: "Why Us",      id: "/#why-us"
    },
    {
      name: "Services",      id: "/#services"
    },
    {
      name: "Gallery",      id: "/#gallery"
    },
    {
      name: "Reviews",      id: "/#reviews"
    },
    {
      name: "About",      id: "/#about"
    },
    {
      name: "FAQ",      id: "/#faq"
    },
    {
      name: "Contact",      id: "/contact"
    }
  ];

  const footerColumns = [
    {
      title: "Services",      items: [
        { label: "Hardwood Installation", href: "/#services" },
        { label: "Refinishing & Sanding", href: "/#services" },
        { label: "LVP & Laminate", href: "/#services" },
        { label: "Floor Repairs", href: "/#services" },
        { label: "Custom Solutions", href: "/#services" }
      ]
    },
    {
      title: "Company",      items: [
        { label: "About Us", href: "/#about" },
        { label: "Our Work", href: "/#gallery" },
        { label: "Testimonials", href: "/#reviews" },
        { label: "Service Areas", href: "/#service-areas" },
        { label: "FAQs", href: "/#faq" }
      ]
    },
    {
      title: "Contact",      items: [
        { label: "Get Free Estimate", href: "/contact" },
        { label: "Call Us", onClick: handleCallNow },
        { label: "Email Us", href: "mailto:info@stevensonhardwoodfloors.com" },
        { label: "Visit Us", href: "https://maps.google.com/?q=Elkin,North Carolina" }
      ]
    }
  ];

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
            navItems={navItems}
            brandName="Stevenson's Hardwood Floors"
            button={{
              text: "Get Free Estimate",              href: "/contact"
            }}
            logoClassName="text-2xl font-semibold"
          />
        </div>

        {submitted ? (
          <div id="contact-success" data-section="contact-success" className="min-h-[60vh] flex items-center justify-center py-16 px-4">
            <div className="max-w-md w-full text-center space-y-6">
              <CheckCircle className="mx-auto h-20 w-20 text-green-500" />
              <h2 className="text-3xl font-bold text-foreground">Thank You for Your Inquiry!</h2>
              <p className="text-lg text-foreground-lighter">
                We have received your message and will get back to you shortly.
                In the meantime, feel free to reach out to us directly.
              </p>
              <div className="space-y-2 text-foreground-lighter">
                <p>Phone: {phoneNumber}</p>
                <p>Email: info@stevensonhardwoodfloors.com</p>
              </div>
              <button
                onClick={handleCallNow}
                className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary-cta hover:bg-primary-cta-hover focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-cta"
              >
                Call Now
              </button>
            </div>
          </div>
        ) : (
          <div id="contact" data-section="contact">
            <ContactCenter
              tag="Get in Touch"
              title="Request a Free Estimate"
              description="Fill out the form below to get a no-obligation estimate for your flooring project. We'll get back to you within 24 hours."
              background={{ variant: "plain" }}
              useInvertedBackground={false}
              onSubmit={handleSubmit}
              inputPlaceholder="Your Email"
              buttonText="Send Message"
              termsText="By sending this message you're confirming that you agree with our Terms and Conditions."
            />
          </div>
        )}

        <div id="footer" data-section="footer">
          <FooterBase
            columns={footerColumns}
            logoText="Stevenson's Hardwood Floors"
            copyrightText="© 2024 Stevenson's Hardwood Floors. All rights reserved."
          />
        </div>
      </ReactLenis>
    </ThemeProvider>
  );
}
