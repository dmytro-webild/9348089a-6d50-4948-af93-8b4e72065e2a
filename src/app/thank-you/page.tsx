"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { CheckCircle2 } from "lucide-react";
import { ThemeProvider } from "@/providers/themeProvider/ThemeProvider";
import ButtonElasticEffect from "@/components/button/ButtonElasticEffect/ButtonElasticEffect";

export default function ThankYouPage() {
  const router = useRouter();
  const [countdown, setCountdown] = useState(10);

  const companyName = "Stevenson's Hardwood Floors";
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

  useEffect(() => {
    // Prevent duplicate submissions on refresh by replacing the current state in history
    if (window.history.replaceState) {
      window.history.replaceState(null, '', window.location.href);
    }

    const timer = setInterval(() => {
      setCountdown((prevCountdown) => prevCountdown - 1);
    }, 1000);

    const redirectTimer = setTimeout(() => {
      router.push("/"); // Redirect to homepage
    }, 10000); // 10 seconds

    return () => {
      clearInterval(timer);
      clearTimeout(redirectTimer);
    };
  }, [router]);

  // ThemeProvider props copied from src/app/page.tsx for consistency
  const themeProps = {
    defaultButtonVariant: "hover-magnetic",    defaultTextAnimation: "entrance-slide",    borderRadius: "rounded",    contentWidth: "medium",    sizing: "mediumLargeSizeMediumTitles",    background: "fluid",    cardStyle: "glass-depth",    primaryButtonStyle: "shadow",    secondaryButtonStyle: "solid",    headingFontWeight: "light"
  };

  return (
    <ThemeProvider {...themeProps}>
      <div className="flex min-h-screen flex-col items-center justify-center p-4 text-center bg-background text-foreground">
        <CheckCircle2 className="h-24 w-24 text-green-500 mb-6 animate-fade-in" />
        <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-in-up">
          Thank You!
        </h1>
        <p className="text-xl md:text-2xl mb-8 animate-slide-in-up delay-100">
          Your submission has been received.
        </p>
        <p className="text-lg md:text-xl text-foreground-secondary mb-8 animate-slide-in-up delay-200">
          We appreciate you contacting {companyName}. We'll be in touch shortly.
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4 mb-8 animate-slide-in-up delay-300">
          <ButtonElasticEffect
            text="Call Now"
            onClick={handleCallNow}
            ariaLabel="Call Stevenson's Hardwood Floors"
            className="w-full sm:w-auto"
          />
        </div>

        {countdown > 0 && (
          <p className="text-sm text-gray-500 mt-4 animate-fade-in delay-400">
            Redirecting you back to the homepage in {countdown} seconds...
          </p>
        )}
      </div>
    </ThemeProvider>
  );
}