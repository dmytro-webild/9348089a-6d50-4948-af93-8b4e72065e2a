"use client";

import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ReactLenis from "lenis/react";
import ContactSplitForm from "@/components/sections/contact/ContactSplitForm";
import FooterBase from "@/components/sections/footer/FooterBase";

export default function ContactPage() {
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

        <div id="contact-form" data-section="contact-form">
          <ContactSplitForm
            title="Get a Free Estimate"
            description="Fill out the form below to receive a complimentary, no-obligation estimate for your flooring project."
            inputs={[
              { name: "name", type: "text", placeholder: "Your Name", required: true },
              { name: "phone", type: "tel", placeholder: "Phone Number", required: true },
              { name: "email", type: "email", placeholder: "Email Address", required: true },
              { name: "address", type: "text", placeholder: "Your Address", required: false }
            ]}
            multiSelect={{
              name: "service",              label: "Service You're Interested In",              options: [
                "Hardwood Floor Installation",                "Hardwood Floor Refinishing",                "Floor Sanding",                "Luxury Vinyl Plank Installation",                "Laminate Flooring Installation",                "Floor Repairs",                "Custom Flooring Solutions",                "Other"
              ]
            }}
            buttonText="Submit Request"
            imageSrc="https://img.b2bpic.net/free-photo/table-consulting-paperwork-professional-invest-executive_1418-63.jpg?id=1235723\u0026_wi=2"
            imageAlt="Experienced flooring contractor reviewing paperwork"
            mediaPosition="right"
            useInvertedBackground={false}
            mediaAnimation="slide-up"
            onSubmit={(data) => console.log(data)} // Placeholder onSubmit function
          />
        </div>

        <div id="footer" data-section="footer">
          <FooterBase
            columns={[
              {
                title: "Services",                items: [
                  {
                    label: "Hardwood Installation",                    href: "#services"
                  },
                  {
                    label: "Refinishing & Sanding",                    href: "#services"
                  },
                  {
                    label: "LVP & Laminate",                    href: "#services"
                  },
                  {
                    label: "Floor Repairs",                    href: "#services"
                  },
                  {
                    label: "Custom Solutions",                    href: "#services"
                  }
                ]
              },
              {
                title: "Company",                items: [
                  {
                    label: "About Us",                    href: "#about"
                  },
                  {
                    label: "Our Work",                    href: "#gallery"
                  },
                  {
                    label: "Testimonials",                    href: "#reviews"
                  },
                  {
                    label: "Service Areas",                    href: "#service-areas"
                  },
                  {
                    label: "FAQs",                    href: "#faq"
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
