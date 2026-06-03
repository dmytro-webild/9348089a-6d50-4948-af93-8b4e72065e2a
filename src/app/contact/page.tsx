"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";

import FooterBase from "@/components/sections/footer/FooterBase";
import NavbarLayoutFloatingInline from "@/components/navbar/NavbarLayoutFloatingInline";
import ContactSplit from "@/components/sections/contact/ContactSplit";

export default function ContactPage() {
  const phoneNumber = "+13364297774";

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
          <ContactSplit
            tag="Contact Us"
            title="Request Your Free Flooring Estimate"
            description="Whether you're looking for a new installation, refinishing, or repairs, we're here to help. Fill out the form below to get your free, no-obligation estimate, or reach us directly at (336) 429-7774. We look forward to hearing from you!"
            imageSrc="http://img.b2bpic.net/free-photo/view-young-handsome-worker-using-roller_23-2148782006.jpg"
            imageAlt="Worker applying finish to a newly installed hardwood floor"
            mediaAnimation="slide-up"
            mediaPosition="right"
            inputPlaceholder="Your Name, Email, Phone, & Project Details"
            buttonText="Submit Estimate Request"
            onSubmit={(data) => console.log(data)}
            background={{ variant: 'plain' }}
            useInvertedBackground={false}
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
