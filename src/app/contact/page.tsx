"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import { CheckCircle } from "lucide-react"; // Import for success icon

import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import FooterBase from "@/components/sections/footer/FooterBase";
import ContactSplitForm from '@/components/sections/contact/ContactSplitForm'; // Changed from ContactCenter
import ButtonShiftHover from '@/components/button/ButtonShiftHover/ButtonShiftHover'; // For the call button

export default function ContactPage() {
  const router = useRouter();
  const [submissionStatus, setSubmissionStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
  const [submissionMessage, setSubmissionMessage] = useState<string>('');
  const [redirectCountdown, setRedirectCountdown] = useState<number>(10); // 10 seconds for redirect

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

  const handleSubmit = async (formData: Record<string, string>) => { // Updated signature to accept formData
    setSubmissionStatus('submitting');
    setSubmissionMessage('');

    const email = formData.email; // Extract email from form data
    if (!email) {
      setSubmissionStatus('error');
      setSubmissionMessage('Email address is required.');
      return;
    }

    try {
      const response = await fetch('/api/submit-lead', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }), // Still sending just email to the API
      });

      const data = await response.json();

      if (response.ok) {
        setSubmissionStatus('success');
        setSubmissionMessage(data.message || 'Your submission was successful!');
      } else {
        setSubmissionStatus('error');
        setSubmissionMessage(data.message || 'There was an error with your submission. Please try again.');
      }
    } catch (error) {
      console.error('Submission failed:', error);
      setSubmissionStatus('error');
      setSubmissionMessage('Network error or unexpected issue. Please try again later.');
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;
    let countdownInterval: NodeJS.Timeout;

    if (submissionStatus === 'success') {
      countdownInterval = setInterval(() => {
        setRedirectCountdown((prev) => {
          if (prev <= 1) {
            clearInterval(countdownInterval);
            router.push('/');
            return 0;
          }
          return prev - 1;
        });
      }, 1000);

      timer = setTimeout(() => {
        router.push('/');
      }, 10000); // Redirect after 10 seconds

      return () => {
        clearTimeout(timer);
        clearInterval(countdownInterval);
      };
    }
  }, [submissionStatus, router]);

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

        <div id="contact-form-section" data-section="contact-form">
          {submissionStatus === 'success' ? (
            <div className="relative isolate flex items-center justify-center min-h-[50vh] bg-background px-6 py-24 sm:py-32 lg:px-8">
              <div className="mx-auto max-w-2xl text-center">
                <CheckCircle className="mx-auto h-16 w-16 text-primary-cta mb-4" />
                <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-foreground">
                  Thank You!
                </h2>
                <p className="mt-4 text-lg leading-8 text-foreground">
                  {submissionMessage}
                </p>
                <div className="mt-8 flex flex-col items-center justify-center gap-x-6">
                  <ButtonShiftHover
                    text="Call Now"
                    onClick={handleCallNow}
                    className="mt-4"
                    type="button"
                  />
                  <p className="mt-4 text-sm text-foreground/70">
                    Redirecting to homepage in {redirectCountdown} seconds...
                  </p>
                </div>
              </div>
            </div>
          ) : (
            <ContactSplitForm
              title="Request a Free Estimate"
              description="Fill out the form below to get a no-obligation estimate for your hardwood flooring project."
              inputs={[
                { name: "name", type: "text", placeholder: "Your Name", required: true },
                { name: "email", type: "email", placeholder: "Enter your email address", required: true }
              ]}
              buttonText={submissionStatus === 'submitting' ? 'Submitting...' : 'Send Request'}
              onSubmit={handleSubmit}
              useInvertedBackground={false} // Added required prop
              className="py-16 lg:py-24"
              // Removed tag and tagClassName as they are not in ContactSplitForm's schema
            />
          )}
          {submissionStatus === 'error' && (
            <div className="mx-auto max-w-md text-center text-red-500 mt-4">
              <p>{submissionMessage}</p>
            </div>
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
