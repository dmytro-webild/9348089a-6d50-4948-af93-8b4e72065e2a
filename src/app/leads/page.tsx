"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";

import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function LeadsDashboardPage() {
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

        <div className="relative isolate min-h-screen pt-20 lg:pt-24 flex items-center justify-center bg-background text-foreground">
          <div className="relative mx-auto px-6 py-12 lg:px-8 max-w-4xl w-full text-center">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4">
              Lead Submission Dashboard
            </h1>
            <p className="mt-4 text-xl text-foreground/80">
              This page will display lead data and provide management tools.
            </p>
            <p className="mt-2 text-md text-foreground/70">
              (Requires backend integration with Google Sheets API to fetch and display data.
              Frontend component for data display, e.g., a table, would be implemented here once backend is connected.)
            </p>
            <div className="mt-10 p-6 bg-card rounded-lg shadow-lg">
                <h2 className="text-2xl font-semibold mb-4 text-foreground">Columns for Lead Data:</h2>
                <ul className="list-disc list-inside text-left mx-auto max-w-md text-foreground/90">
                    <li>Timestamp</li>
                    <li>Name</li>
                    <li>Phone</li>
                    <li>Email</li>
                    <li>City</li>
                    <li>Service Needed</li>
                    <li>Project Details</li>
                    <li>Source Page</li>
                </ul>
            </div>
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