import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";


const BUSINESS_LOGO_URL = "https://webuild-dev.s3.eu-north-1.amazonaws.com/users/user_3EaU7z1YR1G2bja576OZ0wd1siV/uploaded-1780914558083-wtkfdknn.png";
const SITE_URL = "https://stevensonshardwoodfloors.com";
const BUSINESS_NAME = "Stevenson's Hardwood Floors";
const BUSINESS_PHONE = "+13364297774";

export const metadata: Metadata = {
  title: BUSINESS_NAME + ' | NC\'s Trusted Flooring Experts',
  description: BUSINESS_NAME + ' offers professional hardwood installation, refinishing, LVP, and repair services in Elkin, NC & surrounding areas. Get a free estimate!',
  keywords: ["Hardwood Floor Installation North Carolina", "Hardwood Flooring Contractor Elkin NC", "Floor Refinishing Elkin NC", "Hardwood Floor Refinishing Near Me", "Luxury Vinyl Plank Installation", "Flooring Contractor Near Me", "Hardwood Floor Sanding", "Floor Repair Services", "Wood Floor Installation", "Laminate Flooring Installation", "Best Flooring Contractor Elkin NC", "Hardwood Flooring Company North Carolina", "Residential Flooring Contractor", "Commercial Flooring Contractor"],
  openGraph: {
    title: BUSINESS_NAME + " | NC's Trusted Flooring Experts",    description: BUSINESS_NAME + " offers professional hardwood installation, refinishing, LVP, and repair services in Elkin, NC & surrounding areas. Get a free estimate!",    url: SITE_URL,
    siteName: BUSINESS_NAME,
    images: [
      {
        url: BUSINESS_LOGO_URL,
        alt: BUSINESS_NAME + " official business logo",        width: 500,
        height: 500,
      }
    ],
    type: "website"
  },
  twitter: {
    card: "summary_large_image",    title: BUSINESS_NAME + " | NC's Trusted Flooring Experts",    description: BUSINESS_NAME + " offers professional hardwood installation, refinishing, LVP, and repair services in Elkin, NC & surrounding areas. Get a free estimate!",    images: [
      BUSINESS_LOGO_URL
    ]
  },
  robots: {
    index: true,
    follow: true
  },
  icons: {
    icon: "/favicon.ico",    shortcut: "/favicon-16x16.png",    apple: "/apple-touch-icon.png"},
  alternates: {
    canonical: SITE_URL,
  }
};

const lato = Lato({
  variable: "--font-lato",  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",    "@graph": [
      {
        "@type": "Organization",        "@id": `${SITE_URL}/#organization`,
        "name": BUSINESS_NAME,
        "url": SITE_URL,
        "logo": {
          "@type": "ImageObject",          "url": BUSINESS_LOGO_URL,
          "width": 500,
          "height": 500,
          "caption": BUSINESS_NAME + " official business logo"
        },
        "contactPoint": {
          "@type": "ContactPoint",          "telephone": BUSINESS_PHONE,
          "contactType": "customer service",          "areaServed": ["NC"],
          "availableLanguage": ["en"]
        }
      },
      {
        "@type": "WebSite",        "@id": `${SITE_URL}/#website`,
        "url": SITE_URL,
        "name": BUSINESS_NAME,
        "publisher": {
          "@id": `${SITE_URL}/#organization`
        },
        "potentialAction": {
          "@type": "SearchAction",          "target": {
            "@type": "EntryPoint",            "urlTemplate": `${SITE_URL}/?s={search_term_string}`
          },
          "query-input": "required name=search_term_string"
        }
      }
    ]
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
          />
          {children}
          <script
              dangerouslySetInnerHTML={{
                  __html: `${getVisualEditScript()}`
              }}
          />
        </body>
      </ServiceWrapper>
    </html>
  );
}
