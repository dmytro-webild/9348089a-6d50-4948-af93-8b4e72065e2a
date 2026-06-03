"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";

import FooterBase from "@/components/sections/footer/FooterBase";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";

// New import for ContactCTA
import ContactCTA from '@/components/sections/contact/ContactCTA';

export default function ContactPage() {
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
              {
                name: "Home",                id: "/"
              },
              {
                name: "Why Us",                id: "/#why-us"
              },
              {
                name: "Services",                id: "/#services"
              },
              {
                name: "Gallery",                id: "/#gallery"
              },
              {
                name: "Reviews",                id: "/#reviews"
              },
              {
                name: "About",                id: "/#about"
              },
              {
                name: "FAQ",                id: "/#faq"
              },
              {
                name: "Contact",                id: "/contact"
              }
            ]}
            brandName="Stevenson's Hardwood Floors"
            button={{
              text: "Get Free Estimate",              href: "/contact"
            }}
            logoClassName="text-2xl font-semibold"
          />
        </div>

        <div id="contact-form" data-section="contact-form">
          <ContactCTA
            tag="Get in Touch"
            title="Request Your Free Flooring Estimate"
            description="Tell us about your project and a flooring specialist will contact you shortly with a free estimate. Call us directly at (336) 429-7774, or email us at info@stevensonhardwoodfloors.com. We are located in Elkin, NC, and serve surrounding communities."
            buttons={[
              {
                text: "Call Now",                onClick: handleCallNow
              },
              {
                text: "Email Us",                href: "mailto:info@stevensonhardwoodfloors.com"
              }
            ]}
            background={{ variant: "radial-gradient" }}
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            columns={[
              {
                title: "Services",                items: [
                  {
                    label: "Hardwood Installation",                    href: "/#services"
                  },
                  {
                    label: "Refinishing & Sanding",                    href: "/#services"
                  },
                  {
                    label: "LVP & Laminate",                    href: "/#services"
                  },
                  {
                    label: "Floor Repairs",                    href: "/#services"
                  },
                  {
                    label: "Custom Solutions",                    href: "/#services"
                  }
                ]
              },
              {
                title: "Company",                items: [
                  {
                    label: "About Us",                    href: "/#about"
                  },
                  {
                    label: "Our Work",                    href: "/#gallery"
                  },
                  {
                    label: "Testimonials",                    href: "/#reviews"
                  },
                  {
                    label: "Service Areas",                    href: "/#service-areas"
                  },
                  {
                    label: "FAQs",                    href: "/#faq"
                  }
                ]
              },
              {
                title: "Contact",                items: [
                  {
                    label: "Get Free Estimate",                    href: "/contact"
                  },
                  {
                    label: "Call Us",                    href: "tel:+13364297774"
                  },
                  {
                    label: "Email Us",                    href: "mailto:info@stevensonhardwoodfloors.com"
                  },
                  {
                    label: "Visit Us",                    href: "https://maps.google.com/?q=Elkin,North Carolina"
                  }
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