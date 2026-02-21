import type { Metadata } from "next";
import "./globals.css";
import LuxuryNav from "@/components/LuxuryNav";
import { IntroProvider } from "@/components/IntroProvider";
import { ScrollToTop } from "@/components/ScrollToTop";
import { cookies } from "next/headers";

export const metadata: Metadata = {
  metadataBase: new URL("https://samcampolorealestate.com"),
  title: {
    default: "Sam Campolo | Westchester Luxury Real Estate | Compass",
    template: "%s | Sam Campolo Real Estate",
  },
  description:
    "Your trusted partner for luxury real estate in Westchester County. Exceptional service, local expertise, and a personalized approach to finding your dream home.",
  keywords: [
    "Westchester real estate",
    "luxury homes",
    "Compass",
    "Sam Campolo",
    "Westchester County",
    "New York real estate",
    "Scarsdale homes",
    "Bronxville real estate",
    "Rye NY homes for sale",
    "luxury homes Westchester",
    "Fairfield County real estate",
  ],
  openGraph: {
    title: "Sam Campolo | Westchester Luxury Real Estate",
    description:
      "Your trusted partner for luxury real estate in Westchester County. $12M+ in annual sales. Top 1.5% nationally.",
    type: "website",
    siteName: "Sam Campolo Real Estate",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sam Campolo | Westchester Luxury Real Estate",
    description:
      "Your trusted partner for luxury real estate in Westchester County.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://samcampolorealestate.com",
  },
};

import LuxuryFooter from "@/components/LuxuryFooter";

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const cookieStore = await cookies();
  const hasSeenIntro = cookieStore.has("hasSeenIntro");
  
  return (
    <html lang="en">
      <head>
        <link rel="preload" href="/LogoNav.png" as="image" />
      </head>
      <body>
        <IntroProvider initialHasSeen={hasSeenIntro}>
          <ScrollToTop />
          <LuxuryNav />
          {children}
          <LuxuryFooter />
        </IntroProvider>
      </body>
    </html>
  );
}
