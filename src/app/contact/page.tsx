"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle, Phone } from "lucide-react"; // Import Lucide icons

import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function ContactPage() {
  const router = useRouter();
  const phoneNumber = "+13364297774"; // Consistent phone number

  const [formData, setFormData] = useState({
    fullName: "",    emailAddress: "",    phoneNumber: "",    serviceNeeded: "",    projectDescription: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | JSX.Element>("");
  const [redirectSeconds, setRedirectSeconds] = useState(10);
  const redirectTimerRef = useRef<NodeJS.Timeout | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/submit-lead", {
        method: "POST",        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
      });

      if (!response.ok) {
        const errorData = await response.json();
        // The user explicitly requested a specific error message for any failure
        throw new Error(errorData.message || "Failed to submit lead.");
      }

      setIsSubmitted(true);
      // Start redirect countdown
      redirectTimerRef.current = setInterval(() => {
        setRedirectSeconds((prev) => {
          if (prev <= 1) {
            if (redirectTimerRef.current) clearInterval(redirectTimerRef.current);
            router.push("/"); // Redirect to homepage
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    } catch (error: any) {
      // Display the user-requested error message
      setErrorMessage(
        <>
          Something went wrong. Please try again or{" "}
          <a href={`tel:${phoneNumber}`} className="underline font-medium">
            call us at (336) 429-7774
          </a>.
        </>
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  // Clear interval on unmount
  useEffect(() => {
    return () => {
      if (redirectTimerRef.current) {
        clearInterval(redirectTimerRef.current);
      }
    };
  }, []);

  const handleCallNow = () => {
    // Existing handleCallNow logic from page.tsx
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

  const navbarNavItems = [
    { name: "Home", id: "/" },
    { name: "Why Us", id: "/#why-us" },
    { name: "Services", id: "/#services" },
    { name: "Gallery", id: "/#gallery" },
    { name: "Reviews", id: "/#reviews" },
    { name: "About", id: "/#about" },
    { name: "FAQ", id: "/#faq" },
    { name: "Contact", id: "/contact" }
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
            navItems={navbarNavItems}
            brandName="Stevenson's Hardwood Floors"
            button={{ text: "Get Free Estimate", href: "/contact" }}
            logoClassName="text-2xl font-semibold"
          />
        </div>

        <div id="contact-form-section" data-section="contact-form-section" className="relative z-10 flex min-h-[70vh] items-center justify-center py-16 px-4">
          {isSubmitted ? (
            <div className="flex flex-col items-center justify-center space-y-6 text-center max-w-xl p-8 bg-card rounded-lg shadow-xl">
              <CheckCircle className="h-24 w-24 text-green-500" />
              <h2 className="text-4xl font-bold text-foreground">Thank You!</h2>
              <p className="text-xl text-foreground/80">
                Your information has been successfully submitted.
              </p>
              <p className="text-lg text-foreground/80">
                A member of the Stevenson's Hardwood Floors team will contact you shortly regarding your flooring project and free estimate.
              </p>
              <p className="text-lg text-foreground/80">
                For immediate assistance, call:
              </p>
              <a href={`tel:${phoneNumber}`} className="text-2xl font-bold text-primary-cta hover:underline">
                (336) 429-7774
              </a>
              <button
                onClick={handleCallNow}
                className="inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary-cta text-primary-cta-foreground hover:bg-primary-cta/90 h-12 px-6 py-2"
              >
                <Phone className="mr-2 h-5 w-5" />
                Call Now
              </button>
              <p className="text-sm text-foreground/60">
                Redirecting to homepage in {redirectSeconds} seconds...
              </p>
            </div>
          ) : (
            <div className="w-full max-w-lg p-8 space-y-6 bg-card rounded-lg shadow-xl">
              <h2 className="text-3xl font-bold text-center text-foreground">Request Your Free Flooring Estimate</h2>
              <p className="text-center text-foreground/80">
                Tell us about your project and a member of our team will contact you shortly.
              </p>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label htmlFor="fullName" className="block text-sm font-medium text-foreground">Full Name</label>
                  <input
                    type="text"
                    id="fullName"
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-cta focus:ring-primary-cta bg-background text-foreground py-2 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-sm font-medium text-foreground">Phone Number</label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    name="phoneNumber"
                    value={formData.phoneNumber}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-cta focus:ring-primary-cta bg-background text-foreground py-2 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="emailAddress" className="block text-sm font-medium text-foreground">Email Address</label>
                  <input
                    type="email"
                    id="emailAddress"
                    name="emailAddress"
                    value={formData.emailAddress}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-cta focus:ring-primary-cta bg-background text-foreground py-2 px-3"
                  />
                </div>
                <div>
                  <label htmlFor="serviceNeeded" className="block text-sm font-medium text-foreground">Service Needed</label>
                  <select
                    id="serviceNeeded"
                    name="serviceNeeded"
                    value={formData.serviceNeeded}
                    onChange={handleInputChange}
                    required
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-cta focus:ring-primary-cta bg-background text-foreground py-2 px-3"
                  >
                    <option value="">Select a Service</option>
                    <option value="Hardwood Floor Installation">Hardwood Floor Installation</option>
                    <option value="Hardwood Floor Refinishing">Hardwood Floor Refinishing</option>
                    <option value="Hardwood Floor Staining">Hardwood Floor Staining</option>
                    <option value="Floor Sanding">Floor Sanding</option>
                    <option value="Luxury Vinyl Plank Installation">Luxury Vinyl Plank Installation</option>
                    <option value="Laminate Flooring Installation">Laminate Flooring Installation</option>
                    <option value="Floor Repairs">Floor Repairs</option>
                    <option value="Custom Flooring">Custom Flooring</option>
                    <option value="Commercial Flooring">Commercial Flooring</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="projectDescription" className="block text-sm font-medium text-foreground">Project Description (Optional)</label>
                  <textarea
                    id="projectDescription"
                    name="projectDescription"
                    rows={4}
                    value={formData.projectDescription}
                    onChange={handleInputChange}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary-cta focus:ring-primary-cta bg-background text-foreground py-2 px-3"
                  ></textarea>
                </div>
                {errorMessage && (
                  <p className="text-red-500 text-sm">{errorMessage}</p>
                )}
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background bg-primary-cta text-primary-cta-foreground hover:bg-primary-cta/90 h-12 px-6 py-2"
                >
                  {isSubmitting ? "Submitting..." : "Get My Free Estimate"}
                </button>
              </form>
            </div>
          )}
        </div>

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
