import type { Metadata } from "next";
import "./globals.css";
import LuxuryNav from "@/components/LuxuryNav";
import { ScrollToTop } from "@/components/ScrollToTop";
import LuxuryFooter from "@/components/LuxuryFooter";

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <ScrollToTop />
        <LuxuryNav />
        {children}
        <LuxuryFooter />
      </body>
    </html>
  );
}
