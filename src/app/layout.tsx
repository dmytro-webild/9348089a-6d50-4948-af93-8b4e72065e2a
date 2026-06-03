import type { Metadata } from "next";
import { Halant } from "next/font/google";
import { Inter } from "next/font/google";
import "./globals.css";
import "@/lib/gsap-setup";
import { ServiceWrapper } from "@/components/ServiceWrapper";
import { getVisualEditScript } from "@/utils/visual-edit-script";
import { Lato } from "next/font/google";



export const metadata: Metadata = {
  title: 'Stevenson\'s Hardwood Floors | NC\'s Trusted Flooring Experts',
  description: 'Stevenson\'s Hardwood Floors offers professional hardwood installation, refinishing, LVP, and repair services in Elkin, NC & surrounding areas. Get a free estimate!',
  keywords: ["Hardwood Floor Installation North Carolina, Hardwood Flooring Contractor Elkin NC, Floor Refinishing Elkin NC, Hardwood Floor Refinishing Near Me, Luxury Vinyl Plank Installation, Flooring Contractor Near Me, Hardwood Floor Sanding, Floor Repair Services, Wood Floor Installation, Laminate Flooring Installation, Best Flooring Contractor Elkin NC, Hardwood Flooring Company North Carolina, Residential Flooring Contractor, Commercial Flooring Contractor"],
  openGraph: {
    "title": "Stevenson's Hardwood Floors | NC's Trusted Flooring Experts",
    "description": "Stevenson's Hardwood Floors offers professional hardwood installation, refinishing, LVP, and repair services in Elkin, NC & surrounding areas. Get a free estimate!",
    "url": "https://stevensonhardwoodfloors.com",
    "siteName": "Stevenson's Hardwood Floors",
    "images": [
      {
        "url": "http://img.b2bpic.net/free-photo/senior-carpenter-got-right-measures_329181-15637.jpg",
        "alt": "Luxurious living room with newly installed dark hardwood floor"
      }
    ],
    "type": "website"
  },
  twitter: {
    "card": "summary_large_image",
    "title": "Stevenson's Hardwood Floors | NC's Trusted Flooring Experts",
    "description": "Stevenson's Hardwood Floors offers professional hardwood installation, refinishing, LVP, and repair services in Elkin, NC & surrounding areas. Get a free estimate!",
    "images": [
      "http://img.b2bpic.net/free-photo/senior-carpenter-got-right-measures_329181-15637.jpg"
    ]
  },
  robots: {
    "index": true,
    "follow": true
  },
};

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <ServiceWrapper>
        <body className={`${lato.variable} antialiased`}>
          
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
