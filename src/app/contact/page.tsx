"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import React, { useState } from "react";

import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",    phone: "",    email: "",    city: "",    serviceNeeded: "",    projectDetails: ""
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const submissionData = {
      Timestamp: new Date().toISOString(),
      Name: formData.name,
      Phone: formData.phone,
      Email: formData.email,
      City: formData.city,
      "Service Needed": formData.serviceNeeded,
      "Project Details": formData.projectDetails,
      "Source Page": window.location.href
    };
    console.log("Lead Data Submitted:", submissionData);
    // In a real application, this would send data to an API endpoint
    // await fetch('/api/submit-lead', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify(submissionData),
    // });
    setIsSubmitted(true);
    setFormData({
      name: "",      phone: "",      email: "",      city: "",      serviceNeeded: "",      projectDetails: ""
    });
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

        <div className="relative isolate min-h-screen pt-20 lg:pt-24 flex items-center justify-center bg-background text-foreground">
          <div className="relative mx-auto px-6 py-12 lg:px-8 max-w-2xl w-full">
            <div className="text-center mb-10">
              <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl mb-4">
                Get Your Free Estimate
              </h1>
              <p className="mt-4 text-lg text-foreground/80">
                Tell us about your project, and we'll get back to you with a personalized quote.
              </p>
            </div>
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
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-foreground">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 bg-card text-foreground border border-border rounded-md shadow-sm focus:ring-primary-cta focus:border-primary-cta sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-foreground">
                    Phone
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 bg-card text-foreground border border-border rounded-md shadow-sm focus:ring-primary-cta focus:border-primary-cta sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-foreground">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 bg-card text-foreground border border-border rounded-md shadow-sm focus:ring-primary-cta focus:border-primary-cta sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="city" className="block text-sm font-medium text-foreground">
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    value={formData.city}
                    onChange={handleChange}
                    required
                    className="mt-1 block w-full px-4 py-2 bg-card text-foreground border border-border rounded-md shadow-sm focus:ring-primary-cta focus:border-primary-cta sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="serviceNeeded" className="block text-sm font-medium text-foreground">
                    Service Needed
                  </label>
                  <input
                    type="text"
                    id="serviceNeeded"
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleChange}
                    placeholder="e.g., Hardwood Installation, Refinishing, LVP"
                    className="mt-1 block w-full px-4 py-2 bg-card text-foreground border border-border rounded-md shadow-sm focus:ring-primary-cta focus:border-primary-cta sm:text-sm"
                  />
                </div>
                <div>
                  <label htmlFor="projectDetails" className="block text-sm font-medium text-foreground">
                    Project Details
                  </label>
                  <textarea
                    id="projectDetails"
                    name="projectDetails"
                    rows={4}
                    value={formData.projectDetails}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 bg-card text-foreground border border-border rounded-md shadow-sm focus:ring-primary-cta focus:border-primary-cta sm:text-sm"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full inline-flex justify-center py-3 px-6 border border-transparent rounded-md shadow-sm text-lg font-medium text-primary-cta-foreground bg-primary-cta hover:bg-primary-cta/80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-cta transition-colors"
                >
                  Submit Request
                </button>
              </form>
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