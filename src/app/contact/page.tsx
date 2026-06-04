"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";

import ContactSplit from "@/components/sections/contact/ContactSplit";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterBase from "@/components/sections/footer/FooterBase";
import { useState } from "react";
import { CheckCircle, XCircle } from "lucide-react";

export default function ContactPage() {
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState<string>('');
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

  const handleSubmit = async (email: string) => {
    setSubmissionStatus('submitting');
    setErrorMessage('');

    try {
      // Simulate an API call
      await new Promise(resolve => setTimeout(resolve, 1500));

      // Simulate success or error based on email content for testing, or always success for production
      if (email.includes('fail')) {
        throw new Error('Something went wrong with your submission. Please try again.');
      }

      setSubmissionStatus('success');
    } catch (error: any) {
      setSubmissionStatus('error');
      setErrorMessage(error.message || 'An unexpected error occurred. Please try again later.');
      console.error('Form submission error:', error);
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

        <div id="contact" data-section="contact">
          {submissionStatus === 'success' ? (
            <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
              <CheckCircle className="h-16 w-16 text-green-500 mb-4" />
              <h2 className="text-4xl font-bold mb-4">Thank You!</h2>
              <p className="text-lg text-foreground-secondary">Your message has been successfully submitted. We will get back to you shortly.</p>
            </div>
          ) : submissionStatus === 'error' ? (
            <div className="flex flex-col items-center justify-center min-h-[50vh] px-4 text-center">
              <XCircle className="h-16 w-16 text-red-500 mb-4" />
              <h2 className="text-4xl font-bold mb-4">Submission Failed</h2>
              <p className="text-lg text-foreground-secondary">{errorMessage}</p>
              <button
                onClick={() => setSubmissionStatus('idle')}
                className="mt-6 px-6 py-3 bg-primary-cta text-primary-cta-foreground rounded-lg hover:bg-primary-cta/90 transition-colors"
              >
                Try Again
              </button>
            </div>
          ) : (
            <ContactSplit
              tag="Contact Us"
              title="Get Your Free Flooring Estimate Today!"
              description="Ready to transform your floors? Fill out the form below or give us a call to schedule your free, no-obligation estimate. We look forward to hearing from you!"
              background={{ variant: "radial-gradient" }}
              useInvertedBackground={false}
              imageSrc="https://img.b2bpic.net/free-photo/carpenter-working-with-wooden-planks_23-2149141042.jpg"
              imageAlt="Contact us for a free estimate"
              mediaAnimation="slide-up"
              inputPlaceholder="Enter your email"
              buttonText="Submit Estimate Request"
              termsText="By clicking Submit, you agree to our Terms and Conditions and Privacy Policy."
              onSubmit={handleSubmit}
              mediaPosition="right"
            />
          )}
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
                    label: "Call Us",                    onClick: handleCallNow
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